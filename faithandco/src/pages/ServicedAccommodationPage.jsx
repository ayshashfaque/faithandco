import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Contact from '../components/Contact';
import { hospitalityFaqs } from '../data/faqData';

const ServicedAccommodationPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const yieldData = [
        { metric: "Operational Oversight", standard: "Periodic Review", optimized: "24/7 Professional Audit" },
        { metric: "Maintenance Tier", standard: "Annual (AST Bound)", optimized: "Weekly Professional Housekeeping" },
        { metric: "Asset Preservation", standard: "Tenant Dependent", optimized: "Institutional Specification" },
        { metric: "Compliance Lock", standard: "Section 24 Bound", optimized: "Business Class Optimized" },
        { metric: "Financial Integrity", standard: "AST Fluctuations", optimized: "Strategic Corporate Lease" }
    ];

    return (
        <div className="min-h-screen bg-[#FAF9F6] text-dark pt-[80px]">
            {/* 50/50 Editorial Split */}
            <section className="flex flex-col lg:flex-row min-h-[calc(100vh-80px)]">
                {/* Left Content */}
                <div className="w-full lg:w-1/2 p-8 md:p-16 lg:p-24 flex flex-col justify-center bg-[#FAF9F6]">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-6xl md:text-8xl font-[Outfit] font-extrabold uppercase tracking-tighter mb-8 leading-[0.9] text-dark">
                            Managed <br /> <span className="text-[#DAA520] opacity-40">Accommodation</span>
                        </h1>
                        <p className="text-xl md:text-2xl font-serif italic text-dark/70 mb-12 max-w-xl">
                            Full management for Airbnbs and hotel-standard serviced accommodation.
                        </p>

                        <div className="space-y-6 text-dark/60 text-sm md:text-base leading-relaxed max-w-lg mb-16 font-sans">
                            <p>We provide managed property solutions tailored to meet your specific accommodation needs. Focusing on institutional-grade hospitality management, we transform assets into strategic B2B accommodation centres for the corporate market.</p>
                        </div>

                        {/* Technical Ledger Table */}
                        <div className="mt-12 overflow-x-auto">
                            <h3 className="text-xs font-bold uppercase tracking-[.3em] text-[#1A1A1A] mb-6">Yield Optimisation Spreadsheet</h3>
                            <table className="w-full border-collapse">
                                <thead>
                                    <tr className="border-b-[0.5px] border-dark/20">
                                        <th className="py-4 text-left text-[10px] uppercase tracking-widest text-dark/40">Performance Indicator</th>
                                        <th className="py-4 text-left text-[10px] uppercase tracking-widest text-dark font-black">Managed SA</th>
                                        <th className="py-4 text-left text-[10px] uppercase tracking-widest text-dark/40">Standard AST</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {yieldData.map((row, idx) => (
                                        <tr key={idx} className="border-b-[0.5px] border-dark/10 hover:bg-dark/5 transition-colors">
                                            <td className="py-5 text-xs font-medium text-dark/80">{row.metric}</td>
                                            <td className="py-5 text-xs font-bold text-[#DAA520] uppercase">{row.optimized}</td>
                                            <td className="py-5 text-xs text-dark/30 uppercase tracking-tighter">{row.standard}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </motion.div>
                </div>

                {/* Right Image (50/50 Split) */}
                <div className="w-full lg:w-1/2 h-[50vh] lg:h-auto relative overflow-hidden bg-white">
                    <img 
                        src="/img2.jpeg" 
                        alt="Managed Luxury Interior" 
                        className="w-full h-full object-cover transition-all duration-1000"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#FAF9F6] to-transparent lg:opacity-60"></div>
                </div>
            </section>
            <Contact faqs={hospitalityFaqs} />
        </div>
    );
};

export default ServicedAccommodationPage;
