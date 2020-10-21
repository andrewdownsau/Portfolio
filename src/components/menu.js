import React from 'react';
import './menu.css';
import github from './images/contact_links/github.svg';
import linkedin from './images/contact_links/linkedin.svg';

class Menu extends React.Component {
  
  render() {
    return (
      <header>
        <section id="header_left">
            <nav className="desktop_nav">
                <a href="./">Home</a>
                <a href="./">About</a>
                <a href="./">Skills</a>
                <a href="./">Projects</a>
                <a href="./">Blog</a>
                <a href="./">Contact</a>
            </nav>
        </section>
        <section id="header_right">
            <a href="https://github.com/andrewdownsau" target="_blank" rel="noopener noreferrer">
                <img id="github-link" alt="GitHub Link" src={github}/>
            </a>
            <a href="https://www.linkedin.com/in/andrew-downs-5899727b/" target="_blank" rel="noopener noreferrer">
                <img id="linkedin-link" alt="LinkedIn Link" src={linkedin}/>
            </a>
        </section>
      </header>
    );
  }
}

export default Menu;