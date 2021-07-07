import React from 'react';
import './ModalBang.scss';

const ModalBang = (props) => {

    return (
        <div className="modal_insta">
            <div className="bg" onClick={() => {
                props.setBangModal(false)
            }}>

                <div className="content">
                    <p className="title"><span>Register Room</span> Project</p>
                    <button className="close" onClick={() => {
                        props.setBangModal(false)
                    }}>
                        <i class="fas fa-window-close"></i>
                    </button>
                    
                    <div className="contents">
                        <div className="img_container">
                            <div className="imgs"></div>
                            <div className="imgs second"></div>
                        </div>
                        <div className="script">
                            <div style={{'margin-bottom':'30px'}}>React 함수형 컴포넌트와 Sass를 활용하여 <strong>방 등록 기능 구현</strong> 을 중점적으로 제작하였습니다. Form과 Input기능을 적극 활용하여 데이터 입력/수정 기능을 중점적으로 적용한 프로젝트 입니다.</div>
                            <div style={{'margin-bottom':'10px' }}>
                                <i class="fas fa-circle"></i>기술스택
                            </div>
                            <div style={{'margin-bottom':'30px'}}>HTML5, CSS3, Javascript, React, Redux, React-router-dom, Sass</div>
                       
                            <div style={{'margin-bottom':'10px'}}>
                                <i class="fas fa-circle"></i>구현사항
                            </div>
                            <div><i class="fas fa-check"></i> React-Router를 활용한 SPA 라우팅</div>
                            <div><i class="fas fa-check"></i> reducer를 활용한 전역 상태 관리 </div>
                            <div><i class="fas fa-check"></i> React hook(useState, useEffect, useContext 등) 적극 활용 </div>
                            <div><i class="fas fa-check"></i> React Router hook(useHistory, useParams등) 적극 활용 </div>
                            <div><i class="fas fa-check"></i> Form과 input 기능 중점적으로 활용하여 정보 입력 기능 구현 </div>
                            <div><i class="fas fa-check"></i> SessionStorage를 활용한 데이터 불러오기 기능 적용 </div>
                            <div><i class="fas fa-check"></i> JSON 데이터 제작 및 활용</div>
                            <div><i class="fas fa-check"></i> Sass 라이브러리를 활용한 스타일링</div>
                            <div><i class="fas fa-check"></i> Responsive Web 구현</div>

                            <div class="bottom_container">
                                <i class="fab fa-github" onClick={() => {
                                    window.open('https://github.com/kirin059/Register_Room', '_blank')
                                }}></i>
                                <div>깃허브 코드를 통해 더 자세히 살펴보실 수 있어요!</div>
                            </div>
                        </div>
                    </div>

                </div>
                
            </div>
        </div>
    );
};

export default ModalBang;