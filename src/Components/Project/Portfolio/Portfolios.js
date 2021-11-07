import React from 'react';
import './Portfolios.scss'

const Portfolios = () => {
    return (
        <div className="portfolios">
            <div className="head">
                Portfolio
                <div>개인 포트폴리오</div> 
            </div>       
            <div className="main">
                <div className="img_container">
                    <div className="imgs first"></div>
                    <div className="imgs second"></div>
                </div>
                <div className="script">
                    <div className="script-main">
                        <div style={{ marginBottom: '30px' }}>포트폴리오 용도로 제작한 웹사이트입니다. React로 개발 후 AWS 서버에 배포하였습니다. 
                            페이지는 반응형으로 제작되었으며 EmailJS와 연동하여 자바스크립트로 이메일 전송 기능을 구현하였습니다. </div>
                        <div style={{marginBottom:'10px'}}>
                            <i class="fas fa-circle"></i><strong>기술스택</strong>
                        </div>
                        <div style={{marginBottom:'30px'}}>React, JavaScript, Sass, AWS</div>
                        <div style={{marginBottom:'10px'}}>
                            <i class="fas fa-circle"></i><strong>구현 사항</strong>
                        </div>
                        <div><i class="fas fa-check"></i> AWS 서버 배포 </div>
                        <div><i class="fas fa-check"></i> 이메일 전송 및 전송 여부 알림 기능 구현 </div>
                        <div><i class="fas fa-check"></i> Sass(SCSS)를 활용한 Nested Styling </div>
                        <div><i class="fas fa-check"></i> Responsive Web 구현</div>
                    </div>
                    <div class="script-bottom">
                        <i class="fab fa-github" onClick={() => {
                            window.open('https://github.com/kirin059/portfolio_saebom', '_blank')
                        }}></i>
                        <div onClick={() => {
                            window.open('https://github.com/kirin059/portfolio_saebom', '_blank')
                        }}>깃허브 코드를 통해 더 자세히 살펴보실 수 있어요!</div>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Portfolios;