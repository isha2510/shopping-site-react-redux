import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {

    return (

        <nav className="navbar navbar-dark navbar-expand-lg bg-dark mt-1">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link to="/" className="nav-item nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/cars" className="nav-link" >Cars</Link>
                    </li>
                </ul>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link to="/cart" className="nav-link">
                            <span className="material-icons">shopping_cart</span>
                        </Link>
                    </li>


                </ul>
            </div>

        </nav>
    );
}


export default Header;