import React, { useState } from 'react';
import ModalShop from '../../Components/Modal/ModalShop/ModalShop';
import ModalInsta from '../../Components/Modal/ModalInsta/ModalInsta';
import './Project.scss';

const Portfolio = () => {

    let [shopModal, setshopModal] = useState(false);
    let [instaModal, setinstaModal] = useState(false);

    return (
        <div className="project">
            <div className="header">
                <h4>Project</h4>
            </div>

            <div className="project_container">
                <div className="projects first">
                    {
                         shopModal === true
                        ? <ModalShop setshopModal={setshopModal}/>
                        : null
                    }
                    <div className="img" onClick={() => {
                            setshopModal(true)
                        }}></div>
                    <div className="contents">#Shopping Mall</div>
                </div>
                <div className="projects second">
                    {
                         instaModal === true
                        ? <ModalInsta setinstaModal={setinstaModal}/>
                        : null
                    }
                    <div className="img" onClick={() => {
                            setinstaModal(true)
                        }}></div>
                    <div className="contents">#인스타그램 Clone</div>
                </div>
                <div className="projects third">
                    <div className="img"></div>
                    <div className="contents">#Goodal Clone</div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;