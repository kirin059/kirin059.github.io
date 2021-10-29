import React, { useState } from 'react';
import './Home.scss';

const Home = () => {

    return (
        <div className="home">
            <div className="main">
                <p>함께 일하고 싶은 <span className="bold">웹 개발자</span></p>         
                <p className="story">새로운 기술스택을 <span className="bold">효율적</span>으로 받아들이고 <span className="bold">성장</span>하는 것을 추구합니다.</p>
                <p className="story">긍정적인 에너지를 나누며, 남들과 함께할 때 <span className="bold">시너지</span>를 낼 줄 아는 사람입니다.</p>

            </div>
        </div>
    );
};

export default Home;