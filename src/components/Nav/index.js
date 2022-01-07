import React from 'react';

function Nav(props) {
       return(
        <header>
        <h2>
          <a data-testid="link" href="/">
            Toilet Takos
          </a>
        </h2>
        <nav>
                <ul>
                    <li>
                        <a href="#about-me">About Me</a>
                    </li>
                    <li>
                        <a href="#work">Projects</a>
                    </li>
                    <li>
                        <a href="#contact">Contact Me</a>
                    </li>
                    <li>
                        <a href="https://github.com/ToiletTakos" target="-blank">Github</a>
                    </li>
                </ul>
            </nav>
      </header>
    )
}

export default Nav;