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
                        props.setshopModal(false)
                    }}>
                        <i class="fas fa-window-close"></i>
                    </button>
                    
                    <div className="contents">
                        <div className="img_container">
                            <div className="imgs"></div>
                            <div className="imgs second"></div>
                        </div>
                        <div className="script">
                            <div style={{'margin-bottom':'30px'}}>순수 자바스크립트를 활용하여 <strong>Goodal</strong> 사이트 클론 제작 및 netlify로 직접 서버 구현한 프로젝트입니다. </div>
                            <div style={{'margin-bottom':'10px' }}>
                                <i class="fas fa-circle" style={{ 'color':'#D09E88', 'paddingRight':'10px' }}></i>
                                기술스택
                            </div>
                            <div style={{'margin-bottom':'30px'}}>HTML5, CSS3, Javascript</div>
                            

                            <div style={{'margin-bottom':'10px'}}>
                                <i class="fas fa-circle" style={{ 'color':'#D09E88', 'paddingRight':'10px' }}></i>
                                구현사항
                            </div>
                            <div>Jumbotron Auto Slide 기능 구현 </div>
                            <div>Nav-bar Drop-down 기능 구현</div>
                            <div>로그인 페이지 유효성 검사 기능 구현 </div>
                            <div>link 연동된 image에 mouse-over하면 크기가 커지도록 설정하여 UX 유용하게 접근 </div>
                            
                            <div style={{'margin-top': '30px'}}>
                                <i class="fab fa-github" style={{ 'color': '#D09E88', 'fontSize': '40px', 'paddingRight':'20px' }}></i>
                                <i class="fas fa-link" style={{ 'color': '#D09E88', 'fontSize': '40px' }}></i>
                            </div>
                        </div>
                    </div>

                </div>
                
            </div>
        </div>
    );
};

export default ModalShop;