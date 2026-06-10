import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Building, Key, Activity, Users, FileText, TrendingUp, Landmark } from 'lucide-react';

const technicalSpecs = [
  { title: 'HMO Technical Brief', icon: <Building size={24} />, desc: 'Structural compliance for multi-occupancy assets.' },
  { title: 'CQC Frameworks', icon: <Shield size={24} />, desc: 'Operational standards for social care residency.' },
  { title: 'Lease Stratification', icon: <FileText size={24} />, desc: 'Long-term yield stabilisation protocols.' },
  { title: 'Local Authority Sync', icon: <Users size={24} />, desc: 'Direct engagement with borough housing teams.' },
  { title: 'Asset Stewardship', icon: <Key size={24} />, desc: 'Comprehensive administrative oversight.' },
  { title: 'Grid Monitoring', icon: <Activity size={24} />, desc: 'Real-time performance metrics for portfolios.' },
  { title: 'Fiscal Growth', icon: <TrendingUp size={24} />, desc: 'Optimised yield through technical efficiency.' },
  { title: 'Statutory Compliance', icon: <Landmark size={24} />, desc: 'Adherence to the latest legislative mandates.' }
];

const TechnicalGrid = () => {
    return (
        <section className="py-48 bg-midnight px-12 border-t border-slate/10">
            <div className="max-w-[1400px] mx-auto">
                <div className="mb-32 text-center md:text-left">
                    <span className="text-slate font-bold uppercase tracking-[0.5em] text-[10px] mb-8 block font-inter">Technical Specifications</span>
                    <h2 className="text-5xl md:text-8xl font-medium tracking-[0.01em] font-headings text-white leading-none italic">Institutional <br/> <span className="text-sand">Frameworks</span></h2>
                    <div className="w-16 h-[1px] bg-slate mt-12 mb-8 mx-auto md:mx-0"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1px bg-slate/10 border border-slate/10">
                    {technicalSpecs.map((spec, idx) => (
                        <div key={idx} className="bg-midnight p-14 hover:bg-obsidian transition-colors group">
                            <div className="mb-8 text-slate/40 group-hover:text-white transition-colors">
                                {spec.icon}
                            </div>
                            <h3 className="text-lg font-bold uppercase tracking-widest text-white mb-4 font-inter group-hover:text-sand transition-colors">
                                {spec.title}
                            </h3>
                            <p className="text-[10px] uppercase tracking-[0.3em] font-medium leading-relaxed text-white/20 group-hover:text-white/40 font-inter">
                                {spec.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechnicalGrid;
