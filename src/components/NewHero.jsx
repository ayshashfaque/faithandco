import React from 'react';
import { Link } from 'react-router-dom';

const NewHero = () => {
  return (
    <div className="fc-hero">
      {/* Background Video */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          src="/besthero.mp4"
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Removed darkening overlay on video per request */}

      <div className="hero-content" style={{ zIndex: 2 }}>
        <div className="hero-eyebrow">
          <span className="hero-eyebrow-line" />
          <span>London Letting Specialists</span>
          <span className="hero-eyebrow-line" />
        </div>

        <h1>
          <span className="l1">Faith And Co</span>
          <span className="l2">Property Lettings &amp; Management</span>
        </h1>

        <p className="hero-sub">
          Specialist letting &amp; management across Greater London and the Home Counties.
          HMO, guaranteed rent, care sector, supported living — and full compliance, as standard.
        </p>

        <div className="hero-paths">
          <Link to="/landlords" className="hp-card">
            <div className="hp-kicker">For Landlords</div>
            <div className="hp-title">Let Your Property</div>
            <div className="hp-sub">
              Guaranteed rent &amp; management
              <svg viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </div>
          </Link>
          <Link to="/services" className="hp-card">
            <div className="hp-kicker">For Operators</div>
            <div className="hp-title">Source Properties</div>
            <div className="hp-sub">
              C2, HMO &amp; block lets
              <svg viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </div>
          </Link>
          <Link to="/properties" className="hp-card">
            <div className="hp-kicker">For Tenants</div>
            <div className="hp-title">Find a Home</div>
            <div className="hp-sub">
              Browse available properties
              <svg viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </div>
          </Link>
        </div>

        <div className="hero-stats">
          <div className="hero-stat">
            <div className="hero-stat-num">500+</div>
            <div className="hero-stat-label">Properties Managed</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-num">32</div>
            <div className="hero-stat-label">London Boroughs</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-num">99%</div>
            <div className="hero-stat-label">Occupancy Rate</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-num">2018</div>
            <div className="hero-stat-label">Established</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero-scroll" style={{ zIndex: 2 }}>
        <span>Scroll</span>
        <span className="scroll-line" />
      </div>
    </div>
  );
};

export default NewHero;
