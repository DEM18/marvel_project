import React from 'react';
import './Header.scss';
import logo from 'assets/images/logo.png';

const Header = () => {
    return(
        <div className="header">
            <div className="header__logo-box">
                <img className="header__logo" src={logo} alt="logo"></img>
            </div>
            <div className="header__search-bar" >
                <i className="fa fa-search" aria-hidden="true"></i>
                <input className="header__input" placeholder="Buscar"/>
            </div>
            <div className="header__favorites-box">
                <i className="far fa-star"></i>
            </div>
        </div>
    )
};


export default Header;