import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Briefcase, Laptop, Calendar, ArrowRight, ShieldCheck, Check } from 'lucide-react';

const ServicedAccommodationSub = () => {
  const { subType } = useParams();

  const content = {
    corporate: {
      title: "Corporate Accommodation Management Across Greater London",
      tagline: "High-yield business travel placement",
      serves: "Business travellers, project workers, and relocated employees on company accounts.",
      type: "Modern furnished 1–3 bed with fast broadband, dedicated workspace, laundry in-unit.",
      income: "Premium rates above open market. Employer or relocation company funded.",
      points: [
        "Direct listings to corporate travel desks and relocation portals",
        "Rigorous corporate guest vetting and check-in procedures",
        "Consistent monthly invoicing and detailed occupancy logs",
        "All maintenance triaged 24/7 by our dedicated team"
      ],
      icon: <Briefcase size={48} className="text-[#DAA520]" />
    },
    contractor: {
      title: "Contractor & Project Worker Housing Across Greater London",
      tagline: "Essential worker and project crew housing",
      serves: "Construction workers, engineers, NHS agency staff, film crew on short contracts.",
      type: "Shared houses 3–6 beds or self-contained units near construction sites and hospitals. All-inclusive bills arrangement.",
      income: "Consistent London demand near Heathrow, major construction projects, and London hospitals.",
      points: [
        "Proximity-based marketing near industrial hubs, hospitals, and transit links",
        "All-inclusive bills packages managed to prevent utility usage surges",
        "Regular photographic checks to guarantee property care",
        "Flexible check-out models tailored for shifting project dates"
      ],
      icon: <Laptop size={48} className="text-[#DAA520]" />
    },
    "short-term-lets": {
      title: "Short-Term Let Management Across Greater London",
      tagline: "Full-service short stay optimization",
      serves: "Short stay tourists, domestic travellers, and leisure visitors.",
      type: "Various compliant residential properties configured for short term rentals.",
      income: "Dynamic daily pricing structures generating maximum short stay yield.",
      points: [
        "London 90-night rule monitoring: ensuring strict compliance with local authority planning rules",
        "Professional photography, listing creation, and OTA platform management",
        "Guest verification and automated key/check-in security models",
        "Housekeeping, deep cleaning, and hotel-grade linen between stays"
      ],
      icon: <Calendar size={48} className="text-[#DAA520]" />
    }
  };

  const active = content[subType] || content.corporate;

  return (
    <div className="bg-bone text-navy min-h-screen pt-[120px] pb-24 selection:bg-navy selection:text-bone">
      <div className="max-w-[1000px] mx-auto px-6 md:px-12">
        <span className="text-[#DAA520] font-automobile text-[10px] uppercase tracking-[0.4em] block mb-4">{active.tagline}</span>
        
        <div className="flex flex-col md:flex-row gap-8 items-start justify-between mb-12 border-b border-navy/10 pb-8">
          <div>
            <h1 className="text-4xl md:text-5xl font-headings italic mb-4">{active.title}</h1>
            <p className="text-xs uppercase tracking-widest text-[#DAA520] font-bold font-automobile">Serviced Accommodation Sub-sector</p>
          </div>
          <div className="p-4 border border-navy/5 bg-white/40 shadow-sm shrink-0">
            {active.icon}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <div className="space-y-6">
            <div>
              <h3 className="font-headings italic text-xl font-bold mb-2">Who It Serves</h3>
              <p className="text-xs text-navy/70 leading-relaxed font-automobile uppercase tracking-wider">{active.serves}</p>
            </div>
            <div>
              <h3 className="font-headings italic text-xl font-bold mb-2">Property Profile</h3>
              <p className="text-xs text-navy/70 leading-relaxed font-automobile uppercase tracking-wider">{active.type}</p>
            </div>
            <div>
              <h3 className="font-headings italic text-xl font-bold mb-2">Income & Demand Dynamics</h3>
              <p className="text-xs text-navy/70 leading-relaxed font-automobile uppercase tracking-wider">{active.income}</p>
            </div>
          </div>

          <div className="border border-navy/10 p-8 bg-[#111827] text-bone space-y-6">
            <h3 className="font-headings italic text-xl text-[#DAA520] font-bold">Operational Scope</h3>
            <ul className="space-y-4">
              {active.points.map((pt, idx) => (
                <li key={idx} className="flex items-start gap-3 text-[10px] uppercase tracking-wider font-automobile text-bone/70">
                  <Check size={14} className="text-[#DAA520] shrink-0 mt-0.5" />
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {subType === "short-term-lets" && (
          <div className="bg-amber-500/10 border border-amber-500/30 p-6 mb-12 text-navy space-y-2">
            <h4 className="font-bold text-sm">Regulatory Notice: The London 90-Night Rule</h4>
            <p className="text-xs text-navy/70 leading-relaxed">
              Properties in Greater London cannot be let on short-term platforms (like Airbnb, Booking.com, etc.) for more than 90 nights per calendar year without planning permission. Faith & Co actively tracks and manages this cap for all properties, transitioning spaces to corporate lets or standard tenancy setups to ensure zero compliance infractions.
            </p>
          </div>
        )}

        <div className="flex gap-4">
          <Link to="/services/serviced-accommodation" className="border border-navy/20 hover:border-navy text-navy font-bold text-[10px] tracking-[0.25em] uppercase px-8 py-4">
            Back to Hub
          </Link>
          <Link to="/contact" className="bg-[#DAA520] hover:bg-[#B8860B] text-navy font-bold text-[10px] tracking-[0.25em] uppercase px-8 py-4">
            Discuss Your Property
          </Link>
        </div>

      </div>
    </div>
  );
};

export default ServicedAccommodationSub;
