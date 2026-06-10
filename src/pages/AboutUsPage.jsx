import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Shield, Target, Users, BookOpen, Quote, ArrowRight } from 'lucide-react';

const AboutUsPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-midnight pt-[100px] selection:bg-slate selection:text-white font-inter">
            {/* Mission Hero */}
            <section className="relative w-full h-[70vh] flex items-center overflow-hidden border-b border-slate/10 bg-obsidian">
                <img src="/origin.jpeg" className="absolute inset-0 w-full h-full object-cover grayscale opacity-30" alt="Faith & Co Origin" />
                <div className="absolute inset-0 bg-gradient-to-r from-midnight via-midnight/80 to-transparent" />
                
                <div className="relative z-10 px-12 w-full max-w-[1400px] mx-auto">
                    <motion.span 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="text-slate font-bold uppercase tracking-[0.5em] text-[10px] mb-8 block"
                    >
                        Institutional Origin
                    </motion.span>
                    <motion.h1 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-6xl md:text-[9vw] font-medium tracking-[0.02em] leading-none mb-10 font-headings text-white italic"
                    >
                        Foundation <br /> & <span className="text-sand">Legacy</span>
                    </motion.h1>
                    <div className="w-16 h-[1px] bg-slate mb-8"></div>
                    <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="max-w-xl text-white/40 uppercase tracking-[0.2em] text-[10px] font-bold leading-relaxed"
                    >
                        Established with a singular objective: to standardise technical excellence in the specialised HMO and supported living sectors.
                    </motion.p>
                </div>
            </section>

            {/* Narrative Section */}
            <section className="py-48 px-12 bg-midnight">
                <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
                    <div className="space-y-16">
                        <div className="space-y-8">
                            <Quote className="text-slate opacity-20" size={60} />
                            <p className="text-3xl md:text-5xl font-medium tracking-[0.02em] leading-tight text-white font-headings italic">
                                "We bridge the critical gap between property investment and social responsibility through rigorous administrative stewardship."
                            </p>
                        </div>
                        <div className="space-y-8 border-l border-slate/20 pl-10">
                            <p className="text-[12px] uppercase tracking-[0.3em] font-bold text-white/40 leading-relaxed font-inter">
                                Since our inception in 2018, Faith and Co has evolved from a boutique agency into a strategic infrastructure partner for local authorities and specialist care providers across West London.
                            </p>
                        </div>
                    </div>
                    <div className="glass-machined p-16 space-y-12 rounded-none">
                        <h3 className="text-slate font-black uppercase tracking-[0.5em] text-[10px] mb-16 block font-inter">Operational Capacity</h3>
                        <div className="grid grid-cols-1 gap-12">
                            {[
                                { dept: 'HMO Management', tier: 'Tier One Compliance', icon: <Shield size={20}/> },
                                { dept: 'Supported Living', tier: 'CQC Framework Alignment', icon: <Users size={20}/> },
                                { dept: 'Portfolio Strategy', tier: 'Institutional Growth', icon: <Target size={20}/> }
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-8 group">
                                    <div className="w-12 h-12 glass-machined flex items-center justify-center text-slate group-hover:text-white transition-colors">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h4 className="text-[11px] font-black uppercase tracking-widest mb-2 text-white/60 group-hover:text-white transition-colors">{item.dept}</h4>
                                        <div className="text-[9px] font-black text-slate uppercase tracking-[0.3em]">{item.tier}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutUsPage;
