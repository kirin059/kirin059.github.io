import React from 'react';
import './ModalCss.scss';

const ModalCss = (props) => {
    document.body.style.overflow = "hidden";

    return (
        <div className="modal_css">
            <div className="bg" onClick={() => {
                props.setcssAlert(false)
                document.body.style.overflow = "unset"
            }}>

                <div className="content">
                    <p className="title"><strong>CSS3</strong></p>
                    <p>CSS속성을 이해하며 디자인 시안에 따른</p>
                    <p>디자인을 구현할 수 있습니다.</p>
                    <p>미디어쿼리를 이해하며 반응형 웹을 제작할 수 있습니다.</p>
                    <i class="fas fa-caret-down"></i>
                </div>
                
            </div>
        </div>
    );
};

export default ModalCss;