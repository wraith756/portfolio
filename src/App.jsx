import { useState } from "react";
import "./App.css";
import { SocialIcon } from "react-social-icons";

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
        <section id="about" className="about">
          <div className="about-content">
            <div className="profile-img">
              <img src="/55.jpg" alt="Anurag Sharma" />
            </div>
            <div className="about-text">
              <h2 className="section-title">About Me</h2>
              <p>
                I'm a Full Stack Developer with 5 years of experience in
                building scalable web applications. I specialize in JavaScript
                technologies across the entire stack and have a passion for
                creating elegant solutions to complex problems.
              </p>
              <p>
                When I'm not coding, you can find me contributing to open-source
                projects, writing technical articles, or exploring new
                technologies.
              </p>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="skills" id="skills">
          <div className="skills-content">
            <h2 className="section-title">My Skills</h2>
            <div className="skills-grid">
              {/* Skill 1 */}
              <div className="skills-card">
                <i className="fa-brands fa-square-js"></i>
                <h3>JavaScript</h3>
                <p>Expert in modern JavaScript, including ES6+ features</p>
              </div>
              {/* Skill 2 */}
              <div className="skills-card">
                <i className="fa-brands fa-node"></i>
                <h3>Node.js</h3>
                <p>Server-side development with Node.js and Express</p>
              </div>
              {/* Skill 3 */}
              <div className="skills-card">
                <i className="fas fa-database"></i>
                <h3>Database</h3>
                <p>Experience with SQL and NoSQL databases</p>
              </div>
              {/* Skill 4 */}
              <div className="skills-card">
                <i className="fab fa-react"></i>
                <h3>React</h3>
                <p>Expert in modern JavaScript, including ES6+ features</p>
              </div>
            </div>
          </div>
        </section>

        {/* Works */}
        <section id="works" className="works">
          <div className="works-content">
            <h2 className="section-title">Recent Works</h2>
            <div className="works-grid">
              {/* Work 1 */}
              <div className="work-card">
                <img
                  src="https://images.pexels.com/photos/38519/macbook-laptop-ipad-apple-38519.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="project 1"
                />
                <div className="work-info">
                  <div>
                    <h3>E-Commerce Platform</h3>
                    <p>
                      A full-stack e-commerce solution built with MERN stack
                    </p>
                  </div>
                  <div className="work-link">
                    <a href="#">
                      <i className="fas fa-external-link-alt"></i>
                      Live
                    </a>
                  </div>
                </div>
              </div>
              {/* Work 2 */}
              <div className="work-card">
                <img
                  src="https://images.pexels.com/photos/8152735/pexels-photo-8152735.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="project 2"
                />
                <div className="work-info">
                  <div>
                    <h3>Task Management App</h3>
                    <p>
                      Real-time task management application with React and
                      Firebase
                    </p>
                  </div>
                  <div className="work-links">
                    <a href="#">
                      <i className="fas fa-external-link-alt"></i>
                      Live
                    </a>
                  </div>
                </div>
              </div>
              {/* Work 3 */}
              <div className="work-card">
                <img
                  src="https://images.pexels.com/photos/5744248/pexels-photo-5744248.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="project 3"
                />
                <div className="work-info">
                  <div>
                    <h3>Social Media Dashboard</h3>
                    <p>Analytics dashboard with real-time data visualization</p>
                  </div>
                  <div className="work-links">
                    <a href="#">
                      <i className="fas fa-external-link-alt"></i>
                      Live
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="contact">
          <div className="contact-content">
            <h3 className="section-title">Get in Touch</h3>
            <form className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea rows="5" id="message"></textarea>
              </div>
              <button className="submit-btn" type="submit">
                Send Message
              </button>
            </form>
          </div>
        </section>

        {/* Footer */}
        <footer className="footer">
          <p>
            &copy; 2025 Anurag Sharma. Your full-stack partner for modern web
            solutions.
          </p>

          <div className="social-links">
            <a href="#https://github.com/wraith756">
              <SocialIcon network="github" url="https://github.com/wraith756" />
            </a>
            <a href="www.linkedin.com/in/anurag-sharma-454750251">
              <SocialIcon
                network="linkedin"
                url="www.linkedin.com/in/anurag-sharma-454750251"
              />
            </a>
            <a href="+919798318799" aria-setsize={resizeBy}>
              919798318799
            </a>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
