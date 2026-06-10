import React from 'react';
import { Link } from 'react-router-dom';
import { Key, Shield, Award, MapPin, ClipboardCheck, ArrowRight } from 'lucide-react';

const LettingGuidePage = () => {
  const steps = [
    { title: "Preparing Your Property", desc: "Neutral decor, professional deep clean, and clear furnishings. First impressions are critical for attracting high-quality tenants." },
    { title: "Meeting Compliance Requirements", desc: "Annual Gas Safety check, EICR (every 5 years), EPC rating minimum E (minimum C for new tenancies), and checking if your borough requires a selective/HMO licence." },
    { title: "Setting the Rent", desc: "Evaluate comparable properties in your specific borough. Alternatively, opt for our Guaranteed Rent Scheme for fixed income certainty." },
    { title: "Tenant Sourcing & Viewings", desc: "Marketing on major portals, qualifying applicants before viewings, and accompanied professional viewings." },
    { title: "Referencing & AST", desc: "Credit checks, employment referencing, previous landlord checks, Right-to-Rent document verification, and drafting a legally compliant tenancy agreement." },
    { title: "Move-In & Inventory", desc: "A comprehensive photographic inventory, meter readings, key handover, and registering the deposit with an approved deposit protection scheme." },
    { title: "Ongoing Management", desc: "Rent collection, 24/7 maintenance support, mid-tenancy inspections, and managing annual safety certificate renewals." }
  ];

  return (
    <div className="bg-bone text-navy min-h-screen pt-[120px] pb-24 selection:bg-navy selection:text-bone">
      <div className="max-w-[900px] mx-auto px-6 md:px-12">
        <span className="text-[#DAA520] font-automobile text-[10px] uppercase tracking-[0.4em] block mb-4">Landlord Guide</span>
        <h1 className="text-4xl md:text-5xl font-headings italic mb-8">Landlord's Guide to Letting in London</h1>
        
        <p className="text-navy/70 leading-relaxed text-lg max-w-3xl mb-12">
          A step-by-step walkthrough of the letting process - from preparing the property for marketing and complying with London licensing rules, through to tenant sourcing, move-in, and tenancy management.
        </p>

        <div className="space-y-8 mb-16">
          {steps.map((st, idx) => (
            <div key={idx} className="border-l-2 border-[#DAA520] pl-6 md:pl-10 py-2 space-y-2">
              <span className="text-[#DAA520] font-automobile text-[10px] uppercase tracking-[0.3em] font-bold block">Step 0{idx + 1}</span>
              <h3 className="font-headings italic text-2xl font-bold">{st.title}</h3>
              <p className="text-xs text-navy/70 leading-relaxed font-automobile uppercase tracking-wider">{st.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-[#111827] text-bone p-12 text-center space-y-6">
          <h2 className="text-2xl md:text-3xl font-headings italic">Want a professional team to manage this?</h2>
          <p className="text-[10px] font-automobile uppercase tracking-widest text-bone/60 max-w-xl mx-auto">
            From tenant sourcing to full management, we handle every stage of the letting guide for you.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <Link to="/contact" className="bg-[#DAA520] hover:bg-[#B8860B] text-navy font-bold text-[10px] tracking-[0.25em] uppercase px-8 py-4">
              Speak to Lettings Team
            </Link>
            <Link to="/landlords/free-valuation" className="border border-white/20 hover:border-white text-bone font-bold text-[10px] tracking-[0.25em] uppercase px-8 py-4">
              Get Valuation
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LettingGuidePage;
