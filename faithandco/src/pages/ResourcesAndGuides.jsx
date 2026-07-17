import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, Shield, Key, DollarSign, ArrowRight } from 'lucide-react';

const ResourcesAndGuides = () => {
  const guides = [
    {
      title: "Guide to Letting",
      desc: "The full letting process - from preparing your property to tenant move-in and ongoing management.",
      path: "/landlords/guide-to-letting",
      icon: <Key className="text-[#DAA520]" size={28} />
    },
    {
      title: "HMO Licensing Guide",
      desc: "Everything landlords need to know about mandatory and additional HMO licensing across all 32 London boroughs.",
      path: "/landlords/hmo-licensing-guide",
      icon: <Shield className="text-[#DAA520]" size={28} />
    },
    {
      title: "Maintenance & Repairs Guide",
      desc: "Landlord maintenance responsibilities and how Faith & Co manages maintenance on all managed properties.",
      path: "/landlords/maintenance-guide",
      icon: <FileText className="text-[#DAA520]" size={28} />
    },
    {
      title: "Free Rental Valuation",
      desc: "Find out exactly what your London property could earn under Faith & Co management.",
      path: "/landlords/free-valuation",
      icon: <DollarSign className="text-[#DAA520]" size={28} />
    }
  ];

  return (
    <div className="bg-bone text-navy min-h-screen pt-[120px] pb-24 selection:bg-navy selection:text-bone">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <span className="text-[#DAA520] font-automobile text-[10px] uppercase tracking-[0.4em] block mb-4">Landlord Knowledge base</span>
        <h1 className="text-4xl md:text-6xl font-headings italic mb-8">Resources & Guides for London Landlords</h1>
        
        <p className="text-navy/70 leading-relaxed text-lg max-w-3xl mb-16">
          Everything a London landlord needs to let their property confidently, understand HMO licensing, and make the most of their investment.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {guides.map((g, idx) => (
            <Link 
              key={idx}
              to={g.path}
              className="border border-navy/10 p-8 bg-white/40 shadow-sm hover:bg-white/70 hover:border-[#DAA520] transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="mb-6">{g.icon}</div>
                <h3 className="font-headings italic text-2xl font-bold mb-4">{g.title}</h3>
                <p className="text-xs text-navy/70 leading-relaxed font-automobile uppercase tracking-wider mb-6">{g.desc}</p>
              </div>
              <div className="text-[#DAA520] font-automobile text-[10px] tracking-widest uppercase hover:underline flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                Read Guide <ArrowRight size={10} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResourcesAndGuides;
