import React, { useState } from 'react';
import './Button.scss';

const Button = () => {
    let [fun, setFun] = useState(['html', 'css', 'javascript', 'react', 'redux', 'sass', 'styled']);

    return (
        <div className='stack'>
          {/*    {
                htmlAlert === true
                ? <ModalHtml sethtmlAlert={sethtmlAlert} />
                : null
            }

                    {
                         cssAlert === true
                        ? <ModalCss setcssAlert={setcssAlert}/>
                        : null
                    }
                    {
                         javascriptAlert === true
                        ? <ModalJavascript setjavascriptAlert={setjavascriptAlert}/>
                        : null
                    }
                    {
                         reactAlert === true
                        ? <ModalReact setreactAlert={setreactAlert}/>
                        : null
                    }
                    {
                         reduxAlert === true
                        ? <ModalRedux setreduxAlert={setreduxAlert}/>
                        : null
                    }
                    {
                         sassAlert === true
                        ? <ModalSass setsassAlert={setsassAlert}/>
                        : null
                    }
                    {
                         styledAlert === true
                        ? <ModalStyled setstyledAlert={setstyledAlert}/>
                        : null
            }*/}
             

            {
                fun.map((a, i) => {
                    return (
                        //<div style={{ background :  `url(.img/${a}.png)` }} key={i}> </div>
                        <div className={a}  key={i}> </div>
                        
                    )
               }) 
            }

        </div>
    );
};

export default Button;