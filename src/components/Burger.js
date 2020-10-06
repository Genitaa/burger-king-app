import React from 'react';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/components/_burger.scss';
import logo from '../images/logo.png';

function Burger() {
    return (
        <div className="container-fluid">
            <main className="order">
                <div className="row align-items-center">
                    <div className="col-md-3">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="order__number">
                                    <p>1</p>
                                </div>
                            </div>
                            <div className="col-md-5">
                                <div className="order__logo">
                                    <img src={logo} alt="Burger King Logo" className="order__logo__img" />
                                    <p>Burger King</p>
                                </div>
                            </div>
                            <div className="col-md-3 align-self-center">
                                <div className="order__box order__box--border">
                                    <p className="order__box__number">9/10</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <h6 className="order__description order__description--red">Get 3 Burgers</h6>
                        <p className="order__description">Onions Free</p>
                    </div>
                    <div className="col-md-3">
                        <p className="order__details"><FontAwesomeIcon icon={faCheck} style={{color: "#00889e", marginRight: "10px"}} />Chicken Burger</p>
                        <p className="order__details"><FontAwesomeIcon icon={faCheck} style={{color: "#00889e", marginRight: "10px"}} />Wrapper Burger</p>
                        <p className="order__details"><FontAwesomeIcon icon={faCheck} style={{color: "#00889e", marginRight: "10px"}} />French Fries</p>
                    </div>
                    <div className="col-md-3">
                        <div className="order__btns">
                            <button className="btn order__btns__visit"><span>Visit</span></button>
                            <button className="btn order__btns__order order__btns__order--bold"><span>ORDER</span></button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Burger;