import React, { useEffect, useState } from 'react';
import './Top.scss';

const Top = () => {

    let [isShow, setIsShow] = useState(false)
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
        
    })

    function handleHome() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function handleScroll() {
        setIsShow(window.pageYOffset > 300)
        console.log(window.pageYOffset)
    }

    return (      
        <div className={`top ${isShow ? 'show' : '' }`}>
            <div className="arrows">
                <div className="arrow"></div>
                <div className="arrow"></div>
                <div className="arrow"></div>
            </div>
            <div className="top_btn" onClick={ handleHome }>TOP</div>
        </div>
    );
};

export default Top;