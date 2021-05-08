import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Nav.scss';

const Nav = () => {
    let history = useHistory();
    function handleNav() {
        let nav = document.querySelector('#nav');
        nav.classList.toggle('active')
    }

    function scrollHome() {
        let location = document.querySelector(".home").offsetTop;
        let menuHeight = document.querySelector(".Nav").offsetHeight;
        window.scrollTo({top:location - menuHeight, behavior:'smooth'});
    }

    function scrollIntroduce() {
        let location = document.querySelector(".introduce").offsetTop;
        let menuHeight = document.querySelector(".Nav").offsetHeight;
        window.scrollTo({top:location - menuHeight, behavior:'smooth'});
    }

    // function scrollHome() {
    //     let location = document.querySelector(".home").offsetTop;
    //     let menuHeight = document.querySelector(".Nav").offsetHeight;
    //     window.scrollTo({top:location - menuHeight, behavior:'smooth'});
    // }

    // function scrollHome() {
    //     let location = document.querySelector(".home").offsetTop;
    //     let menuHeight = document.querySelector(".Nav").offsetHeight;
    //     window.scrollTo({top:location - menuHeight, behavior:'smooth'});
    // }

    function scrollContact() {
        let location = document.querySelector(".contact").offsetTop;
        let menuHeight = document.querySelector(".Nav").offsetHeight;
        window.scrollTo({top:location - menuHeight, behavior:'smooth'});
    }
    
    return (
        <div className="Nav">
            <nav className="nav_container">
                <div className="name">
                <p><span className="name_pink">CREATIVE</span> SAEBOM LEE </p>
                </div>
                <div className="active" id="nav">
                <ul>
                    <li className="li" onClick={scrollHome}> Home </li>
                    <li className="li" onClick={scrollIntroduce}> Introduce </li>
                    <li className="li" onClick={() => {
                          
                    }}> Skills </li>
                     <li className="li" onClick={() => {
                         
                    }}> Portfolio </li>
                     <li className="li" onClick={scrollContact}> Contact </li>
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