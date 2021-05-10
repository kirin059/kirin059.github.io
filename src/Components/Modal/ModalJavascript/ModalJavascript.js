import React from 'react';
import './ModalJavascript.scss';

const ModalJavascript = (props) => {
    document.body.style.overflow = "hidden";

    return (
        <div className="modal_javascript">
            <div className="bg" onClick={() => {
                props.setjavascriptAlert(false)
                document.body.style.overflow = "unset"
            }}>

                <div className="content">
                    <p className="title"><strong>Javascript</strong></p>
                    <p>ES6 기준 Javascript를 능숙하게 다룰 수 있습니다. </p> 
                    <p>크로스 브라우징이 가능한 코드를 작성할 수 있습니다.</p>
                    <i class="fas fa-caret-down"></i>
                </div>
                
            </div>
        </div>
    );
};

export default ModalJavascript;