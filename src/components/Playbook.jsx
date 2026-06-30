import React, { useState, useEffect, useRef } from 'react';
import './Playbook.css';

export default function Playbook() {
  // Tile 1: Focus State
  const [focusActive, setFocusActive] = useState(false);
  const [focusTime, setFocusTime] = useState('90:00');
  const timerRef = useRef(null);

  useEffect(() => {
    if (focusActive) {
      let minutes = 90;
      let seconds = 0;
      timerRef.current = setInterval(() => {
        if (seconds === 0) {
          if (minutes === 0) {
            clearInterval(timerRef.current);
            setFocusActive(false);
            return;
          }
          minutes--;
          seconds = 59;
        } else {
          seconds--;
        }
        setFocusTime(
          `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
        );
      }, 1000);
    } else {
      clearInterval(timerRef.current);
      setFocusTime('90:00');
    }

    return () => clearInterval(timerRef.current);
  }, [focusActive]);

  // Tile 3: Leverage Slider
  const [leverage, setLeverage] = useState(1);

  // Tile 6: Asset Compounding Counter
  const [compoundValue, setCompoundValue] = useState(10000);
  const [isHoveredCompound, setIsHoveredCompound] = useState(false);

  useEffect(() => {
    let interval;
    if (isHoveredCompound) {
      let currentVal = 10000;
      const targetVal = 150000;
      const step = 4677;
      interval = setInterval(() => {
        currentVal += step;
        if (currentVal >= targetVal) {
          setCompoundValue(targetVal);
          clearInterval(interval);
        } else {
          setCompoundValue(currentVal);
        }
      }, 30);
    } else {
      setCompoundValue(10000);
    }
    return () => clearInterval(interval);
  }, [isHoveredCompound]);

  return (
    <section id="playbook" className="section playbook-section">
      <div className="spotlight spotlight-center"></div>
      
      <div className="container playbook-container">
        {/* Section Header */}
        <div className="playbook-header">
          <span className="section-label">The Playbook</span>
          <h2 className="playbook-heading gradient-text">
            The Rules of Exponential Output
          </h2>
          <p className="playbook-subheading">
            Hover over the strategies and interact with the modules to see the 10x systems in action.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="bento-grid">
          
          {/* Tile 1: Hyper-Focus (2x1 Large Tile) */}
          <div 
            className={`bento-tile bento-large tile-focus ${focusActive ? 'active-focus' : ''}`}
            onClick={() => setFocusActive(!focusActive)}
          >
            <div className="tile-content">
              <div className="tile-info">
                <div className="tile-header">
                  <div className="tile-icon-box">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  </div>
                  <span className="tile-num">01</span>
                </div>
                <h3 className="tile-title">Hyper-Focus Systems</h3>
                <p className="tile-desc">
                  Lock out digital clutter, structure focus blocks, and access high-frequency deep work modes. Click to engage focus mode and observe system optimization.
                </p>
              </div>

              {/* Interactive Widget */}
              <div className="widget-box focus-widget">
                <div className="focus-indicator">
                  <svg className="progress-ring" viewBox="0 0 100 100">
                    <circle 
                      className="progress-ring-bg" 
                      cx="50" 
                      cy="50" 
                      r="40" 
                    />
                    <circle 
                      className={`progress-ring-fill ${focusActive ? 'animating' : ''}`} 
                      cx="50" 
                      cy="50" 
                      r="40" 
                    />
                  </svg>
                  <div className="timer-text">{focusTime}</div>
                </div>
                <div className="focus-label">
                  {focusActive ? 'SYSTEM IN HYPER-FOCUS' : 'SYSTEM IDLE'}
                </div>
              </div>
            </div>
            <div className="tile-glow"></div>
          </div>

          {/* Tile 2: Scale Architecture (1x1 Small Tile) */}
          <div className="bento-tile bento-small tile-scale">
            <div className="tile-content">
              <div className="tile-header">
                <div className="tile-icon-box">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="3" width="7" height="9" />
                    <rect x="14" y="3" width="7" height="5" />
                    <rect x="14" y="12" width="7" height="9" />
                    <rect x="3" y="16" width="7" height="5" />
                  </svg>
                </div>
                <span className="tile-num">02</span>
              </div>
              <h3 className="tile-title">Scale Architecture</h3>
              <p className="tile-desc">
                Build logical operation triggers and flowcharts that run independently.
              </p>

              {/* Animation Widget: Operational Flow */}
              <div className="widget-box scale-widget">
                <div className="flow-node node-trigger">Inbound</div>
                <div className="flow-connector">
                  <svg viewBox="0 0 100 10" className="connector-line">
                    <line x1="0" y1="5" x2="100" y2="5" stroke="rgba(255,255,255,0.15)" strokeWidth="2" />
                    <line x1="0" y1="5" x2="100" y2="5" className="flowing-pulse" stroke="var(--accent)" strokeWidth="2" />
                  </svg>
                </div>
                <div className="flow-node node-process">Process</div>
                <div className="flow-connector">
                  <svg viewBox="0 0 100 10" className="connector-line">
                    <line x1="0" y1="5" x2="100" y2="5" stroke="rgba(255,255,255,0.15)" strokeWidth="2" />
                    <line x1="0" y1="5" x2="100" y2="5" className="flowing-pulse delay-pulse" stroke="var(--accent)" strokeWidth="2" />
                  </svg>
                </div>
                <div className="flow-node node-output">Scale</div>
              </div>
            </div>
            <div className="tile-glow"></div>
          </div>

          {/* Tile 3: Leverage Multipliers (1x1 Small Tile) */}
          <div className="bento-tile bento-small tile-leverage">
            <div className="tile-content">
              <div className="tile-header">
                <div className="tile-icon-box">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                </div>
                <span className="tile-num">03</span>
              </div>
              <h3 className="tile-title">Leverage Multipliers</h3>
              <p className="tile-desc">
                Deploy smart tech and systems to amplify hourly yield. Adjust output:
              </p>

              {/* Interactive Widget: Slider & Speed dial */}
              <div className="widget-box leverage-widget">
                <div className="dial-container">
                  <svg viewBox="0 0 100 60" className="gauge">
                    <path d="M 15 50 A 35 35 0 0 1 85 50" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="6" strokeLinecap="round" />
                    <path d="M 15 50 A 35 35 0 0 1 85 50" fill="none" stroke="var(--accent)" strokeWidth="6" strokeLinecap="round" 
                      style={{ strokeDasharray: 220, strokeDashoffset: 220 - (220 * (leverage - 1)) / 9 }} 
                    />
                  </svg>
                  <div className="dial-value">{leverage}x</div>
                </div>
                <input 
                  type="range" 
                  min="1" 
                  max="10" 
                  value={leverage} 
                  onChange={(e) => setLeverage(Number(e.target.value))}
                  className="leverage-slider"
                />
              </div>
            </div>
            <div className="tile-glow"></div>
          </div>

          {/* Tile 4: Network Syndicate (1x1 Small Tile) */}
          <div className="bento-tile bento-small tile-network">
            <div className="tile-content">
              <div className="tile-header">
                <div className="tile-icon-box">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <span className="tile-num">04</span>
              </div>
              <h3 className="tile-title">Network syndicate</h3>
              <p className="tile-desc">
                Unlock high-leverage peer syndicates and closed door masterminds.
              </p>

              {/* Animation Widget: Floating Nodes */}
              <div className="widget-box network-widget">
                <svg viewBox="0 0 100 100" className="network-svg">
                  <g className="rotating-group">
                    <line x1="50" y1="20" x2="20" y2="50" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
                    <line x1="20" y1="50" x2="50" y2="80" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
                    <line x1="50" y1="80" x2="80" y2="50" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
                    <line x1="80" y1="50" x2="50" y2="20" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
                    <line x1="50" y1="20" x2="50" y2="80" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5" />
                    <line x1="20" y1="50" x2="80" y2="50" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5" />
                    
                    <circle cx="50" cy="20" r="6" className="net-node node-active" />
                    <circle cx="20" cy="50" r="6" className="net-node" />
                    <circle cx="50" cy="80" r="6" className="net-node node-active" />
                    <circle cx="80" cy="50" r="6" className="net-node" />
                    <circle cx="50" cy="50" r="8" className="net-center" />
                  </g>
                </svg>
              </div>
            </div>
            <div className="tile-glow"></div>
          </div>

          {/* Tile 5: Cognitive Stamina (1x1 Small Tile) */}
          <div className="bento-tile bento-small tile-stamina">
            <div className="tile-content">
              <div className="tile-header">
                <div className="tile-icon-box">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                  </svg>
                </div>
                <span className="tile-num">05</span>
              </div>
              <h3 className="tile-title">Cognitive Stamina</h3>
              <p className="tile-desc">
                Tune biological protocols to maintain high stamina levels without burnout.
              </p>

              {/* Animation Widget: Pulsing Heart Rate Wave */}
              <div className="widget-box stamina-widget">
                <svg viewBox="0 0 200 60" className="ekg-svg">
                  <path 
                    d="M 0 30 L 40 30 L 50 15 L 60 45 L 70 30 L 110 30 L 120 5 L 130 55 L 140 30 L 200 30" 
                    fill="none" 
                    stroke="rgba(255,255,255,0.12)" 
                    strokeWidth="2.5" 
                  />
                  <path 
                    d="M 0 30 L 40 30 L 50 15 L 60 45 L 70 30 L 110 30 L 120 5 L 130 55 L 140 30 L 200 30" 
                    fill="none" 
                    stroke="var(--accent)" 
                    strokeWidth="2.5" 
                    className="ekg-pulse" 
                  />
                </svg>
              </div>
            </div>
            <div className="tile-glow"></div>
          </div>

          {/* Tile 6: Asset Compounding (2x1 Large Tile) */}
          <div 
            className="bento-tile bento-large tile-compound"
            onMouseEnter={() => setIsHoveredCompound(true)}
            onMouseLeave={() => setIsHoveredCompound(false)}
          >
            <div className="tile-content">
              <div className="tile-info">
                <div className="tile-header">
                  <div className="tile-icon-box">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="12" y1="1" x2="12" y2="23" />
                      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                    </svg>
                  </div>
                  <span className="tile-num">06</span>
                </div>
                <h3 className="tile-title">Asset Compounding</h3>
                <p className="tile-desc">
                  Convert cash flow into self-sustaining intellectual property and brands. Hover over the card to simulate system compounding over 3 years.
                </p>
              </div>

              {/* Compound Chart Widget */}
              <div className="widget-box compound-widget">
                <div className="counter-display">
                  <span className="counter-label">Equity value</span>
                  <span className="counter-num">${compoundValue.toLocaleString()}</span>
                </div>
                <svg className="chart-svg" viewBox="0 0 160 80">
                  <path 
                    d="M 10 70 Q 50 65 90 45 T 150 10" 
                    fill="none" 
                    stroke="rgba(255,255,255,0.08)" 
                    strokeWidth="3" 
                    strokeLinecap="round" 
                  />
                  <path 
                    d="M 10 70 Q 50 65 90 45 T 150 10" 
                    fill="none" 
                    stroke="url(#accent-gradient)" 
                    strokeWidth="3.5" 
                    strokeLinecap="round" 
                    className={`chart-line-draw ${isHoveredCompound ? 'active-draw' : ''}`} 
                  />
                  <defs>
                    <linearGradient id="accent-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="var(--accent)" />
                      <stop offset="100%" stopColor="var(--accent-light)" />
                    </linearGradient>
                  </defs>
                  {/* Glowing end node */}
                  {isHoveredCompound && (
                    <circle cx="150" cy="10" r="4.5" fill="#FFF" className="chart-end-glow" />
                  )}
                </svg>
              </div>
            </div>
            <div className="tile-glow"></div>
          </div>

        </div>
      </div>
    </section>
  );
}
