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
                    <div className="contents">#Shopping Mall</div>
                </div>
                <div className="projects second">
                    <div className="img"></div>
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