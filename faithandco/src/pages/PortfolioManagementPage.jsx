import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import TechnicalGrid from '../components/TechnicalGrid';
import ProcessSteps from '../components/ProcessSteps';
import Contact from '../components/Contact';
import { managementFaqs } from '../data/faqData';
import { Users, BarChart3, Search, ShieldCheck, ClipboardCheck, Wrench, MessageSquare, FileText } from 'lucide-react';

const PortfolioManagementPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const portfolioTiles = [
        { 
            title: "Single Point of Contact", 
            desc: "One dedicated manager overseeing your entire London portfolio. No bouncing between agents or departments.",
            icon: <Users size={32} />
        },
        { 
            title: "Consolidated Reporting", 
            desc: "Centralized performance metrics covering occupancy, condition, and yield for every asset in one place.",
            icon: <BarChart3 size={32} />
        },
        { 
            title: "Institutional Vetting", 
            desc: "Rigorous professional screening applied consistently across every property, ensuring high-tier resident quality.",
            icon: <Search size={32} />
        },
        { 
            title: "Optional Guaranteed Rent", 
            desc: "Apply our fixed-income scheme on a property-by-property basis for ultimate portfolio security.",
            icon: <ShieldCheck size={32} />
        },
        { 
            title: "Quarterly Audit Inspections", 
            desc: "Scheduled, detailed condition monitoring across all London assets with stakeholder-ready reporting.",
            icon: <ClipboardCheck size={32} />
        },
        { 
            title: "Centralized Maintenance", 
            desc: "Scalable minor repair coordination, from single-lets to multi-unit HMOs, handled by one technical team.",
            icon: <Wrench size={32} />
        },
        { 
            title: "Absolute Resident Hands-Off", 
            desc: "Total insulation from day-to-day queries, renewals, and notices. We handle 100% of communication.",
            icon: <MessageSquare size={32} />
        },
        { 
            title: "Seamless Renewal Admin", 
            desc: "Centralized documentation, deposit registrations, and legal renewals managed at scale across your portfolio.",
            icon: <FileText size={32} />
        }
    ];

    const onboardingSteps = [
        { 
            title: "Strategic Portfolio Audit", 
            desc: "A baseline review of current occupancy, rental values, and asset conditions across your holdings." 
        },
        { 
            title: "Seamless Onboarding", 
            desc: "Existing tenancies are transitioned onto our institutional management platform with zero disruption." 
        },
        { 
            title: "Centralized Oversight", 
            desc: "Management goes live with dedicated reporting and consistent monthly income protocols." 
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
                    <span className="text-[10px] uppercase tracking-[0.6em] text-white/40 block mb-6">Strategic Asset Care</span>
                    <h1 className="text-5xl md:text-8xl font-[Outfit] font-extrabold uppercase tracking-tighter leading-[0.9] mb-8">
                        Portfolio <br /> <span className="text-[#DAA520]">Management</span>
                    </h1>
                    <p className="max-w-3xl mx-auto text-white/60 text-sm md:text-base leading-relaxed font-sans px-4">
                        Consolidated management for multi-asset landlords across London. One contact, one team, and one streamlined system designed to scale your income without increasing the workload.
                    </p>
                </motion.div>
            </section>

            {/* Performance Matrix */}
            <TechnicalGrid 
                title="Portfolio Framework" 
                items={portfolioTiles} 
                columns={4} 
            />

            {/* Onboarding Pathway */}
            <ProcessSteps 
                title="The Scaling Sequence" 
                steps={onboardingSteps} 
            />

            {/* Why Scale With Faith & Co */}
            <section className="py-24 px-6 md:px-10 bg-[#FAF9F6]">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-5xl font-[Outfit] font-black uppercase tracking-tighter mb-8 italic">
                        Why a Portfolio Needs <span className="text-[#DAA520]">Institutional Logic</span>
                    </h2>
                    <p className="text-dark/60 text-base leading-relaxed mb-12">
                        Managing multiple properties requires more than slow, traditional reactivity. Faith and Co brings every asset under a single, professional operation—ensuring consistent vetting, maintenance, and oversight across your entire London footprint.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                        <div className="p-8 border-[0.5px] border-dark/10 bg-white">
                            <h4 className="font-bold uppercase tracking-widest text-xs mb-4">The Standard Chaos</h4>
                            <p className="text-xs text-dark/40">Multiple agents, fragmented reporting, delayed maintenance, and inconsistent resident vetting standards.</p>
                        </div>
                        <div className="p-8 border-[0.5px] border-dark/10 bg-white border-l-[#DAA520] border-l-2">
                            <h4 className="font-bold uppercase tracking-widest text-[#DAA520] text-xs mb-4">The Faith and Co Protocol</h4>
                            <p className="text-xs text-dark/70">Unified management, institutional reporting, proactive maintenance tiers, and high-tier professional vetting.</p>
                        </div>
                    </div>
                </div>
            </section>

            <Contact faqs={managementFaqs} />
        </div>
    );
};

export default PortfolioManagementPage;
