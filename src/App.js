import React, { useState } from 'react';
import './App.css';
import Nav from './components/Nav';

function App() {
  return (
    <div classNameName="App">
      <Nav></Nav>
      <section className="hero">
            <div>
                <h2 className="hero-name">AKA ToiletTakos</h2>
            </div>
        </section>
        {/* <!-- End of jumbotron--> */}

        {/* <!-- About me --> */}
        <section id="about-me" className="about flex-row">
            <h3>About <br /> Me</h3>
            <div className="size flex-row">
                <p>
                    My name is Dan, aka ToiletTakos or in some cases while gaming, Judy Hopps. I’m married to my 
                    awesome wife and I’m a new dad to a cool little guy. We have two crazy dogs; one golden retriever and 
                    one super mix who also looks like a golden. We also have two enormous cats; one grey and white with a 
                    moustache and the other is orange. <br />
                    <br />
                    My main interest is gaming. I can usually be found playing an assortment of games from Hell Let Loose 
                    to Halo to Minecraft and Sea of Thieves. When it comes to sports, Hockey, Football and a little F1 are my 
                    favorites. The Florida Panthers are my team when it comes to hockey. When it comes to Football, my 
                    club team is Chelsea, while England and Sweden are my picks for International. I am an avid coffee 
                    addict (though it seems like everyone is these days!) but I started a lot younger than most at age 13. <br />
                    <br />
                    Currently, I work in the hospitality and service industry at a banquet hall. My job is a little confusing to 
                    the outside viewer because I can be seen in almost every department from kitchen, inventory, 
                    accounting and management. I’ve always wanted to learn to code and use that to better my abilities in 
                    the online world. 
                </p>
            </div>
        </section>
        {/* <!-- End of about me-->

        <!--Work/projects--> */}
        <section id="work" className="flex-row">
            <h3>Work</h3>

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
        {/* <!--End of work/projects--> */}
        
        {/* <!-- contact info/ footer--> */}
        <section id="contact" className="info flex-row">
            <h3>Contact <br />Me</h3>
            <nav className="size flex-row">
                <ul>
                    <li><a href="mailto:dan.pandolfo@gmail.com">dan.pandolfo@gmail.com</a></li>
                    <li><a href="https://twitter.com/ToiletTakos" target="-blank">Twitter</a></li>
                    <li><a href="https://open.spotify.com/playlist/62Tl0v5XOxDKuPv2mvjzGc" target="-blank">Spotify</a></li>
                </ul>
            </nav>
        </section>
        {/* <!-- End of contact section--> */}
    </div>
  );
}

export default App;
