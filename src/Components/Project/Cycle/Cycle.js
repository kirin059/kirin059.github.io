import React from 'react';
import './Cycle.scss';

const ModalShop = () => {
    return (
        <div className="modal_goodal">
            <p><span>Goodal Clone</span> Project</p>
                    
            <div className="contents">
                <div className="img_container">
                    <div className="imgs first"></div>
                    <div className="imgs second"></div>
                </div>
                <div className="script">
                    <div style={{'margin-bottom':'30px'}}>순수 자바스크립트를 활용하여 <strong>Goodal 사이트 클론</strong> 제작한 프로젝트입니다. </div>
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
                    <div><i class="fas fa-check"></i> Image feed에 mouse-over 및 transition 효과를 활용한 UX 설계를 통해 사용성 개선 </div> 
                    <div class="bottom_container">
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

export default ModalShop;