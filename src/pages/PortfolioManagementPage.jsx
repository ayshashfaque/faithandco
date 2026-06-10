import React from 'react';
import { Link } from 'react-router-dom';
import { UserCheck, BarChart3, ShieldCheck, Home, CheckSquare, Plus } from 'lucide-react';

const PortfolioManagementPage = () => {
  const points = [
    { title: "Single Point of Contact", desc: "One dedicated portfolio manager - all communications, maintenance, and reporting through one person.", icon: <UserCheck size={24} className="text-[#DAA520]" /> },
    { title: "Consolidated Reporting", desc: "One monthly report: rent received, maintenance, inspection summaries, compliance renewals across all properties.", icon: <BarChart3 size={24} className="text-[#DAA520]" /> },
    { title: "Guaranteed Rent Available", desc: "Available on individual properties or across the full portfolio. Fixed income certainty at scale.", icon: <ShieldCheck size={24} className="text-[#DAA520]" /> },
    { title: "HMOs & Single-Lets", desc: "Both property types managed under one arrangement - one agent, consistent standards.", icon: <Home size={24} className="text-[#DAA520]" /> },
    { title: "Portfolio-Wide Compliance", desc: "All HMO licences, certificates, and compliance renewals managed proactively across your full portfolio.", icon: <CheckSquare size={24} className="text-[#DAA520]" /> },
    { title: "Available From", desc: "2 properties upwards. Scales with you.", icon: <Plus size={24} className="text-[#DAA520]" /> }
  ];

  return (
    <div className="bg-bone text-navy min-h-screen pt-[120px] pb-24 selection:bg-navy selection:text-bone">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <span className="text-[#DAA520] font-automobile text-[10px] uppercase tracking-[0.4em] block mb-4">Portfolio Services</span>
        <h1 className="text-4xl md:text-6xl font-headings italic mb-8">Portfolio Management for London Landlords - One Contact, Every Property</h1>
        
        <p className="text-navy/70 leading-relaxed text-lg max-w-3xl mb-16">
          Our portfolio management service gives multi-property landlords across Greater London and the Home Counties a single dedicated point of contact managing every property - whether an HMO in Brent, a flat in Canary Wharf, or a house in Essex.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {points.map((pt, idx) => (
            <div key={idx} className="border border-navy/10 p-8 bg-white/40 shadow-sm flex flex-col justify-between">
              <div>
                <div className="mb-4">{pt.icon}</div>
                <h3 className="font-headings italic text-xl font-bold mb-3">{pt.title}</h3>
                <p className="text-xs text-navy/70 leading-relaxed font-automobile uppercase tracking-wider">{pt.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-[#111827] text-bone p-12 text-center space-y-6">
          <h2 className="text-2xl md:text-3xl font-headings italic">Consolidate your properties today</h2>
          <p className="text-[10px] font-automobile uppercase tracking-widest text-bone/60 max-w-xl mx-auto">
            Get a tailored proposal for your London portfolio. Talk to our specialist team.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <Link to="/contact" className="bg-[#DAA520] hover:bg-[#B8860B] text-navy font-bold text-[10px] tracking-[0.25em] uppercase px-8 py-4">
              Discuss Portfolio
            </Link>
            <Link to="/landlords/free-valuation" className="border border-white/20 hover:border-white text-bone font-bold text-[10px] tracking-[0.25em] uppercase px-8 py-4">
              Get Portfolio Valuation
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioManagementPage;
