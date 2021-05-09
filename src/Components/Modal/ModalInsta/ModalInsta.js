import React from 'react';
import './ModalInsta.scss';

const ModalInsta = (props) => {

    return (
        <div className="modal_insta">
            <div className="bg" onClick={() => {
                props.setinstaModal(false)
            }}>

                <div className="content">
                    <p className="title"><span>Instagram Clone</span> Project</p>
                    <button className="close" onClick={() => {
                        props.setinstaModal(false)
                    }}>
                        <i class="fas fa-window-close"></i>
                    </button>
                    
                    <div className="contents">
                        <div className="img_container">
                            <div className="imgs"></div>
                            <div className="imgs second"></div>
                        </div>
                        <div className="script">
                            <div>Shoes 쇼핑몰을 컨셉으로 작업한 페이지 입니다. 페이지는 총5개입니다. </div>
                            <div>참여도: 100%</div>
                            <div>사용 툴: react, redux, sass, bootstrap, axios</div>

                            <div>페이지별 기능</div>
                            <div>메인페이지: 더보기버튼을 누르면 상품이 추가적으로 나오도록 함</div>
                            <div>디테이페이지: 상품을 클릭하면 고유 상품 id에 매칭되는 상품의 상세 페이지가 보입니다. 주문하기를 누르면 cart페이지로 이동하며 상품 갯수가 추가됩니다</div>
                            <div>카트 페이지: 수량 증감 기능이 있으며 </div>
                            <div>로그인/회원가입 페이지: validaton을 통해 유효성검사 </div>
                            
                            <div>적용 기술</div>
                            <div>React-Router를 활용한 SPA 라우팅</div>
                            <div>reduce를 활용한 상태관리</div>
                            <div>React hook(useHistory, lestContext, useContext, useState)등을 활용한 </div>
                            <div>axios를 통한 서버 api 용청/응답 처리</div>
                        </div>
                    </div>

                </div>
                
            </div>
        </div>
    );
};

export default ModalInsta;