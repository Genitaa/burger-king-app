import React, { useState, useEffect } from 'react';
import axios from 'axios';
import spinner from '../images/spinner.gif';
import Product from './Product';
import '../styles/components/_product-list.scss';

function ProductList() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios.get('http://localhost/burger-king-app/wp-json/wp/v2/products')
            .then(res => {
                const newProducts = res.data.map((e, i) => {
                    const product = {
                        id: e.id,
                        number: i + 1, 
                        banner: e.acf.banner,
                        logo: e.acf.logo.url,
                        description: e.acf.description,
                        quantity: e.acf.quantity,
                        offer: e.acf.offer,
                        offerDescription: e.acf.offer_description,
                        details: e.acf.details.map(det => det.detail)
                    };
    
                    return <Product key={product.id} product={product} />;
                });
    
                setProducts(newProducts);
                setLoading(false);
            });
    }, []);


    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12">
                    <h1>Product list</h1>
                </div>
            </div>
            {loading ? <img src={spinner} className="product-list__spinner" /> : products}
        </div>
    )
}

export default ProductList;