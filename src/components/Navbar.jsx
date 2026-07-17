import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const ChevronDown = () => (
  <svg viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg>
);

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(null);
  const navigate = useNavigate();
  const navRef = useRef(null);

  // Close all desktop dropdowns
  const closeAll = useCallback(() => {
    setOpenMenu(null);
  }, []);

  // Toggle a specific dropdown
  const toggle = useCallback((id) => {
    setOpenMenu(prev => prev === id ? null : id);
  }, []);

  // Toggle mobile drawer
  const toggleDrawer = useCallback(() => {
    setDrawerOpen(prev => !prev);
    if (!drawerOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [drawerOpen]);

  const closeDrawer = useCallback(() => {
    setDrawerOpen(false);
    document.body.style.overflow = '';
  }, []);

  // Toggle mobile accordion
  const dToggle = useCallback((idx) => {
    setMobileOpen(prev => prev === idx ? null : idx);
  }, []);

  // Navigate and close everything
  const go = useCallback((path) => {
    closeAll();
    closeDrawer();
    setMobileOpen(null);
    navigate(path);
  }, [closeAll, closeDrawer, navigate]);

  // Click outside to close dropdowns
  useEffect(() => {
    const handler = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        closeAll();
      }
    };
    document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  }, [closeAll]);

  // Close drawer on route change
  useEffect(() => {
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <>
      {/* TOPBAR */}
      <div className="topbar">
        <div className="tb-left">
          <span>Mon–Fri 9:00 – 18:30</span>
          <span>Greater London &amp; Home Counties</span>
        </div>
        <div className="tb-right">
          <a href="tel:02085741700" className="tel">020 8574 1700</a>
          <a href="mailto:info@faithandco.co.uk">info@faithandco.co.uk</a>
        </div>
      </div>

      {/* NAV */}
      <nav className="fc-nav" ref={navRef}>
        <div className="nav-inner">
          <Link to="/" className="fc-logo" onClick={() => go('/')}>
            Faith <em>&amp;</em> Co
          </Link>

          <div className="links">

            {/* ABOUT dropdown */}
            <div className={`nl${openMenu === 'about' ? ' open' : ''}`}>
              <button className="nl-btn" onClick={() => toggle('about')}>
                About <ChevronDown />
              </button>
              <div className="sdrop">
                <Link to="/about-us/why-choose-us" className="sdrop-item" onClick={() => go('/about-us/why-choose-us')}>Why Choose Faith &amp; Co</Link>
                <Link to="/about-us/our-story" className="sdrop-item" onClick={() => go('/about-us/our-story')}>Our Story</Link>
                <Link to="/about-us/areas-we-cover" className="sdrop-item" onClick={() => go('/about-us/areas-we-cover')}>Areas We Cover</Link>
                <div className="sdrop-divider"></div>
                <Link to="/about-us/resources-and-guides" className="sdrop-item" onClick={() => go('/about-us/resources-and-guides')}>Guides &amp; Resources</Link>
              </div>
            </div>

            {/* WHAT WE DO — mega menu */}
            <div className={`nl${openMenu === 'wwd' ? ' open' : ''}`}>
              <button className="nl-btn" onClick={() => toggle('wwd')}>
                What We Do <ChevronDown />
              </button>
              <div className="mega">
                <div className="mega-wrap">

                  <div className="m-left">
                    <div className="m-col-head">Residential Lettings <em>&amp;</em> Management</div>
                    <div className="m-col-rule"></div>

                    <div className="m-section">Service Tiers</div>
                    <Link to="/services/residential-letting" className="m-item" onClick={() => go('/services/residential-letting')}><span className="m-num">01</span><span className="m-label">Let Only</span></Link>
                    <Link to="/services/property-management" className="m-item" onClick={() => go('/services/property-management')}><span className="m-num">02</span><span className="m-label">Rent Collection</span></Link>
                    <Link to="/services/property-management" className="m-item" onClick={() => go('/services/property-management')}><span className="m-num">03</span><span className="m-label">Fully Managed</span></Link>
                    <Link to="/guaranteed-rent" className="m-item" onClick={() => go('/guaranteed-rent')}><span className="m-num">04</span><span className="m-label">Guaranteed Rent</span></Link>

                    <div className="m-divider"></div>
                    <div className="m-section">Bespoke Landlord Services</div>
                    <Link to="/services/hmo-management" className="m-item" onClick={() => go('/services/hmo-management')}><span className="m-num">05</span><span className="m-label">HMO Letting &amp; Management</span></Link>
                    <Link to="/services/portfolio-management" className="m-item" onClick={() => go('/services/portfolio-management')}><span className="m-num">06</span><span className="m-label">Compliance &amp; Licensing</span></Link>
                    <Link to="/services/portfolio-management" className="m-item" onClick={() => go('/services/portfolio-management')}><span className="m-num">07</span><span className="m-label">Portfolio Management</span></Link>
                  </div>

                  <div className="m-right">
                    <div className="m-col-head">Specialist Letting <em>Services</em></div>
                    <div className="m-col-rule"></div>
                    <div className="m-right-inner">

                      <div className="spec-col">
                        <div className="s-head">Care &amp; Social Sector</div>
                        <div className="s-rule"></div>
                        <div className="s-section">Children's Services</div>
                        <Link to="/services/care-sector-lettings" className="s-item" onClick={() => go('/services/care-sector-lettings')}><span className="s-dash"></span><span className="s-label">Children's Home Properties <span className="s-badge b-c2">C2</span></span></Link>
                        <Link to="/services/supported-living" className="s-item" onClick={() => go('/services/supported-living')}><span className="s-dash"></span><span className="s-label">Supported Accommodation 16–17 <span className="s-badge b-hmo">HMO</span></span></Link>
                        <Link to="/services/care-sector-lettings" className="s-item" onClick={() => go('/services/care-sector-lettings')}><span className="s-dash"></span><span className="s-label">Semi-Independent / Step-Down <span className="s-badge b-c3">C3</span></span></Link>
                        <div className="s-divider"></div>
                        <div className="s-section">Adult Social Care</div>
                        <Link to="/services/supported-living" className="s-item" onClick={() => go('/services/supported-living')}><span className="s-dash"></span><span className="s-label">Supported Living <span className="s-badge b-c3">C3</span></span></Link>
                        <Link to="/services/care-sector-lettings" className="s-item" onClick={() => go('/services/care-sector-lettings')}><span className="s-dash"></span><span className="s-label">Adult Residential Care Homes <span className="s-badge b-c2">C2</span></span></Link>
                        <Link to="/services/care-sector-lettings" className="s-item" onClick={() => go('/services/care-sector-lettings')}><span className="s-dash"></span><span className="s-label">Mental Health Step-Down <span className="s-badge b-c2">C2</span></span></Link>
                        <Link to="/services/care-sector-lettings" className="s-item" onClick={() => go('/services/care-sector-lettings')}><span className="s-dash"></span><span className="s-label">Learning Disability &amp; Autism <span className="s-badge b-c2">C2</span></span></Link>
                        <Link to="/services/care-sector-lettings" className="s-item" onClick={() => go('/services/care-sector-lettings')}><span className="s-dash"></span><span className="s-label">Complex Needs &amp; Intensive Support <span className="s-badge b-sg">SG</span></span></Link>
                      </div>

                      <div className="spec-col">
                        <div className="s-head">Councils, Operators &amp; Investors</div>
                        <div className="s-rule"></div>
                        <div className="s-section">Councils &amp; Operators</div>
                        <Link to="/services/council-accommodation" className="s-item" onClick={() => go('/services/council-accommodation')}><span className="s-dash"></span><span className="s-label">Council &amp; Temporary Accommodation</span></Link>
                        <Link to="/services/hmo-management" className="s-item" onClick={() => go('/services/hmo-management')}><span className="s-dash"></span><span className="s-label">Exempt Accommodation <span className="s-badge b-hmo">HMO</span></span></Link>
                        <Link to="/services/council-accommodation" className="s-item" onClick={() => go('/services/council-accommodation')}><span className="s-dash"></span><span className="s-label">Emergency Placement Properties</span></Link>
                        <Link to="/services/council-accommodation" className="s-item" onClick={() => go('/services/council-accommodation')}><span className="s-dash"></span><span className="s-label">Move-On &amp; Resettlement Housing</span></Link>
                        <div className="s-divider"></div>
                        <div className="s-section">Operator &amp; Block Letting</div>
                        <Link to="/services/serviced-accommodation" className="s-item" onClick={() => go('/services/serviced-accommodation')}><span className="s-dash"></span><span className="s-label">SA Operator Letting</span></Link>
                        <Link to="/services/serviced-accommodation" className="s-item" onClick={() => go('/services/serviced-accommodation')}><span className="s-dash"></span><span className="s-label">Whole Block Let</span></Link>
                        <Link to="/services/company-corporate-lets" className="s-item" onClick={() => go('/services/company-corporate-lets')}><span className="s-dash"></span><span className="s-label">Corporate &amp; Company Lets</span></Link>
                        <Link to="/services/serviced-accommodation/contractor" className="s-item" onClick={() => go('/services/serviced-accommodation/contractor')}><span className="s-dash"></span><span className="s-label">Contractor Accommodation</span></Link>
                        <div className="s-divider"></div>
                        <div className="s-section">Investors</div>
                        <Link to="/services/portfolio-management" className="s-item" onClick={() => go('/services/portfolio-management')}><span className="s-dash"></span><span className="s-label">Investor Services</span></Link>
                        <Link to="/services/c2-licensed-properties" className="s-item" onClick={() => go('/services/c2-licensed-properties')}><span className="s-dash"></span><span className="s-label">C2 Licensed Properties <span className="s-badge b-c2">C2</span></span></Link>
                      </div>

                    </div>
                    <div className="m-footer">
                      <span className="m-note">Faith &amp; Co supplies and lets properties — we do not provide care services.</span>
                      <div className="m-footer-links">
                        <Link to="/services" className="m-footer-link" onClick={() => go('/services')}>All Services</Link>
                        <Link to="/contact" className="m-footer-link" onClick={() => go('/contact')}>Speak to the Team →</Link>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            {/* LANDLORDS dropdown */}
            <div className={`nl${openMenu === 'land' ? ' open' : ''}`}>
              <button className="nl-btn" onClick={() => toggle('land')}>
                Landlords <ChevronDown />
              </button>
              <div className="sdrop">
                <Link to="/landlords/let-with-us" className="sdrop-item" onClick={() => go('/landlords/let-with-us')}>Let With Faith &amp; Co</Link>
                <Link to="/landlords/free-valuation" className="sdrop-item" onClick={() => go('/landlords/free-valuation')}>Free Rental Valuation</Link>
                <Link to="/landlords/register" className="sdrop-item" onClick={() => go('/landlords/register')}>Register as a Landlord</Link>
                <div className="sdrop-divider"></div>
                <Link to="/landlords/guide-to-letting" className="sdrop-item" onClick={() => go('/landlords/guide-to-letting')}>Guide to Letting</Link>
                <Link to="/landlords/hmo-licensing-guide" className="sdrop-item" onClick={() => go('/landlords/hmo-licensing-guide')}>HMO Licensing Guide</Link>
                <Link to="/landlords/maintenance-guide" className="sdrop-item" onClick={() => go('/landlords/maintenance-guide')}>Maintenance &amp; Repairs</Link>
                <div className="sdrop-divider"></div>
                <Link to="/faq" className="sdrop-item" onClick={() => go('/faq')}>Landlord FAQ</Link>
              </div>
            </div>

            {/* PROPERTIES dropdown */}
            <div className={`nl${openMenu === 'prop' ? ' open' : ''}`}>
              <button className="nl-btn" onClick={() => toggle('prop')}>
                Properties <ChevronDown />
              </button>
              <div className="sdrop">
                <Link to="/properties" className="sdrop-item" onClick={() => go('/properties')}>Available Properties</Link>
                <Link to="/services/c2-licensed-properties" className="sdrop-item" onClick={() => go('/services/c2-licensed-properties')}>C2 Properties Available Now</Link>
              </div>
            </div>

          </div>

          <div className="nav-right-fc">
            <Link to="/contact" className="fc-nav-link" onClick={() => go('/contact')}>Contact</Link>
            <Link to="/landlords/free-valuation" className="nav-cta" onClick={() => go('/landlords/free-valuation')}>Free Valuation</Link>
            <button
              className={`burger${drawerOpen ? ' open' : ''}`}
              onClick={toggleDrawer}
              aria-label="Menu"
            >
              <span></span><span></span><span></span>
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE DRAWER */}
      <div className={`drawer${drawerOpen ? ' open' : ''}`}>
        <div className="drawer-head">
          <span className="drawer-logo">Faith <em>&amp;</em> Co</span>
          <button className="drawer-close" onClick={closeDrawer} aria-label="Close">&times;</button>
        </div>
        <div className="drawer-body">

          {/* About */}
          <div className={`dgroup${mobileOpen === 0 ? ' open' : ''}`}>
            <button className="dgroup-head" onClick={() => dToggle(0)}>
              About<ChevronDown />
            </button>
            <div className="dsub">
              <Link to="/about-us/why-choose-us" onClick={() => go('/about-us/why-choose-us')}>Why Choose Faith &amp; Co</Link>
              <Link to="/about-us/our-story" onClick={() => go('/about-us/our-story')}>Our Story</Link>
              <Link to="/about-us/areas-we-cover" onClick={() => go('/about-us/areas-we-cover')}>Areas We Cover</Link>
              <Link to="/about-us/resources-and-guides" onClick={() => go('/about-us/resources-and-guides')}>Guides &amp; Resources</Link>
            </div>
          </div>

          {/* What We Do */}
          <div className={`dgroup${mobileOpen === 1 ? ' open' : ''}`}>
            <button className="dgroup-head" onClick={() => dToggle(1)}>
              What We Do<ChevronDown />
            </button>
            <div className="dsub">
              <div className="dsub-label">Residential Lettings &amp; Management</div>
              <Link to="/services/residential-letting" onClick={() => go('/services/residential-letting')}>Let Only</Link>
              <Link to="/services/property-management" onClick={() => go('/services/property-management')}>Rent Collection</Link>
              <Link to="/services/property-management" onClick={() => go('/services/property-management')}>Fully Managed</Link>
              <Link to="/guaranteed-rent" onClick={() => go('/guaranteed-rent')}>Guaranteed Rent</Link>
              <Link to="/services/hmo-management" onClick={() => go('/services/hmo-management')}>HMO Letting &amp; Management</Link>
              <Link to="/services/portfolio-management" onClick={() => go('/services/portfolio-management')}>Portfolio Management</Link>
              <div className="dsub-label">Specialist Letting Services</div>
              <Link to="/services/care-sector-lettings" onClick={() => go('/services/care-sector-lettings')}>Children's Home Properties</Link>
              <Link to="/services/supported-living" onClick={() => go('/services/supported-living')}>Supported Accommodation 16–17</Link>
              <Link to="/services/supported-living" onClick={() => go('/services/supported-living')}>Supported Living</Link>
              <Link to="/services/care-sector-lettings" onClick={() => go('/services/care-sector-lettings')}>Adult Residential Care Homes</Link>
              <Link to="/services/company-corporate-lets" onClick={() => go('/services/company-corporate-lets')}>Corporate &amp; Company Lets</Link>
              <Link to="/services/portfolio-management" onClick={() => go('/services/portfolio-management')}>Investor Services</Link>
              <Link to="/services" onClick={() => go('/services')}>View All Services →</Link>
            </div>
          </div>

          {/* Landlords */}
          <div className={`dgroup${mobileOpen === 2 ? ' open' : ''}`}>
            <button className="dgroup-head" onClick={() => dToggle(2)}>
              Landlords<ChevronDown />
            </button>
            <div className="dsub">
              <Link to="/landlords/let-with-us" onClick={() => go('/landlords/let-with-us')}>Let With Faith &amp; Co</Link>
              <Link to="/landlords/free-valuation" onClick={() => go('/landlords/free-valuation')}>Free Rental Valuation</Link>
              <Link to="/landlords/register" onClick={() => go('/landlords/register')}>Register as a Landlord</Link>
              <Link to="/landlords/guide-to-letting" onClick={() => go('/landlords/guide-to-letting')}>Guide to Letting</Link>
              <Link to="/landlords/hmo-licensing-guide" onClick={() => go('/landlords/hmo-licensing-guide')}>HMO Licensing Guide</Link>
              <Link to="/faq" onClick={() => go('/faq')}>Landlord FAQ</Link>
            </div>
          </div>

          {/* Properties */}
          <div className={`dgroup${mobileOpen === 3 ? ' open' : ''}`}>
            <button className="dgroup-head" onClick={() => dToggle(3)}>
              Properties<ChevronDown />
            </button>
            <div className="dsub">
              <Link to="/properties" onClick={() => go('/properties')}>Available Properties</Link>
              <Link to="/services/c2-licensed-properties" onClick={() => go('/services/c2-licensed-properties')}>C2 Properties Available Now</Link>
            </div>
          </div>

          {/* Contact - solo */}
          <div className="dgroup">
            <Link to="/contact" className="dgroup-head solo" style={{ display: 'block' }} onClick={() => go('/contact')}>Contact</Link>
          </div>

          <Link to="/landlords/free-valuation" className="drawer-cta" onClick={() => go('/landlords/free-valuation')}>Book a Free Valuation</Link>
          <div className="drawer-contact">
            <a href="tel:02085741700">020 8574 1700</a><br />
            <a href="mailto:info@faithandco.co.uk">info@faithandco.co.uk</a>
          </div>
        </div>
      </div>

      {/* OVERLAY */}
      <div
        className={`fc-overlay${(openMenu || drawerOpen) ? ' show' : ''}`}
        onClick={() => { closeAll(); closeDrawer(); }}
      />
    </>
  );
};

export default Navbar;
