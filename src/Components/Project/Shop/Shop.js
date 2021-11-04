import React from 'react';
import './Shop.scss';

const Shop = () => {
    return (
        <div className="shop">
            <div className="head">
                Shopping Mall
                <div>개인 프로젝트</div> 
            </div>         
            <div className="main">
                <div className="img_container">
                    <div className="imgs first"></div>
                    <div className="imgs second"></div>
                </div>
                <div className="script">
                    <div className="script-main">
                        <div style={{marginBottom:'30px'}}>React와 Redux를 통해 Store 전역상태 관리 및 비동기 요청을 중점적으로 활용하여 제작한 <strong>쇼핑몰</strong> 프로젝트입니다. </div>
                        <div style={{marginBottom:'10px'}}>
                            <i class="fas fa-circle"></i><strong>기술스택</strong>
                        </div>
                        <div style={{marginBottom:'30px'}}>HTML5, CSS3, Javascript, React, Redux, React-router-dom, axios, Sass, Bootstrap, CSSTransition</div>   
                        <div style={{marginBottom:'10px'}}>
                            <i class="fas fa-circle"></i><strong>구현 사항</strong>
                        </div>
                        <div><i class="fas fa-check"></i> React-Router를 활용한 SPA 라우팅</div>
                        <div><i class="fas fa-check"></i> useParams를 통해 상품고유 id와 매칭되는 url을 특정하여 객체에 접근 </div>
                        <div><i class="fas fa-check"></i> Axios를 통한 오픈 API 요청</div>
                        <div><i class="fas fa-check"></i> Bootstrap/Sass 라이브러리를 활용한 스타일링</div>
                        <div><i class="fas fa-check"></i> CSSTransition으로 transition효과 적용</div>
                        <div><i class="fas fa-check"></i> Hook 과  Redux를 통한 상태 관리 </div>
                        <div><i class="fas fa-check"></i> LocalStorage를 활용한 '최근 본 상품' 기능 적용 </div>
                        <div><i class="fas fa-check"></i> Responsive Web 구현</div>
                    </div>
                    <div class="script-bottom">
                        <i class="fab fa-github" onClick={() => {
                            window.open('https://github.com/kirin059/React_shoppingmall_project', '_blank')
                        }}></i>
                        <div>깃허브 코드를 통해 더 자세히 살펴보실 수 있어요!</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;