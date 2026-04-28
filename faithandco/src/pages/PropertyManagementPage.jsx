import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import TechnicalGrid from '../components/TechnicalGrid';
import OptionChecklist from '../components/OptionChecklist';
import Contact from '../components/Contact';
import { managementFaqs } from '../data/faqData';
import { Users, ShieldCheck, Search, Wrench, MessageSquare, Trash2, FileText, ClipboardCheck } from 'lucide-react';

const PropertyManagementPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const managementTiers = [
        {
            title: "Full Management From the Start",
            desc: "Complete hands-off management from the outset. We source the right tenants and manage everything throughout the residency.",
            features: [
                "Property marketing and strategic viewings",
                "Tenant sourcing, referencing and vetting",
                "Tenancy agreements and move-in coordination",
                "Rent collection or optional guaranteed rent",
                "Ongoing management, inspections and maintenance",
                "All tenant communication handled for you"
            ]
        },
        {
            title: "Take-Over Management",
            desc: "Seamlessly transition an existing tenancy to our professional care. We handle all communication and day-to-day responsibilities.",
            features: [
                "Seamless handover — tenants notified professionally",
                "Rent collection transferred to us immediately",
                "All maintenance requests and repairs managed",
                "Routine inspections and condition reporting",
                "Tenancy renewals and end-of-tenancy protocol",
                "Optional guaranteed rent available on transfer"
            ]
        }
    ];

    const managementTiles = [
        { 
            title: "Tenant Sourcing & Vetting", 
            desc: "Rigorous reference and ID verification of working professionals, prioritizing reliability and compatibility.",
            icon: <Users size={32} />
        },
        { 
            title: "Rent Collection", 
            desc: "Prompt collection and transfer. Optional Guaranteed Rent scheme fixes your payment regardless of occupancy.",
            icon: <ShieldCheck size={32} />
        },
        { 
            title: "Routine Property Inspections", 
            desc: "Scheduled onsite audits with photographic reports to protect your asset's long-term value.",
            icon: <Search size={32} />
        },
        { 
            title: "Maintenance & Repairs", 
            desc: "Day-to-day minor maintenance and leaking taps are handled by our team without any landlord involvement.",
            icon: <Wrench size={32} />
        },
        { 
            title: "All Tenant Communication", 
            desc: "From queries to renewals, all communication goes through us. You never deal with tenants directly.",
            icon: <MessageSquare size={32} />
        },
        { 
            title: "Cleaning & End-of-Tenancy", 
            desc: "Professional cleaning coordination and thorough exit audits to maintain institutional standards.",
            icon: <Trash2 size={32} />
        },
        { 
            title: "Agreements & Renewals", 
            desc: "Full administrative stewardship of documentation, deposit registration, and lease renewals.",
            icon: <FileText size={32} />
        },
        { 
            title: "Landlord Reporting", 
            desc: "Regular updates on condition and performance. Informed control without operational burden.",
            icon: <ClipboardCheck size={32} />
        }
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
                        Property <br /> <span className="text-[#DAA520]">Management</span>
                    </h1>
                    <p className="max-w-3xl mx-auto text-white/60 text-sm md:text-base leading-relaxed font-sans mt-8 px-4">
                        Hands-off professional property management across London. Whether you need full management from the start or want to hand over an existing tenancy, our team handles everything with optional guaranteed rent available.
                    </p>
                </motion.div>
            </section>

            {/* Jump Straight into Boxed UI: Dual Option Checklist */}
            <OptionChecklist tiers={managementTiers} />

            {/* Technical Service Grid */}
            <TechnicalGrid 
                title="Management Portfolio Scope" 
                items={managementTiles} 
                columns={4} 
            />

            <Contact faqs={managementFaqs} />
        </div>
    );
};

export default PropertyManagementPage;
