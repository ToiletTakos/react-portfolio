import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Nav from './components/Nav';
import Contact from './components/pages/Contact'
import About from './components/pages/About';
import Projects from './components/pages/Projects';

function App() {
    const [currentPage, handlePageChange] = useState("About Me");

    const renderPage = () => {
        switch(currentPage) {
            case 'Projects':
                return <Projects />;
            case 'Contact-Me':
                return <Contact />
            default:
                return <About />
        }
    }   
  return (
    <div className="Apps">
      <Nav currentPage={currentPage} handlePageChange={handlePageChange}></Nav>
      <section className="hero">
            <div>
                <h2 className="herosname">AKA ToiletTakos</h2>
            </div>
        </section>
        {/* <!-- End of jumbotron--> */}
            {
                renderPage()
            }

        {/* <!-- contact info/ footer--> */}
        <section id="contact" className="info flex-row">
            <h3>My <br />Links</h3>
            <nav className="size flex-row">
                <ul>
                    <li><a href="mailto:dan.pandolfo@gmail.com">Email</a></li>
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
