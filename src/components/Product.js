import React from 'react';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/components/_product.scss';

function Product({ product }) {
    return (
        <main className="product">
            <div className="row align-items-center">
                <div className="col-md-3">
                    <div className="row">
                        <div className="col-2 col-md-4">
                            <div className="product__number">
                                <p>{product.number}</p>
                            </div>
                        </div>
                        <div className="col-7 col-md-4 col-lg-5">
                            <div className="banner">
                                <p className="banner__details">{product.banner}</p>
                            </div>
                            <div className="logo">
                                <img src={product.logo} className="logo__img" />
                                <p>{product.description}</p>
                            </div>
                        </div>
                        <div className="col-3 col-md-4 col-lg-3 align-self-center">
                            <div className="product__box product__box--border">
                                <p className="product__box__num">{product.quantity}/10</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="offset-1 col-9 offset-md-0 col-md-3">
                    <h6 className="product__description product__description--red">{product.offer}</h6>
                    <p className="product__description">{product.offerDescription}</p>
                </div>
                <div className="col-md-3">
                    <div className="product__details">
                        {product.details.map(detail => (
                            <p className="product__details__p"><FontAwesomeIcon icon={faCheck} style={{color: "#00889e", marginRight: "10px"}} />{detail}</p>
                        ))}
                    </div>
                </div>
                <div className="offset-1 col-10 offset-md-0 col-md-3">
                    <div className="btns">
                        <button className="btn btns__visit btns__visit--spacing"><span>Visit</span></button>
                        <button className="btn btns__order btns__order--bold"><span>ORDER</span></button>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Product;