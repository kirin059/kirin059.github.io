import React, { useCallback } from 'react';
import emailjs from 'emailjs-com';
import useInput from '../useInput/useInput';
import './Contact.scss';
import{ init } from 'emailjs-com';
init("user_YzHq14EAddnCfRqc5eU7V");

const Contact = () => {

    // function handleCheck() {
    //     const email = document.getElementById("submit")
	// 		if (email.value != "") {
	// 			let exptext = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/; //이메일 형식이 알파벳+숫자@알파벳+숫자.알파벳+숫자 형식이 아닐경우	
	// 			if (exptext.test(email) == false) {		
	// 				alert("입력한 메일형식이 올바르지 않습니다.");
    //                 email.focus();
	// 				return false;
	// 			}
	// 		}
	// 		return true;
    // }

    // (function(){
    //     emailjs.init("YOUR_USER_ID");
    // })();
    
    // function sendEmail(e) {
    //     e.preventDefault();
        
    //     emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
    //         .then((result) => {
    //             console.log(result.text);
    //         }, (error) => {
    //             console.log(error.text);
    //         });
    // }

    const [name, onChangeName] = useInput('');
    const [email, onChangeEmail] = useInput('');
    const [subject, onChangeSubject] = useInput('');
    const [text, onChangeText] = useInput('');
    
    const onSubmit = useCallback((e) => {
        e.preventDefault();
        
        const inputNum = e.target.childElementCount - 1; // [D] 버튼한개 제외 
        const data = new FormData(e.target);
        const entries = data.entries();
        
        let failNum = 0;
        for (let i = 0; i < inputNum; i++) {
            const next = entries.next();
            const key = next.value[0];
            const value = next.value[1];
            
            if (!value) {
                failNum++;
                alert(`${key} 비어있습니다.`);
                break;
            }
        }
        if (!failNum) {
            emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
                .then((result) => {
                    console.log('result.text', result.text);
                }, (error) => { console.log(error.text); });
        }
    }, []);


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
                <form className="form" method="POST" data-email="boma91@gmail.com" onSubmit={onSubmit} action="https://script.google.com/macros/s/AKfycbxNDN1M6kzFBoWvH83Fu3VcHYDIUDJ8IcXvWQbl07jHcWSe_YiCGTfWUIlMkydkAld0/exec">          
                    <input type="text" name="user_name" placeholder="Name" value={name} onChange={onChangeName} required />
                    <input type="email" name="user_email" placeholder="Email" value={email} onChange={onChangeEmail} required/>
                    <textarea name="user_message" cols="40" rows="50" placeholder="Message" value={text}  onChange={onChangeText} required></textarea>
                    <input type="submit" value="SEND" id="submit" />
                </form>
            </div>
        </div>
    );
};


export default Contact;