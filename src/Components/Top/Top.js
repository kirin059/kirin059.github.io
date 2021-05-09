import React, { useEffect } from 'react';
import './Top.scss';

const Top = () => {
    // useEffect(() => {
    //     function handleHome() {
    //         let location = document.querySelector(".home").offsetTop;
    //         console.log(location)
    //         let navHeight = document.querySelector(".Nav").offsetHeight;
    //         console.log(navHeight)
    //         window.scrollTo({ top: location - navHeight, behavior: 'smooth' });
            
    //         if (document.querySelector('top_btn').scrollTop < 1) {
    //             let top = document.getElementsByClassName('top');
    //             let result = top.style.display = 'none';
    //             return result
    //         }
    //     }
    // })

    function handleHome() {
        let location = document.querySelector(".home").offsetTop;
        console.log(location)
        let navHeight = document.querySelector(".Nav").offsetHeight;
        console.log(navHeight)
        window.scrollTo({ top: location - navHeight, behavior: 'smooth' });

    }

    return (
        <div className="top">
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