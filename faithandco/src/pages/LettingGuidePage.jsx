import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import ProcessSteps from '../components/ProcessSteps';
import Contact from '../components/Contact';
import { complianceFaqs } from '../data/faqData';

const LettingGuidePage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const lettingSteps = [
        { 
            title: "01. Preparation Protocol", 
            desc: "Verify mortgage/lease terms and institutional licensing requirements (Mandatory HMO vs Selective Licensing)." 
        },
        { 
            title: "02. Legal Integrity", 
            desc: "Secure Gas Safety (CP12), EICR (5-year), and EPC certificates (Minimum Rating E). Ensure compliant fire/CO alarm counts." 
        },
        { 
            title: "03. Strategic Marketing", 
            desc: "Establish resident profiles, perform 'Right to Rent' audits, and conduct rigorous professional vetting and referencing." 
        },
        { 
            title: "04. Institutional Documentation", 
            desc: "Draft compliant Assured Shorthold Tenancies (AST). Provide the 'How to Rent' guide and legal prescribed info." 
        },
        { 
            title: "05. Financial Stewardship", 
            desc: "Register deposits in government-approved schemes (TDS/DPS) within 30 days. Manage rent review protocols." 
        },
        { 
            title: "06. Operational Stewardship", 
            desc: "Maintain asset structural integrity, handle reactive repairs, and conduct periodic compliance inspections." 
        },
        { 
            title: "07. Termination Sequence", 
            desc: "Manage Section 21/Section 8 notices, execute check-out inspections, and handle deposit reconciliations." 
        }
    ];

    return (
        <div className="min-h-screen bg-white text-dark pt-[80px]">
            {/* Technical Hero */}
            <section className="px-6 md:px-10 py-24 bg-dark text-white text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                >
                    <span className="text-[10px] uppercase tracking-[0.6em] text-white/40 block mb-6">Expert Advisor</span>
                    <h1 className="text-5xl md:text-8xl font-[Outfit] font-extrabold uppercase tracking-tighter leading-[0.9] mb-8">
                        The London <br /> <span className="text-[#DAA520]">Letting Guide</span>
                    </h1>
                    <p className="max-w-3xl mx-auto text-white/60 text-sm md:text-base leading-relaxed font-sans px-4">
                        Your essential step-by-step framework for compliant asset management in London. From legal preparation to final tenancy reconciliation.
                    </p>
                </motion.div>
            </section>

            {/* Steps Sequence */}
            <div className="bg-white py-12">
                <ProcessSteps 
                    title="The Professional Pathway" 
                    steps={lettingSteps} 
                />
            </div>

            {/* Note on Responsibility */}
            <section className="py-24 px-6 md:px-10 bg-[#FAF9F6] border-t border-dark/5">
                <div className="max-w-4xl mx-auto text-center">
                    <h3 className="text-xs font-bold uppercase tracking-[.4em] text-dark/30 mb-8">Asset Protection Note</h3>
                    <p className="text-dark/60 text-base leading-relaxed italic font-serif">
                        Navigating the regulatory landscape of London lettings requires precision. Faith and Co manages 100% of these steps for our partnered landlords, ensuring total compliance and asset protection from day one.
                    </p>
                </div>
            </section>

            <Contact faqs={complianceFaqs} />
        </div>
    );
};

export default LettingGuidePage;
