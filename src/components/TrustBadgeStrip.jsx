import React from 'react';
import { Shield, FileCheck, CheckCircle, Award, Landmark, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';

const TrustBadgeStrip = () => {
  const badges = [
    {
      title: "Property Redress Scheme",
      subtitle: "Consumer Rights Act 2015",
      description: "Legally Mandated Member",
      id: "PRS Member",
      icon: <Landmark className="text-[#DAA520]" size={28} />,
      link: "/fees"
    },
    {
      title: "Client Money Protection",
      subtitle: "CMP England Regulations 2019",
      description: "Click to View Certificate",
      id: "CMP Client Protect",
      icon: <Shield className="text-[#DAA520]" size={28} />,
      link: "/fees"
    },
    {
      title: "ICO Registration",
      subtitle: "Data Protection Act 2018",
      description: "Reg No. ZB829371",
      id: "ICO Reg",
      icon: <Lock className="text-[#DAA520]" size={28} />,
      link: "/privacy-policy"
    },
    {
      title: "Deposit Protection Service",
      subtitle: "DPS Standard Safeguard",
      description: "Residential Deposit Protection",
      id: "DPS Secured",
      icon: <CheckCircle className="text-[#DAA520]" size={28} />,
      link: "/fees"
    },
    {
      title: "NRLA Association",
      subtitle: "National Landlords Member",
      description: "Industry Alignment",
      id: "NRLA Member",
      icon: <FileCheck className="text-[#DAA520]" size={28} />,
      link: "/about-us/why-choose-us"
    },
    {
      title: "ARLA Propertymark",
      subtitle: "Letting Industry Gold Standard",
      description: "Highest Professional Standards",
      id: "ARLA Member",
      icon: <Award className="text-[#DAA520]" size={28} />,
      link: "/about-us/why-choose-us"
    }
  ];

  return (
    <section className="bg-navy border-t border-white/10 py-16 text-bone selection:bg-bone selection:text-navy">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="text-center mb-12">
          <span className="text-[#DAA520] font-automobile text-[10px] uppercase tracking-[0.5em] block mb-4">Regulatory Compliance</span>
          <h2 className="text-3xl md:text-4xl font-headings italic text-bone">Market Authority & Accreditation</h2>
          <div className="w-16 h-[0.5px] bg-[#DAA520] mx-auto mt-4"></div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {badges.map((badge, idx) => (
            <Link 
              key={idx} 
              to={badge.link}
              className="bg-white/5 border border-white/10 p-6 flex flex-col items-center justify-between text-center hover:bg-white/10 hover:border-[#DAA520]/40 transition-all duration-300 group"
            >
              <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                {badge.icon}
              </div>
              <div>
                <h4 className="text-[11px] font-bold font-automobile uppercase tracking-wider text-bone mb-1">{badge.title}</h4>
                <p className="text-[9px] text-bone/40 uppercase tracking-widest font-automobile mb-2">{badge.subtitle}</p>
                <div className="text-[10px] text-[#DAA520] font-semibold tracking-wider font-automobile">{badge.description}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBadgeStrip;
