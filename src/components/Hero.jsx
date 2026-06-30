import React from 'react';
import './Hero.css';

export default function Hero() {
  const guestAvatars = [
    { id: 1, url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&h=100&q=80', name: 'Sarah Jenkins' },
    { id: 2, url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100&q=80', name: 'David Chen' },
    { id: 3, url: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100&q=80', name: 'Elena Rostova' },
    { id: 4, url: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&h=100&q=80', name: 'Marcus Aureli' },
    { id: 5, url: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&h=100&q=80', name: 'Aisha Rahman' },
    { id: 6, url: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&h=100&q=80', name: 'John Doe' }
  ];

  const handlePlayClick = () => {
    alert("Streaming the latest 10x League Masterclass...");
  };

  return (
    <section id="hero" className="hero-section">
      {/* Desktop Background Image (Absolute) */}
      <div className="hero-bg-desktop">
        <img 
          src="/images/hero_podcast_bg.png" 
          alt="10x League Podcast Studio" 
          className="hero-bg-img"
        />
        <div className="hero-bg-overlay"></div>
      </div>

      <div className="container hero-container animate-fade-in">
        {/* Main Content Info */}
        <div className="hero-content">
          <h1 className="hero-title">
            Elevate Your Mind,<br />Transform Your World
          </h1>

          <div className="hero-action">
            <button className="btn-primary hero-btn" onClick={handlePlayClick}>
              <span>Latest episode</span>
              <svg className="play-icon" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 5V19L19 12L8 5Z" />
              </svg>
            </button>
          </div>

          {/* Mobile Image (Visible only on mobile inside flow) */}
          <div className="hero-image-mobile">
            <div className="mobile-img-card">
              <img 
                src="/images/hero_podcast_bg.png" 
                alt="10x League Podcast Studio" 
                className="mobile-inline-img"
              />
              <div className="mobile-img-overlay"></div>
            </div>
          </div>

          <div className="hero-meta">
            <p className="hero-subtext">From great minds that inspire</p>
            
            <div className="avatar-group">
              {guestAvatars.map((avatar) => (
                <div key={avatar.id} className="avatar-ring" title={avatar.name}>
                  <img src={avatar.url} alt={avatar.name} className="avatar-img" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
