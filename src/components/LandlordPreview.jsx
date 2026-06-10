import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const LandlordPreview = () => {
    return (
        <section className="relative w-full bg-[#FAF9F6] py-24 md:py-32 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col lg:flex-row gap-20 items-center">
                
                {/* Left Content */}
                <div className="w-full lg:w-1/2">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-[#DAA520] font-bold uppercase tracking-[0.4em] text-[10px] mb-6 block">
                            Landlord Solutions
                        </span>
                        <h2 className="text-4xl md:text-8xl font-[Outfit] font-extrabold uppercase tracking-tighter leading-[0.9] text-dark shadow-white/10">
                            Landlord <br /> <span className="text-dark/40">Solutions.</span>
                        </h2>
                        <p className="text-lg md:text-xl font-serif italic text-dark/70 leading-relaxed mb-12 max-w-xl">
                            Our signature corporate lease model ensures your income is secured 365 days a year, regardless of occupancy.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                            {[
                                "Fixed Monthly Income",
                                "0% Management Fees",
                                "Internal Repairing Lease",
                                "Corporate Tenancy"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-4 text-dark/80">
                                    <CheckCircle2 size={18} className="text-[#DAA520]" />
                                    <span className="text-xs font-bold uppercase tracking-widest">{item}</span>
                                </div>
                            ))}
                        </div>

                        <Link 
                            to="/landlords"
                            className="group inline-flex items-center gap-6 px-12 py-5 bg-dark text-white font-bold uppercase tracking-widest text-xs rounded-full hover:bg-[#DAA520] transition-all duration-300"
                        >
                            View Landlord Hub <ArrowRight className="group-hover:translate-x-2 transition-all" />
                        </Link>
                    </motion.div>
                </div>

                {/* Right Visual (Technical Ledger Focus) */}
                <div className="w-full lg:w-1/2 bg-white p-8 md:p-12 shadow-2xl border border-dark/5 rounded-3xl">
                    <h3 className="text-[10px] font-bold uppercase tracking-[.3em] text-dark/40 mb-8 border-b border-dark/5 pb-6">
                        Technical Comparison Matrix
                    </h3>
                    <div className="space-y-8">
                        {[
                            { label: "Management Fee", faith: "0%", traditional: "12% - 15%" },
                            { label: "Occupancy Risk", faith: "Fully Mitigated", traditional: "Landlord Bound" },
                            { label: "Internal Repairs", faith: "Fully Covered", traditional: "Landlord Bound" },
                            { label: "Arrears Risk", faith: "None", traditional: "Moderate to High" }
                        ].map((row, i) => (
                            <div key={i} className="flex items-center justify-between border-b border-dark/5 pb-4">
                                <span className="text-[10px] font-bold uppercase tracking-widest text-dark/60">{row.label}</span>
                                <div className="flex gap-8">
                                    <span className="text-xs font-black text-[#DAA520] uppercase">{row.faith}</span>
                                    <span className="text-xs text-dark/20 line-through uppercase">{row.traditional}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LandlordPreview;
