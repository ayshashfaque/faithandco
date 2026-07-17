import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import NewHero from '../components/NewHero';

// ── Star SVG for testimonials ──
const Star = () => (
  <svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
);

// ── Arrow SVG ──
const Arrow = () => (
  <svg viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
);


// ── Testimonials data ──
const testimonials = [
  { text: "Faith & Co transformed how we manage our portfolio. Their compliance knowledge is second to none — every property fully licensed, every tenant vetted. We've not had a single void in three years.", author: "Praveen Varghese", role: "Portfolio Landlord", initials: "PV", tag: "LANDLORD", tagClass: "tt-land" },
  { text: "Outstanding service from start to finish. They found excellent tenants within two weeks and handle everything. Communication is superb — I always know exactly what's happening with my property.", author: "Kirandeep Sandhu", role: "HMO Landlord, Southall", initials: "KS", tag: "LANDLORD", tagClass: "tt-land" },
  { text: "We've partnered with Faith & Co for our supported accommodation contracts across four London boroughs. Their understanding of C2 licensing and care sector compliance makes them an invaluable partner.", author: "Sarah Mitchell", role: "Operations Director", initials: "SM", tag: "OPERATOR", tagClass: "tt-op" },
  { text: "As a care provider, finding compliant properties is our biggest challenge. Faith & Co consistently deliver properties that meet Ofsted and CQC requirements. Professional, knowledgeable, and reliable.", author: "David Chen", role: "Care Sector Provider", initials: "DC", tag: "OPERATOR", tagClass: "tt-op" },
  { text: "I recently rented through Faith & Co and couldn't be more pleased. The staff were exceptional — friendly, approachable, and always ready to answer questions. The property was exactly as advertised.", author: "Joel Thomas", role: "Tenant, West London", initials: "JT", tag: "TENANT", tagClass: "tt-ten" },
  { text: "Moving to London was daunting, but Faith & Co made the process seamless. They found me the perfect flat, handled all the paperwork efficiently, and check in regularly to make sure everything is fine.", author: "Amara Osei", role: "Tenant, Ealing", initials: "AO", tag: "TENANT", tagClass: "tt-ten" },
  { text: "I became frustrated after viewing numerous properties with different agents. Faith & Co were transparent, communicative, and genuinely helpful. Mr. Koshy never hesitated to answer my calls.", author: "Patrick N.", role: "Tenant", initials: "PN", tag: "TENANT", tagClass: "tt-ten" },
  { text: "Whole-block let to Faith & Co for our new build development. 24 units, fully let within six weeks. Their tenant-vetting process is rigorous and the ongoing management is truly hands-off for us.", author: "Richard Holloway", role: "Property Developer", initials: "RH", tag: "LANDLORD", tagClass: "tt-land" },
];

// ── News data ──
const newsItems = [
  {
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80&auto=format&fit=crop',
    tag: 'Market Update',
    date: 'June 2025',
    title: 'London Rental Market Q2 2025 — Demand Surges in Outer Boroughs',
    desc: 'Average rents across Greater London rose 4.2% in Q2, driven by strong demand in Ealing, Hounslow, and Hillingdon. Here\'s what landlords need to know.',
  },
  {
    image: 'https://images.unsplash.com/photo-1554469384-e58fac16e23a?w=800&q=80&auto=format&fit=crop',
    tag: 'Legislation',
    date: 'May 2025',
    title: 'Renters\' Rights Act 2025 — What Every Landlord Must Know Now',
    desc: 'The landmark bill abolishes Section 21 and introduces new compliance requirements. Our guide covers every change and how to prepare.',
  },
  {
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80&auto=format&fit=crop',
    tag: 'Insight',
    date: 'April 2025',
    title: 'C2 Properties — Understanding Planning Use Classes for Care Providers',
    desc: 'A comprehensive guide to C2 planning classification, licensing requirements, and how to convert residential properties for care sector use.',
  },
];

const Home = () => {
  return (
    <div>
      <NewHero />
      {/* ═══ WHY CHOOSE — 3 AUDIENCE COLUMNS ═══ */}
      <section className="why">
        <div className="why-inner">
          <div className="why-head">
            <div className="why-eyebrow">
              <span className="why-eyebrow-line"></span>
              <span>Why Choose Faith &amp; Co</span>
              <span className="why-eyebrow-line"></span>
            </div>
            <h2>A Different Kind of <em>Letting Agent</em></h2>
            <p className="why-lede">
              Whether you're a landlord seeking reliable income, a care provider sourcing compliant properties,
              or a tenant looking for a well-managed home — we've built our services around you.
            </p>
          </div>

          <div className="aud-grid">
            {/* Landlords */}
            <div className="aud-col">
              <div className="aud-top">
                <div className="aud-icon">
                  <svg viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                </div>
                <div className="aud-kicker">For Landlords</div>
                <div className="aud-title">Reliable Income, Zero Hassle</div>
              </div>
              <div className="aud-list">
                <div className="aud-point"><h4>Guaranteed Rent</h4><p>Fixed monthly income, paid whether occupied or vacant. We lease directly and absorb all risk.</p></div>
                <div className="aud-point"><h4>Full Compliance</h4><p>HMO licensing, EPC, gas safety, electrical — every certificate handled and renewed on schedule.</p></div>
                <div className="aud-point"><h4>Vetted Tenants</h4><p>Rigorous referencing, right-to-rent checks, and deposit protection on every tenancy.</p></div>
                <div className="aud-point"><h4>Transparent Fees</h4><p>No hidden charges. Management fees agreed upfront with full monthly reporting.</p></div>
              </div>
              <Link to="/landlords" className="aud-cta">Landlord Services →</Link>
            </div>

            {/* Operators & Care */}
            <div className="aud-col">
              <div className="aud-top">
                <div className="aud-icon">
                  <svg viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
                </div>
                <div className="aud-kicker">For Operators &amp; Care</div>
                <div className="aud-title">Compliant Properties, On Demand</div>
              </div>
              <div className="aud-list">
                <div className="aud-point"><h4>C2 Licensed Properties</h4><p>Purpose-sourced properties with C2 planning use for children's homes and care facilities.</p></div>
                <div className="aud-point"><h4>Ofsted &amp; CQC Ready</h4><p>Properties meeting regulatory requirements for registration. Fire safety, room sizes, DDA compliance.</p></div>
                <div className="aud-point"><h4>Council Contracts</h4><p>PSL, PLA, and nightly-paid temporary accommodation across multiple London boroughs.</p></div>
                <div className="aud-point"><h4>Block &amp; Bulk Lets</h4><p>Whole-block and multi-unit supply for SA operators, care providers, and housing associations.</p></div>
              </div>
              <Link to="/services/care-sector-lettings" className="aud-cta">Specialist Services →</Link>
            </div>

            {/* Tenants */}
            <div className="aud-col">
              <div className="aud-top">
                <div className="aud-icon">
                  <svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                </div>
                <div className="aud-kicker">For Tenants</div>
                <div className="aud-title">Well-Managed, Well-Maintained</div>
              </div>
              <div className="aud-list">
                <div className="aud-point"><h4>Quality Properties</h4><p>Every home meets compliance standards before you move in. Regular inspections maintain standards throughout.</p></div>
                <div className="aud-point"><h4>Responsive Maintenance</h4><p>Report issues 24/7. Emergency repairs within hours, routine maintenance within agreed SLAs.</p></div>
                <div className="aud-point"><h4>Fair &amp; Transparent</h4><p>Clear tenancy agreements, protected deposits, and professional inventory at check-in and check-out.</p></div>
                <div className="aud-point"><h4>London-Wide</h4><p>Properties across all 32 London boroughs and the Home Counties. Studios to large family homes.</p></div>
              </div>
              <Link to="/properties" className="aud-cta">Browse Properties →</Link>
            </div>
          </div>

          <div className="why-band">
            <div className="why-band-text">
              <em>"Not every property is the same — and neither is our approach."</em> We tailor our service to the property type, the landlord's goals, and the tenant profile.
            </div>
            <Link to="/contact" className="why-band-cta">Speak to Our Team</Link>
          </div>
        </div>
      </section>

      {/* ═══ OUR STORY ═══ */}
      <section className="story">
        <div className="story-inner">
          <div className="story-visual">
            <div
              className="story-img story-img-1"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1000&q=80&auto=format&fit=crop')" }}
            />
            <div
              className="story-img story-img-2"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=900&q=80&auto=format&fit=crop')" }}
            />
            <div className="story-badge">
              <div className="story-badge-num">7+</div>
              <div className="story-badge-label">Years Managing London Property</div>
            </div>
          </div>

          <div className="story-content">
            <div className="story-eyebrow">
              <span className="story-eyebrow-line"></span>
              <span>Our Story</span>
            </div>
            <h2>Built for Landlords Who Need <em>More Than a Generalist</em></h2>
            <p>
              Founded in 2018 by Sunesh Koshy, Faith &amp; Co was built to fill a clear gap in the London lettings market:
              specialist, compliance-led property management for HMOs, care sector properties, and multi-unit portfolios.
            </p>
            <p>
              From a single office in Southall, we now manage over 500 properties across all 32 London boroughs and the
              surrounding Home Counties — working with private landlords, council housing teams, care providers, and
              institutional investors.
            </p>
            <div className="story-sign">
              <div>
                <div className="story-sign-name">Sunesh Koshy</div>
                <div className="story-sign-role">Founder &amp; Managing Director</div>
              </div>
              <Link to="/about-us/our-story" className="story-link">
                Read Our Story
                <Arrow />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ AREAS WE COVER ═══ */}
      <section className="areas">
        <div className="areas-inner">
          <div className="areas-head">
            <div className="areas-eyebrow">
              <span className="areas-eyebrow-line"></span>
              <span>Coverage</span>
              <span className="areas-eyebrow-line"></span>
            </div>
            <h2>Areas We <em>Cover</em></h2>
            <p className="areas-lede">
              All 32 London boroughs and key Home Counties. From central London to the commuter belt,
              we let and manage properties wherever the demand is strongest.
            </p>
          </div>

          <div className="areas-grid">
            <div className="area-region">
              <div className="area-region-head">West</div>
              <div className="area-region-tag">Core Territory</div>
              <ul className="area-list">
                <li>Ealing</li>
                <li>Hounslow</li>
                <li>Hillingdon</li>
                <li>Harrow</li>
                <li>Brent</li>
                <li>Hammersmith</li>
              </ul>
            </div>
            <div className="area-region">
              <div className="area-region-head">North</div>
              <div className="area-region-tag">Strong Coverage</div>
              <ul className="area-list">
                <li>Barnet</li>
                <li>Enfield</li>
                <li>Haringey</li>
                <li>Camden</li>
                <li>Islington</li>
                <li>Waltham Forest</li>
              </ul>
            </div>
            <div className="area-region">
              <div className="area-region-head">East</div>
              <div className="area-region-tag">Growing Fast</div>
              <ul className="area-list">
                <li>Newham</li>
                <li>Tower Hamlets</li>
                <li>Redbridge</li>
                <li>Barking &amp; Dag.</li>
                <li>Havering</li>
                <li>Hackney</li>
              </ul>
            </div>
            <div className="area-region">
              <div className="area-region-head">South</div>
              <div className="area-region-tag">Active Coverage</div>
              <ul className="area-list">
                <li>Croydon</li>
                <li>Lewisham</li>
                <li>Southwark</li>
                <li>Lambeth</li>
                <li>Greenwich</li>
                <li>Bromley</li>
              </ul>
            </div>
            <div className="area-region">
              <div className="area-region-head">Central</div>
              <div className="area-region-tag">Premium Market</div>
              <ul className="area-list">
                <li>Westminster</li>
                <li>Kensington &amp; Chelsea</li>
                <li>City of London</li>
                <li>Wandsworth</li>
                <li>Richmond</li>
                <li>Kingston</li>
              </ul>
            </div>
          </div>

          <div className="areas-extra">
            <div className="areas-extra-cell">
              <h4>Beyond London — The Home Counties</h4>
              <p>
                Our reach extends beyond the M25 into the commuter belt. We manage properties
                for landlords and supply accommodation for councils in the surrounding counties.
              </p>
              <div className="ae-counties">
                Essex · Hertfordshire · Surrey · Kent · Berkshire · Buckinghamshire
              </div>
            </div>
            <div className="areas-extra-cell">
              <h4>Expanding Into New Areas?</h4>
              <p>
                If you own property outside our listed areas, contact us. We regularly expand
                our coverage based on landlord demand and operator requirements.
              </p>
            </div>
          </div>

          <div className="areas-band">
            <p>
              <em>Not sure if we cover your area?</em> Get in touch — we'll confirm
              coverage and give you a free rental valuation within 24 hours.
            </p>
            <Link to="/landlords/free-valuation">Request a Valuation</Link>
          </div>
        </div>
      </section>

      {/* ═══ TESTIMONIALS — MARQUEE ═══ */}
      <section className="testi">
        <div className="testi-inner">
          <div className="testi-head">
            <div className="testi-eyebrow">
              <span className="testi-eyebrow-line"></span>
              <span>Client Testimonials</span>
              <span className="testi-eyebrow-line"></span>
            </div>
            <h2>Trusted by Landlords, Operators &amp; <em>Tenants</em></h2>
          </div>
        </div>

        {/* Row 1 — scrolls left */}
        <div className="testi-marquee">
          <div className="testi-track">
            {[...testimonials, ...testimonials].map((t, i) => (
              <div className="tcard" key={`r1-${i}`}>
                <div className="tcard-stars">
                  <Star /><Star /><Star /><Star /><Star />
                </div>
                <div className="tcard-text">{t.text}</div>
                <div className="tcard-author">
                  <div className="tcard-avatar">{t.initials}</div>
                  <div>
                    <div className="tcard-name">{t.author}</div>
                    <div className="tcard-role">{t.role}</div>
                  </div>
                  <span className={`tcard-tag ${t.tagClass}`}>{t.tag}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 — scrolls right (reversed) */}
        <div className="testi-marquee">
          <div className="testi-track reverse">
            {[...testimonials.slice().reverse(), ...testimonials.slice().reverse()].map((t, i) => (
              <div className="tcard" key={`r2-${i}`}>
                <div className="tcard-stars">
                  <Star /><Star /><Star /><Star /><Star />
                </div>
                <div className="tcard-text">{t.text}</div>
                <div className="tcard-author">
                  <div className="tcard-avatar">{t.initials}</div>
                  <div>
                    <div className="tcard-name">{t.author}</div>
                    <div className="tcard-role">{t.role}</div>
                  </div>
                  <span className={`tcard-tag ${t.tagClass}`}>{t.tag}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trust stats */}
        <div className="testi-trust">
          <div className="testi-trust-item">
            <div className="testi-trust-num">4.9★</div>
            <div className="testi-trust-label">Google Reviews</div>
          </div>
          <div className="testi-trust-item">
            <div className="testi-trust-num">500+</div>
            <div className="testi-trust-label">Properties Managed</div>
          </div>
          <div className="testi-trust-item">
            <div className="testi-trust-num">99%</div>
            <div className="testi-trust-label">Landlord Retention</div>
          </div>
          <div className="testi-trust-item">
            <div className="testi-trust-num">7+</div>
            <div className="testi-trust-label">Years Operating</div>
          </div>
        </div>
      </section>

      {/* ═══ NEWS & MARKET UPDATES ═══ */}
      <section className="news">
        <div className="news-inner">
          <div className="news-head">
            <div className="news-head-left">
              <div className="news-eyebrow">
                <span className="news-eyebrow-line"></span>
                <span>Insights</span>
              </div>
              <h2>News &amp; Market <em>Updates</em></h2>
            </div>
            <Link to="/about-us/resources-and-guides" className="news-viewall">
              View All
              <Arrow />
            </Link>
          </div>

          <div className="news-grid">
            {newsItems.map((item, idx) => (
              <Link to="/about-us/resources-and-guides" className="news-card" key={idx}>
                <div className="news-img" style={{ backgroundImage: `url('${item.image}')` }}>
                  <span className="news-tag">{item.tag}</span>
                </div>
                <div className="news-body">
                  <div className="news-date">{item.date}</div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                  <div className="news-readmore">
                    Read More
                    <svg viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;