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
                        <div style={{marginBottom:'30px'}}>순수 자바스크립트를 활용하여 <strong>Goodal 사이트 클론</strong> 제작한 프로젝트입니다. </div>
                        <div style={{marginBottom:'10px'}}>
                            <i class="fas fa-circle"></i><strong>기술스택</strong>
                        </div>
                        <div style={{marginBottom:'30px'}}>HTML5, CSS3, Javascript, React, Styled-Component, Ant-design</div>
                        <div style={{marginBottom:'10px'}}>
                            <i class="fas fa-circle"></i><strong>구현 사항</strong>
                        </div>
                        <div><i class="fas fa-check"></i> Hook 과  Redux를 통한 상태 관리 </div>
                        <div><i class="fas fa-check"></i> LocalStorage를 활용한 회원가입/로그인 인증 기능 구현 </div>
                        <div><i class="fas fa-check"></i> Styled-Component/Antd를 활용한 스타일링 </div>
                        <div><i class="fas fa-check"></i> Responsive Web 구현</div>
                    </div>
                    <div class="script-bottom">
                        <i class="fab fa-github" onClick={() => {
                            window.open('https://github.com/kirin059/goodal-clone', '_blank')
                        }}></i>
                        <div>깃허브 코드를 통해 더 자세히 살펴보실 수 있어요!</div>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Portfolios;