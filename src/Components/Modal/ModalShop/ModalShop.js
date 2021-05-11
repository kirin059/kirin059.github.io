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
                            <div style={{ 'margin-bottom': '10px' }}>
                                <i class="fas fa-circle" style={{ 'color': '#D09E88', 'paddingRight': '10px' }}></i>
                                기술스택
                            </div>
                            <div style={{'margin-bottom':'30px'}}> HTML5, Javascript, React, Redux, Sass, Bootstrap, axios</div>

                            {/* <div>페이지별 기능</div>
                            <div>메인페이지: 더보기버튼을 누르면 상품이 추가적으로 나오도록 함</div>
                            <div>디테이페이지: 상품을 클릭하면 고유 상품 id에 매칭되는 상품의 상세 페이지가 보입니다. 주문하기를 누르면 cart페이지로 이동하며 상품 갯수가 추가됩니다</div>
                            <div>카트 페이지: 수량 증감 기능이 있으며 </div>
                            <div>로그인/회원가입 페이지: validaton을 통해 유효성검사 </div> */}
                            
                            <div style={{ 'margin-bottom': '10px' }}>
                                <i class="fas fa-circle" style={{ 'color': '#D09E88', 'paddingRight': '10px' }}></i>
                                구현사항
                            </div>
                            <div>React-Router를 활용한 SPA 라우팅</div>
                            <div>reduce를 활용한 상태관리</div>
                            <div>React hook(useHistory, lestContext, useContext, useState)등을 활용한 </div>
                            <div>useParams를 통해 상품고유 id와 매치되는 url을 특정하여 객체에 접근 </div>
                            <div>axios를 통한 서버 API 용청/응답 처리</div>

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