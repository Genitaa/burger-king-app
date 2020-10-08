import React from 'react';
import Product from './Product';
import products from './ProductData';

function ProductList() {
    const mainProducts = products.map(product => <Product key={product.id} product={product} />);

    return (
        <div className="container-fluid">
            {mainProducts}
        </div>
    )
}

export default ProductList;