import React from 'react';
import './Introduce.scss';

const Introduce = () => {
    return (
        <div className="introduce">
            <div className="left">
                <h4>Introduce</h4>

                <div className="info">
                    <div>
                        <i class="fas fa-birthday-cake"></i>
                        <p>이 새 봄</p>
                    </div>
                    <div>
                        <i class="fas fa-phone-alt"></i>
                        <p>91. 05. 02</p>
                    </div>
                    <div>
                        <i class="fas fa-envelope"></i>
                        <p>boma91@gmail.com</p>
                    </div>
                    <div>
                        <i class="fas fa-graduation-cap"></i>
                        <div className="graduate">
                            <p>덕성여자대학교</p>
                            <p className="major">유아교육학과 전공/ 영어영문학과 복수전공</p>
                        </div>
                    </div>
                    <div className="last">
                        <i class="fas fa-building"></i>
                        <p>마케팅 기획자(AE)로 2년 근무</p>
                    </div>
                </div>
            </div>
            
            <div className="right">
                <div className="img"></div>

                <div className="tags">
                    <div className="upper">
                        <div className="">#프론트엔드</div>
                        <div className="">#오픈마인드</div>
                        <div className="">#초긍정</div>
                    </div>
                        <div className="lower">
                        <div className="">#책임감</div>
                        <div className="">#시멘틱웹</div>
                        <div className="">#취미는코딩</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Introduce;