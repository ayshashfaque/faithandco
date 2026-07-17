import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, CheckCircle2, Heart, Building2, Key, Award, FileText, Home as HomeIcon, Plus, Minus, Quote, Shield, Users } from 'lucide-react';

const Home = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    // Delay the scroll observer by 2 seconds to ensure initial mobile paint and native autoplay kick in flawlessly
    const timer = setTimeout(() => {
      if (!videoRef.current) return;
      
      const observer = new IntersectionObserver(
        ([entry]) => {
          const video = videoRef.current;
          if (!video) return;
          
          if (entry.isIntersecting) {
            // Only trigger play if user scrolls deep and comes back
            video.play().catch(e => console.log('Native play override:', e));
          } else {
            video.pause();
          }
        },
        { threshold: 0.1 } // Only pause when almost fully out of view
      );
      
      observer.observe(videoRef.current);
      
      return () => {
        observer.disconnect();
      };
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // Services data 
  const services = [
    { title: 'HMO Management', desc: 'Specialist HMO letting and management. Vetted tenants, full licensing compliance, optional guaranteed rent. Higher yields, truly hands‑off.', icon: <Building2 size={24} className="text-[#DAA520]" />, path: '/services/hmo-management' },
    { title: 'Property Management', desc: 'Hands‑off full management for single lets and family homes. Tenant‑find only or full management with optional guaranteed rent.', icon: <HomeIcon size={24} className="text-[#DAA520]" />, path: '/services/property-management' },
    { title: 'Residential Letting', desc: 'Professional tenant sourcing, thorough referencing, and placement across Greater London. Tenant‑find only or full management.', icon: <Key size={24} className="text-[#DAA520]" />, path: '/services/residential-letting' },
    { title: 'Portfolio Management', desc: 'One dedicated contact managing your full London portfolio. Consolidated monthly reporting. From 2 properties upwards.', icon: <Award size={24} className="text-[#DAA520]" />, path: '/services/portfolio-management' },
    { title: 'Care Sector Lettings', desc: 'C2‑licensed and HMO‑licensed properties for children\'s homes, supported living providers, and CQC‑regulated organisations.', icon: <Heart size={24} className="text-[#DAA520]" />, path: '/services/care-sector-lettings' },
    { title: 'Council & Temporary Accommodation', desc: 'Managed properties for London borough councils under PSL, PLA, and nightly paid contracts.', icon: <Building2 size={24} className="text-[#DAA520]" />, path: '/services/council-accommodation' },
    { title: 'Serviced Accommodation', desc: 'Corporate apartments, contractor housing, and extended‑stay management across London.', icon: <FileText size={24} className="text-[#DAA520]" />, path: '/services/serviced-accommodation' },
    { title: 'Company & Corporate Lets', desc: 'Company AST arrangements, relocation housing, key worker accommodation, and corporate lets.', icon: <FileText size={24} className="text-[#DAA520]" />, path: '/services/company-corporate-lets' }
  ];

  // Testimonials state
  const [expandedTestimonials, setExpandedTestimonials] = useState({});
  const toggleTestimonial = (idx) => {
    setExpandedTestimonials(prev => ({ ...prev, [idx]: !prev[idx] }));
  };

  const testimonials = [
    {
      author: "Praveen Varghese",
      quote: "One of the best Estate Agents I have ever dealt with. They are very professional, very proactive in their communication and very approachable. They are in my top list when it comes to deal with estate agency. This is the one of the best agencies that will look after the landlords and the tenants very well. They are very knowledgeable in the field and provided best service."
    },
    {
      author: "Dani Rajan",
      quote: "Faith and Co. was fantastic! They helped us to find a property and made the process so much easier. Highly recommend!"
    },
    {
      author: "Joel Thomas",
      quote: "I recently rented a property through Faith & Co Estate Agent, and I couldn't be more pleased with the experience. From start to finish, the entire process was smooth, professional, and incredibly efficient. Firstly, the staff at Faith & Co were exceptional. They were always friendly, approachable, and ready to answer any questions I had. Their communication was top-notch, keeping me informed at every step, which made the whole experience stress-free. The property itself was exactly as advertised. It was clean, well-maintained, and all the necessary amenities were in perfect working order. It's clear that Faith & Co takes great care in managing their properties and ensuring they meet a high standard for their tenants. What stood out the most was their attention to detail and customer service. The viewing process was straightforward, and they accommodated my schedule perfectly. Once I decided on the property, the paperwork was handled efficiently, with everything clearly explained. I highly recommend Faith & Co Estate Agent to anyone looking to rent a property. Their professionalism, dedication to quality, and excellent customer service make them a standout choice. Thank you, Faith & Co, for making my renting experience so positive!"
    },
    {
      author: "Kirandeep Sandhu",
      quote: "It was a pleasure working with Faith and Co Estates - Sunesh. It really did take 2 weeks to let my HMO licenced property however it was really worth waiting as I got an extremely good tenant with extremely high rent. I would suggest all the landlords to be patient and trust the process of Faith & Co Estates, they don't blag and are trustworthy."
    },
    {
      author: "Patrick",
      quote: "I became frustrated after viewing numerous properties with different estate agents due to a lack of transparency and communication. I met Mr.Sunesh Koshy through a friend and eventually acquired a property. To me, communication and honesty are just as vital as feeling heard and valued. I received regular updates and assistance with any issues that arose .He never hesitated to answer my phone call and addressed my needs seriously. I'm writing this review to share my experience and help others avoid stressful and time-consuming interactions with other agents. I wish Faith and Co the very best and encourage them to continue their helpful job."
    }
  ];

  // FAQ state
  const [openFaq, setOpenFaq] = useState(null);
  const toggleFaq = (i) => setOpenFaq(openFaq === i ? null : i);

  const faqs = [
    {
      q: 'What is Guaranteed Rent?',
      a: 'Faith & Co pays you a fixed monthly income even if the property is vacant or tenants fall behind. We lease your property directly, take on all risk and management, and pay you reliably every month. No voids, no arrears, no involvement required from you.'
    },
    {
      q: 'Which areas do you cover?',
      a: 'We cover Greater London - all 32 boroughs - and the surrounding Home Counties including Essex, Hertfordshire, Surrey, Kent, Berkshire, and Buckinghamshire. Contact us about any specific location.'
    },
    {
      q: 'Do you manage HMOs?',
      a: 'Yes - HMO management is one of our core services. We manage mandatory HMO licensing and C2 licences, tenant sourcing, compliance, maintenance, and day-to-day management across London.'
    },
    {
      q: 'Do you work with councils?',
      a: 'Yes. We source and manage properties for London borough councils under PSL, PLA, and nightly paid temporary accommodation contracts across multiple London boroughs.'
    },
    {
      q: 'Are there hidden fees?',
      a: 'No. For Guaranteed Rent, the income we agree is the income you receive. For management services, all fees are agreed and transparent upfront. See our full fees on our Fees & Compliance page.'
    },
    {
      q: 'How quickly can you start?',
      a: 'Most properties are onboarded within two to three weeks. Contact us for a specific timescale.'
    }
  ];

  return (
    <div className="bg-[#0b1320] text-white min-h-screen pt-[80px] md:pt-[100px] selection:bg-[#DAA520] selection:text-black">

      {/* 1. HERO ANIMATION / VIDEO SECTION */}
      <section className="relative min-h-[85vh] flex flex-col justify-center items-center overflow-hidden py-20 px-6 md:px-12 bg-[#0b1320]">
        <video
          ref={videoRef}
          poster="/herofinal.png"
          autoPlay
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{ backgroundImage: 'url(/herofinal.png)', backgroundSize: 'cover', backgroundPosition: 'center', pointerEvents: 'none' }}
        >
          <source src="/loophero.mp4" type="video/mp4" />
        </video>
        <div className="relative z-10 max-w-[1000px] text-center space-y-6">
          <h1 className="text-5xl md:text-8xl font-headings italic font-bold tracking-wide text-white drop-shadow-xl">Faith & Co</h1>
          <h2 className="text-sm md:text-lg font-oswald font-semibold tracking-[0.2em] uppercase text-white drop-shadow-lg">SPECIALISED HMO AND SUPPORTED LIVING</h2>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-6">
            <a href="https://www.google.com/maps/search/123%20Main%20St%20London" target="_blank" rel="noopener noreferrer" className="bg-[#DAA520] hover:bg-[#B8860B] text-white font-bold text-[10px] uppercase tracking-[0.25em] px-8 py-4 flex items-center gap-2 transition-all duration-300 w-full sm:w-auto justify-center">
              VIEW PROPERTIES <ArrowRight size={14} />
            </a>
            <Link to="/contact" className="bg-[#1f365a] hover:bg-[#1f4a7a] text-white font-bold text-[10px] uppercase tracking-[0.25em] px-8 py-4 flex items-center gap-2 transition-all duration-300 w-full sm:w-auto justify-center">
              CONTACT US
            </Link>
          </div>
        </div>
      </section>

      {/* 2. ABOUT US SECTION (THE IDENTITY LAYOUT) */}
      <section className="py-32 px-6 md:px-12 bg-white border-t border-b border-gray-200">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <Link to="/about-us" className="space-y-8 group cursor-pointer block">
            <div className="space-y-4">
              <span className="text-[#DAA520] font-mono font-bold uppercase tracking-[0.4em] text-[10px] block">About Faith & Co Estates</span>
              <h2 className="text-3xl md:text-5xl font-headings italic text-navy leading-tight">Property Management Done Right - Across London and the Home Counties</h2>
            </div>
            
            <div className="space-y-6 text-[13px] text-navy/80 leading-relaxed font-light tracking-wide">
              <p>
                Founded in 2018 by Sunesh Koshy, Faith & Co Estates is an independent estate and letting agency with a deep specialism in HMO management, supported living, and licensed property management across Greater London and the surrounding Home Counties. We were built to fill a clear gap in the market: specialist, compliance-led management for landlords who need more than a generalist agent can offer.
              </p>
              <p>
                We work with private landlords, London borough councils, care-sector organisations, supported living providers, and housing associations - delivering compliant, well-managed properties and reliable rental income from central London out through the commuter belt.
              </p>
            </div>
          </Link>

          {/* Operational Capacity 4-Feature Cards Grid */}
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              {[
                { dept: 'HMO & C2 Licensed', tier: 'Full licensing compliance across all managed properties, as standard', icon: <Shield size={22} /> },
                { dept: 'No Void Periods', tier: 'Guaranteed rent with fixed monthly payments to landlords', icon: <CheckCircle2 size={22} /> },
                { dept: 'Council Approved', tier: 'Active procurement across multiple London boroughs', icon: <Users size={22} /> },
                { dept: 'Care Sector Experts', tier: "Supported living, children's homes, and C2 tenancy specialists", icon: <Building2 size={22} /> }
              ].map((item, i) => (
                <div key={i} className="flex flex-col justify-between p-6 md:p-8 bg-white border border-gray-100 rounded shadow-sm transition-all duration-300 hover:border-[#DAA520]/40 min-h-[160px] md:min-h-[180px]">
                  {/* SVG Roof */}
                  <div className="mb-3">
                    <svg width="36" height="22" viewBox="0 0 36 22" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <polygon points="18,1 35,12 1,12" fill="#DAA520" fillOpacity="0.15" stroke="#DAA520" strokeWidth="1.2"/>
                      <rect x="5" y="12" width="26" height="9" fill="none" stroke="#DAA520" strokeWidth="1.2" strokeOpacity="0.4"/>
                      <rect x="15" y="14" width="6" height="7" fill="#DAA520" fillOpacity="0.45"/>
                    </svg>
                  </div>
                  <div className="text-[#DAA520] mb-3">{item.icon}</div>
                  <div>
                    <h4 className="text-xs font-headings font-bold italic text-navy mb-1">{item.dept}</h4>
                    <p className="text-[10px] text-navy/60 tracking-wide font-light leading-relaxed">{item.tier}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 3. SERVICES GRID SECTION */}
      <section className="py-32 bg-[#0b1320]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="text-center mb-20 space-y-4">
            <span className="text-[#DAA520] font-mono text-[10px] uppercase tracking-[0.4em] block">Our Services</span>
            <h2 className="text-3xl md:text-5xl font-headings italic text-white">Everything We Offer Landlords & Institutions Across London</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <div key={idx} className="bg-[#0e1726] border border-white/10 rounded-lg p-6 flex flex-col justify-between min-h-[280px] transition-all duration-300 hover:scale-[1.02] hover:border-[#DAA520] group">
                <div>
                  <div className="mb-4 text-[#DAA520]">{service.icon}</div>
                  <h3 className="text-md font-headings italic font-bold mb-3 text-white">{service.title}</h3>
                  <p className="text-[11px] text-white/60 leading-relaxed tracking-wide font-light">{service.desc}</p>
                </div>
                <Link to={service.path} className="text-[#DAA520] font-mono text-[10px] uppercase tracking-widest flex items-center gap-1 mt-6 group-hover:underline">
                  Learn More <ArrowRight size={10} />
                </Link>
              </div>
            ))}

            {/* Guaranteed Rent Promo Highlight Card */}
            <div className="bg-[#1f365a] border border-white/10 rounded-lg p-6 flex flex-col justify-between min-h-[280px] transition-all duration-300 hover:scale-[1.02] hover:border-[#DAA520] group">
              <div>
                <div className="mb-4 text-[#DAA520]"><Key size={24} /></div>
                <h3 className="text-md font-headings italic font-bold mb-3 text-white">Guaranteed Rent Scheme</h3>
                <p className="text-[11px] text-white/80 leading-relaxed tracking-wide font-light">Fixed monthly income every month - void or occupied. We lease your property directly and pay you on time without missing payments.</p>
              </div>
              <Link to="/guaranteed-rent" className="text-[#DAA520] font-mono text-[10px] uppercase tracking-widest flex items-center gap-1 mt-6 group-hover:underline">
                Discover Guaranteed Rent <ArrowRight size={10} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. TESTIMONIALS SECTION */}
      <section className="py-32 bg-white border-t border-b border-gray-200">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="text-center mb-20 space-y-4">
            <span className="text-[#DAA520] font-mono text-[10px] uppercase tracking-[0.4em] block">Testimonials</span>
            <h2 className="text-3xl md:text-5xl font-headings italic text-navy">What Our Landlords & Partners Say</h2>
          </div>

          <div className="flex overflow-x-auto gap-6 pb-8 snap-x scrollbar-thin scrollbar-thumb-navy/10 justify-start xl:justify-center items-stretch">
            {testimonials.map((t, idx) => (
              <div key={idx} className="flex-shrink-0 w-full sm:w-[380px] bg-gray-50 border border-gray-200 rounded-lg p-8 flex flex-col justify-between snap-center relative">
                <div>
                  <span className="absolute top-4 right-6 text-5xl text-[#DAA520]/20 font-headings">“</span>
                  <p className={`text-navy/80 text-[11px] leading-relaxed tracking-wide font-light mb-4 whitespace-pre-line ${expandedTestimonials[idx] ? '' : 'line-clamp-4'}`}>
                    "{t.quote}"
                  </p>
                  {t.quote.length > 180 && (
                    <button onClick={() => toggleTestimonial(idx)} className="text-[#DAA520] text-[10px] uppercase tracking-wider font-bold underline mb-4 block hover:text-navy transition-colors">
                      {expandedTestimonials[idx] ? 'Show Less' : 'View More'}
                    </button>
                  )}
                </div>
                <div className="border-t border-gray-200 pt-4 mt-4">
                  <h4 className="text-[10px] font-mono uppercase tracking-wider text-[#DAA520] font-bold">{t.author}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FAQ SECTION */}
      <section className="py-32 max-w-[900px] mx-auto px-6 md:px-12 bg-[#0b1320]">
        <div className="text-center mb-20 space-y-4">
          <span className="text-[#DAA520] font-mono text-[10px] uppercase tracking-[0.4em] block">Questions & Answers</span>
          <h2 className="text-3xl md:text-5xl font-headings italic text-white">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border-b border-white/10 pb-4">
              <button onClick={() => toggleFaq(idx)} className="w-full flex justify-between items-center text-left py-4 hover:text-[#DAA520] transition-colors group">
                <h4 className="font-headings italic text-lg font-bold group-hover:translate-x-1 transition-transform duration-300 text-white group-hover:text-[#DAA520]">{faq.q}</h4>
                {openFaq === idx ? <Minus size={18} className="text-[#DAA520]" /> : <Plus size={18} className="text-[#DAA520]" />}
              </button>
              {openFaq === idx && (
                <div className="py-2 text-[11px] text-white/70 leading-relaxed tracking-wide font-light pb-4">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default Home;