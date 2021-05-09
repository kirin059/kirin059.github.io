import React from 'react';
import './Project.scss';

const Portfolio = () => {
    return (
        <div className="project">
            <div className="header">
                <h4>Project</h4>
            </div>

            <div className="project_container">
                <div className="projects first">
                    <div className="img"></div>
                    <div className="contents">
                        프로젝트를 진행하였다
                    </div>
                </div>
                <div className="projects second">
                <div className="img"></div>
                    <div className="contents">
                        프로젝트를 진행하였다
                    </div>
                </div>
                <div className="projects third">
                    <div className="img"></div>
                    <div className="contents">
                        프로젝트를 진행하였다
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;