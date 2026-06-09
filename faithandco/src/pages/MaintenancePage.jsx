import React from 'react';
import { Link } from 'react-router-dom';
import { Wrench, Shield, AlertCircle, ArrowRight } from 'lucide-react';

const MaintenancePage = () => {
  const obligations = [
    { title: "Structure and Exterior", desc: "The roof, walls, windows, external doors, gutters, and drains must be maintained in good repair and working order." },
    { title: "Sanitary Installations", desc: "Basins, sinks, baths, showers, and sanitary convenience plumbing must be maintained and kept clear of blocks." },
    { title: "Heating and Hot Water", desc: "Boiler, radiators, gas pipework, and water heating installations must have an annual gas safety check and be kept working." }
  ];

  return (
    <div className="bg-bone text-navy min-h-screen pt-[120px] pb-24 selection:bg-navy selection:text-bone">
      <div className="max-w-[900px] mx-auto px-6 md:px-12">
        <span className="text-[#DAA520] font-automobile text-[10px] uppercase tracking-[0.4em] block mb-4">Repairs & Upkeep</span>
        <h1 className="text-4xl md:text-5xl font-headings italic mb-8">Landlord Maintenance & Repairs Guide</h1>
        
        <p className="text-navy/70 leading-relaxed text-lg max-w-3xl mb-12">
          Understanding maintenance responsibilities is key to a successful tenancy. Here is a guide to landlord maintenance duties in the UK under Section 11 of the Landlord and Tenant Act 1985, and how Faith & Co manages repairs proactively.
        </p>

        {/* Section 11 Responsibilities */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-headings italic mb-6 flex items-center gap-2">
            <Shield className="text-[#DAA520]" size={24} /> Landlord Obligations (Section 11)
          </h2>
          <div className="space-y-6">
            {obligations.map((ob, idx) => (
              <div key={idx} className="border border-navy/10 p-6 bg-white/40 shadow-sm">
                <h4 className="font-headings italic text-xl font-bold mb-2">{ob.title}</h4>
                <p className="text-xs text-navy/70 leading-relaxed font-automobile uppercase tracking-wider">{ob.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* How We Manage Repairs */}
        <div className="mb-16 bg-[#111827] text-bone p-8 md:p-12 border border-white/5 space-y-6">
          <h3 className="font-headings italic text-2xl text-[#DAA520] font-bold">How Faith & Co Manages Repairs</h3>
          <p className="text-xs text-bone/60 leading-relaxed font-automobile uppercase tracking-wider">
            We provide a 24/7 maintenance reporting portal for all tenants. When a repair is reported:
          </p>
          <ul className="space-y-4 text-xs uppercase tracking-wider font-automobile text-bone/70">
            <li>• Triage: We qualify the issue (checking if it is user error or a genuine fault) before instructing contractors.</li>
            <li>• Instruction: We deploy approved local contractors with agreed response times based on urgency.</li>
            <li>• Sign-off: We verify completion with photographic evidence and tenant feedback before approving invoices.</li>
          </ul>
        </div>

        {/* Emergency vs Non-Emergency */}
        <div className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="border border-red-500/20 bg-red-500/5 p-6">
            <h4 className="font-headings italic text-lg font-bold text-red-700 flex items-center gap-2 mb-3">
              <AlertCircle size={20} /> Emergency Repairs
            </h4>
            <p className="text-xs text-navy/70 leading-relaxed font-automobile uppercase tracking-wider">
              Gas leaks, major water leaks, complete power outage, lack of heating/hot water in winter, or security breaches (broken locks/windows). Responded to within 4–24 hours.
            </p>
          </div>
          
          <div className="border border-navy/10 p-6 bg-white/40 shadow-sm">
            <h4 className="font-headings italic text-lg font-bold text-navy flex items-center gap-2 mb-3">
              <Wrench size={20} className="text-[#DAA520]" /> Non-Emergency Repairs
            </h4>
            <p className="text-xs text-navy/70 leading-relaxed font-automobile uppercase tracking-wider">
              Dripping taps, appliance faults, minor joinery, internal door adjustments. Responded to within 3–7 working days depending on severity.
            </p>
          </div>
        </div>

        <div className="bg-navy text-bone p-12 text-center space-y-6">
          <h2 className="text-2xl md:text-3xl font-headings italic">Want hands-off maintenance management?</h2>
          <p className="text-[10px] font-automobile uppercase tracking-widest text-bone/60 max-w-xl mx-auto">
            Our full property management and guaranteed rent schemes include complete maintenance coordination as standard.
          </p>
          <Link to="/contact" className="bg-[#DAA520] hover:bg-[#B8860B] text-navy font-bold text-[10px] tracking-[0.25em] uppercase px-8 py-4 inline-block">
            Speak to Maintenance Team
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MaintenancePage;
