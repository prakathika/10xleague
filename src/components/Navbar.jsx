import React, { useState, useEffect } from 'react';
import logoImg from '../../assets/logo.jpg';
import './Navbar.css';


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Change navbar background on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Track active section for indicator
  useEffect(() => {
    const sections = ['hero', 'architect', 'wins', 'podcasts', 'get-inside'];

    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px', // Trigger when section occupies center of viewport
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setIsOpen(false);
    const targetElement = document.getElementById(id);
    if (targetElement) {
      const offset = 80; // height of nav
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Logo */}
        <a href="#hero" className="logo" onClick={(e) => handleNavClick(e, 'hero')}>
          <img src={logoImg} alt="10X League Logo" className="logo-icon" />
        </a>

        {/* Desktop Menu */}
        <div className="nav-links">
          <a
            href="#hero"
            className={activeSection === 'hero' ? 'active' : ''}
            onClick={(e) => handleNavClick(e, 'hero')}
          >
            Home
          </a>
          <a
            href="#architect"
            className={activeSection === 'architect' ? 'active' : ''}
            onClick={(e) => handleNavClick(e, 'architect')}
          >
            The Architect
          </a>
          <a
            href="#wins"
            className={activeSection === 'wins' ? 'active' : ''}
            onClick={(e) => handleNavClick(e, 'wins')}
          >
            Wins Wall
          </a>
          <a
            href="#podcasts"
            className={activeSection === 'podcasts' ? 'active' : ''}
            onClick={(e) => handleNavClick(e, 'podcasts')}
          >
            Podcasts
          </a>
          <a
            href="#get-inside"
            className={activeSection === 'get-inside' ? 'active' : ''}
            onClick={(e) => handleNavClick(e, 'get-inside')}
          >
            Get Inside
          </a>
        </div>

        {/* CTA Button (matches Sign Up button top right of mockup) */}
        <div className="nav-cta">
          <a href="#get-inside" className="signup-btn" onClick={(e) => handleNavClick(e, 'get-inside')}>
            Get Inside
          </a>
        </div>

        {/* Mobile Hamburger Icon */}
        <button className={`hamburger ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <div className={`mobile-drawer ${isOpen ? 'open' : ''}`}>
        <div className="mobile-links">
          <a href="#hero" className={activeSection === 'hero' ? 'active' : ''} onClick={(e) => handleNavClick(e, 'hero')}>Home</a>
          <a href="#architect" className={activeSection === 'architect' ? 'active' : ''} onClick={(e) => handleNavClick(e, 'architect')}>The Architect</a>
          <a href="#wins" className={activeSection === 'wins' ? 'active' : ''} onClick={(e) => handleNavClick(e, 'wins')}>Wins Wall</a>
          <a href="#podcasts" className={activeSection === 'podcasts' ? 'active' : ''} onClick={(e) => handleNavClick(e, 'podcasts')}>Podcasts</a>
          <a href="#get-inside" className={activeSection === 'get-inside' ? 'active' : ''} onClick={(e) => handleNavClick(e, 'get-inside')}>Get Inside</a>
          <a href="#get-inside" className="mobile-signup-btn" onClick={(e) => handleNavClick(e, 'get-inside')}>Get Inside</a>
        </div>
      </div>
    </nav>
  );
}
