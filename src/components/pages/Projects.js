/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';

function Projects() {
    return(
    <   section id="work" className="flex-row">
            <h3>Projects</h3>

            <div className="example size flex-row">
                {/* <!-- Project 1--> */}
                <article className="project-box">
                    <a className={`work-image img-2`} href="https://worki-it-out.herokuapp.com/" alt="Worki it out deployed app" target="blank"></a>
                </article>
                
                {/* <!-- Project 2--> */}
                <article className="project-box">
                <a className={`work-image img-1`} href="https://the-learning-porch.herokuapp.com/" alt="Lerning Porch deployed app" target="blank"></a>
                </article>
            
                {/* <!-- Project 3--> */}
                <article className="project-box">
                    <a className={`work-image img-3`} href="https://www.youtube.com/watch?v=34Ig3X59_qA&ab_channel=DopeLyrics" alt="second place holder" rget="blank"></a>
                </article>
            
                {/* <!-- Project 4--> */}
                <article className="project-box">
                    <a className={`work-image img-4`} href="https://toilettakos.github.io/Pokemon-Stats/" alt="Pokemon stats deployed app page" target="blank"></a>
                </article>

                {/* <!-- Project 5--> */}
                <article className="project-box">
                    <a className={`work-image img-5`} href="http://ToiletTakos.github.io/run-buddy/" alt="run buddy deployed app page" target="blank"></a>
                </article>
            </div>
        </section>
    )
};

export default Projects;