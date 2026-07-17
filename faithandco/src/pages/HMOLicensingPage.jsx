import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Award, AlertTriangle, ArrowRight } from 'lucide-react';

const HMOLicensingPage = () => {
  const types = [
    {
      title: "Mandatory HMO Licensing",
      desc: "Applies nationwide. Any property let to five or more occupants from two or more households sharing kitchen or bathroom facilities must hold a mandatory HMO licence. The property must meet national bedroom size standards and fire safety rules.",
      icon: <ShieldCheck className="text-[#DAA520]" size={24} />
    },
    {
      title: "Additional HMO Licensing",
      desc: "Set by individual London borough councils (e.g. Ealing, Hounslow, Brent). Applies to properties let to three or four occupants from two or more households sharing facilities. This is a local policy - check with your specific borough or let Faith & Co advise you.",
      icon: <Award className="text-[#DAA520]" size={24} />
    },
    {
      title: "Selective Licensing",
      desc: "Set by individual councils for standard single-let or family properties within designated wards. Under selective licensing, every single rental property in the ward must be licensed - regardless of the number of occupants.",
      icon: <AlertTriangle className="text-[#DAA520]" size={24} />
    }
  ];

  const services = [
    "HMO Compliance Audit: We assess your property layout and safety features against council HMO standards.",
    "Licence Application: We prepare, submit, and manage the licence application with the borough council.",
    "Required Certificates: We arrange gas safety, EICR, fire risk assessment, and alarm installation.",
    "Council Inspections: We represent you and accompany the council housing officer during property inspections.",
    "Licence Renewals: We track and manage renewals before the current licence expires."
  ];

  return (
    <div className="bg-bone text-navy min-h-screen pt-[120px] pb-24 selection:bg-navy selection:text-bone">
      <div className="max-w-[900px] mx-auto px-6 md:px-12">
        <span className="text-[#DAA520] font-automobile text-[10px] uppercase tracking-[0.4em] block mb-4">HMO Regulations</span>
        <h1 className="text-4xl md:text-5xl font-headings italic mb-8">HMO Licensing Guide for London Landlords</h1>
        
        <p className="text-navy/70 leading-relaxed text-lg max-w-3xl mb-12">
          Understanding HMO licensing rules in London is essential to avoid significant fines. Here is a guide to the three types of licensing, how they are applied in London, and how Faith & Co manages the full process.
        </p>

        {/* 3 Licensing Types */}
        <div className="space-y-8 mb-16">
          {types.map((t, idx) => (
            <div key={idx} className="border border-navy/10 p-8 bg-white/40 shadow-sm flex items-start gap-4">
              <div className="p-3 border border-navy/5 bg-white/60 shrink-0">
                {t.icon}
              </div>
              <div className="space-y-2">
                <h3 className="font-headings italic text-xl font-bold">{t.title}</h3>
                <p className="text-xs text-navy/70 leading-relaxed font-automobile uppercase tracking-wider">{t.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* How We Manage It */}
        <div className="mb-16 bg-[#111827] text-bone p-8 md:p-12 border border-white/5 space-y-6">
          <h3 className="font-headings italic text-2xl text-[#DAA520] font-bold">How Faith & Co Manages HMO Licensing</h3>
          <ul className="space-y-4 text-xs uppercase tracking-wider font-automobile text-bone/70">
            {services.map((s, idx) => (
              <li key={idx} className="border-b border-white/5 pb-3 last:border-0 last:pb-0">
                • {s}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-navy text-bone p-12 text-center space-y-6">
          <h2 className="text-2xl md:text-3xl font-headings italic">Need an HMO licence for your property?</h2>
          <p className="text-[10px] font-automobile uppercase tracking-widest text-bone/60 max-w-xl mx-auto">
            Contact our HMO compliance team today and let's get your licensing audit scheduled.
          </p>
          <Link to="/contact" className="bg-[#DAA520] hover:bg-[#B8860B] text-navy font-bold text-[10px] tracking-[0.25em] uppercase px-8 py-4 inline-block">
            Contact HMO Specialists
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HMOLicensingPage;
