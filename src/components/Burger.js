import React from 'react';
import '../styles/components/_burger.scss';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../images/logo.png';

function Burger() {
    return (
        <div className="container">
            <main className="rounded m-3">
                <div className="row align-items-center">
                    <div className="col-md-3">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="w-50">
                                    <p className="text-center">1</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <img src={logo} alt="Burger King Logo" className="img-fluid" />
                            </div>
                            <div className="offset-md-1 col-md-3 align-self-center">
                                <div className="bg-white border border-white rounded">
                                    <p className="p-1 my-auto text-center">9/10</p>
                                </div>
                            </div>
                        </div>
                        <p className="text-center">Burger King</p>
                    </div>
                    <div className="col-md-3">
                        <h6>Get 3 Burgers</h6>
                        <p>Onions Free</p>
                    </div>
                    <div className="col-md-3">
                        <p className="mb-1"><FontAwesomeIcon icon={faCheck} style={{color: "#217F86", marginRight: "10px"}} />Chicken Burger</p>
                        <p className="mb-1"><FontAwesomeIcon icon={faCheck} style={{color: "#217F86", marginRight: "10px"}} />Wrapper Burger</p>
                        <p className="mb-1"><FontAwesomeIcon icon={faCheck} style={{color: "#217F86", marginRight: "10px"}} />French Fries</p>
                    </div>
                    <div className="col-md-3">
                        <a href="/">Visit</a>
                        <button className="btn">ORDER</button>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Burger;