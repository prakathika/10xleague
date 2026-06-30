import React, { useState } from 'react';
import './Podcasts.css';

export default function Podcasts() {
  const [selectedEpisodeId, setSelectedEpisodeId] = useState(1);

  const episodes = [
    {
      id: 1,
      title: 'The Architect Mindset',
      description: 'How to design systems that multiply your output without multiplying your hours.',
      youtubeId: 'dQw4w9WgXcQ',
      duration: '45 min',
      guests: 'Rajesh + 2 Founders'
    },
    {
      id: 2,
      title: 'Scaling to 10x',
      description: 'Why most people scale linearly and the leverage points that unlock exponential growth.',
      youtubeId: 'dQw4w9WgXcQ',
      duration: '38 min',
      guests: 'Rajesh + Operator Panel'
    },
    {
      id: 3,
      title: 'Focus Mechanics',
      description: 'Deep work protocols, distraction elimination, and cognitive performance engineering.',
      youtubeId: 'dQw4w9WgXcQ',
      duration: '52 min',
      guests: 'Rajesh + Neuroscientist'
    },
    {
      id: 4,
      title: 'The Wins Wall Stories',
      description: 'Real members share how they applied the 10x Playbook to their businesses and lives.',
      youtubeId: 'dQw4w9WgXcQ',
      duration: '61 min',
      guests: 'Rajesh + 4 Members'
    },
    {
      id: 5,
      title: 'Asset Compounding',
      description: 'Convert cash flow into intellectual property, brand equity, and self-sustaining systems.',
      youtubeId: 'dQw4w9WgXcQ',
      duration: '41 min',
      guests: 'Rajesh + Investor'
    },
    {
      id: 6,
      title: 'Inside the League',
      description: 'What happens behind closed doors in the 10X League mastermind community.',
      youtubeId: 'dQw4w9WgXcQ',
      duration: '33 min',
      guests: 'Rajesh + Community Lead'
    }
  ];

  const selectedEpisode = episodes.find((ep) => ep.id === selectedEpisodeId) || episodes[0];

  const getThumbnailUrl = (youtubeId) => `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`;
  const getEmbedUrl = (youtubeId) => `https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0`;

  return (
    <section id="podcasts" className="section podcasts-section">
      <div className="spotlight spotlight-center"></div>

      <div className="container podcasts-container">
        {/* Section Header */}
        <div className="podcasts-header">
          <span className="section-label">The Podcast</span>
          <h2 className="podcasts-heading gradient-text">
            Tune Into Exponential Growth
          </h2>
          <p className="podcasts-subheading">
            Raw conversations, tactical frameworks, and real stories from the 10X League community.
          </p>
        </div>

        {/* Featured Player — Main Screen */}
        <div className="podcast-featured">
          <div className="featured-badge">
            <span className="featured-dot"></span>
            Now Playing
          </div>
          <div className="featured-player">
            <iframe
              key={selectedEpisodeId}
              src={getEmbedUrl(selectedEpisode.youtubeId)}
              title={selectedEpisode.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="featured-info">
            <h3>{selectedEpisode.title}</h3>
            <p>{selectedEpisode.description}</p>
            <div className="featured-meta">
              <span className="meta-tag">EP {String(selectedEpisode.id).padStart(2, '0')}</span>
              <span className="meta-tag">{selectedEpisode.duration}</span>
              <span className="meta-tag">{selectedEpisode.guests}</span>
            </div>
          </div>
        </div>

        {/* Episodes Grid */}
        <div className="episodes-grid">
          {episodes.map((episode) => (
            <div
              key={episode.id}
              className={`episode-card ${episode.id === selectedEpisodeId ? 'active-episode' : ''}`}
              onClick={() => setSelectedEpisodeId(episode.id)}
            >
              <div className="episode-thumbnail">
                <img src={getThumbnailUrl(episode.youtubeId)} alt={episode.title} />
                <div className="thumbnail-overlay">
                  <button
                    className="play-button"
                    aria-label={`Play ${episode.title}`}
                  >
                    {episode.id === selectedEpisodeId ? (
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    ) : (
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    )}
                  </button>
                </div>
                <span className="episode-duration">{episode.duration}</span>
                {episode.id === selectedEpisodeId && (
                  <span className="now-playing-pill">Now Playing</span>
                )}
              </div>

              <div className="episode-content">
                <div className="episode-meta-top">
                  <span className="episode-number">EP {String(episode.id).padStart(2, '0')}</span>
                  <span className="episode-guests">{episode.guests}</span>
                </div>
                <h3 className="episode-title">{episode.title}</h3>
                <p className="episode-description">{episode.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Subscribe CTA */}
        <div className="podcast-cta">
          <div className="cta-content">
            <h3>Never miss an episode</h3>
            <p>Subscribe to the 10X League podcast on YouTube for weekly drops.</p>
          </div>
          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary podcast-subscribe-btn"
          >
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
            </svg>
            Subscribe on YouTube
          </a>
        </div>
      </div>
    </section>
  );
}
