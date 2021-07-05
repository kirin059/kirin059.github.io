import React, { useCallback } from 'react';
import emailjs from 'emailjs-com';
import apiKey from '../apiKey/apiKey';
import useInput from '../useInput/useInput';
import './Contact.scss';
import{ init } from 'emailjs-com';
init("user_YzHq14EAddnCfRqc5eU7V");

const Contact = () => {

    const onSubmit=(e)=>{
        e.preventDefault()

        emailjs.sendForm("service_3vc7fac", apiKey.TEMPLATE_ID, e.target, apiKey.USER_ID)
            .then((result) => {
                console.log(result)
                alert('Message Sent, I\'ll get back to you shortly', result.text);
            },            
            (error) => {
                console.log(error)
                alert('An error occured, Please try again', error.text)
            });
            e.target.reset()
    }


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
                    <div>
                        <i class="fab fa-github" onClick={() => {
                            window.open('https://github.com/kirin059', '_blank')
                        }}></i>
                        <i class="fab fa-blogger" onClick={() => {
                            window.open('https://velog.io/@kirin', '_blank')
                        }}></i>
                    </div>
                </div>     
            </div>
                    
            <div className="right">
                <form onSubmit={onSubmit} >          
                    <input name="name" type="text" placeholder="Name" required />
                    <input name="email" type="email" placeholder="Email" required/>
                    <textarea name="text" placeholder="Message" cols="40" rows="50" required></textarea>
                    <input type="submit" value="SEND" id="submit" />
                </form>
            </div>
        </div>
    );
};


export default Contact;