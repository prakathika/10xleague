import React from 'react';
import './Architect.css';

export default function Architect() {
  const stats = [
    { label: 'Revenue Scaled', value: '$120M+' },
    { label: 'Active Members', value: '350+' },
    { label: 'Systems Built', value: '45+' }
  ];

  return (
    <section id="architect" className="section architect-section">
      <div className="spotlight spotlight-bottom-right"></div>
      
      <div className="container architect-container">
        <div className="architect-grid">
          {/* Column 1: Image Card with warm gold gradient border */}
          <div className="architect-image-container">
            <div className="architect-image-card">
              <img 
                src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&h=800&q=80" 
                alt="The Architect" 
                className="architect-img"
              />
              <div className="image-card-border"></div>
              <div className="image-card-glow"></div>
            </div>
          </div>

          {/* Column 2: Bio & Details */}
          <div className="architect-content">
            <span className="section-label">The Architect</span>
            <h2 className="architect-heading gradient-text">
              Meet the Architect of Exponential Growth
            </h2>
            
            <p className="architect-bio">
              The 10x League was founded under a simple premise: average systems yield average lives. Our chief architect is a veteran systems designer, business strategist, and community mentor who has spent two decades dismantling linear growth models.
            </p>
            
            <p className="architect-bio">
              By combining high-leverage business design with neuro-cognitive conditioning, he guides entrepreneurs, executives, and visionaries to multiply their revenue and reclaim their freedom.
            </p>

            {/* Interactive Quote Card */}
            <div className="architect-quote-card">
              <svg className="quote-icon" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
              </svg>
              <p className="quote-text">
                "Success isn't about working 10 times harder. It's about designing a system that works 10 times smarter, freeing you to focus on high-leverage decisions."
              </p>
            </div>

            {/* Statistics */}
            <div className="stats-row">
              {stats.map((stat, i) => (
                <div key={i} className="stat-card">
                  <div className="stat-value">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
