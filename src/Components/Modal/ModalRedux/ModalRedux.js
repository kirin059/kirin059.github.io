import React from 'react';
import './ModalRedux.scss';

const ModalRedux = (props) => {

    return (
        <div className="modal_redux">
            <div className="bg" onClick={() => {
                props.setreduxAlert(false)
            }}>

                <div className="content">
                    <p className="title"><strong>Redux</strong></p>
                    <p>Redux 상태 관리 패턴을 적용해 본 경험이 있습니다. </p> 
                    <i class="fas fa-caret-down"></i>
                </div>
                
            </div>
        </div>
    );
};

export default ModalRedux;