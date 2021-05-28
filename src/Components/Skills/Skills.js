import React from 'react';
import './Skills.scss';

const Skills = () => {

    return (
        <div className='skills'>
            <div className="header">
                <h4>Skills</h4>
            </div>

            <div className="stack">
                <div className="stack_box">
                    <div className="icon html"></div>
                    <div className="content">
                        <p className="title"><strong>HTML5</strong></p>
                        <p>시멘틱한 구조와 웹표준 및 웹접근성에 준수하는 마크업을 합니다.</p> 
                    </div>
                </div>
                <div className="stack_box">
                    <div className="icon css"></div>
                    <div className="content">
                        <p className="title"><strong>CSS3</strong></p>
                        <p>CSS속성을 이해하며 디자인 시안에 따른 디자인을 구현할 수 있으며, 미디어쿼리를 이해하며 반응형 웹을 제작할 수 있습니다.</p>
                    </div>
                </div>
                <div className="stack_box">
                    <div className="icon javascript"></div>
                    <div className="content">
                        <p className="title"><strong>Javascript</strong></p>
                        <p>ES6 기준 Javascript를 능숙히 다룰 수 있습니다. 크로스 브라우징이 가능한 코드를 작성할 수 있습니다.</p> 
                    </div>
                </div>
                <div className="stack_box">
                    <div className="icon react"></div>
                    <div className="content">
                        <p className="title"><strong>React</strong></p>
                        <p>SPA Framework에 대한 깊은 이해가 있으며 React Hook을 이용한 개발 경험이 있습니다. </p> 
                    </div>
                </div>
                <div className="stack_box">
                    <div className="icon redux"></div>
                    <div className="content">
                        <p className="title"><strong>Redux</strong></p>
                        <p>Redux 중앙 상태 관리 패턴을 및 효율적인 모듈화를 적용해 본 경험이 있습니다. </p> 
                    </div>
                </div>
                <div className="stack_box">
                    <div className="icon sass"></div>
                    <div className="content">
                        <p className="title"><strong>Sass</strong></p>
                        <p>Nesting, Mixin 등을 적극 활용하여 유지보수가 용이하도록 효율적이고 가독성 좋은 코드 작성이 가능합니다.</p> 
                    </div>
                </div>
                <div className="stack_box">
                    <div className="icon styled"></div>
                    <div className="content">
                        <p className="title"><strong>Styled Components</strong></p>
                        <p>Styled Components와 같은 CSS pre-processor 사용에 능숙합니다.</p>
                    </div>
                </div>
                <div className="stack_box">
                    <div className="icon git"></div>
                    <div className="content">
                        <p className="title"><strong>Git & Github</strong></p>
                        <p>Github와 Git의 사용법을 숙지하고 있습니다. Commit관리, Merge를 통한 branch병합 등 기본적인 기능을 다룰 수 있습니다. </p>
                        <p>Git, Github를 이용해 능률적인 프로젝트 협업이 가능합니다.</p>
                    </div>
                </div>  
            </div>
        </div>
    );
};

export default Skills;