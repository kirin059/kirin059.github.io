import React from 'react';
import './Contact.scss';

const Contact = () => {

    (function() {
        function getFormData(form) {
          let elements = form.elements;
      
          // let fields = Object.keys(elements).map(function(k) {
          //   if(elements[k].name !== undefined) {
          //     return elements[k].name;
          //   }
          //   else if (elements[k].length > 0) {
          //     return elements[k].item(0).name;
          //   }
          // }).filter(function(item, pos, self) {
          //   return self.indexOf(item) == pos && item;
          // });
      
          // let formData = {};
          // fields.forEach(function(name){
          //   let element = elements[name];

          //   formData[name] = element.value;

          //   if (element.length) {
          //       let data = [];
          //     for (let i = 0; i < element.length; i++) {
          //       let item = element.item(i);
          //       if (item.checked || item.selected) {
          //         data.push(item.value);
          //       }
          //     }
          //     formData[name] = data.join(', ');
          //   }
          // });

        //   formData.formDataNameOrder = JSON.stringify(fields);
        //   formData.formGoogleSheetName = form.dataset.sheet || "responses";
        //   formData.formGoogleSendEmail = form.dataset.email || ""; 
      
        //   return {data: formData};
         }
      
        function handleFormSubmit(event) {  
          event.preventDefault();
          
          let form = event.target;
          let formData = getFormData(form);
          let data = formData.data;
          let url = form.action;
          let xhr = new XMLHttpRequest();
          xhr.open('POST', url);
          xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
          xhr.onreadystatechange = function() {
              if (xhr.readyState === 4 && xhr.status === 200) {
                form.reset();
              }
          };

          const btnElement = document.getElementById('submit');
          btnElement.value = "SENT SUCCESSFULLY";
          btnElement.style.color = "#47596B"

          let encoded = Object.keys(data).map(function(k) {
              return encodeURIComponent(k) + "=" + encodeURIComponent(data[k]);
          }).join('&');
          xhr.send(encoded);
        }
        
        function loaded() {
            let forms = document.querySelectorAll("form.gform");
            for (let i = 0; i < forms.length; i++) {
                forms[i].addEventListener("submit", handleFormSubmit, false);
          }
          
        };
        document.addEventListener("DOMContentLoaded", loaded, false); 
  })();
  
  
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

                <form className="gform" method="POST" data-email="boma91@gmail.com" action="https://script.google.com/macros/s/AKfycbxNDN1M6kzFBoWvH83Fu3VcHYDIUDJ8IcXvWQbl07jHcWSe_YiCGTfWUIlMkydkAld0/exec">          
                    <p><span><input type="text" name="user_name" placeholder="Name"/></span></p>
                    <p><span><input type="email" name="user_email" placeholder="Email"/></span></p>
                    <p><span><input type="text" name="user_subject" placeholder="Subject"/></span></p>
                    <p><span><textarea name="user_message" cols="40" rows="50" placeholder="Message" className="message"></textarea></span></p>
                    <p><span><input type="submit" value="SEND" id="submit" /></span></p>
                </form>

            </div>
        </div>
    );
};


export default Contact;