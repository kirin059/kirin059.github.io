import React from 'react';
import './Contact.scss';

const Contact = () => {
    return (
        <div className="contact">
            <div className="left">
                <h4>Get in touch</h4>

                <div className="info">
                    <div>
                        <p>제 포트폴리오를 봐주셔서 감사합니다. 제 작업이 마음에 드셨거나,</p>
                        <p>문의사항이 있으시다면 언제든 편하게 연락 주시기 바랍니다.</p>
                    </div>
                    <div>
                        <p>우측 양식이나 하단의 연락처로 문의를 보내 주시면,</p>
                        <p>확인 후 바로 연락드리겠습니다.</p>
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


export default Contact;