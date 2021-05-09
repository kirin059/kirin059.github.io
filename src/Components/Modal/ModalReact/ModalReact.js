import React from 'react';
import './ModalReact.scss';

const ModalReact = (props) => {

    return (
        <div className="modal_react">
            <div className="bg" onClick={() => {
                props.setreactAlert(false)
            }}>

                <div className="content">
                    <p className="title"><strong>React</strong></p>
                    <p>SPA Framework에 대한 깊은 이해가 있습니다. </p> 
                    <p>React Hook을 이용한 개발 경험이 있습니다.</p>
                    <i class="fas fa-caret-down"></i>
                </div>
                
            </div>
        </div>
    );
};

export default ModalReact;