import React from 'react';
import './Cycle.scss';

const ModalShop = () => {
    return (
        <div className="cycle">
            <div className="head">
                MyCycle
                <div>개인 프로젝트</div> 
            </div>       
            <div className="main">
                <div className="img_container">
                    <div className="imgs first"></div>
                    <div className="imgs second"></div>
                </div>
                <div className="script">
                    <div className="script-main">
                        <div style={{ marginBottom:'30px'}}>자전거 라이더들을 위한 <strong>라이더 웹애플리케이션</strong>을 제작한 프로젝트입니다.
                        라이더들에게 지도 제공, 기록 저장 및 커뮤니티 참여 기능 등을 제공하여 자전거 취미 활동에 필요한 기능을 모은 웹 서비스 입니다.</div>
                        <div style={{marginBottom:'10px'}}>
                            <i class="fas fa-circle"></i><strong>기술스택</strong>
                        </div>
                        <div style={{marginBottom:'30px'}}> JavaScript, React,  React-router-dom, Styled-Component, Ant-design</div>
                        <div style={{marginBottom:'10px'}}>
                            <i class="fas fa-circle"></i><strong>구현 사항</strong>
                        </div>
                        <div><i class="fas fa-check"></i> Functional Components 숙달과 Hook 함수의 이해 및 적용</div>
                        <div><i class="fas fa-check"></i> React-Router를 활용한 SPA 라우팅</div>
                        <div><i class="fas fa-check"></i> Kakao Map API 연동 </div>
                        <div><i class="fas fa-check"></i> LocalStorage를 활용한 회원가입/로그인 기능 구현 </div>
                        <div><i class="fas fa-check"></i> Styled-Component/Antd를 활용한 스타일링 </div>
                        <div><i class="fas fa-check"></i> Responsive Web 구현</div>
                    </div>
                    <div class="script-bottom">
                        <i class="fab fa-github" onClick={() => {
                            window.open('https://github.com/kirin059/MyCycle', '_blank')
                        }}></i>
                        <div onClick={() => {
                            window.open('https://github.com/kirin059/MyCycle', '_blank')
                        }}>깃허브 코드를 통해 더 자세히 살펴보실 수 있어요!</div>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default ModalShop;