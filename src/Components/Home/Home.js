import React from 'react';
import './Home.scss';

const Home = () => {

    // function linkToGithub() {
    //     let link = "https://github.com/kirin059";
    //     window.open(link, '_blank')
    // }

    return (
        <div className="home">
            <div className="contents">
                <div className="main">
                    <span>함께 일하고 싶은 &nbsp;&nbsp;</span>
                    <span className="pink">FRONT-END DEVELOPER</span>
                </div>
                
                <div className="story">
                    <p>새로운 기술스택을 <span className="pinks">효율적</span>으로 받아들이고 <span className="pinks">성장</span>하는 것을 추구합니다.</p>
                    <p>긍정적인 에너지를 나누며, 남들과 함께할 때 <span className="pinks">시너지</span>를 낼 줄 아는 사람입니다.</p>
                </div>

                <div className="icons">
                    <div className="stack">
                        <div className="styled"></div>
                        <div className="sass"></div>
                        <div className="redux"></div>
                        <div className="react"></div>
                        <div className="javascript"></div>
                        <div className="css"></div>
                        <div className="html"></div>

                    </div>
                    <div className="link">
                        <div className="velog" onClick={() => {
                            window.open('https://github.com/kirin059', '_blank')
                        }}></div>

                        <div className="github"></div>
                    </div>
                </div>
            </div>

            
        </div>
    );
};

export default Home;