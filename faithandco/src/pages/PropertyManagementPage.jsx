import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, CheckCircle2, Award, ClipboardCheck, Wrench, Search, MessageSquare, Shield } from 'lucide-react';

const PropertyManagementPage = () => {
  const features = [
    { title: "Tenant Sourcing & Referencing", desc: "Professional marketing, accompanied viewings, full referencing (employment, credit, previous landlord), and right-to-rent compliance for every tenant.", icon: <Search size={20} className="text-[#DAA520]" /> },
    { title: "Tenancy Agreements", desc: "Legally compliant tenancy agreements, deposit protection registration, and all prescribed information - in compliance with the Renters' Rights Act 2025.", icon: <ClipboardCheck size={20} className="text-[#DAA520]" /> },
    { title: "Rent Collection", desc: "Monthly rent collection with clear statements and direct bank transfer. Arrears management included.", icon: <Shield size={20} className="text-[#DAA520]" /> },
    { title: "Maintenance Coordination", desc: "24/7 maintenance reporting. We triage, instruct, and oversee all repairs using approved local contractors.", icon: <Wrench size={20} className="text-[#DAA520]" /> },
    { title: "Routine Inspections", desc: "Mid-tenancy inspections with written reports and photographs - confirming condition and identifying issues early.", icon: <Search size={20} className="text-[#DAA520]" /> },
    { title: "Legal & Compliance", desc: "All notices, deposit dispute management, and end-of-tenancy correspondence handled in line with current legislation.", icon: <ShieldCheck size={20} className="text-[#DAA520]" /> },
    { title: "Renewal Management", desc: "Tenancy renewals, rent reviews, and compliance updates managed throughout.", icon: <Award size={20} className="text-[#DAA520]" /> },
    { title: "Guaranteed Rent Option", desc: "Available alongside full management - fixed monthly income regardless of occupancy or arrears.", icon: <ShieldCheck size={20} className="text-[#DAA520]" /> }
  ];

  return (
    <div className="bg-bone text-navy min-h-screen pt-[120px] pb-24 selection:bg-navy selection:text-bone">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        
        {/* Header Hero Section */}
        <div className="space-y-6 mb-16 text-center max-w-[1000px] mx-auto">
          <span className="text-[#DAA520] font-automobile text-[10px] uppercase tracking-[0.4em] block">
            Landlord Services - Greater London & the Home Counties
          </span>
          <h1 className="text-4xl md:text-6xl font-headings italic leading-tight">
            Hands-Off Property Management Across Greater London and the Home Counties
          </h1>
          
          {/* Trust Strip */}
          <div className="flex flex-wrap justify-center items-center gap-6 py-4 border-y border-navy/10 text-[9px] font-automobile uppercase tracking-wider text-navy/70">
            <span>✓ No Hidden Fees</span>
            <span>✓ Guaranteed Rent Option</span>
            <span>✓ Full Management</span>
            <span>✓ All London Boroughs</span>
            <span>✓ Trusted Landlord Service</span>
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-6">
            <Link to="/landlords/free-valuation" className="bg-[#DAA520] hover:bg-[#B8860B] text-navy font-bold text-[10px] tracking-[0.25em] uppercase px-8 py-4 w-full sm:w-auto text-center">
              Request Free Valuation
            </Link>
            <Link to="/contact" className="border border-navy/20 hover:border-navy text-navy font-bold text-[10px] tracking-[0.25em] uppercase px-8 py-4 w-full sm:w-auto text-center">
              Speak To An Advisor
            </Link>
          </div>
        </div>

        {/* Intro */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-sm md:text-base leading-relaxed text-navy/80 font-automobile uppercase tracking-wider">
            Faith & Co's property management service is designed for landlords across Greater London and the Home Counties who want a truly hands-off experience. We handle everything from tenancy agreements and rent collection through to inspections, maintenance coordination, and renewals - with optional guaranteed rent and transparent monthly reporting throughout.
          </p>
        </div>

        {/* Two Ways We Work */}
        <div className="mb-16">
          <h2 className="text-3xl font-headings italic text-center mb-10">Two Onboarding Models Available</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border border-navy/10 p-8 bg-[#111827] text-bone">
              <span className="text-[#DAA520] font-automobile text-[10px] uppercase tracking-[0.3em] font-bold block mb-4">Model 01</span>
              <h3 className="text-2xl font-headings italic font-bold mb-4">Full Management From Start</h3>
              <p className="text-xs text-bone/60 leading-relaxed font-automobile uppercase tracking-wider">
                Property marketing, tenant sourcing and referencing, tenancy agreements, rent collection, maintenance, inspections, and all tenant communication.
              </p>
            </div>
            
            <div className="border border-navy/10 p-8 bg-[#111827] text-bone">
              <span className="text-[#DAA520] font-automobile text-[10px] uppercase tracking-[0.3em] font-bold block mb-4">Model 02</span>
              <h3 className="text-2xl font-headings italic font-bold mb-4">Take-Over Management</h3>
              <p className="text-xs text-bone/60 leading-relaxed font-automobile uppercase tracking-wider">
                You have tenants already. We take over the existing tenancy - rent collection, maintenance, inspections, renewals, and end-of-tenancy process, from the handover date.
              </p>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div>
          <h2 className="text-3xl font-headings italic text-center mb-10">Detailed Service Scope</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feat, idx) => (
              <div key={idx} className="border border-navy/10 p-6 bg-white/40 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="mb-4">{feat.icon}</div>
                  <h4 className="font-headings italic text-lg font-bold mb-2">{feat.title}</h4>
                  <p className="text-xs text-navy/60 leading-relaxed">{feat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default PropertyManagementPage;
