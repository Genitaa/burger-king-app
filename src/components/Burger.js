import React from 'react';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/components/_burger.scss';
import logo from '../images/logo.png';

function Burger() {
    return (
        <div className="container-fluid">
            <main className="product">
                <div className="row align-items-center">
                    <div className="col-md-3">
                        <div className="row">
                            <div className="col-2 col-md-4">
                                <div className="product__number">
                                    <p>1</p>
                                </div>
                            </div>
                            <div className="col-7 col-md-4 col-lg-5">
                                <div className="banner">
                                    <p className="banner__details">Super Offer</p>
                                </div>
                                <div className="logo">
                                    <img src={logo} alt="Burger King Logo" className="logo__img" />
                                    <p>Burger King</p>
                                </div>
                            </div>
                            <div className="col-3 col-md-4 col-lg-3 align-self-center">
                                <div className="product__box product__box--border">
                                    <p className="product__box__num">9/10</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="offset-1 col-9 offset-md-0 col-md-3">
                        <h6 className="product__description product__description--red">Get 3 Burgers</h6>
                        <p className="product__description">Onions Free</p>
                    </div>
                    <div className="col-md-3">
                        <div className="product__details">
                            <p className="product__details__p"><FontAwesomeIcon icon={faCheck} style={{color: "#00889e", marginRight: "10px"}} />Chicken Burger</p>
                            <p className="product__details__p"><FontAwesomeIcon icon={faCheck} style={{color: "#00889e", marginRight: "10px"}} />Wrapper Burger</p>
                            <p className="product__details__p"><FontAwesomeIcon icon={faCheck} style={{color: "#00889e", marginRight: "10px"}} />French Fries</p>
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
        </div>
    )
}

export default Burger;