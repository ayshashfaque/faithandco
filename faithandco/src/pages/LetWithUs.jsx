import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Users, Wrench, Calendar, FileText, Check } from 'lucide-react';

const LetWithUs = () => {
  const tiers = [
    {
      title: "Tenant Find Only",
      subtitle: "For active, hands-on landlords",
      desc: "We find and fully reference the tenants - you manage the property day-to-day.",
      points: [
        "Professional marketing & viewings",
        "Thorough tenant referencing & credit checks",
        "Right-to-Rent document verification",
        "AST agreement drafting",
        "Deposit registration coordination"
      ],
      cta: "Find Tenants",
      link: "/contact"
    },
    {
      title: "Full Property Management",
      subtitle: "The standard hands-off choice",
      desc: "We manage every operational aspect of the tenancy - you receive rent and updates.",
      points: [
        "Everything in Tenant Find",
        "Monthly rent collection & statements",
        "24/7 maintenance coordination",
        "Routine inspections & photographic reports",
        "Compliance monitoring & certificate renewals"
      ],
      cta: "Request Management",
      link: "/contact",
      highlight: true
    },
    {
      title: "Guaranteed Rent Scheme",
      subtitle: "Complete financial security",
      desc: "Faith & Co becomes your tenant. Fixed monthly income, no voids, no fees, full management included.",
      points: [
        "Fixed income every month - void or occupied",
        "No tenant arrears risk",
        "Zero management fees or commission",
        "Full property management & maintenance",
        "HMO & C2 licensing compliance covered"
      ],
      cta: "Get Guaranteed Rent",
      link: "/guaranteed-rent"
    }
  ];

  return (
    <div className="bg-bone text-navy min-h-screen pt-[120px] pb-24 selection:bg-navy selection:text-bone">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <span className="text-[#DAA520] font-automobile text-[10px] uppercase tracking-[0.4em] block mb-4">Landlord Options</span>
        <h1 className="text-4xl md:text-6xl font-headings italic mb-8">Let Your Property With Faith & Co</h1>
        
        <p className="text-navy/70 leading-relaxed text-lg max-w-3xl mb-16">
          Why let your property with us? We combine deep London market expertise with a compliance-led approach, offering private landlords, portfolio owners, and institutions three distinct letting options to suit their needs.
        </p>

        {/* Tiers Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {tiers.map((tier, idx) => (
            <div 
              key={idx} 
              className={`border p-8 flex flex-col justify-between h-[520px] ${tier.highlight ? 'bg-[#111827] text-bone border-[#DAA520]/40 shadow-xl' : 'bg-white/40 border-navy/10'}`}
            >
              <div>
                <span className="text-[#DAA520] font-automobile text-[10px] uppercase tracking-[0.3em] font-bold block mb-2">{tier.subtitle}</span>
                <h3 className="font-headings italic text-2xl font-bold mb-4">{tier.title}</h3>
                <p className={`text-xs leading-relaxed font-automobile uppercase tracking-wider mb-6 ${tier.highlight ? 'text-bone/60' : 'text-navy/70'}`}>{tier.desc}</p>
                <div className="w-8 h-[0.5px] bg-[#DAA520] mb-6"></div>
                <ul className="space-y-3">
                  {tier.points.map((pt, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2 text-[10px] uppercase tracking-wider font-automobile">
                      <Check size={12} className="text-[#DAA520] shrink-0 mt-0.5" />
                      <span className={tier.highlight ? 'text-bone/70' : 'text-navy/70'}>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <Link 
                to={tier.link}
                className={`w-full font-bold text-[10px] tracking-[0.25em] uppercase py-4 text-center mt-8 ${tier.highlight ? 'bg-[#DAA520] text-navy hover:bg-[#B8860B]' : 'bg-navy text-bone hover:bg-navy/80'}`}
              >
                {tier.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LetWithUs;
