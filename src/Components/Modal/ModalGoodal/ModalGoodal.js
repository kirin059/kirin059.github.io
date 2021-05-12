import React from 'react';
import './ModalGoodal.scss';

const ModalShop = (props) => {
    return (
        <div className="modal_goodal">
            <div className="bg" onClick={() => {
                props.setgoodalModal(false)
            }}>

                <div className="content">
                    <p className="title"><span>Goodal Clone</span> Project</p>
                    <button className="close" onClick={() => {
                        props.setgoodalModal(false)
                    }}>
                        <i class="fas fa-window-close"></i>
                    </button>
                    
                    <div className="contents">
                        <div className="img_container">
                            <div className="imgs"></div>
                            <div className="imgs second"></div>
                        </div>
                        <div className="script">
                            <div style={{'margin-bottom':'30px'}}>순수 자바스크립트를 활용하여 <strong>Goodal</strong> 사이트 클론 제작 및 netlify로 직접 웹호스팅한 프로젝트입니다. </div>
                            <div style={{'margin-bottom':'10px' }}>
                                <i class="fas fa-circle"></i>기술스택
                            </div>
                            <div style={{'margin-bottom':'30px'}}>HTML5, CSS3, Javascript</div>
                            

                            <div style={{'margin-bottom':'10px'}}>
                                <i class="fas fa-circle"></i>구현사항
                            </div>
                            <div><i class="fas fa-check"></i> Jumbotron Auto Slide 기능 구현 </div>
                            <div><i class="fas fa-check"></i> Nav-bar Drop-down 기능 구현</div>
                            <div><i class="fas fa-check"></i> 로그인 페이지 유효성 검사 기능 구현 </div>
                            <div><i class="fas fa-check"></i> Image feed에 mouse-over 크기 설정을 통해 유용한 UX 접근 </div>
                            
                            <div style={{'margin-top': '30px'}}>
                                <i class="fab fa-github"></i>
                                <i class="fas fa-link"></i>
                            </div>
                        </div>
                    </div>

                </div>
                
            </div>
        </div>
    );
};

export default ModalShop;