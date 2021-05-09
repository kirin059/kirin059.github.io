import React from 'react';
import './ModalHtml.scss';

const ModalHtml = (props) => {

    return (
        <div className="modal_html">
                <div className="content">
                    <p className="title"><strong>HTML5</strong></p>
                    <p>시멘틱한 구조와 웹표준 및 웹접근성에</p> 
                    <p>준수하는 마크업을 합니다</p>
                </div>
                <i class="fas fa-caret-down"></i>
            </div>

    );
};

export default ModalHtml;