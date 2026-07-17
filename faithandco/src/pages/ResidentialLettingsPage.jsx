import React from 'react';
import { Link } from 'react-router-dom';
import { Image, Users, ClipboardCheck, FileText, CheckSquare, Heart } from 'lucide-react';

const ResidentialLettingsPage = () => {
  const steps = [
    { title: "Professional Marketing", desc: "High-quality photography, compelling listing descriptions, promotion on Rightmove, Zoopla, and our tenant network.", icon: <Image size={24} className="text-[#DAA520]" /> },
    { title: "Accompanied Viewings", desc: "All viewings conducted by our team at flexible times. Prospective tenants qualified before booking.", icon: <Users size={24} className="text-[#DAA520]" /> },
    { title: "Tenant Referencing", desc: "Full credit checks, employment verification, previous landlord references, and right-to-rent document checks.", icon: <ClipboardCheck size={24} className="text-[#DAA520]" /> },
    { title: "Tenancy Agreement", desc: "Legally compliant tenancy agreement, deposit registration, and all prescribed information issued.", icon: <FileText size={24} className="text-[#DAA520]" /> },
    { title: "Move-In Management", desc: "Check-in inventory, meter readings, key handover, and all move-in documentation.", icon: <CheckSquare size={24} className="text-[#DAA520]" /> },
    { title: "Optional Full Management", desc: "Add full property management at any point after the tenancy begins.", icon: <Heart size={24} className="text-[#DAA520]" /> }
  ];

  return (
    <div className="bg-bone text-navy min-h-screen pt-[120px] pb-24 selection:bg-navy selection:text-bone">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <span className="text-[#DAA520] font-automobile text-[10px] uppercase tracking-[0.4em] block mb-4">Lettings Specialists</span>
        <h1 className="text-4xl md:text-6xl font-headings italic mb-8">Professional Residential Lettings Across Greater London and the Home Counties</h1>
        
        <p className="text-navy/70 leading-relaxed text-lg max-w-3xl mb-16">
          Our residential lettings service is for landlords who want professional tenant placement without committing to full ongoing management. We market your property, conduct viewings, carry out thorough referencing, and manage the full move-in process.
        </p>

        {/* 6-Stage Process Flow Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {steps.map((step, idx) => (
            <div key={idx} className="border border-navy/10 p-8 bg-white/40 shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-[#DAA520] font-automobile text-[10px] font-bold block mb-4">Stage 0{idx + 1}</span>
                <div className="mb-4">{step.icon}</div>
                <h3 className="font-headings italic text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-xs text-navy/70 leading-relaxed font-automobile uppercase tracking-wider">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-[#111827] text-bone p-12 text-center space-y-6">
          <h2 className="text-2xl md:text-3xl font-headings italic">Need help finding the right tenants?</h2>
          <p className="text-[10px] font-automobile uppercase tracking-widest text-bone/60 max-w-xl mx-auto">
            Get in touch with our residential lettings team today and let's get your property listed on major portals.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <Link to="/contact" className="bg-[#DAA520] hover:bg-[#B8860B] text-navy font-bold text-[10px] tracking-[0.25em] uppercase px-8 py-4">
              Get In Touch
            </Link>
            <Link to="/landlords/free-valuation" className="border border-white/20 hover:border-white text-bone font-bold text-[10px] tracking-[0.25em] uppercase px-8 py-4">
              Get Free Valuation
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResidentialLettingsPage;
