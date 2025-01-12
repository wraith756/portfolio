import { useState } from "react";
import "./App.css";
import { FaPhone } from "react-icons/fa";
import { SocialIcon } from "react-social-icons";
import { Contact } from "./Contact";
import Work from "./Work";
import About from "./About";
import Skill from "./Skill";

function App() {
  const [isMenuActive, setIsMenuActive] = useState(false);

  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
  };

  return (
    <>
      <div>
        {/* Navbar */}
        <nav className="navbar">
          <div className="nav-content">
            <div className="logo">
              <i className="fas fa-code"></i>
            </div>
            <div className={`nav-links ${isMenuActive ? "active" : ""}`}>
              <a href="#home">
                <i className="fas fa-home"></i> Home
              </a>
              <a href="#about">
                <i className="fas fa-user"></i> About
              </a>
              <a href="#skills">
                <i className="fas fa-code"></i> Skills
              </a>
              <a href="#works">
                <i className="fas fa-project-diagram"></i> Works
              </a>
              <a href="#contact">
                <i className="fas fa-envelope"></i> Contact
              </a>
            </div>
            <button className="menu-btn" onClick={toggleMenu}>
              <i className="fas fa-bars"></i>
            </button>
          </div>
        </nav>

        {/* Header */}
        <header id="home" className="header">
          <div className="header-content">
            <div className="header-text">
              <h1>Hi, I'm Anurag Sharma</h1>
              <p>
                A passionate Full Stack Developer crafting beautiful and
                functional web experiences
              </p>
              <a href="#contact" className="cta-btn">
                Get In Touch
              </a>
            </div>
          </div>
        </header>

        {/* About */}
        <About />

        {/* Skills */}
        <Skill />
        {/* Works */}
        <Work />
        {/* Contact */}
        <Contact />

        {/* Footer */}
        <footer className="footer">
          <p>
            &copy; 2025 Anurag Sharma. Your full-stack partner for modern web
            solutions.
          </p>

          <div className="social-links">
            <SocialIcon
              network="github"
              url="https://github.com/wraith756"
              style={{ height: 60, width: 60 }}
            />
            <SocialIcon
              style={{ height: 48, width: 48 }}
              network="linkedin"
              url="https://www.linkedin.com/in/anurag-sharma-454750251/"
            />
            <a id="phone" href="tel:+919798318799">
              <FaPhone size={30} />
            </a>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
