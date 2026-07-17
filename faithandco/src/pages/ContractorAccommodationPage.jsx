import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import TechnicalGrid from '../components/TechnicalGrid';
import Contact from '../components/Contact';
import { hospitalityFaqs } from '../data/faqData';
import { HardHat, Ruler, Radio, Plane, ShieldCheck, Zap } from 'lucide-react';

const ContractorAccommodationPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const contractorTiles = [
        { 
            title: "Extended Project Stays", 
            desc: "Onboarding for project-length residencies, typically spanning weeks or months, resulting in consistent monthly income.",
            icon: <Ruler size={32} />
        },
        { 
            title: "Industrial Reliability", 
            desc: "Site workers and tradespeople prioritize functional, comfortable bases, resulting in respectful use and reliable upkeep.",
            icon: <HardHat size={32} />
        },
        { 
            title: "Year-Round Demand Velocity", 
            desc: "Infrastructure projects, utility upgrades, and London's ongoing commercial developments ensure constant resident flow.",
            icon: <Zap size={32} />
        },
        { 
            title: "Multi-Unit Yield Maximization", 
            desc: "Larger properties (3-5 bedrooms) are ideal for contractor housing, commanding superior weekly rates vs traditional ASTs.",
            icon: <ShieldCheck size={32} />
        },
        { 
            title: "Operational Stewardship", 
            desc: "We manage 100% of communication with contractors and site leads, conducting regular changeover and maintenance checks.",
            icon: <Radio size={32} />
        },
        { 
            title: "Aviation Corridor Focus", 
            desc: "Strategic positioning near major transport hubs to serve the constant demand for airport logistics and maintenance lodging.",
            icon: <Plane size={32} />
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
                    <span className="text-[10px] uppercase tracking-[0.6em] text-white/40 block mb-6">Industrial Workforce Lodging</span>
                    <h1 className="text-5xl md:text-8xl font-[Outfit] font-extrabold uppercase tracking-tighter leading-[0.9] mb-8">
                        Contractor <br /> <span className="text-[#DAA520]">Accommodation</span>
                    </h1>
                    <p className="max-w-3xl mx-auto text-white/60 text-sm md:text-base leading-relaxed font-sans px-4">
                        Quality, fully managed housing solutions for contractors, site teams, and infrastructure workers across London. Reliable, comfortable, and professionally operated.
                    </p>
                </motion.div>
            </section>

            {/* Matrix */}
            <TechnicalGrid 
                title="Contractor Logistics Framework" 
                items={contractorTiles} 
                columns={3} 
            />

            {/* Sectors Served */}
            <section className="py-24 px-6 md:px-10 bg-[#FAF9F6] border-t border-dark/5">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl md:text-6xl font-[Outfit] font-black uppercase tracking-tighter mb-16 italic text-center">
                        Sectors <span className="text-[#DAA520]">Served</span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            { t: "Civil Engineering & Construction", d: "Site workers and engineering teams on major building or transport developments needing mid-term housing." },
                            { t: "Utilities & Infrastructure", d: "Electrical, gas, and telecoms crews performing network upgrades or maintenance programs across London." },
                            { t: "Aviation & Logistics", d: "Ground crews and maintenance contractors working in the major London airport corridors." },
                            { t: "Specialist Site fit-outs", d: "Skilled tradespeople on commercial refurbishment or office fit-out contracts requiring professional accommodation." }
                        ].map((item, i) => (
                            <div key={i} className="p-10 border-[0.5px] border-dark/10 bg-white">
                                <h4 className="font-bold uppercase tracking-widest text-[#DAA520] text-xs mb-4">{item.t}</h4>
                                <p className="text-sm text-dark/50 leading-relaxed font-sans">{item.d}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Contact faqs={hospitalityFaqs} />
        </div>
    );
};

export default ContractorAccommodationPage;
