import React from 'react';

function Nav(props) {
    const navItems = ['About-Me', 'Projects', 'Contact-Me']
       return(
        <header>
        <h2>
          <a href="/">
            Dan Pandolfo
          </a>
        </h2>
        <nav className="nav">
            <ul className="navUl">
                {navItems.map(navItems => (
                    <li key={navItems}>
                        <a 
                            href={'#' + navItems.toLowerCase()}
                            onClick={() => props.handlePageChange(navItems)}
                        >
                            {navItems}
                        </a>
                    </li>
                ))}
                <li>
                        <a href="https://github.com/ToiletTakos" target="-blank">Github</a>
                </li>
            </ul>
            </nav>
      </header>
    )
}

export default Nav;