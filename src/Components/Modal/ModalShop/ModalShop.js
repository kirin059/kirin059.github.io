import React from 'react';
import './ModalShop.scss';

const ModalShop = (props) => {
    return (
        <div className="modal_shop">
            <div className="bg" onClick={() => {
                props.setshopModal(false)
            }}>

                <div className="content">
                    <p className="title"><span>Shopping Mall</span> Project</p>
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
                            <div style={{'margin-bottom':'30px'}}>React와 Redux를 통해 Store 전역상태 관리 및 비동기 요청을 중점적으로 활용하여 제작한 <strong>쇼핑몰</strong> 프로젝트입니다. </div>
                            <div style={{'margin-bottom':'10px' }}>
                                <i class="fas fa-circle"></i>기술스택
                            </div>
                            <div style={{'margin-bottom':'30px'}}> HTML5, CSS3, Javascript, React, Redux, React-router-dom, axios, Sass, Bootstrap, CSSTransition</div>
                            
                            <div style={{'margin-bottom':'10px'}}>
                                <i class="fas fa-circle"></i>구현사항
                            </div>
                            <div><i class="fas fa-check"></i> React-Router를 활용한 SPA 라우팅</div>
                            <div><i class="fas fa-check"></i> reducer를 활용한 전역 상태 관리 및 디스패치</div>
                            <div><i class="fas fa-check"></i> useParams를 통해 상품고유 id와 매칭되는 url을 특정하여 객체에 접근 </div>
                            <div><i class="fas fa-check"></i> Axios를 통한 서버 API 요청</div>
                            <div><i class="fas fa-check"></i> Sass 라이브러리를 활용한 스타일링</div>
                            <div><i class="fas fa-check"></i> Bootstrap 라이브러리를 활용한 레이아웃 구성</div>
                            <div><i class="fas fa-check"></i> CSSTransition으로 transition효과 적용</div>
                            <div><i class="fas fa-check"></i> React hook(useState, useHistory, Context API, useEffect 등) 적극 활용 </div>

                            <div class="bottom_container">
                                <i class="fab fa-github" onClick={() => {
                                    window.open('https://github.com/kirin059/React_shoppingmall_project', '_blank')
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

export default ModalShop;