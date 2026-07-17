import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, CheckCircle2, ChevronDown, Award, Trash2, Shield, Wrench, Search, MessageSquare, Plus, Minus } from 'lucide-react';

const HMOManagementPage = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const inclusions = [
    { title: "Professional Tenant Sourcing", desc: "We source and thoroughly vet working professionals and suitable tenants for every room - reliability, affordability, and compatibility. Right-to-rent checks included.", icon: <Search size={20} className="text-[#DAA520]" /> },
    { title: "HMO & C2 Licensing Management", desc: "We manage the full licensing process - mandatory HMO licences and C2 licences - as a standard part of our service. Application, documentation, and renewal handled entirely by our team.", icon: <ShieldCheck size={20} className="text-[#DAA520]" /> },
    { title: "Full Day-to-Day Management", desc: "Rent collection, minor maintenance, routine inspections, and all tenant communications. No landlord involvement required.", icon: <Shield size={20} className="text-[#DAA520]" /> },
    { title: "Bi-Weekly Professional Cleaning", desc: "Professional cleaning carried out bi-weekly for all managed HMOs to maintain hygiene, communal area standards, and property appeal.", icon: <Trash2 size={20} className="text-[#DAA520]" /> },
    { title: "Routine Property Inspections", desc: "Scheduled inspections identify minor issues early - preventing costly repairs. Written reports with photographs provided after every inspection.", icon: <Search size={20} className="text-[#DAA520]" /> },
    { title: "End-of-Tenancy Deep Clean", desc: "Professional deep cleaning between every tenancy - every new tenant moves into a property at the highest standard.", icon: <Trash2 size={20} className="text-[#DAA520]" /> },
    { title: "Compliance Documentation", desc: "Gas safety certificate (annual), EICR (5-yearly), EPC, fire risk assessment, fire doors, interlinked smoke alarms, CO detectors, emergency lighting, PAT testing, legionella risk assessment - all managed proactively on schedule.", icon: <Award size={20} className="text-[#DAA520]" /> },
    { title: "Maintenance Coordination", desc: "All minor maintenance using our network of approved local contractors. 24/7 maintenance reporting for tenants.", icon: <Wrench size={20} className="text-[#DAA520]" /> },
    { title: "Guaranteed Rent Option", desc: "Fixed monthly income regardless of room occupancy - paid on the same date every month. Available alongside full HMO management.", icon: <ShieldCheck size={20} className="text-[#DAA520]" /> }
  ];

  const faqs = [
    { q: "Do I need an HMO licence?", a: "Yes, if your property has five or more occupants from two or more households. Many London boroughs require licences from three occupants - we advise on your specific borough's requirements before onboarding." },
    { q: "What compliance is needed?", a: "Gas safety (annual), EICR (every 5 years), EPC (minimum C for new tenancies), fire risk assessment, fire doors, interlinked smoke alarms, CO detectors, emergency lighting, PAT testing. Faith & Co manage all of this as standard." },
    { q: "Can you take over an existing HMO?", a: "Yes - professional takeover with minimal disruption. We carry out a full compliance audit on handover." },
    { q: "What if tenants don't pay?", a: "Under Guaranteed Rent, you receive your fixed income regardless. Under standard management, we actively manage arrears and take the necessary legal steps." },
    { q: "Which areas do you manage HMOs in?", a: "All 32 London boroughs and the Home Counties. Contact us about your specific location." }
  ];

  return (
    <div className="bg-bone text-navy min-h-screen pt-[120px] pb-24 selection:bg-navy selection:text-bone">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        
        {/* Header Hero Section */}
        <div className="space-y-6 mb-16 text-center max-w-[1000px] mx-auto">
          <span className="text-[#DAA520] font-automobile text-[10px] uppercase tracking-[0.4em] block">
            HMO Letting Agents - Greater London & the Home Counties
          </span>
          <h1 className="text-4xl md:text-6xl font-headings italic leading-tight">
            Expert HMO Property Management With Optional Guaranteed Rent Across London
          </h1>
          
          {/* Trust Strip */}
          <div className="flex flex-wrap justify-center items-center gap-6 py-4 border-y border-navy/10 text-[9px] font-automobile uppercase tracking-wider text-navy/70">
            <span>✓ No Hidden Fees</span>
            <span>✓ Guaranteed Rent Option</span>
            <span>✓ HMO & C2 Licensed</span>
            <span>✓ Full Hands-Off Management</span>
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
            Managing a House in Multiple Occupation requires specialist expertise that most letting agents simply do not have. Faith & Co specialises in HMO management across all 32 London boroughs - providing fully managed, fully compliant HMO services to landlords wherever their property sits in Greater London or the Home Counties.
          </p>
          <p className="text-sm leading-relaxed text-navy/80 font-automobile uppercase tracking-wider">
            Our licensing infrastructure - mandatory HMO licences and C2 licences - covers every London borough. As of 2025, 28 out of 32 London boroughs operate licensing schemes. We manage every one of them as a standard part of our service.
          </p>
        </div>

        {/* What is an HMO */}
        <div className="mb-16 border-l-2 border-[#DAA520] pl-6 md:pl-12 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-headings italic mb-4">What Is an HMO?</h2>
          <p className="text-xs uppercase tracking-widest text-navy/70 leading-relaxed font-automobile">
            A House in Multiple Occupation (HMO) is a property rented to three or more tenants who are not from the same household and share facilities such as a kitchen or bathroom. Any HMO with five or more occupants from two or more households requires a mandatory HMO licence. Additional licensing rules apply in many London boroughs - including Ealing, Hounslow, Brent, and others - covering properties with as few as three occupants. Faith & Co manages the full licensing process as part of our standard management service.
          </p>
        </div>

        {/* Two Ways We Work */}
        <div className="mb-16">
          <h2 className="text-3xl font-headings italic text-center mb-10">Two Ways We Work With HMO Landlords</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border border-navy/10 p-8 bg-[#111827] text-bone">
              <span className="text-[#DAA520] font-automobile text-[10px] uppercase tracking-[0.3em] font-bold block mb-4">Option 01</span>
              <h3 className="text-2xl font-headings italic font-bold mb-6">Full Management From Start</h3>
              <ul className="space-y-3 text-[10px] uppercase tracking-wider font-automobile text-bone/70">
                <li>• Property marketing and viewings</li>
                <li>• Tenant sourcing, referencing and vetting</li>
                <li>• Tenancy agreements and move-in</li>
                <li>• Rent collection or guaranteed rent</li>
                <li>• Ongoing management, inspections, and maintenance</li>
                <li>• All tenant communication handled</li>
                <li>• HMO licence managed throughout</li>
              </ul>
            </div>
            
            <div className="border border-navy/10 p-8 bg-[#111827] text-bone">
              <span className="text-[#DAA520] font-automobile text-[10px] uppercase tracking-[0.3em] font-bold block mb-4">Option 02</span>
              <h3 className="text-2xl font-headings italic font-bold mb-6">Take-Over of Existing HMO</h3>
              <ul className="space-y-3 text-[10px] uppercase tracking-wider font-automobile text-bone/70">
                <li>• Seamless handover - existing tenants notified professionally</li>
                <li>• Rent collection transferred immediately</li>
                <li>• All maintenance requests managed from day one</li>
                <li>• Routine inspections and reporting</li>
                <li>• Full HMO compliance audit on takeover</li>
                <li>• Optional guaranteed rent available</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Full HMO Management Service Inclusions */}
        <div className="mb-16">
          <h2 className="text-3xl font-headings italic text-center mb-4">Full HMO Management Service</h2>
          <p className="text-center text-[10px] font-automobile tracking-widest text-[#DAA520] uppercase mb-12">What is included as standard</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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

        {/* Why HMOs Are a Strong Investment */}
        <div className="bg-navy text-bone p-12 text-center max-w-4xl mx-auto mb-16 border border-white/5 space-y-4">
          <h2 className="text-2xl md:text-3xl font-headings italic">Why HMOs Are a Strong Investment</h2>
          <p className="text-[10px] font-automobile uppercase tracking-widest text-bone/70 leading-relaxed max-w-2xl mx-auto">
            HMO properties typically deliver 30–50% stronger yields than comparable single-let properties. Renting individual rooms to multiple tenants maximises the overall income from the property. When expertly managed, HMOs attract reliable long-term tenants and generate strong, stable returns. Faith & Co handles the full management scope - you benefit from higher yields without any operational complexity.
          </p>
        </div>

        {/* HMO FAQ */}
        <div className="max-w-[800px] mx-auto border-t border-navy/10 pt-16">
          <h2 className="text-3xl font-headings italic text-center mb-10">HMO Management FAQ</h2>
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

export default HMOManagementPage;
