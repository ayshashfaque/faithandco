import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import OptionChecklist from '../components/OptionChecklist';
import ProcessSteps from '../components/ProcessSteps';
import Contact from '../components/Contact';
import { managementFaqs } from '../data/faqData';
import { Search, MapPin, Calculator, ShieldCheck, Key, FileCheck, ClipboardCheck } from 'lucide-react';

const ResidentialLettingsPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const lettingTiers = [
        {
            title: "Tenant-Find Only",
            desc: "We find and place the right tenant in your property, then hand management back to you. You remain in full control of the ongoing tenancy.",
            features: [
                "Free rental valuation and market appraisal",
                "Professional photography and property marketing",
                "Viewings coordinated and conducted by our team",
                "Full tenant referencing and ID verification",
                "Tenancy agreement drawn up and signed",
                "Deposit registered and move-in completed"
            ]
        },
        {
            title: "Tenant-Find Plus Full Management",
            desc: "We find and place the tenant, then continue managing every aspect of the tenancy on your behalf. Nothing is left for you to deal with.",
            features: [
                "Everything in Option 01, plus ongoing management",
                "Rent collection every month",
                "All tenant communication handled for you",
                "Routine inspections and written condition reports",
                "Minor maintenance and repairs coordinated",
                "Optional Guaranteed Rent, fixed income every month"
            ]
        }
    ];

    const startSteps = [
        { title: "Free Rental Valuation", desc: "Our London letting agents assess the property's condition and market demand to agree a realistic rental figure." },
        { title: "We Market & Find Your Tenant", desc: "Professional photography, listing on major platforms, viewings, and thorough referencing of every applicant." },
        { title: "Placement & Beyond", desc: "Tenancy agreement, deposit registration, and move-in. We hand back or continue managing based on your choice." }
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
                    <span className="text-[10px] uppercase tracking-[0.6em] text-white/40 block mb-6">Residential Lettings</span>
                    <h1 className="text-5xl md:text-8xl font-[Outfit] font-extrabold uppercase tracking-tighter leading-[0.9] mb-8">
                        Lettings <br /> <span className="text-[#DAA520]">Agents</span>
                    </h1>
                    <p className="max-w-3xl mx-auto text-white/60 text-sm md:text-base leading-relaxed font-sans mt-8 px-4">
                        Professional residential lettings for landlords across London. Whether you want us to find the right tenant and hand back control, or take on full ongoing management we handle the entire process from valuation to placement, with optional guaranteed rent available.
                    </p>
                </motion.div>
            </section>

            {/* Jump Straight into Boxed UI: Dual Option Checklist */}
            <OptionChecklist tiers={lettingTiers} />

            {/* 3-Step Process for Lettings */}
            <ProcessSteps title="Residential Onboarding Sequence" steps={startSteps} />

            {/* Market Context Block */}
            <section className="py-24 px-6 md:px-10 border-t border-dark/5 bg-white">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div>
                        <h3 className="text-xs font-bold uppercase tracking-[0.4em] text-dark/30 mb-8 font-[Outfit]">The London Market</h3>
                        <h2 className="text-4xl font-bold uppercase tracking-tighter mb-8 leading-tight">Why Residential Properties Let Well Across London</h2>
                        <div className="space-y-6 text-dark/60 text-sm leading-relaxed font-sans">
                            <p>London is one of the UK's most consistently strong rental markets, driven by major business hubs and transport connectivity.</p>
                            <p>Our residential lettings service combines local market knowledge with an active tenant pipeline, helping landlords attract reliable tenants and keep their properties performing consistently.</p>
                        </div>
                    </div>
                    <div className="relative aspect-video lg:aspect-square group overflow-hidden bg-dark">
                        <img src="/img2.jpeg" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="West London Property" />
                    </div>
                </div>
            </section>

            <Contact faqs={managementFaqs} />
        </div>
    );
};

export default ResidentialLettingsPage;
