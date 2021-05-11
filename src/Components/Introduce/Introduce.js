import React from 'react';
import './Introduce.scss';

const Introduce = () => {
    return (
        <div className="introduce">
            <div className="left">
                <h4>Introduce</h4>

                <div className="info">
                    <div>
                        <i class="fas fa-user-alt"></i>
                        <p>이 새 봄</p>
                    </div>
                    <div>
                        <i class="fas fa-birthday-cake"></i>
                        <p>91. 05. 02</p>
                    </div>
                    <div>
                        <i class="fas fa-graduation-cap"></i>
                        <div className="text">
                            <p>덕성여자대학교</p>
                            <p className="major">유아교육학과 전공/ 영어영문학과 복수전공</p>
                        </div>
                    </div>
                    <div className="last">
                        <i class="fas fa-building"></i>
                        <p>마케팅 기획자(AE)로 2년 근무</p>
                    </div>

                    <div>
                        <i class="fas fa-key"></i>
                        <div  className="text">
                            <p className="motto">트렌디한 UI와 인터랙티브한 UX를 최우선으로 생각하며,</p>
                            <p className="motto"><strong>가독성</strong>과 <strong>재활용성</strong> 높은 코드 구현을 지향합니다.</p>
                            <p className="motto lower">React, JavaScript, HTML5, CSS3 활용 역량을 키워왔고,</p> 
                            <p className="motto"><strong>최적의 사용자 경험 제공</strong>을 목표로 하여 지속적으로 발전해나가고 싶습니다.</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="right">
                <div className="img"></div>

                <div className="tags">
                    <div className="upper">
                        <div>#프론트엔드</div>
                        <div>#오픈마인드</div>
                        <div>#초긍정</div>
                    </div>
                        <div className="lower">
                        <div>#책임감</div>
                        <div>#시멘틱웹</div>
                        <div>#취미는코딩</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Introduce;