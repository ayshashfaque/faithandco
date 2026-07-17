import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus, Minus, ArrowRight, ShieldCheck, CheckCircle2, Award, ClipboardCheck, Wrench, Search, Shield, DollarSign } from 'lucide-react';

const GuaranteedRentPage = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const inclusions = [
    { title: "Fixed Monthly Income", desc: "Paid on the same date every month, regardless of occupancy or tenant arrears. Contractually guaranteed.", icon: <DollarSign size={20} className="text-[#DAA520]" /> },
    { title: "No Void Risk", desc: "You receive income even when the property is empty between tenancies. We cover all void costs.", icon: <ShieldCheck size={20} className="text-[#DAA520]" /> },
    { title: "No Fees or Commission", desc: "What we agree is what you receive, every month. No percentage taken, no hidden charges.", icon: <Shield size={20} className="text-[#DAA520]" /> },
    { title: "Full Tenant Management", desc: "Sourcing, referencing, vetting, communication, and all tenant matters - entirely handled by our team.", icon: <CheckCircle2 size={20} className="text-[#DAA520]" /> },
    { title: "Maintenance Coordination", desc: "All minor maintenance using our approved local contractors across London.", icon: <Wrench size={20} className="text-[#DAA520]" /> },
    { title: "Regular Inspections", desc: "Scheduled inspections with written reports - protecting your asset throughout the lease.", icon: <Search size={20} className="text-[#DAA520]" /> },
    { title: "Compliance Management", desc: "Gas safety, EICR, EPC, fire safety, HMO licensing - all managed proactively and renewed on schedule.", icon: <ClipboardCheck size={20} className="text-[#DAA520]" /> },
    { title: "Professional Cleaning", desc: "Bi-weekly professional cleaning for HMO properties. End-of-tenancy deep cleans included.", icon: <ShieldCheck size={20} className="text-[#DAA520]" /> }
  ];

  const suitability = [
    { q: "Tired of chasing rent or handling repairs?", a: "We take the entire operational burden off your plate. No dealing with tenants, maintenance, or arrears." },
    { q: "Living overseas or outside London?", a: "We are your London management team - reliable, responsive, and in full control of your property." },
    { q: "Want predictable monthly returns?", a: "Fixed income, paid on time, every month. Regardless of the market." },
    { q: "First-time or accidental landlord?", a: "We guide you through licensing, compliance, and lease structures clearly from day one." },
    { q: "Growing portfolio?", a: "Available on individual properties or across your full portfolio." },
    { q: "Property currently vacant?", a: "We can onboard and begin sourcing tenants immediately from the lease start date." }
  ];

  const faqs = [
    { q: "Do I still deal with tenants?", a: "No. We handle all tenant communication, maintenance, inspections, and day-to-day management entirely." },
    { q: "What is the minimum lease term?", a: "Minimum three-year lease, with flexibility up to five years." },
    { q: "What if the property is damaged?", a: "We take responsibility for maintaining the property to a high standard throughout. Tenant damage is our cost to resolve." },
    { q: "Are there any fees?", a: "No fees, no commissions, no hidden charges. What we agree is what you receive every month." },
    { q: "Does it cover HMOs?", a: "Yes - available for single lets, HMOs, and portfolios." },
    { q: "What if I want to sell?", a: "Exit provisions are agreed and included in the lease at the outset." },
    { q: "How quickly can payments start?", a: "Payments begin from the agreed start date once the lease is signed. Onboarding typically takes two to three weeks." },
    { q: "Can I see the property during the lease?", a: "Yes - we carry out regular inspections and provide reports. Property visits can be arranged with advance notice." }
  ];

  return (
    <div className="bg-bone text-navy min-h-screen pt-[120px] pb-24 selection:bg-navy selection:text-bone">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        
        {/* Header Hero Section */}
        <div className="space-y-6 mb-16 text-center max-w-[1000px] mx-auto">
          <span className="text-[#DAA520] font-automobile text-[10px] uppercase tracking-[0.4em] block">
            Guaranteed Rent Scheme - Greater London & the Home Counties
          </span>
          <h1 className="text-4xl md:text-6xl font-headings italic leading-tight">
            Guaranteed Rent for London Landlords - Fixed Income, No Voids, No Fees
          </h1>
          <h2 className="text-sm md:text-base tracking-[0.3em] font-automobile text-navy/60 uppercase">
            For HMOs, Single Lets, and Portfolios Across Greater London and the Home Counties
          </h2>
          
          {/* Trust Strip */}
          <div className="flex flex-wrap justify-center items-center gap-6 py-4 border-y border-navy/10 text-[9px] font-automobile uppercase tracking-wider text-navy/70">
            <span>✓ No Hidden Fees</span>
            <span>✓ Fixed Income Regardless of Occupancy</span>
            <span>✓ We Become Your Corporate Tenant</span>
            <span>✓ Full Management Included</span>
            <span>✓ All 32 London Boroughs</span>
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-6">
            <Link to="/landlords/free-valuation" className="bg-[#DAA520] hover:bg-[#B8860B] text-navy font-bold text-[10px] tracking-[0.25em] uppercase px-8 py-4 w-full sm:w-auto text-center">
              Get A Free Property Assessment
            </Link>
            <Link to="/contact" className="border border-navy/20 hover:border-navy text-navy font-bold text-[10px] tracking-[0.25em] uppercase px-8 py-4 w-full sm:w-auto text-center">
              Speak To An Agent Today
            </Link>
          </div>
        </div>

        {/* Intros Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 bg-white/40 border border-navy/5 p-8 md:p-12">
          <p className="text-sm leading-relaxed text-navy/80 font-automobile uppercase tracking-wider">
            Faith & Co's Guaranteed Rent scheme is available to landlords across Greater London and the surrounding Home Counties. Whether your property is in central London, an outer borough, or the commuter belt, we can lease it directly and pay you a fixed monthly income - regardless of occupancy or tenant arrears.
          </p>
          <p className="text-sm leading-relaxed text-navy/80 font-automobile uppercase tracking-wider">
            We become your professional corporate tenant, assuming all risk and responsibility for management, rent collection, and day-to-day maintenance. This is a direct lease arrangement with Faith & Co Estates - giving you complete financial security backed by a licensed, compliance-led property management company.
          </p>
        </div>

        {/* 3-Step Process */}
        <div className="mb-16">
          <h2 className="text-3xl font-headings italic text-center mb-12">Our Simple 3-Step Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border border-navy/10 p-8 bg-[#111827] text-bone flex flex-col justify-between">
              <div>
                <span className="text-[#DAA520] font-automobile text-[10px] uppercase tracking-[0.3em] font-bold block mb-4">Step 01</span>
                <h3 className="text-xl font-headings italic font-bold mb-4">Free Property Assessment</h3>
                <p className="text-xs text-bone/60 leading-relaxed font-automobile uppercase tracking-wider">
                  We carry out a no-obligation assessment, agree on a fair fixed monthly rent, and advise on any compliance requirements. No commitment required.
                </p>
              </div>
            </div>
            
            <div className="border border-navy/10 p-8 bg-[#111827] text-bone flex flex-col justify-between">
              <div>
                <span className="text-[#DAA520] font-automobile text-[10px] uppercase tracking-[0.3em] font-bold block mb-4">Step 02</span>
                <h3 className="text-xl font-headings italic font-bold mb-4">We Become Your Tenant</h3>
                <p className="text-xs text-bone/60 leading-relaxed font-automobile uppercase tracking-wider">
                  Faith & Co signs a lease directly with you. We are legally responsible for rent, property maintenance, and all end-tenants throughout the agreed term.
                </p>
              </div>
            </div>

            <div className="border border-navy/10 p-8 bg-[#111827] text-bone flex flex-col justify-between">
              <div>
                <span className="text-[#DAA520] font-automobile text-[10px] uppercase tracking-[0.3em] font-bold block mb-4">Step 03</span>
                <h3 className="text-xl font-headings italic font-bold mb-4">We Handle Everything</h3>
                <p className="text-xs text-bone/60 leading-relaxed font-automobile uppercase tracking-wider">
                  Tenant sourcing, referencing, maintenance, inspections, and compliance renewals - all our responsibility. You receive your guaranteed income and monthly report. Nothing else required from you.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* What is Included */}
        <div className="mb-16">
          <h2 className="text-3xl font-headings italic text-center mb-10">What Is Included</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {inclusions.map((inc, idx) => (
              <div key={idx} className="border border-navy/10 p-6 bg-white/40 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="mb-4">{inc.icon}</div>
                  <h4 className="font-headings italic text-lg font-bold mb-2">{inc.title}</h4>
                  <p className="text-xs text-navy/60 leading-relaxed">{inc.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* What Makes It Different */}
        <div className="bg-[#111827] text-bone p-12 text-center max-w-4xl mx-auto mb-16 border border-white/5 space-y-4">
          <h2 className="text-2xl md:text-3xl font-headings italic text-[#DAA520]">What Makes It Different</h2>
          <p className="text-[10px] font-automobile uppercase tracking-widest text-bone/70 leading-relaxed max-w-2xl mx-auto">
            Faith & Co's financial success is directly aligned with yours. We profit only by securing reliable tenants and managing the property effectively. If tenants fail to pay us, we absorb that loss - you never do.
          </p>
        </div>

        {/* Is It Right For You? */}
        <div className="mb-16">
          <h2 className="text-3xl font-headings italic text-center mb-10">Is It Right For You?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {suitability.map((suit, idx) => (
              <div key={idx} className="border border-navy/10 p-6 bg-white/40 shadow-sm space-y-2">
                <h4 className="font-headings italic text-lg font-bold text-navy">{suit.q}</h4>
                <p className="text-xs text-navy/60 leading-relaxed">{suit.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-[800px] mx-auto border-t border-navy/10 pt-16">
          <h2 className="text-3xl font-headings italic text-center mb-10">Guaranteed Rent FAQ</h2>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border-b border-navy/10 pb-4">
                <button 
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex justify-between items-center text-left py-4 hover:text-[#DAA520] transition-colors"
                >
                  <span className="font-headings italic text-lg font-bold">{faq.q}</span>
                  {openFaq === idx ? <Minus size={18} className="text-[#DAA520]" /> : <Plus size={18} className="text-[#DAA520]" />}
                </button>
                {openFaq === idx && (
                  <div className="py-2 text-sm text-navy/70 leading-relaxed font-automobile uppercase tracking-wider">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default GuaranteedRentPage;
