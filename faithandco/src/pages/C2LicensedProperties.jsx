import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus, Minus, CheckCircle2, ArrowRight } from 'lucide-react';

const C2LicensedProperties = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.lang = "en-GB";
    document.title = "C2 Use Class Properties To Let London | Faith & Co";

    const updateMeta = (name, content, isOg = false) => {
      let el = document.querySelector(isOg ? `meta[property="${name}"]` : `meta[name="${name}"]`);
      if (!el) {
        el = document.createElement('meta');
        if (isOg) el.setAttribute('property', name);
        else el.setAttribute('name', name);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    updateMeta('description', "C2 use class properties to let across London and the Home Counties. Ready premises for children's homes, supported living and care providers. Planning resolved.");
    updateMeta('robots', 'index, follow');
    
    updateMeta('og:type', 'website', true);
    updateMeta('og:site_name', 'Faith & Co Estates', true);
    updateMeta('og:locale', 'en_GB', true);
    updateMeta('og:title', 'C2 Use Class Properties To Let London | Faith & Co', true);
    updateMeta('og:description', "C2 use class properties to let across London and the Home Counties. Ready premises for children's homes, supported living and care providers. Planning resolved.", true);
    updateMeta('og:url', window.location.href, true);

    const addJsonLd = (id, data) => {
      let script = document.getElementById(id);
      if (!script) {
        script = document.createElement('script');
        script.id = id;
        script.type = 'application/ld+json';
        document.head.appendChild(script);
      }
      script.innerHTML = JSON.stringify(data);
    };

    addJsonLd('json-ld-service', {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "C2 Use Class Property Lettings",
      "areaServed": {
        "@type": "AdministrativeArea",
        "name": "Greater London and the Home Counties",
        "description": "Greater London, Middlesex, Berkshire, Surrey, Hertfordshire, Essex, Kent, and Buckinghamshire"
      },
      "audience": {
        "@type": "Audience",
        "audienceType": "Care, children's home, and supported living providers"
      }
    });

    addJsonLd('json-ld-breadcrumb', {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://faithandco.co.uk/" },
        { "@type": "ListItem", "position": 2, "name": "Specialist Services", "item": "https://faithandco.co.uk/services/specialist" },
        { "@type": "ListItem", "position": 3, "name": "C2 Licensed Properties", "item": "https://faithandco.co.uk/services/c2-licensed-properties" }
      ]
    });

    addJsonLd('json-ld-faq', {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "What is a C2 use class property?", "acceptedAnswer": { "@type": "Answer", "text": "C2 is the planning use class for residential institutions in England, covering care homes, children's homes and other premises where residents receive care. A property needs C2 planning consent (or a lawful C2 use) before it can operate as a registered care setting. Converting a standard house (C3) to C2 requires planning permission, which is the single biggest barrier most providers face when sourcing premises." } },
        { "@type": "Question", "name": "Do you have properties with C2 planning permission already granted?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Faith & Co holds C2 licensed properties within its managed portfolio, including premises with C2 consent granted specifically for children's care home use. Because the planning position is already resolved, an operator can move straight to fit-out, registration and mobilisation rather than waiting months for a planning decision with no guaranteed outcome." } },
        { "@type": "Question", "name": "Who registers with Ofsted or CQC, the landlord or the provider?", "acceptedAnswer": { "@type": "Answer", "text": "The care provider registers, never the landlord. Ofsted registers children's homes and supported accommodation for 16 and 17 year olds; the CQC regulates adult care services. Faith & Co's role is to supply compliant premises and supportive landlord arrangements so the provider's registration is built on solid property foundations." } },
        { "@type": "Question", "name": "What lease terms do you offer care providers?", "acceptedAnswer": { "@type": "Answer", "text": "Most placements use a full repairing and insuring (FRI) lease to the provider, typically for 3 to 5 years or longer, giving the operator the security of tenure that Ofsted and CQC expect to see and commissioners look for. Terms are agreed property by property and we are experienced in the lease structures care providers and their funders require." } },
        { "@type": "Question", "name": "Can you source a property to our specification?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. If nothing in the current portfolio fits, we source to brief: bed numbers, room sizes, layout, location risk profile, outdoor space and any planning requirement. We work across all 32 London boroughs and the Home Counties and can advise on the planning route where C2 consent is not yet in place." } },
        { "@type": "Question", "name": "Which areas do you cover?", "acceptedAnswer": { "@type": "Answer", "text": "Greater London (all 32 boroughs) and the surrounding Home Counties, including Berkshire, Surrey, Hertfordshire, Essex, Kent and Buckinghamshire, with particular depth in West London and Middlesex." } }
      ]
    });

    return () => {
      document.title = "Faith and Co | Specialised HMO and Supported Living";
      ['json-ld-service', 'json-ld-breadcrumb', 'json-ld-faq'].forEach(id => {
        const script = document.getElementById(id);
        if (script) script.remove();
      });
    };
  }, []);

  const [openFaq, setOpenFaq] = useState(null);
  const toggleFaq = (idx) => setOpenFaq(openFaq === idx ? null : idx);

  const faqs = [
    {
      q: "What is a C2 use class property?",
      a: "C2 is the planning use class for residential institutions in England, covering care homes, children's homes and other premises where residents receive care. A property needs C2 planning consent (or a lawful C2 use) before it can operate as a registered care setting. Converting a standard house (C3) to C2 requires planning permission, which is the single biggest barrier most providers face when sourcing premises."
    },
    {
      q: "Do you have properties with C2 planning permission already granted?",
      a: "Yes. Faith & Co holds C2 licensed properties within its managed portfolio, including premises with C2 consent granted specifically for children's care home use. Because the planning position is already resolved, an operator can move straight to fit-out, registration and mobilisation rather than waiting months for a planning decision with no guaranteed outcome."
    },
    {
      q: "Who registers with Ofsted or CQC, the landlord or the provider?",
      a: "The care provider registers, never the landlord. Ofsted registers children's homes and supported accommodation for 16 and 17 year olds; the CQC regulates adult care services. Faith & Co's role is to supply compliant premises and supportive landlord arrangements so the provider's registration is built on solid property foundations."
    },
    {
      q: "What lease terms do you offer care providers?",
      a: "Most placements use a full repairing and insuring (FRI) lease to the provider, typically for 3 to 5 years or longer, giving the operator the security of tenure that Ofsted and CQC expect to see and commissioners look for. Terms are agreed property by property and we are experienced in the lease structures care providers and their funders require."
    },
    {
      q: "Can you source a property to our specification?",
      a: "Yes. If nothing in the current portfolio fits, we source to brief: bed numbers, room sizes, layout, location risk profile, outdoor space and any planning requirement. We work across all 32 London boroughs and the Home Counties and can advise on the planning route where C2 consent is not yet in place."
    },
    {
      q: "Which areas do you cover?",
      a: "Greater London (all 32 boroughs) and the surrounding Home Counties, including Berkshire, Surrey, Hertfordshire, Essex, Kent and Buckinghamshire, with particular depth in West London and Middlesex."
    }
  ];

  return (
    <div className="bg-bone text-navy min-h-screen pt-[120px] selection:bg-navy selection:text-bone">
      
      {/* Hero Block */}
      <section className="bg-[#0b1320] text-white pt-24 pb-16 relative overflow-hidden flex flex-col justify-between">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 w-full relative z-10 flex-grow flex flex-col justify-center">
          <div className="max-w-[800px] text-center mx-auto space-y-6">
            <span className="text-[#DAA520] font-automobile text-[10px] uppercase tracking-[0.4em] block">
              C2 Use Class Properties: Greater London & the Home Counties
            </span>
            <h1 className="text-4xl md:text-6xl font-headings italic font-bold tracking-wide text-white drop-shadow-xl">
              C2 Properties, Ready for Care Providers
            </h1>
            <p className="text-white/80 leading-relaxed text-lg max-w-3xl mx-auto font-light pb-4">
              Faith & Co holds and sources C2 use class properties for children's home
              operators, supported living providers and care companies. Planning is the hardest
              part of opening a registered service. We bring properties where that work is
              already done.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Link to="/contact" className="w-full sm:w-auto bg-[#DAA520] hover:bg-[#B8860B] text-white font-bold text-[10px] uppercase tracking-[0.25em] px-8 py-4 transition-all duration-300">
                Enquire About C2 Properties
              </Link>
              <Link to="/services/care-sector-lettings" className="w-full sm:w-auto border border-white/20 hover:border-white/40 text-white font-bold text-[10px] uppercase tracking-[0.25em] px-8 py-4 transition-all duration-300">
                Care Sector Lettings
              </Link>
            </div>
          </div>
        </div>

        {/* Trust Value Strip inside Hero */}
        <div className="w-full border-t border-white/10 pt-8 mt-16 relative z-10">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-wrap justify-center items-center gap-x-8 gap-y-4">
            {[
              "C2 & HMO Licensed Portfolio",
              "All 32 London Boroughs",
              "Ofsted & CQC Sector Specialists",
              "FRI Leases Available",
              "Sourcing To Specification"
            ].map((trust, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-[#DAA520]" />
                <span className="text-[10px] font-automobile uppercase tracking-wider text-white/70 font-bold">{trust}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 1: Deep Dive & Comparison */}
      <section className="py-24 max-w-[1400px] mx-auto px-6 md:px-12 wrap">
        <div className="mb-16">
          <span className="text-[#DAA520] font-automobile text-[10px] uppercase tracking-[0.4em] block mb-4">
            PLANNING USE CLASSES EXPLAINED
          </span>
          <h2 className="text-3xl md:text-5xl font-headings italic text-navy mb-6">
            What a C2 Use Class Property Is, and Why It Matters
          </h2>
          <p className="text-navy/70 text-lg leading-relaxed max-w-3xl">
            In England, the planning use class of a building determines what it can lawfully be used
            for. For care providers, the class that matters is C2: residential institutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-16 lg:gap-24 items-start split">
          
          {/* Left Text */}
          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-headings italic text-navy font-bold mb-4">The planning barrier every provider hits</h3>
              <div className="space-y-4 text-navy/70 leading-relaxed font-automobile tracking-wide text-sm">
                <p>
                  A registered children's home, residential care home or similar care
                  setting normally needs C2 planning consent (or an established lawful
                  C2 use). Most available housing stock is C3, an ordinary dwellinghouse,
                  and converting C3 to C2 means a full planning application: months of
                  waiting, neighbour consultation, and no guaranteed approval.
                </p>
                <p>
                  For an operator with commissioned placements waiting, that delay is
                  the difference between mobilising a service this quarter and losing the
                  contract.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-headings italic text-navy font-bold mb-4">Where Faith & Co is different</h3>
              <p className="text-navy/70 leading-relaxed font-automobile tracking-wide text-sm">
                We hold C2 licensed properties within our managed portfolio,
                including premises with C2 consent granted specifically for children's
                care home use. When the planning position is already resolved, you
                move straight to fit-out, Ofsted or CQC registration, and mobilisation.
                That is the genuine differentiator we offer providers, and it is rare in
                the open market.
              </p>
            </div>
          </div>
          
          {/* Right Box Grid */}
          <div className="bg-white/40 border border-navy/10 border-t-[3px] border-t-[#DAA520] shadow-sm">
            <div className="flex flex-col sm:flex-row p-6 md:p-8 border-b border-navy/5">
              <div className="w-24 shrink-0 font-headings text-3xl italic text-navy font-bold mb-2 sm:mb-0">C3</div>
              <div>
                <h4 className="font-bold text-navy text-[13px] font-automobile tracking-wider uppercase mb-2">Dwellinghouse</h4>
                <p className="text-xs text-navy/70 leading-relaxed font-automobile tracking-wide">
                  An ordinary home. The default class for most residential
                  property. Cannot lawfully operate as a registered care
                  setting.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row p-6 md:p-8 border-b border-navy/5">
              <div className="w-24 shrink-0 font-headings text-3xl italic text-navy font-bold mb-2 sm:mb-0">C4</div>
              <div>
                <h4 className="font-bold text-navy text-[13px] font-automobile tracking-wider uppercase mb-2">Small HMO</h4>
                <p className="text-xs text-navy/70 leading-relaxed font-automobile tracking-wide">
                  A house shared by 3 to 6 unrelated occupants. Common
                  for supported housing models where residents hold their
                  own tenancies.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row p-6 md:p-8 border-b border-navy/5">
              <div className="w-24 shrink-0 font-headings text-3xl italic text-[#DAA520] font-bold mb-2 sm:mb-0">C2</div>
              <div>
                <h4 className="font-bold text-navy text-[13px] font-automobile tracking-wider uppercase mb-2">Residential institution</h4>
                <p className="text-xs text-navy/70 leading-relaxed font-automobile tracking-wide font-medium">
                  Care homes, children's homes and premises where
                  residents receive care. The class registered care services
                  need.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row p-6 md:p-8">
              <div className="w-24 shrink-0 font-headings text-3xl italic text-navy font-bold mb-2 sm:mb-0">SG</div>
              <div>
                <h4 className="font-bold text-navy text-[13px] font-automobile tracking-wider uppercase mb-2">Sui generis</h4>
                <p className="text-xs text-navy/70 leading-relaxed font-automobile tracking-wide">
                  Large HMOs of 7 or more occupants and other uses in a
                  class of their own. Always needs planning permission.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Properties for Every Care Model */}
      <section className="py-24 max-w-[1400px] mx-auto px-6 md:px-12 wrap">
        <div className="text-center mb-16 space-y-4">
          <span className="text-[#DAA520] font-automobile text-[10px] uppercase tracking-[0.4em] block">
            WHO WE WORK WITH
          </span>
          <h2 className="text-3xl md:text-5xl font-headings italic text-navy">
            Properties for Every Care Model
          </h2>
          <p className="text-navy/70 text-lg leading-relaxed max-w-3xl mx-auto">
            Whether you are opening your first registered service or expanding an established
            group, we match the property to the regulatory model you operate under.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 cards">
          
          {/* Card 1 */}
          <div className="bg-white/40 border border-navy/10 p-8 shadow-sm flex flex-col hover:border-[#DAA520] transition-colors duration-300 card">
            <div className="mb-6">
              <span className="bg-[#DAA520]/15 text-[#B8860B] text-[8px] font-automobile tracking-wider uppercase py-1 px-3 font-bold border border-[#DAA520]/20">
                OFSTED REGISTERED
              </span>
            </div>
            <h3 className="text-2xl font-headings italic font-bold text-navy mb-4">Children's Home Operators</h3>
            <p className="text-navy/70 text-sm leading-relaxed mb-6 font-automobile tracking-wide">
              Residential homes for children require
              premises that feel homely, not
              institutional, in settings that will
              withstand Ofsted's location assessment.
            </p>
            <ul className="space-y-4 text-xs text-navy/80 flex-grow font-automobile tracking-wide uppercase">
              <li className="flex items-start gap-3">
                <span className="text-[#DAA520] mt-0.5">—</span>
                <span>C2 consented properties suitable for small group homes</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#DAA520] mt-0.5">—</span>
                <span>Residential streets, gardens, sensible layouts</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#DAA520] mt-0.5">—</span>
                <span>Location risk context provided for your Statement of Purpose</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#DAA520] mt-0.5">—</span>
                <span>Also: supported accommodation for 16 and 17 year olds</span>
              </li>
            </ul>
          </div>

          {/* Card 2 */}
          <div className="bg-white/40 border border-navy/10 p-8 shadow-sm flex flex-col hover:border-[#DAA520] transition-colors duration-300 card">
            <div className="mb-6">
              <span className="bg-[#DAA520]/15 text-[#B8860B] text-[8px] font-automobile tracking-wider uppercase py-1 px-3 font-bold border border-[#DAA520]/20">
                CQC REGULATED
              </span>
            </div>
            <h3 className="text-2xl font-headings italic font-bold text-navy mb-4">Supported Living & Adult Care Providers</h3>
            <p className="text-navy/70 text-sm leading-relaxed mb-6 font-automobile tracking-wide">
              For supported living, learning disability,
              mental health and autism services, we
              supply compliant HMO and self-
              contained stock alongside C2 premises
              for registered care.
            </p>
            <ul className="space-y-4 text-xs text-navy/80 flex-grow font-automobile tracking-wide uppercase">
              <li className="flex items-start gap-3">
                <span className="text-[#DAA520] mt-0.5">—</span>
                <span>Licensed HMOs suited to shared supported housing</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#DAA520] mt-0.5">—</span>
                <span>C2 premises where personal care is delivered on site</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#DAA520] mt-0.5">—</span>
                <span>Lease structures that work for exempt accommodation models</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#DAA520] mt-0.5">—</span>
                <span>Ready for the new supported housing standards</span>
              </li>
            </ul>
          </div>

          {/* Card 3 */}
          <div className="bg-white/40 border border-navy/10 p-8 shadow-sm flex flex-col hover:border-[#DAA520] transition-colors duration-300 card">
            <div className="mb-6">
              <span className="bg-[#DAA520]/15 text-[#B8860B] text-[8px] font-automobile tracking-wider uppercase py-1 px-3 font-bold border border-[#DAA520]/20">
                COMMISSIONED SERVICES
              </span>
            </div>
            <h3 className="text-2xl font-headings italic font-bold text-navy mb-4">Specialist & Step-Down Providers</h3>
            <p className="text-navy/70 text-sm leading-relaxed mb-6 font-automobile tracking-wide">
              Operators delivering NHS or local
              authority commissioned services, from
              mental health step-down to acquired
              brain injury rehabilitation, need property
              partners who understand spot-rate
              funded models.
            </p>
            <ul className="space-y-4 text-xs text-navy/80 flex-grow font-automobile tracking-wide uppercase">
              <li className="flex items-start gap-3">
                <span className="text-[#DAA520] mt-0.5">—</span>
                <span>Sourcing to commissioner specification</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#DAA520] mt-0.5">—</span>
                <span>Terms aligned to contract length</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#DAA520] mt-0.5">—</span>
                <span>West London, Middlesex and Home Counties depth</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#DAA520] mt-0.5">—</span>
                <span>Direct relationships with local authority teams</span>
              </li>
            </ul>
          </div>

        </div>
      </section>

      {/* Section 3: From Enquiry to Keys */}
      <section className="py-24 bg-navy text-bone border border-white/5 wrap">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="text-center mb-16 space-y-4">
            <span className="text-[#DAA520] font-automobile text-[10px] uppercase tracking-[0.4em] block">
              HOW A PLACEMENT WORKS
            </span>
            <h2 className="text-3xl md:text-5xl font-headings italic">
              From Enquiry to Keys
            </h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 cards">
            {[
              { num: "01", title: "Brief", desc: "Tell us your service model, cohort, bed numbers, location requirements and timescale. We confirm what is available now and what we can source." },
              { num: "02", title: "Match", desc: "We present suitable properties with the planning position, licence status and compliance picture stated plainly: granted or pending, and which." },
              { num: "03", title: "Viewing & Terms", desc: "Accompanied viewings, then heads of terms. Most providers take a full repairing lease of 3 to 5 years or longer, giving the security regulators and commissioners expect." },
              { num: "04", title: "Mobilise", desc: "With planning resolved, you proceed to fit-out and registration while we handle the landlord side: compliance certificates, documentation and ongoing management." }
            ].map((step, idx) => (
              <div key={idx} className="relative p-8 border border-white/10 bg-white/5 hover:bg-white/10 transition-colors card">
                <h4 className="text-[#DAA520] font-automobile text-sm font-bold uppercase tracking-wider mb-4">
                  {step.num}. {step.title}
                </h4>
                <p className="text-xs text-bone/70 leading-relaxed font-automobile tracking-wide">{step.desc}</p>
                {idx < 3 && <ArrowRight size={16} className="hidden lg:block absolute -right-6 top-1/2 transform -translate-y-1/2 text-white/20" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: FAQ Accordion Component */}
      <section className="py-24 max-w-4xl mx-auto px-6 md:px-12 wrap">
        <div className="text-center mb-16 space-y-4">
          <span className="text-[#DAA520] font-automobile text-[10px] uppercase tracking-[0.4em] block">C2 COMPLIANCE & LEASING</span>
          <h2 className="text-3xl md:text-5xl font-headings italic text-navy">Frequently Asked Questions</h2>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <details key={idx} className="group border-b border-navy/10 pb-4 bg-white/40 px-6 pt-4 cursor-pointer">
              <summary className="flex justify-between items-center font-headings italic text-lg font-bold text-navy group-open:text-[#DAA520] transition-colors list-none outline-none">
                {faq.q}
                <span className="ml-4 shrink-0 transition-transform duration-300 group-open:rotate-180">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M6 9l6 6 6-6"/>
                  </svg>
                </span>
              </summary>
              <div className="py-4 text-sm text-navy/70 leading-relaxed font-automobile tracking-wide border-t border-navy/5 mt-4">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* Section 5: Related Services */}
      <section className="mb-24 max-w-[1400px] mx-auto px-6 md:px-12 wrap">
        <h3 className="text-2xl font-headings italic text-center mb-8 text-navy">Related Services</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 cards">
          <Link to="/services/care-sector-lettings" className="p-6 border border-navy/10 bg-white/40 hover:border-[#DAA520] transition-colors flex justify-between items-center group card">
            <span className="font-headings italic font-bold text-lg text-navy">Care Sector Lettings</span>
            <ArrowRight size={16} className="text-[#DAA520] group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link to="/services/supported-living" className="p-6 border border-navy/10 bg-white/40 hover:border-[#DAA520] transition-colors flex justify-between items-center group card">
            <span className="font-headings italic font-bold text-lg text-navy">Supported Living</span>
            <ArrowRight size={16} className="text-[#DAA520] group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link to="/services/council-accommodation" className="p-6 border border-navy/10 bg-white/40 hover:border-[#DAA520] transition-colors flex justify-between items-center group card">
            <span className="font-headings italic font-bold text-lg text-navy">Council & Temporary Accom.</span>
            <ArrowRight size={16} className="text-[#DAA520] group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* Bottom Call-To-Action Band */}
      <section className="bg-[#DAA520] text-navy p-10 md:p-16 text-center shadow-lg border border-[#B8860B]/20">
        <h2 className="text-3xl md:text-4xl font-headings italic font-bold mb-4">Looking for a C2 property for your service?</h2>
        <p className="text-sm font-automobile uppercase tracking-wider text-navy/80 mb-8 max-w-2xl mx-auto font-semibold">
          Contact our specialist acquisitions team today. We can match you with an existing compliant property or source directly to your specification.
        </p>
        <Link to="/contact" className="inline-block bg-navy hover:bg-navy/90 text-bone font-bold text-[11px] uppercase tracking-[0.25em] px-10 py-5 transition-all duration-300">
          Make An Enquiry
        </Link>
      </section>

    </div>
  );
};

export default C2LicensedProperties;
