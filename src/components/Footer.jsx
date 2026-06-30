import React from 'react';
import logoImg from '../../assets/logo.jpg';
import './Footer.css';

export default function Footer() {
  const handleNavClick = (e, id) => {
    e.preventDefault();
    const targetElement = document.getElementById(id);
    if (targetElement) {
      const offset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#hero" className="footer-logo" onClick={(e) => handleNavClick(e, 'hero')}>
              <img src={logoImg} alt="10X League Logo" className="footer-logo-icon" />
            </a>
            <p className="footer-tagline">
              Elevate Your Mind, Transform Your World. Join the league of high achievers.
            </p>
          </div>

          <div className="footer-links-group">
            <h4>Navigate</h4>
            <a href="#hero" onClick={(e) => handleNavClick(e, 'hero')}>Home</a>
            <a href="#architect" onClick={(e) => handleNavClick(e, 'architect')}>The Architect</a>
            <a href="#wins" onClick={(e) => handleNavClick(e, 'wins')}>Wins Wall</a>
            <a href="#get-inside" onClick={(e) => handleNavClick(e, 'get-inside')}>Get Inside</a>
          </div>

          <div className="footer-links-group">
            <h4>Connect</h4>
            <a href="#" onClick={(e) => e.preventDefault()}>Twitter</a>
            <a href="#" onClick={(e) => e.preventDefault()}>Instagram</a>
            <a href="#" onClick={(e) => e.preventDefault()}>YouTube</a>
            <a href="#" onClick={(e) => e.preventDefault()}>LinkedIn</a>
          </div>

          <div className="footer-cta">
            <h4>Ready to Level Up?</h4>
            <p>Join the league and start your transformation today.</p>
            <a href="#get-inside" className="footer-signup-btn" onClick={(e) => handleNavClick(e, 'get-inside')}>
              Sign Up
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} 10X League. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="#" onClick={(e) => e.preventDefault()}>Privacy Policy</a>
            <a href="#" onClick={(e) => e.preventDefault()}>Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
