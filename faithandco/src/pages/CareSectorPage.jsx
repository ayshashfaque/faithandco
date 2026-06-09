import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShieldCheck, Home, Users, Building, AlertCircle, Award, CheckCircle2 } from 'lucide-react';

const CareSectorPage = () => {
  const sectors = [
    {
      title: "Children's Residential Homes",
      badge: "C2 Licence Required",
      desc: "Ofsted-regulated under Children's Homes Regulations 2015. Provider must be Ofsted-registered before operating. Property: 4–6 bed residential house, homely not institutional, garden preferred. Faith & Co holds C2 licences - directly relevant.",
      icon: <Home className="text-[#DAA520]" size={24} />
    },
    {
      title: "Semi-Independent Living (16–17)",
      badge: "Ofsted Supervised",
      desc: "Ofsted registration required from October 2023 under Supported Accommodation Regulations. Shared house or self-contained flat. Lockable bedrooms. Shared only with other care leavers. High demand across London boroughs.",
      icon: <Users className="text-[#DAA520]" size={24} />
    },
    {
      title: "Supported Accommodation (Care Leavers 16–25)",
      badge: "Local Authority Funded",
      desc: "Ofsted-registered provider required. Local authority funds placements. Self-contained units or shared homes for care leavers only. Very high demand - long-term contractual.",
      icon: <Heart className="text-[#DAA520]" size={24} />
    },
    {
      title: "Supported Living - Learning Disabilities",
      badge: "CQC Regulated Support",
      desc: "CQC for support provider only. Housing landlord unregulated. Self-contained or shared homes, 2–4 residents. Core Faith & Co market.",
      icon: <CheckCircle2 className="text-[#DAA520]" size={24} />
    },
    {
      title: "Supported Living - Mental Health",
      badge: "NHS & Council Commissioned",
      desc: "CQC for support provider. Self-contained 1-beds preferred; shared 2–4 bed widely used. NHS ICB and local authority commissioning. Large, consistent-demand sector.",
      icon: <Building className="text-[#DAA520]" size={24} />
    },
    {
      title: "Supported Living - Autism",
      badge: "High Support Sensory Friendly",
      desc: "CQC for support provider. Self-contained units strongly preferred. Sensory-friendly features an advantage. Fast-growing category.",
      icon: <AlertCircle className="text-[#DAA520]" size={24} />
    },
    {
      title: "Drug & Alcohol Recovery (Exempt)",
      badge: "Exempt Accommodation",
      desc: "No CQC needed if housing-only. Shared HMO 4–8 beds. Communal lounge and kitchen essential. Housing Benefit at exempt rate (above LHA). Direct fit for Faith & Co HMO portfolio.",
      icon: <ShieldCheck className="text-[#DAA520]" size={24} />
    },
    {
      title: "Domestic Abuse Refuge & Move-On",
      badge: "Confidential Safe Haven",
      desc: "DAHA-accredited providers. Domestic Abuse Act 2021 safe accommodation duty applies. Self-contained 1–3 bed. Confidential address required.",
      icon: <ShieldCheck className="text-[#DAA520]" size={24} />
    },
    {
      title: "Forensic Community Accommodation",
      badge: "MAPPA / CAS3 Approved",
      desc: "Ministry of Justice / HMPPS commissioned via an approved CAS3 provider. Self-contained, standard residential street.",
      icon: <Award className="text-[#DAA520]" size={24} />
    }
  ];

  return (
    <div className="bg-bone text-navy min-h-screen pt-[120px] pb-24 selection:bg-navy selection:text-bone">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        
        {/* Header Hero */}
        <div className="space-y-6 mb-16 text-center max-w-[1000px] mx-auto">
          <span className="text-[#DAA520] font-automobile text-[10px] uppercase tracking-[0.4em] block">
            Specialist Placement Solutions - Greater London & the Home Counties
          </span>
          <h1 className="text-4xl md:text-6xl font-headings italic leading-tight">
            Specialist Property Solutions for Care Sector Organisations Across London
          </h1>
          <p className="text-navy/70 leading-relaxed text-lg max-w-3xl mx-auto">
            Faith & Co has a dedicated specialism in sourcing and managing properties for care-sector organisations across Greater London. Our C2-licensed portfolio, compliance infrastructure, and understanding of the regulatory landscape make us a natural partner for operators who need properties meeting the requirements of Ofsted, the CQC, and local authority commissioning teams.
          </p>
        </div>

        {/* Real-world high-end photography block */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="h-[300px] overflow-hidden border border-navy/10 relative">
            <img 
              src="/caresector.jpg" 
              alt="High-end residential supported living facility interior" 
              className="w-full h-full object-cover mix-blend-luminosity brightness-95" 
            />
            <div className="absolute bottom-4 left-6 bg-navy/80 text-bone text-[8px] font-automobile tracking-widest uppercase px-3 py-1.5 border border-white/10">
              Modern Interior Spec
            </div>
          </div>
          <div className="h-[300px] overflow-hidden border border-navy/10 relative">
            <img 
              src="/townhouse.png" 
              alt="London Residential Streetscape" 
              className="w-full h-full object-cover mix-blend-luminosity brightness-95" 
            />
            <div className="absolute bottom-4 left-6 bg-navy/80 text-bone text-[8px] font-automobile tracking-widest uppercase px-3 py-1.5 border border-white/10">
              London Residential Streetscape
            </div>
          </div>
        </div>

        {/* C2 Licence Block */}
        <div className="bg-navy text-bone p-10 border border-white/5 mb-16 flex flex-col md:flex-row gap-8 items-center justify-between">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Award className="text-[#DAA520]" size={28} />
              <h2 className="text-2xl font-headings italic font-bold">What is a C2 Licence?</h2>
            </div>
            <p className="text-xs uppercase tracking-wider font-automobile text-bone/70 max-w-3xl leading-relaxed">
              A C2 licence (Large HMO Licence) is required for properties with 7 or more occupants. Faith & Co holds C2 licences across the managed portfolio - making the company one of very few estate agents in London who can legitimately offer properties to children's home operators and other organisations requiring C2-compliant accommodation. This is a rare and significant credential.
            </p>
          </div>
          <Link to="/contact" className="bg-[#DAA520] hover:bg-[#B8860B] text-navy font-bold text-[10px] tracking-[0.25em] uppercase px-8 py-4 shrink-0 text-center w-full md:w-auto">
            Inquire About C2 Stocks
          </Link>
        </div>

        {/* 9 Placement Sectors Grid (Two Columns on Desktop) */}
        <div>
          <h2 className="text-3xl font-headings italic text-center mb-4">Placement Sectors We Support</h2>
          <p className="text-center text-[10px] font-automobile tracking-widest text-[#DAA520] uppercase mb-12">C2 & HMO Compliant Inventory</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sectors.map((sec, idx) => (
              <div 
                key={idx} 
                className="border border-navy/10 p-8 bg-white/40 shadow-sm hover:border-[#DAA520] transition-colors duration-300 flex items-start gap-6"
              >
                <div className="p-3 border border-navy/5 bg-white/60 shrink-0">
                  {sec.icon}
                </div>
                <div className="space-y-3">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="font-headings italic text-xl font-bold">{sec.title}</h3>
                    <span className="bg-[#DAA520]/15 text-[#B8860B] text-[8px] font-automobile tracking-wider uppercase py-0.5 px-2 font-bold">
                      {sec.badge}
                    </span>
                  </div>
                  <p className="text-xs text-navy/70 leading-relaxed font-automobile uppercase tracking-wider">
                    {sec.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default CareSectorPage;
