import React from 'react';

const Projects = () => (
    <section id="work" className="flex-row">
            <h3>Projects</h3>

            <div className="example size flex-row">
                {/* <!-- Project 1/header--> */}
                <article className="hero-box">
                    <a className="work-image work-hero img-1" href="https://the-learning-porch.herokuapp.com/" target="blank"></a>
                        <div className="project-title hero-title">
                            <h4>The Learning Porch</h4>
                            <p>Front and Backend Development</p>
                        </div>
                </article>

                {/* <!-- Project 2--> */}
                <article className="project-box">
                    <a className="work-image img-2" href="https://www.youtube.com/watch?v=IO9XlQrEt2Y&ab_channel=RickAstley" target="blank"></a>
                        <div className="project-title">
                            <h4>LED Wall</h4>
                            <p>Node/IoT</p>
                        </div>
                </article>
            
                {/* <!-- Project 3--> */}
                <article className="project-box">
                    <a className="work-image img-3" href="https://www.youtube.com/watch?v=34Ig3X59_qA&ab_channel=DopeLyrics" target="blank"></a>
                        <div className="project-title">
                            <h4>Calculator</h4>
                            <p>React/Javascript/CSS</p>
                        </div>
                </article>
            
                {/* <!-- Project 4--> */}
                <article className="project-box">
                    <a className="work-image img-4" href="https://toilettakos.github.io/Pokemon-Stats/" target="blank"></a>
                        <div className="project-title">
                            <h4>Pokemon Stats</h4>
                            <p>front end development</p>
                        </div>
                </article>

                {/* <!-- Project 5--> */}
                <article className="project-box">
                    <a className="work-image img-5" href="http://ToiletTakos.github.io/run-buddy/" target="blank"></a>
                        <div className="project-title flex-row">
                            <h4>Run Buddy</h4>
                            <p>HTML/CSS</p>
                        </div>
                </article>
            </div>
        </section>
);

export default Projects;