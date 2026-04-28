import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import ProcessSteps from '../components/ProcessSteps';
import Contact from '../components/Contact';
import { managementFaqs } from '../data/faqData';

const GuaranteedRentPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const guaranteedRentSteps = [
        { 
            title: "Asset Assessment", 
            desc: "Institutional appraisal of your property to ensure it meets our strategic criteria for professional residency." 
        },
        { 
            title: "Institutional Lease", 
            desc: "Establishment of a multi-year corporate lease agreement, securing your income regardless of occupancy status." 
        },
        { 
            title: "Protocol Management", 
            desc: "Faith and Co assumes full administrative stewardship, handling all tenant relations and operational maintenance." 
        }
    ];

    const protocolTable = [
        { feature: "Regulatory Stewardship", guaranteed: "Full Oversight", traditional: "Landlord Bound" },
        { feature: "Occupancy Rank", guaranteed: "Professional Managed", traditional: "AST Dependent" },
        { feature: "Internal Maintenance", guaranteed: "Covered by Protocol", traditional: "Landlord Bound" },
        { feature: "Contract Term", guaranteed: "3-5 Year Corporate Lease", traditional: "6-12 Months (AST)" },
        { feature: "Income Protection", guaranteed: "365 Day Security", traditional: "Arrears Exposure" }
    ];

    return (
        <div className="min-h-screen bg-white text-dark pt-[80px]">
            {/* Minimal Technical Hero */}
            <section className="px-6 md:px-10 py-24 bg-dark text-white text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                >
                    <span className="text-[10px] uppercase tracking-[0.6em] text-white/40 block mb-6">Landlord Solutions</span>
                    <h1 className="text-5xl md:text-8xl font-[Outfit] font-extrabold uppercase tracking-tighter leading-[0.9] mb-8">
                        Services <br /> <span className="text-[#DAA520]">we provide</span>
                    </h1>
                    <p className="max-w-3xl mx-auto text-white/60 text-sm md:text-base leading-relaxed font-sans mt-8 px-4">
                        Fixed monthly payments with no voids or arrears ever. We lease your property directly and pay you on time every month regardless of occupancy or tenant payment, across all property types in London.
                    </p>
                </motion.div>
            </section>

            {/* Jump Straight into Boxed UI: 3-Step Cards */}
            <ProcessSteps 
                title="The Operational Pathway" 
                steps={guaranteedRentSteps} 
            />

            {/* Technical Ledger Component */}
            <section className="py-24 px-6 md:px-10 bg-[#FAF9F6]">
                <div className="max-w-4xl mx-auto">
                    <h3 className="text-[10px] font-bold uppercase tracking-[0.4em] text-dark/30 mb-12 text-center">Comparative Performance Matrix</h3>
                    <div className="overflow-x-auto border-[0.5px] border-dark/10 bg-white">
                        <table className="w-full border-collapse">
                            <thead>
                                <tr className="border-b-[0.5px] border-dark/10">
                                    <th className="p-8 text-left text-[10px] uppercase tracking-widest text-dark/40 font-bold border-r-[0.5px] border-dark/10">Strategic Feature</th>
                                    <th className="p-8 text-left text-[10px] uppercase tracking-widest text-[#DAA520] font-bold border-r-[0.5px] border-dark/10">Faith Protocol</th>
                                    <th className="p-8 text-left text-[10px] uppercase tracking-widest text-dark/30 font-bold">Standard AST</th>
                                </tr>
                            </thead>
                            <tbody>
                                {protocolTable.map((row, idx) => (
                                    <tr key={idx} className="border-b-[0.5px] border-dark/5 hover:bg-dark/[0.01]">
                                        <td className="p-8 text-xs font-bold uppercase border-r-[0.5px] border-dark/10">{row.feature}</td>
                                        <td className="p-8 text-xs font-medium text-dark border-r-[0.5px] border-dark/10">{row.guaranteed}</td>
                                        <td className="p-8 text-xs text-dark/40">{row.traditional}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            <Contact faqs={managementFaqs} />
        </div>
    );
};

export default GuaranteedRentPage;
