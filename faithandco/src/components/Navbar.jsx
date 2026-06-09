import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Phone, Mail } from 'lucide-react';

const navData = [
  { type: 'link', label: 'Home', path: '/' },
  {
    type: 'dropdown',
    label: 'About Us',
    path: '/about-us',
    items: [
      { name: 'Why Choose Faith & Co', path: '/about-us/why-choose-us' },
      { name: 'Our Story', path: '/about-us/our-story' },
      { name: 'Resources & Guides', path: '/about-us/resources-and-guides' },
      { name: 'Areas We Cover', path: '/about-us/areas-we-cover' },
    ]
  },
  {
    type: 'dropdown',
    label: 'Our Services',
    path: '/services',
    items: [
      { name: 'HMO Management', path: '/services/hmo-management' },
      { name: 'Property Management', path: '/services/property-management' },
      { name: 'Residential Letting', path: '/services/residential-letting' },
      { name: 'Portfolio Management', path: '/services/portfolio-management' },
    ]
  },
  { type: 'link', label: 'Guaranteed Rent', path: '/guaranteed-rent' },
  {
    type: 'dropdown',
    label: 'Specialist Services',
    path: '/services/specialist',
    items: [
      { name: 'Care Sector Lettings', path: '/services/care-sector-lettings' },
      { name: 'Council & Temporary Accommodation', path: '/services/council-accommodation' },
      { name: 'Supported Living', path: '/services/supported-living' },
      { name: 'C2 Licensed Properties', path: '/services/c2-licensed-properties' },
    ]
  },
  {
    type: 'dropdown',
    label: 'Serviced Accommodation',
    path: '/services/serviced-accommodation',
    items: [
      { name: 'Corporate Accommodation', path: '/services/serviced-accommodation/corporate' },
      { name: 'Contractor Accommodation', path: '/services/serviced-accommodation/contractor' },
      { name: 'Short-Term Let Management', path: '/services/serviced-accommodation/short-term-lets' },
      { name: 'Company & Corporate Lets', path: '/services/company-corporate-lets' },
    ]
  },
  {
    type: 'dropdown',
    label: 'Landlords',
    path: '/landlords',
    items: [
      { name: 'Let With Faith & Co', path: '/landlords/let-with-us' },
      { name: 'Free Rental Valuation', path: '/landlords/free-valuation' },
      { name: 'Register as a Landlord', path: '/landlords/register' },
      { name: 'Guide to Letting', path: '/landlords/guide-to-letting' },
      { name: 'HMO Licensing Guide', path: '/landlords/hmo-licensing-guide' },
      { name: 'Maintenance & Repairs Guide', path: '/landlords/maintenance-guide' },
    ]
  },
  { type: 'link', label: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(null);
  const navigate = useNavigate();

  const handleNavClick = (path) => {
    setIsOpen(false);
    setActiveMenu(null);
    navigate(path);
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-[99999] flex flex-col font-automobile bg-white border-b border-gray-200">
      {/* TOP INFO BAR — desktop only */}
      <div className="hidden md:flex w-full bg-navy text-bone py-[3px] px-6 md:px-12 flex-row items-center justify-between text-[9px] tracking-wider uppercase font-semibold">
        <div className="flex items-center gap-4 text-bone/60">
          <span>Mon–Fri 9:00–18:30</span>
          <span>|</span>
          <span>Greater London &amp; the Home Counties</span>
        </div>
        <div className="flex items-center gap-3">
          <a href="https://www.facebook.com/people/Faith-Co-Estates/61566760918518/" target="_blank" rel="noopener noreferrer" className="hover:text-[#DAA520] transition-colors" aria-label="Facebook">
            <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"/></svg>
          </a>
          <a href="https://www.linkedin.com/in/faith-and-co-estates-58938a316/" target="_blank" rel="noopener noreferrer" className="hover:text-[#DAA520] transition-colors" aria-label="LinkedIn">
            <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
          </a>
          <a href="https://www.instagram.com/faithandcoestates" target="_blank" rel="noopener noreferrer" className="hover:text-[#DAA520] transition-colors" aria-label="Instagram">
            <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
          </a>
        </div>
        <div className="flex items-center gap-3 text-bone/80">
          <a href="tel:02085741700" className="flex items-center gap-1 hover:text-[#DAA520] transition-colors"><Phone size={9} />020 8574 1700</a>
          <span className="text-bone/20">|</span>
          <a href="mailto:info@faithandco.co.uk" className="flex items-center gap-1 hover:text-[#DAA520] transition-colors"><Mail size={9} />info@faithandco.co.uk</a>
        </div>
      </div>

      {/* MAIN NAV */}
      <nav className="w-full bg-white flex items-center justify-between px-4 md:px-8 py-0">
        <Link to="/" onClick={() => handleNavClick('/')} className="flex items-center nav-link group text-navy hover:text-[#DAA520] shrink-0">
          <img src="/logofinal.png" className="w-[120px] md:w-[140px] h-auto object-contain transition-transform duration-300 group-hover:scale-105" alt="Faith & Co" />
        </Link>

        {/* Desktop links */}
        <div className="hidden xl:flex items-center gap-5">
          {navData.map((menu, idx) => (
            <div key={menu.label} className="relative"
              onMouseEnter={() => menu.type === 'dropdown' ? setActiveMenu(idx) : null}
              onMouseLeave={() => setActiveMenu(null)}>
              {menu.type === 'link' ? (
                <button onClick={() => handleNavClick(menu.path)}
                  className="nav-link text-[10px] font-automobile uppercase tracking-[0.22em] text-navy/60 hover:text-navy transition-colors font-bold py-3">
                  {menu.label}
                </button>
              ) : (
                <button className="nav-link text-[10px] font-automobile uppercase tracking-[0.22em] text-navy/60 hover:text-navy transition-colors font-bold flex items-center gap-0.5 py-3">
                  {menu.label}
                  <ChevronDown size={10} className={`transition-transform duration-300 ${activeMenu === idx ? 'rotate-180' : ''}`} />
                </button>
              )}
              <AnimatePresence>
                {activeMenu === idx && menu.type === 'dropdown' && (
                  <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 6 }}
                    className="absolute top-full left-0 w-60 bg-bone border border-navy/10 p-3 shadow-2xl space-y-1 z-[99999]">
                    {menu.items.map((sub) => (
                      <Link key={sub.name} to={sub.path} onClick={() => handleNavClick(sub.path)}
                        className="nav-link block text-[9.5px] font-automobile uppercase tracking-[0.15em] text-navy/60 hover:text-navy transition-all py-2 border-b border-navy/5 last:border-0">
                        {sub.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
          <Link to="/landlords/free-valuation"
            className="bg-[#DAA520] hover:bg-[#B8860B] text-white font-bold text-[9.5px] uppercase tracking-[0.2em] py-2.5 px-5 transition-all duration-300 shadow-md whitespace-nowrap ml-2">
            Free Rental Valuation
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button onClick={() => setIsOpen(!isOpen)} className="nav-link xl:hidden text-navy p-2" aria-label="Toggle menu">
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ opacity: 0, x: '100%' }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 bg-bone xl:hidden z-[999999] flex flex-col p-6 overflow-y-auto">
            <div className="flex justify-between items-center mb-8">
              <img src="/logofinal.png" className="h-12 w-auto object-contain" alt="Logo" />
              <button onClick={() => setIsOpen(false)} aria-label="Close menu"><X size={26} /></button>
            </div>
            <div className="flex-1 flex flex-col gap-1">
              {navData.map((link, idx) => (
                <div key={link.label} className="border-b border-navy/5">
                  {link.type === 'link' ? (
                    <button onClick={() => handleNavClick(link.path)}
                      className="text-base font-headings text-navy hover:text-[#DAA520] transition-colors block w-full text-left py-3 px-2">
                      {link.label}
                    </button>
                  ) : (
                    <div>
                      <button
                        onClick={() => setMobileOpen(mobileOpen === idx ? null : idx)}
                        className="flex items-center justify-between w-full text-base font-headings text-navy hover:text-[#DAA520] transition-colors py-3 px-2">
                        {link.label}
                        <ChevronDown size={14} className={`transition-transform duration-300 ${mobileOpen === idx ? 'rotate-180' : ''}`} />
                      </button>
                      <AnimatePresence>
                        {mobileOpen === idx && (
                          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden pl-4 pb-2">
                            {link.items.map(sub => (
                              <Link key={sub.name} to={sub.path} onClick={() => { setIsOpen(false); setMobileOpen(null); }}
                                className="block text-[10px] font-automobile uppercase tracking-widest text-navy/60 hover:text-navy py-2">
                                {sub.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )}
                </div>
              ))}
              <Link to="/landlords/free-valuation" onClick={() => setIsOpen(false)}
                className="mt-4 bg-[#DAA520] hover:bg-[#B8860B] text-white font-bold text-center text-[10px] uppercase tracking-[0.2em] py-4 block">
                Free Rental Valuation
              </Link>
              <div className="mt-6 text-center space-y-1 text-[10px] text-navy/50 font-automobile uppercase tracking-widest">
                <div><a href="tel:02085741700" className="hover:text-navy">020 8574 1700</a></div>
                <div><a href="mailto:info@faithandco.co.uk" className="hover:text-navy">info@faithandco.co.uk</a></div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
