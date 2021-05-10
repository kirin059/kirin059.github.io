import React from 'react';
import './Contact.scss';

const Contact = () => {
    return (
        <div className="contact">
            <div className="left">
                <h4>Get in touch</h4>

                <div className="info">
                    <p>제 포트폴리오를 봐주셔서 감사합니다. 제 작업이 마음에 드셨거나</p>
                    <p>문의사항이 있으시다면 언제든 편하게 연락 주시기 바랍니다.</p>
           
                    <p className="second">우측 양식이나 하단의 연락처로 문의를 보내 주시면</p>
                    <p className="third">확인 후 바로 연락드리겠습니다.</p>

                    <div>
                        <i class="fas fa-envelope"></i>
                        <p className="motto">boma91@gmail.com</p>
                    </div>

                    <div>
                        <i class="fas fa-phone-alt"></i>
                        <p className="motto">010 . 9152 . 5192</p>
                    </div>
                </div>     
            </div>
           
            
            <div className="right">

                <form className="form_container">          
                    <p><span><input type="text" placeholder="Name"/></span></p>
                    <p><span><input type="text" placeholder="Email"/></span></p>
                    <p><span><input type="text" placeholder="Subject"/></span></p>
                    <p><span><input type="text" placeholder="Message" className="message"/></span></p>
                    <p><span><input type="submit" value="SEND"/></span></p>                 
                </form>

            </div>
        </div>
    );
};


export default Contact;