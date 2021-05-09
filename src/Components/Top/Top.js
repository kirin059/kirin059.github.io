import React from 'react';
import { useHistory } from 'react-router';
import './Top.scss';

const Top = () => {
    function handleHome() {
        let location = document.querySelector(".home").offsetTop;
        let navHeight = document.querySelector(".Nav").offsetHeight;
        window.scrollTo({ top: location - navHeight, behavior: 'smooth' });
        
        if () {
            let top = document.getElementsByClassName('top');
            top.style.opacity = '0';
        }
    }

    return (
        <div className="top">
            <div className="arrow">
                <i class="fas fa-chevron-up"></i>
                <i class="fas fa-chevron-up"></i>
                <i class="fas fa-chevron-up"></i>
            </div>
            <div className="top_btn" onClick={() => {
                useHistory.push('')
            }}>TOP</div>
        </div>
    );
};

export default Top;