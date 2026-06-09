import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, FileText, CheckCircle, ShieldCheck } from 'lucide-react';

const CompanyCorporateLets = () => {
  const points = [
    { title: "Corporate Tenancy Agreements", desc: "Company AST agreements drafted specifically for corporate lets. We ensure the contracting entity is a registered company with verified financials.", icon: <FileText className="text-[#DAA520]" size={24} /> },
    { title: "Fully Managed Option", desc: "From tenant onboarding and check-in through to cleaning, inspections, maintenance, and check-out - we manage the entire tenancy cycle.", icon: <CheckCircle className="text-[#DAA520]" size={24} /> },
    { title: "Vetted Company Accounts", desc: "Faith & Co works with verified corporate accounts, relocation companies, and key worker accommodation coordinators across London.", icon: <Building2 className="text-[#DAA520]" size={24} /> },
    { title: "Guaranteed Rent Scheme Option", desc: "Available alongside corporate lets. Fixed monthly income paid directly by Faith & Co - eliminating rent arrears and void periods completely.", icon: <ShieldCheck className="text-[#DAA520]" size={24} /> }
  ];

  return (
    <div className="bg-bone text-navy min-h-screen pt-[120px] pb-24 selection:bg-navy selection:text-bone">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <span className="text-[#DAA520] font-automobile text-[10px] uppercase tracking-[0.4em] block mb-4">Corporate Lets</span>
        <h1 className="text-4xl md:text-6xl font-headings italic mb-8">Company & Corporate Lettings Across Greater London and the Home Counties</h1>
        
        <p className="text-navy/70 leading-relaxed text-lg max-w-3xl mb-16">
          Our company letting service connects landlords with corporate tenants, relocation agencies, and reputable organisations seeking high-quality residential accommodation for their staff. We source, vet, and manage corporate lets - offering landlords strong rental yields and stable, professional occupancies.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {points.map((pt, idx) => (
            <div key={idx} className="border border-navy/10 p-8 bg-white/40 shadow-sm flex items-start gap-4">
              <div className="p-3 border border-navy/5 bg-white/60 shrink-0">
                {pt.icon}
              </div>
              <div className="space-y-2">
                <h3 className="font-headings italic text-xl font-bold">{pt.title}</h3>
                <p className="text-xs text-navy/70 leading-relaxed font-automobile uppercase tracking-wider">{pt.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-navy text-bone p-12 text-center space-y-6">
          <h2 className="text-2xl md:text-3xl font-headings italic">Have a property suitable for corporate lets?</h2>
          <p className="text-[10px] font-automobile uppercase tracking-widest text-bone/60 max-w-xl mx-auto">
            Discuss corporate tenant demand, licensing compliance, and rental potential.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <Link to="/contact" className="bg-[#DAA520] hover:bg-[#B8860B] text-navy font-bold text-[10px] tracking-[0.25em] uppercase px-8 py-4">
              Discuss Corporate Lets
            </Link>
            <Link to="/landlords/free-valuation" className="border border-white/20 hover:border-white text-bone font-bold text-[10px] tracking-[0.25em] uppercase px-8 py-4">
              Request Free Valuation
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyCorporateLets;
