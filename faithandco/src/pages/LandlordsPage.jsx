import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Shield, TrendingUp, Key, FileText, CheckCircle, ArrowRight, Building, Landmark, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const LandlordsPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const cards = [
        { title: 'Guaranteed Rent', desc: 'Secure institutional yield through our government-backed sub-leasing protocol.', path: '/services/hmo' },
        { title: 'Technical Compliance', desc: 'Ensuring your assets meet CQC and Local Authority infrastructure standards.', path: '/services/care-sector' },
        { title: 'Asset Stewardship', desc: 'Full administrative management of residential and corporate portfolios.', path: '/services/management' }
    ];

    const resources = [
        { name: 'Technical HMO Briefing', path: '/services/hmo' },
        { name: 'Care Sector Standards', path: '/services/care-sector' },
        { name: 'Administrative Fees', path: '/contact' }
    ];

    return (
        <div className="min-h-screen bg-midnight pt-[100px] selection:bg-slate selection:text-white font-inter">
            {/* Split Hero */}
            <header className="relative w-full h-[60vh] flex flex-col md:flex-row overflow-hidden border-b border-slate/10">
                <div className="w-full md:w-1/2 bg-midnight p-12 md:p-24 flex flex-col justify-center">
                    <motion.span 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="text-slate font-bold uppercase tracking-[0.4em] text-[10px] block mb-8 font-inter"
                    >
                        Asset Partnership | Institutional Alignment
                    </motion.span>
                    <motion.h1 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-8xl font-medium tracking-[0.02em] leading-none mb-10 font-headings text-white italic"
                    >
                        Management <br /> <span className="text-sand opacity-80">Frameworks</span>
                    </motion.h1>
                    <div className="w-16 h-[1px] bg-slate mb-12"></div>
                </div>
                <div className="w-full md:w-1/2 relative bg-obsidian">
                    <img src="/rent.jpeg" className="absolute inset-0 w-full h-full object-cover grayscale opacity-40" alt="Institutional Stewardship" />
                    <div className="absolute inset-0 bg-gradient-to-l from-midnight via-transparent to-transparent" />
                </div>
            </header>

            {/* Strategic Cards */}
            <section className="px-12 py-32 bg-midnight">
                <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
                    {cards.map((card, i) => (
                        <Link key={i} to={card.path} className="group p-14 border border-slate/10 hover:border-white transition-all duration-500 bg-obsidian rounded-none shadow-sm group">
                            <h3 className="text-3xl font-medium tracking-[0.02em] text-white mb-6 font-headings italic group-hover:text-sand transition-colors">{card.title}</h3>
                            <p className="text-[12px] uppercase tracking-[0.2em] text-white/40 mb-12 font-bold font-inter leading-relaxed">{card.desc}</p>
                            <span className="text-[10px] uppercase font-black tracking-[0.4em] text-slate group-hover:text-white border-b border-slate/20 pb-2 transition-all font-inter">Explore Protocol</span>
                        </Link>
                    ))}
                </div>
            </section>

            {/* Resource Hub */}
            <section className="px-12 py-48 bg-bone border-y border-slate/10">
                <div className="max-w-[1400px] mx-auto text-center">
                    <span className="text-slate font-bold uppercase tracking-[0.5em] text-[10px] mb-8 block font-inter">Compliance & Stewardship Protocols</span>
                    <h2 className="text-5xl md:text-8xl font-medium tracking-[0.01em] font-headings mb-24 text-midnight italic">
                        Strategic <span className="text-slate">Resources</span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {resources.map((resource, i) => (
                            <Link key={i} to={resource.path} className="p-12 border border-slate/20 bg-white hover:border-midnight transition-all duration-500 rounded-none shadow-sm text-left group">
                                <h4 className="font-medium tracking-[0.02em] text-2xl mb-4 text-midnight group-hover:text-slate transition-colors font-headings">{resource.name}</h4>
                                <div className="flex items-center gap-4 text-slate opacity-40 group-hover:opacity-100 transition-all">
                                    <span className="text-[9px] uppercase font-black tracking-[0.3em]">Institutional Access</span>
                                    <ArrowRight size={14} />
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Assessment Callout */}
            <section className="relative py-60 bg-midnight overflow-hidden text-center">
                <div className="absolute inset-0 bg-slate/5 pointer-events-none" />
                <div className="relative z-10">
                    <h2 className="text-4xl md:text-6xl font-medium tracking-[0.02em] mb-12 font-headings text-white italic">Initial Asset Valuation</h2>
                    <Link to="/contact" className="institutional-btn min-w-[300px]">INITIATE EVALUATION</Link>
                </div>
            </section>
        </div>
    );
};

export default LandlordsPage;
