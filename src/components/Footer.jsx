import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin } from 'lucide-react';

const Footer = () => {
  const socials = [
    { icon: <Facebook size={16} />, url: 'https://www.facebook.com/people/Faith-Co-Estates/61566760918518/' },
    { icon: <Linkedin size={16} />, url: 'https://www.linkedin.com/in/faith-and-co-estates-58938a316/' },
    { icon: <Instagram size={16} />, url: 'https://www.instagram.com/faithandcoestates' }
  ];

  return (
    <footer className="relative bg-navy pt-24 pb-10 overflow-hidden font-automobile selection:bg-bone selection:text-navy border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Brand & Contact */}
          <div className="space-y-6">
            <div className="flex flex-col items-start">
              <span className="font-headings text-2xl font-black italic text-bone tracking-widest">FAITH & CO.</span>
              <span className="font-automobile text-[8px] uppercase tracking-[0.4em] text-bone/60 font-bold relative top-[-4px]">Estates</span>
            </div>
            <p className="text-[10px] uppercase tracking-[0.25em] text-bone/50 leading-relaxed max-w-sm">
              Specialist estate and letting agents covering Greater London and the Home Counties. HMO management, guaranteed rent, supported living, council temporary accommodation, and full property management across all 32 London boroughs.
            </p>
            <div className="space-y-3 text-[10px] text-bone/70 tracking-wider">
              <div className="flex items-center gap-2">
                <Phone size={12} className="text-[#DAA520]" />
                <span>020 8574 1700</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={12} className="text-[#DAA520]" />
                <span>info@faithandco.co.uk</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin size={12} className="text-[#DAA520] shrink-0 mt-0.5" />
                <span>86A High Street, Southall, UB1 3DB</span>
              </div>
              <div className="text-[9px] text-bone/40">
                🕐 Mon–Fri 9:00–18:30
              </div>
            </div>
            <div className="flex gap-3 pt-2">
              {socials.map((social, i) => (
                <a 
                  key={i} 
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-8 h-8 border border-bone/10 flex items-center justify-center text-bone/40 hover:text-[#DAA520] hover:border-[#DAA520] transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Letting & Management */}
          <div>
            <h5 className="text-bone/30 font-bold uppercase tracking-[0.3em] text-[10px] mb-6 border-b border-white/5 pb-2">Letting & Management</h5>
            <ul className="space-y-3 text-bone/70 text-[10px] uppercase tracking-wider">
              <li><Link to="/guaranteed-rent" className="hover:text-[#DAA520] transition-colors">Guaranteed Rent</Link></li>
              <li><Link to="/services/hmo-management" className="hover:text-[#DAA520] transition-colors">HMO Management</Link></li>
              <li><Link to="/services/property-management" className="hover:text-[#DAA520] transition-colors">Property Management</Link></li>
              <li><Link to="/services/residential-letting" className="hover:text-[#DAA520] transition-colors">Residential Letting</Link></li>
              <li><Link to="/services/portfolio-management" className="hover:text-[#DAA520] transition-colors">Portfolio Management</Link></li>
            </ul>
          </div>

          {/* Column 3: Specialist Services */}
          <div>
            <h5 className="text-bone/30 font-bold uppercase tracking-[0.3em] text-[10px] mb-6 border-b border-white/5 pb-2">Specialist Services</h5>
            <ul className="space-y-3 text-bone/70 text-[10px] uppercase tracking-wider">
              <li><Link to="/services/care-sector-lettings" className="hover:text-[#DAA520] transition-colors">Care Sector Lettings</Link></li>
              <li><Link to="/services/council-accommodation" className="hover:text-[#DAA520] transition-colors">Council Temporary Accom.</Link></li>
              <li><Link to="/services/supported-living" className="hover:text-[#DAA520] transition-colors">Supported Living</Link></li>
              <li><Link to="/services/care-sector-lettings" className="hover:text-[#DAA520] transition-colors">C2 Licensed Properties</Link></li>
              <li><Link to="/services/serviced-accommodation" className="hover:text-[#DAA520] transition-colors">Serviced Accommodation</Link></li>
              <li><Link to="/services/company-corporate-lets" className="hover:text-[#DAA520] transition-colors">Company & Corporate Lets</Link></li>
            </ul>
          </div>

          {/* Column 4: Landlords & About */}
          <div>
            <h5 className="text-bone/30 font-bold uppercase tracking-[0.3em] text-[10px] mb-6 border-b border-white/5 pb-2">Landlords & About</h5>
            <ul className="space-y-3 text-bone/70 text-[10px] uppercase tracking-wider">
              <li><Link to="/landlords/let-with-us" className="hover:text-[#DAA520] transition-colors">Let With Faith & Co</Link></li>
              <li><Link to="/landlords/free-valuation" className="hover:text-[#DAA520] transition-colors">Free Rental Valuation</Link></li>
              <li><Link to="/landlords/register" className="hover:text-[#DAA520] transition-colors">Register as a Landlord</Link></li>
              <li><Link to="/landlords/hmo-licensing-guide" className="hover:text-[#DAA520] transition-colors">HMO Licensing Guide</Link></li>
              <li><Link to="/landlords/guide-to-letting" className="hover:text-[#DAA520] transition-colors">Guide to Letting</Link></li>
              <li><Link to="/about-us/why-choose-us" className="hover:text-[#DAA520] transition-colors">Why Choose Us</Link></li>
              <li><Link to="/about-us/our-story" className="hover:text-[#DAA520] transition-colors">Our Story</Link></li>
              <li><Link to="/about-us/areas-we-cover" className="hover:text-[#DAA520] transition-colors">Areas We Cover</Link></li>
              <li><Link to="/contact" className="hover:text-[#DAA520] transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>

        {/* Partner Logos */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-6">
          {[
            "logo1.png",
            "logo2.png",
            "logo3.png",
            "logo4.png",
            "logo5.png",
            "logo6.png",
            "logo7.png",
            "logo8.png"
          ].map((src, i) => (
            <img key={i} src={`/footer/${src}`} alt="Partner Logo" className="h-8 object-contain mx-auto" />
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-white/5 text-[9px] uppercase tracking-widest text-bone/30">
          <div className="flex flex-wrap items-center gap-2">
            <span>© Faith & Co Estates Ltd 2025</span>
            <span>|</span>
            <span>Company No. 11548231</span>
            <span>|</span>
            <span>Registered in England & Wales</span>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link to="/privacy-policy" className="hover:text-[#DAA520] transition-all">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-[#DAA520] transition-all">Terms of Service</Link>
            <Link to="/cookie-policy" className="hover:text-[#DAA520] transition-all">Cookie Policy</Link>
            <Link to="/fees" className="hover:text-[#DAA520] transition-all">Fees &amp; Compliance</Link>
            <Link to="/complaints" className="hover:text-[#DAA520] transition-all">Complaints Procedure</Link>
            <a href="https://www.instagram.com/intellex.web/" target="_blank" rel="noopener noreferrer" className="hover:text-[#DAA520] transition-all border-l border-white/20 pl-4 ml-2">Meet the developers</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
