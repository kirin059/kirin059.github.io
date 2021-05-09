import React from 'react';
import './ModalStyled.scss';

const ModalStyled = (props) => {

    return (
        <div className="modal_styled">
            <div className="bg" onClick={() => {
                props.setstyledAlert(false)
            }}>

                <div className="content">
                    <p className="title"><strong>Styled Components</strong></p>
                    <p>Styled Components와 같은 </p>
                    <p>CSS pre-processor 사용에 능숙합니다.</p>
                    <i class="fas fa-caret-down"></i>
                </div>
                
            </div>
        </div>
    );
};

export default ModalStyled;