import React from 'react';
import { Shield, Clock, ShieldAlert, Users, PhoneCall, DollarSign, Home, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const WhyChooseUs = () => {
  const points = [
    {
      title: "Founded 2018",
      desc: "Over seven years of specialist property management experience across Greater London, built around compliance, care sector expertise, and landlord-first service.",
      icon: <Clock size={24} className="text-[#DAA520]" />
    },
    {
      title: "HMO & C2 Licensed",
      desc: "We hold mandatory HMO licences and C2 licences - essential for care sector placements and a significant differentiator across London.",
      icon: <ShieldAlert size={24} className="text-[#DAA520]" />
    },
    {
      title: "Guaranteed Rent Scheme",
      desc: "Fixed monthly income regardless of occupancy or arrears. No voids, no commissions, no hidden fees.",
      icon: <DollarSign size={24} className="text-[#DAA520]" />
    },
    {
      title: "Council Relationships",
      desc: "Active procurement relationships with multiple London borough councils for temporary accommodation supply.",
      icon: <Home size={24} className="text-[#DAA520]" />
    },
    {
      title: "Care Sector Expertise",
      desc: "Specialists in Ofsted-registered, CQC-regulated, and council-commissioned housing placements across London.",
      icon: <Users size={24} className="text-[#DAA520]" />
    },
    {
      title: "Full A–Z Management",
      desc: "Tenant sourcing, referencing, compliance, maintenance, inspections, reporting - end to end.",
      icon: <CheckCircle size={24} className="text-[#DAA520]" />
    },
    {
      title: "No Hidden Fees",
      desc: "The agreement we make is the agreement we keep. Complete transparency from day one.",
      icon: <Shield size={24} className="text-[#DAA520]" />
    },
    {
      title: "London-Wide Team",
      desc: "We manage properties across all 32 London boroughs and into the Home Counties.",
      icon: <PhoneCall size={24} className="text-[#DAA520]" />
    }
  ];

  return (
    <div className="bg-bone text-navy min-h-screen pt-[120px] pb-24 selection:bg-navy selection:text-bone">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <span className="text-[#DAA520] font-automobile text-[10px] uppercase tracking-[0.4em] block mb-4">Credentials & Trust</span>
        <h1 className="text-4xl md:text-6xl font-headings italic mb-8">Why Landlords & Institutions Across London Choose Faith & Co</h1>
        
        <p className="text-navy/70 leading-relaxed text-lg max-w-3xl mb-16">
          Faith & Co is a specialist estate and letting agency with deep expertise in HMO management, licensed property management, guaranteed rent, and specialist accommodation for care sector organisations and London borough councils. Here is what sets us apart.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {points.map((pt, idx) => (
            <div key={idx} className="border border-navy/10 p-8 bg-white/40 shadow-sm flex items-start gap-4">
              <div className="p-3 border border-navy/5 bg-white/60 shrink-0">
                {pt.icon}
              </div>
              <div className="space-y-2">
                <h3 className="font-headings italic text-xl font-bold">{pt.title}</h3>
                <p className="text-xs text-navy/70 leading-relaxed font-automobile uppercase tracking-wider">{pt.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-navy text-bone p-12 text-center space-y-6">
          <h2 className="text-2xl md:text-3xl font-headings italic">Ready to experience stress-free property management?</h2>
          <p className="text-xs font-automobile uppercase tracking-widest text-bone/60 max-w-xl mx-auto">
            Get a free rental valuation or speak with one of our specialized team members today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <Link to="/landlords/free-valuation" className="bg-[#DAA520] hover:bg-[#B8860B] text-navy font-bold text-[10px] tracking-[0.25em] uppercase px-8 py-4">
              Get Free Valuation
            </Link>
            <Link to="/contact" className="border border-white/20 hover:border-white text-bone font-bold text-[10px] tracking-[0.25em] uppercase px-8 py-4">
              Contact Our Team
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
