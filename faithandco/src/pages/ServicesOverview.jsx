import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, CheckCircle2, Heart, Building2, Key, Award, Hotel, FileText } from 'lucide-react';

const ServicesOverview = () => {
  const servicesList = [
    {
      title: "HMO Management",
      desc: "Specialist HMO letting and management. Vetted tenants, full licensing compliance, optional guaranteed rent. Higher yields, truly hands-off.",
      icon: <ShieldCheck size={28} className="text-[#DAA520]" />,
      path: "/services/hmo-management"
    },
    {
      title: "Property Management",
      desc: "Hands-off full management for single lets and family homes. Tenant-find only or full management with optional guaranteed rent.",
      icon: <CheckCircle2 size={28} className="text-[#DAA520]" />,
      path: "/services/property-management"
    },
    {
      title: "Residential Letting",
      desc: "Professional tenant sourcing, thorough referencing, and placement across Greater London. Tenant-find only or full management.",
      icon: <Key size={28} className="text-[#DAA520]" />,
      path: "/services/residential-letting"
    },
    {
      title: "Portfolio Management",
      desc: "One dedicated contact managing your full London portfolio. Consolidated monthly reporting. From 2 properties upwards.",
      icon: <Award size={28} className="text-[#DAA520]" />,
      path: "/services/portfolio-management"
    },
    {
      title: "Care Sector Lettings",
      desc: "C2-licensed and HMO-licensed properties for children's homes, supported living providers, and CQC-regulated organisations.",
      icon: <Heart size={28} className="text-[#DAA520]" />,
      path: "/services/care-sector-lettings"
    },
    {
      title: "Council & Temporary Accommodation",
      desc: "Managed properties for London borough councils under PSL, PLA, and nightly paid contracts.",
      icon: <Building2 size={28} className="text-[#DAA520]" />,
      path: "/services/council-accommodation"
    },
    {
      title: "Serviced Accommodation",
      desc: "Corporate apartments, contractor housing, and extended-stay management across London.",
      icon: <Hotel size={28} className="text-[#DAA520]" />,
      path: "/services/serviced-accommodation"
    },
    {
      title: "Company & Corporate Lets",
      desc: "Company AST arrangements, relocation housing, key worker accommodation, and corporate lets.",
      icon: <FileText size={28} className="text-[#DAA520]" />,
      path: "/services/company-corporate-lets"
    },
    {
      title: "Guaranteed Rent Scheme",
      desc: "Fixed monthly income every month - void or occupied. We lease your property directly and pay you on time.",
      icon: <Key size={28} className="text-[#DAA520]" />,
      path: "/guaranteed-rent"
    }
  ];

  return (
    <div className="bg-bone text-navy min-h-screen pt-[120px] pb-24 selection:bg-navy selection:text-bone">
      {/* Background radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative">
        <div className="text-center mb-16 space-y-4">
          <span className="text-[#DAA520] font-automobile text-[10px] uppercase tracking-[0.4em] block">Our Offerings</span>
          <h1 className="text-4xl md:text-6xl font-headings italic leading-tight">Our Full Range of Letting & Property Management Services Across London</h1>
          <p className="text-navy/70 leading-relaxed text-lg max-w-3xl mx-auto">
            Faith & Co provides a complete range of letting and property management services for landlords across Greater London and the Home Counties. From HMO management and guaranteed rent to care sector placements, council accommodation, and serviced lets - every service is fully managed by our specialist London team.
          </p>
          <div className="w-16 h-[0.5px] bg-[#DAA520] mx-auto mt-6"></div>
        </div>

        {/* Services Grid with Navy/Dark backgrounds and gold-glowing lift hover effect */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service, idx) => (
            <div 
              key={idx}
              className="service-card bg-[#111827] text-bone border border-white/5 p-8 flex flex-col justify-between h-[340px] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.15),_0_0_12px_rgba(212,175,55,0.2)]"
            >
              <div>
                <div className="mb-6 flex justify-between items-center">
                  <div className="p-3 border border-white/10 bg-white/5 rounded-lg">
                    {service.icon}
                  </div>
                  <span className="text-bone/20 font-automobile text-[9px] uppercase tracking-widest font-bold">Faith & Co</span>
                </div>
                <h3 className="font-headings italic text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-xs text-bone/60 leading-relaxed font-automobile uppercase tracking-wider line-clamp-4">{service.desc}</p>
              </div>
              <Link 
                to={service.path}
                className="text-[#DAA520] font-automobile text-[10px] tracking-widest uppercase hover:underline flex items-center gap-1 mt-6"
              >
                Learn More <ArrowRight size={10} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesOverview;
