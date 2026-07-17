import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, ShieldCheck, ClipboardCheck, ArrowRight } from 'lucide-react';

const CouncilAccommodation = () => {
  const models = [
    { title: "Private Sector Leasing (PSL)", desc: "Council takes a 1–3 year lease from Faith & Co or the landlord directly. Council manages all placements. Faith & Co earns a lease management fee. Best suited to: 2–3 bed self-contained properties for families in priority need.", icon: <ShieldCheck className="text-[#DAA520]" size={24} /> },
    { title: "Private Leasing Arrangement (PLA)", desc: "Faith & Co holds the lease and manages the property on the council's behalf. Council makes referrals; Faith & Co handles day-to-day management. Faith & Co earns lease income plus ongoing management fee. Best suited to: studios and 1–2 bed units.", icon: <ClipboardCheck className="text-[#DAA520]" size={24} /> },
    { title: "Nightly Paid (Spot Purchase)", desc: "Council pays per night for emergency placements. Higher nightly rate than PSL. Furnished, self-contained stock available at short notice. Faith & Co invoices weekly or monthly.", icon: <Building2 className="text-[#DAA520]" size={24} /> }
  ];

  const requirements = [
    "2–3 bed self-contained - Highest priority across most London boroughs. Families with dependent children - councils are legally required to house this group regardless of cost.",
    "1 bed self-contained - Singles and couples. High-volume demand across all London boroughs.",
    "Studios / bedsits - Emergency and single homeless placements. Active spot purchase market.",
    "Furnished - All TA properties must be furnished and immediately ready for occupation.",
    "Bills arrangement - Confirm billing arrangement (inclusive or exclusive) per contract - not a blanket requirement across all properties.",
    "Self-contained only - Councils cannot legally place families in B&B for more than 6 weeks - creating strong demand for self-contained alternatives."
  ];

  const relationships = [
    { council: "Ealing Council", desc: "Priority unit type: 2–3 bed family properties. Active contact established. PSL and nightly paid development." },
    { council: "Hounslow Council", desc: "Strong demand across all sizes. PSL and nightly paid." },
    { council: "Brent Council", desc: "High-volume TA procurement. Active PSL and spot purchase." },
    { council: "Hillingdon Council", desc: "Via procurement portal. 1–3 bed units in demand." },
    { council: "Hammersmith & Fulham", desc: "Strong rates for compliant inner London stock." },
    { council: "Westminster City Council", desc: "Premium rates for inner London stock." },
    { council: "Harrow Council", desc: "Active TA procurement." },
    { council: "Richmond upon Thames", desc: "Selective PSL programme." }
  ];

  return (
    <div className="bg-bone text-navy min-h-screen pt-[120px] pb-24 selection:bg-navy selection:text-bone">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <span className="text-[#DAA520] font-automobile text-[10px] uppercase tracking-[0.4em] block mb-4">Council Partnerships</span>
        <h1 className="text-4xl md:text-6xl font-headings italic mb-8">Managed Residential Properties for London Borough Councils</h1>
        
        <p className="text-navy/70 leading-relaxed text-lg max-w-3xl mb-16">
          Faith & Co sources and manages residential properties for London borough councils under temporary accommodation contracts. We understand council procurement processes across the capital - from inner London boroughs with high nightly rates to outer London boroughs with active PSL programmes - and actively supply compliant, well-managed properties to councils' housing teams.
        </p>

        {/* Three Contract Models */}
        <div className="mb-16">
          <h2 className="text-3xl font-headings italic text-center mb-10">Three Contract Models</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {models.map((m, idx) => (
              <div key={idx} className="border border-navy/10 p-8 bg-[#111827] text-bone flex flex-col justify-between">
                <div>
                  <div className="mb-6">{m.icon}</div>
                  <h3 className="font-headings italic text-xl font-bold mb-4">{m.title}</h3>
                  <p className="text-xs text-bone/60 leading-relaxed font-automobile uppercase tracking-wider">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* What Properties Councils Need */}
        <div className="mb-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <h2 className="text-3xl font-headings italic">What Properties Councils Need</h2>
            <p className="text-navy/70 leading-relaxed text-sm">
              We source and manage self-contained units that fit councils' legal requirements for emergency and temporary placements.
            </p>
          </div>
          <div className="space-y-4">
            {requirements.map((req, idx) => (
              <div key={idx} className="border-b border-navy/10 pb-4">
                <p className="text-xs text-navy/70 leading-relaxed font-automobile uppercase tracking-wider">{req}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Active Borough Relationships */}
        <div className="mb-16">
          <h2 className="text-3xl font-headings italic text-center mb-10">Active Borough Relationships</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {relationships.map((rel, idx) => (
              <div key={idx} className="border border-navy/10 p-6 bg-white/40 shadow-sm space-y-2">
                <h4 className="font-headings italic text-lg font-bold text-navy">{rel.council}</h4>
                <p className="text-xs text-navy/60 leading-relaxed font-automobile uppercase tracking-wider">{rel.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-[10px] font-automobile tracking-widest text-[#DAA520] uppercase mt-8">
            Faith & Co can supply compliant properties to any London borough council on request.
          </p>
        </div>

        {/* CTA */}
        <div className="bg-navy text-bone p-12 text-center space-y-6">
          <h2 className="text-2xl md:text-3xl font-headings italic">Are you a council procurement officer?</h2>
          <p className="text-[10px] font-automobile uppercase tracking-widest text-bone/60 max-w-xl mx-auto">
            Discuss procurement rates, spot purchasing opportunities, and compliance standards.
          </p>
          <Link to="/contact" className="bg-[#DAA520] hover:bg-[#B8860B] text-navy font-bold text-[10px] tracking-[0.25em] uppercase px-8 py-4 inline-block">
            Contact Housing Procurement
          </Link>
        </div>

      </div>
    </div>
  );
};

export default CouncilAccommodation;
