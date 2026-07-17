import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Compass, Eye, ShieldAlert, Key, ClipboardCheck, ArrowRight } from 'lucide-react';

const SupportedLiving = () => {
  const steps = [
    { title: "Initial Consultation", desc: "We learn your service needs, tenant profile, staffing model, location preferences, and any adaptation or accessibility requirements.", icon: <Search className="text-[#DAA520]" size={24} /> },
    { title: "Property Search", desc: "We source properties matching your criteria from our portfolio and wider network - licensed HMOs, single-lets, and self-contained units across London.", icon: <Compass className="text-[#DAA520]" size={24} /> },
    { title: "Viewings", desc: "Your team reviews shortlisted properties to confirm suitability, layout, and location.", icon: <Eye className="text-[#DAA520]" size={24} /> },
    { title: "Compliance Checks", desc: "We verify all safety standards - gas safety, EICR, EPC, fire safety, HMO licensing, and any specialist certification required for the placement type.", icon: <ShieldAlert className="text-[#DAA520]" size={24} /> },
    { title: "Lease Agreement", desc: "Provider-friendly lease structures - long-term leases, PSL arrangements, and options tailored to your operational needs.", icon: <Key className="text-[#DAA520]" size={24} /> },
    { title: "Handover & Ongoing Support", desc: "A clean, compliant, move-in-ready property with full ongoing management and maintenance throughout the lease term.", icon: <ClipboardCheck className="text-[#DAA520]" size={24} /> }
  ];

  const types = [
    { title: "Fully Licensed HMOs", desc: "4–8 bed properties under mandatory HMO or C2 licence." },
    { title: "Single-Let Family Homes", desc: "2–5 bed self-contained homes for placements requiring a homely setting." },
    { title: "Self-Contained Flats", desc: "Studios and 1–2 bed flats for individual tenants and care leaver placements." },
    { title: "Accessible & Adapted", desc: "Ground-floor or lift-served properties, wet rooms, widened doorways." },
    { title: "24/7 Staffing Suitable", desc: "Properties with layouts supporting round-the-clock staffing." },
    { title: "Quiet Residential Locations", desc: "Properties assessed for safety, transport links, and proximity to GP services." }
  ];

  return (
    <div className="bg-bone text-navy min-h-screen pt-[120px] pb-24 selection:bg-navy selection:text-bone">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <span className="text-[#DAA520] font-automobile text-[10px] uppercase tracking-[0.4em] block mb-4">Supported Housing</span>
        <h1 className="text-4xl md:text-6xl font-headings italic mb-8">Trusted Housing Solutions for Supported Living & Social Care Providers Across London</h1>
        
        <p className="text-navy/70 leading-relaxed text-lg max-w-3xl mb-16">
          Faith & Co specialises in sourcing and managing properties for supported living providers, social housing organisations, charities, CICs, and care teams across Greater London. We deliver safe, compliant, long-term homes designed to support positive outcomes - wherever the placement needs to be in London.
        </p>

        {/* 6-Step Process for Providers */}
        <div className="mb-16">
          <h2 className="text-3xl font-headings italic text-center mb-10">6-Step Process for Providers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((st, idx) => (
              <div key={idx} className="border border-navy/10 p-8 bg-[#111827] text-bone flex flex-col justify-between">
                <div>
                  <span className="text-[#DAA520] font-automobile text-[10px] uppercase tracking-[0.3em] font-bold block mb-4">Step 0{idx + 1}</span>
                  <div className="mb-4">{st.icon}</div>
                  <h3 className="font-headings italic text-xl font-bold mb-4">{st.title}</h3>
                  <p className="text-xs text-bone/60 leading-relaxed font-automobile uppercase tracking-wider">{st.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Properties Available Directory */}
        <div className="mb-16">
          <h2 className="text-3xl font-headings italic text-center mb-10">Properties Available</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {types.map((type, idx) => (
              <div key={idx} className="border border-navy/10 p-6 bg-white/40 shadow-sm space-y-2">
                <h4 className="font-headings italic text-lg font-bold text-navy">{type.title}</h4>
                <p className="text-xs text-navy/60 leading-relaxed font-automobile uppercase tracking-wider">{type.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-navy text-bone p-12 text-center space-y-6">
          <h2 className="text-2xl md:text-3xl font-headings italic">In need of compliant, high-quality supported housing?</h2>
          <p className="text-[10px] font-automobile uppercase tracking-widest text-bone/60 max-w-xl mx-auto">
            Discuss your specific placement requirements with our supported housing specialists today.
          </p>
          <Link to="/contact" className="bg-[#DAA520] hover:bg-[#B8860B] text-navy font-bold text-[10px] tracking-[0.25em] uppercase px-8 py-4 inline-block">
            Inquire About Properties
          </Link>
        </div>

      </div>
    </div>
  );
};

export default SupportedLiving;
