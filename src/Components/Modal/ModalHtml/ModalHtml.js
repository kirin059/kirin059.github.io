import React, { useEffect } from 'react';
import './ModalHtml.scss';

const ModalHtml = (props) => {
    document.body.style.overflow = "hidden";

    useEffect(() => {
        let locationX = document.querySelector('.html').offsetTop;
        let locationY = document.querySelector('.html').offsetLeft
        console.log(locationY)

        function location() {
            let content = document.querySelector('.content').offsetTop;
            content = locationX + '1500px';
        }
        location()
    })

    return (
        <div className="modal_html">
            <div className="bg" onClick={() => {
                props.sethtmlAlert(false);
                document.body.style.overflow = "unset"
            }}>

                <div className="content">
                    <p className="title"><strong>HTML5</strong></p>
                    <p>시멘틱한 구조와 웹표준 및 웹접근성에</p> 
                    <p>준수하는 마크업을 합니다.</p>
                    <i class="fas fa-caret-down"></i>
                </div>
                
            </div>
        </div>
    );
};

export default ModalHtml;