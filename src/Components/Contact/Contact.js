import React, { useCallback } from 'react';
import emailjs from 'emailjs-com';
import apiKey from '../apiKey/apiKey';
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
            <div className="container">
                <h4>Get in touch</h4>

                <p>제 포트폴리오를 봐주셔서 감사합니다.<br /> 
                    제 작업이 마음에 드셨거나 문의사항이 있으시다면 언제든 편하게 연락 주시기 바랍니다. <br />          
                    하단 양식이나 연락처로 문의를 보내 주시면 확인 후 바로 연락드리겠습니다.
                </p>
    
                <form onSubmit={onSubmit} >
                    <input value="To.   boma91@gmail.com" readOnly/>    
                    <input name="name" type="text" placeholder="Your Name" required />
                    <input name="email" type="email" placeholder="Your Email" required/>
                    <textarea name="text" placeholder="Message . . ." cols="40" rows="50" required></textarea>
                    <button type="submit" id="submit">SEND</button>
                </form>
            </div>
        </div>
    );
};


export default Contact;