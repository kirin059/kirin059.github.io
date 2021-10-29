import React from 'react';
import './Nav.scss';

const Nav = () => {

    function handleNav() {
        let nav = document.querySelector('#nav');
        nav.classList.toggle('active')
    }

    function scrollHome() {
        let location = document.querySelector(".home").offsetTop;
        let navHeight =document.querySelector(".nav_container").offsetHeight;
        window.scrollTo({top:location - navHeight, behavior:'smooth'});
    }

    function scrollIntroduce() {
        let location = document.querySelector(".introduce").offsetTop;
        let navHeight = document.querySelector(".nav_container").offsetHeight;
        console.log('네브헤잇트는? ',  navHeight)
        window.scrollTo({top:location - navHeight , behavior:'smooth'});
    }

    function scrollSkills() {
        let location = document.querySelector(".skills").offsetTop;
        let navHeight = document.querySelector(".nav_container").offsetHeight;
        window.scrollTo({top:location - navHeight, behavior:'smooth'});
    }

    function scrollProject() {
        let location = document.querySelector(".project").offsetTop;
        let navHeight = document.querySelector(".nav_container").offsetHeight;
        window.scrollTo({top:location - navHeight, behavior:'smooth'});
    }

    function scrollContact() {
        let location = document.querySelector(".contact").offsetTop;
        let navHeight = document.querySelector(".nav_container").offsetHeight;
        window.scrollTo({top:location - navHeight, behavior:'smooth'});
    }
    
    return (
        <div id="nav-box">
            <nav className="nav_container">
                <div className="name" onClick={scrollHome}>
                    <p><span className="name_pink">CREATIVE</span> SAEBOM LEE </p>
                </div>
                <div className="active" id="nav">
                <ul>
                    <li className="li" onClick={scrollHome}> Home </li>
                    <li className="li" onClick={scrollIntroduce}> Introduce </li>
                    <li className="li" onClick={scrollSkills}> Skills </li>
                    <li className="li" onClick={scrollProject}> Project </li>
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