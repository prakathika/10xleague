import React from 'react';
import './WinsWall.css';

export default function WinsWall() {
  const wins = [
    {
      name: 'Liam Sterling',
      handle: '@sterling_ops',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100&q=80',
      metric: 'Scaled from $20k to $145k/mo',
      text: 'Implementing the Scale Architecture in my software agency changed everything. We went from a chaotic operator bottleneck to a self-managing revenue engine. Best investment of my career.'
    },
    {
      name: 'Sophia Vance',
      handle: '@sophia_builds',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100&q=80',
      metric: 'Saved 30 hrs/week',
      text: 'The Hyper-Focus Systems and delegation playbook literally bought back my life. I am working less than half the hours while growing our client base and revenue by 40%.'
    },
    {
      name: 'Marcus Reynolds',
      handle: '@marcus_scale',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&h=100&q=80',
      metric: '10x Pipeline Efficiency',
      text: 'TheClosed-Door Masterminds alone are worth the entry. Connecting with other 10x thinkers unlocked strategic partnerships and JV deals that were previously impossible.'
    },
    {
      name: 'Isabella Torres',
      handle: '@isabella_co',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&h=100&q=80',
      metric: '+$850k Net Equity Value',
      text: 'The Asset Compounding framework showed me how to stop treating my business like a cash register and start structuring it as an institutional asset. Pure gold.'
    },
    {
      name: 'Devontae King',
      handle: '@dev_king_tech',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&h=100&q=80',
      metric: '$4.2M Series A Secured',
      text: 'From pitch decks to high-level network introductions, the Architect\'s playbook was the exact roadmap we needed to scale our tech infrastructure and close funding.'
    },
    {
      name: 'Chloe Davenport',
      handle: '@chloedavenport',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&h=100&q=80',
      metric: '10x Personal Freedom',
      text: 'Cognitive mechanics helped me double my capacity without the burnout. I sleep better, make better decisions, and run a high-performance firm without losing my sanity.'
    }
  ];

  return (
    <section id="wins" className="section wins-section">
      <div className="spotlight spotlight-top-left"></div>
      
      <div className="container wins-container">
        {/* Section Header */}
        <div className="wins-header">
          <span className="section-label">Wins Wall</span>
          <h2 className="wins-heading gradient-text">
            Proof of Exponential Growth
          </h2>
          <p className="wins-subheading">
            See how founders, builders, and operators are leveraging the 10x Playbook to multiply their outputs.
          </p>
        </div>

        {/* Wins Grid */}
        <div className="wins-grid">
          {wins.map((win, idx) => (
            <div key={idx} className="win-card">
              {/* Profile details */}
              <div className="win-profile">
                <img src={win.avatar} alt={win.name} className="win-avatar" />
                <div className="win-user-info">
                  <div className="win-name-row">
                    <span className="win-name">{win.name}</span>
                    <svg className="verified-icon" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 16.17L4.83 12L3.41 13.41L9 19L21 7L19.59 5.59L9 16.17Z" />
                    </svg>
                  </div>
                  <span className="win-handle">{win.handle}</span>
                </div>
              </div>

              {/* Success Metric Badge */}
              <div className="win-metric-badge">
                <span className="metric-glow"></span>
                <span className="metric-text">{win.metric}</span>
              </div>

              {/* Review Text */}
              <p className="win-text">"{win.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
