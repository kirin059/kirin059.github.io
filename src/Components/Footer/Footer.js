import React from 'react';
import './Footer.scss';

const Footer = () => {
    return (
        <div className="footer">
            <div className="icon-container">
                <i class="fab fa-github" onClick={() => {
                    window.open('https://github.com/kirin059', '_blank')
                }}></i>
                <i class="fab fa-blogger" onClick={() => {
                    window.open('https://velog.io/@kirin', '_blank')
                }}></i>
            </div>
            <p>  © 2021 Lee, Sae-Bom.   All Rights Reserved.</p>
        </div>
    );
};

export default Footer;