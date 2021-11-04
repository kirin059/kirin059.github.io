import React from 'react';
import './Bang.scss';

const Bang = () => {

    return (
        <div className="bang">               
            <div className="head">
                Register Room
                <div>개인 프로젝트</div> 
            </div>
            <div className="main">
                <div className="img_container">
                    <div className="imgs first"></div>
                    <div className="imgs second"></div>
                </div>
                <div className="script">
                    <div className="script-main">
                        <div style={{marginBottom:'30px'}}>React 함수형 컴포넌트와 Sass를 활용하여 <strong>방 등록 기능 구현</strong> 에 포커스를 맞춰 제작하였습니다. Form과 Input기능을 적극 활용하여 데이터 입력/수정 기능을 중점적으로 적용한 프로젝트 입니다.</div>
                        <div style={{marginBottom:'10px'}}>
                            <i class="fas fa-circle"></i><strong>기술스택</strong>
                        </div>
                        <div style={{marginBottom:'30px'}}>HTML5, CSS3, Javascript, React, Redux, React-router-dom, Sass</div>
                        <div style={{marginBottom:'10px'}}>
                            <i class="fas fa-circle"></i><strong>구현 사항</strong>
                        </div>
                        <div><i class="fas fa-check"></i> Form과 input 기능을 활용한 데이터 불러오기/수정/저장 기능 구현 </div>
                        <div><i class="fas fa-check"></i> SessionStorage를 활용한 데이터 입/출력 기능 </div>
                        <div><i class="fas fa-check"></i> Hook 과  Redux를 통한 상태 관리 </div>
                        <div><i class="fas fa-check"></i> JSON 데이터 제작/활용</div>
                        <div><i class="fas fa-check"></i> Responsive Web 구현</div>
                    </div>
                    <div class="script-bottom">
                        <i class="fab fa-github" onClick={() => {
                            window.open('https://github.com/kirin059/Register_Room', '_blank')
                        }}></i>
                        <div>깃허브 코드를 통해 더 자세히 살펴보실 수 있어요!</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Bang;