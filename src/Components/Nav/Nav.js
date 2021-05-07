import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.scss';

const Nav = () => {

    function handleNav() {
        let nav = document.querySelector('#nav');
        nav.classList.toggle('active')
    }
    
    return (
        <div className="Nav">
            <nav className="nav_container">
                <div className="name">
                <p><strong> 이 새 봄 </strong></p>
                <small><span className="name_pink">CREATIVE</span> SAEBOM LEE </small>
                </div>
                <div className="active" id="nav">
                <ul>
                    <Link className="li" to="/"> Home </Link>
                    <Link className="li" to="/"> Introduce </Link>
                    <Link className="li" to="/"> Skills </Link>
                    <Link className="li" to="/"> Portfolio </Link>
                    <Link className="li" to="/"> Contact </Link>
                </ul>
                <button className="icon" onClick={handleNav}>
                    <div className="line line1"></div>
                    <div className="line line2"></div>
                </button>
                </div>
            </nav>
        </div>
    );
};

export default Nav;