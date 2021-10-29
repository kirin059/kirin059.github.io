import React from 'react';
import './Introduce.scss';

const Introduce = () => {
    return (
        <div className="introduce">
            <div className="top-container">
                <h4>Introduce</h4>
                <div className="info">
                    <div className="img"></div>
                    <div className="tags">
                        <div className="upper">
                            <div>#프론트엔드</div>
                            <div>#오픈마인드</div>
                            <div>#초긍정</div>
                        </div>
                            <div className="upper">
                            <div>#책임감</div>
                            <div>#시멘틱웹</div>
                            <div>#취미는코딩</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bottom-container">
                <div className="bottom-container-top">
                    <div>
                        <i class="fas fa-user-alt"></i>
                        <div className="text">
                            <p className="sub-text">이름</p>
                            <p >이 새 봄</p>
                        </div>
                    </div>
                    <div>
                        <i class="fas fa-birthday-cake"></i>
                        <div className="text">
                            <p className="sub-text">생년월일</p>
                            <p>91. 05. 02</p>
                        </div>
                    </div>
                    <div>
                        <i class="fas fa-graduation-cap"></i>
                        <div className="text">
                        <p className="sub-text">학력</p>
                            <p>덕성여자대학교</p>
                            <p className="major">유아교육학과 전공<br /> 영어영문학과 복수전공</p>
                        </div>
                    </div>
                </div>
                <div className="bottom-container-bottom">
                    <div>
                        <i class="fas fa-building"></i>
                        <div className="text">
                            <p className="sub-text">경력</p>
                            <p>번역(영) 2년 <br /> 기획(AE) 2년 근무 <br /> 프론트엔드 인턴 2개월</p>
                        </div>
                    </div>
                    <div>
                        <i class="fas fa-key"></i>
                        <div>
                            <div className="text">
                                <p className="sub-text">모토</p>
                                <p className="motto">JavaScript, HTML5, CSS3 활용 역량을 키워왔고, <br />
                                    <strong>가독성</strong>과 <strong>재활용성</strong> 높은 코드 구현을 지향합니다.</p>
                            </div>
                            {/* <p className="motto">트렌디한 UI와 인터랙티브한 UX를 최우선으로 생각하며,</p>*/}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Introduce;