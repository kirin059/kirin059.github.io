import React, { useState } from 'react';
import ModalShop from '../../Components/Modal/ModalShop/ModalShop';
import ModalInsta from '../Modal/ModalBang/ModalBang';
import ModalGoodal from '../../Components/Modal/ModalGoodal/ModalGoodal';
import './Project.scss';

const Portfolio = () => {

    let [shopModal, setshopModal] = useState(false);
    let [instaModal, setBangModal] = useState(false);
    let [goodalModal, setgoodalModal] = useState(false);

    return (
        <div className="project">
            <div className="header">
                <h4>Project</h4>
            </div>

            <div className="project_container">
                <div className="projects third">
                    {
                         goodalModal === true
                        ? <ModalGoodal setgoodalModal={setgoodalModal}/>
                        : null
                    }
                    <div className="img" onClick={() => {
                            setgoodalModal(true)
                        }}></div>
                    <div className="project_contents">#Goodal Clone</div>
                </div>
                <div className="projects second">
                    {
                         instaModal === true
                        ? <ModalInsta setBangModal={setBangModal}/>
                        : null
                    }
                    <div className="img" onClick={() => {
                            setBangModal(true)
                        }}></div>
                    <div className="project_contents">#Register Room</div>
                </div>
                <div className="projects first">
                    {
                         shopModal === true
                        ? <ModalShop setshopModal={setshopModal}/>
                        : null
                    }
                    <div className="img" onClick={() => {
                            setshopModal(true)
                        }}></div>
                    <div className="project_contents">#Shopping Mall</div>
                </div>

            </div>
        </div>
    );
};

export default Portfolio;