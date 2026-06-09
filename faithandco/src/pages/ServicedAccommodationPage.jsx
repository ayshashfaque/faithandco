import React from 'react';
import { Link } from 'react-router-dom';
import { Hotel, ShieldCheck, ArrowRight, Laptop, Briefcase, Calendar } from 'lucide-react';

const ServicedAccommodationPage = () => {
  const hubs = [
    {
      title: "Corporate Accommodation",
      desc: "Business travellers, project workers, and relocated employees on company accounts. High quality, premium yields.",
      path: "/services/serviced-accommodation/corporate",
      icon: <Briefcase className="text-[#DAA520]" size={28} />
    },
    {
      title: "Contractor Accommodation",
      desc: "Shared and self-contained contractor housing near construction sites and London hospitals. All-inclusive billing arrangements.",
      path: "/services/serviced-accommodation/contractor",
      icon: <Laptop className="text-[#DAA520]" size={28} />
    },
    {
      title: "Short-Term Let Management",
      desc: "Comprehensive Airbnb / short-let management. Listing optimization, dynamic pricing, and managing London's 90-night rule.",
      path: "/services/serviced-accommodation/short-term-lets",
      icon: <Calendar className="text-[#DAA520]" size={28} />
    }
  ];

  return (
    <div className="bg-bone text-navy min-h-screen pt-[120px] pb-24 selection:bg-navy selection:text-bone">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <span className="text-[#DAA520] font-automobile text-[10px] uppercase tracking-[0.4em] block mb-4">Short Stay Management</span>
        <h1 className="text-4xl md:text-6xl font-headings italic mb-8">Serviced Accommodation Management Across Greater London</h1>
        
        <p className="text-navy/70 leading-relaxed text-lg max-w-3xl mb-16">
          Serviced accommodation delivers stronger income potential than standard lettings - providing a fully managed, hotel-quality experience for corporate guests, business travellers, contractors, and extended-stay professionals. Greater London, with Heathrow at its centre, is one of the UK's strongest markets for serviced accommodation.
        </p>

        {/* Subpages Directories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {hubs.map((hub, idx) => (
            <Link 
              key={idx}
              to={hub.path}
              className="border border-navy/10 p-8 bg-white/40 shadow-sm hover:bg-white/70 hover:border-[#DAA520] transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="mb-6">{hub.icon}</div>
                <h3 className="font-headings italic text-2xl font-bold mb-4">{hub.title}</h3>
                <p className="text-xs text-navy/70 leading-relaxed font-automobile uppercase tracking-wider mb-6">{hub.desc}</p>
              </div>
              <div className="text-[#DAA520] font-automobile text-[10px] tracking-widest uppercase hover:underline flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                Explore Sector <ArrowRight size={10} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicedAccommodationPage;
