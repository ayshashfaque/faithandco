import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import TechnicalGrid from '../components/TechnicalGrid';
import ProcessSteps from '../components/ProcessSteps';
import Contact from '../components/Contact';
import { managementFaqs } from '../data/faqData';
import { ShieldCheck, FileText, Wrench, Users, Search, ClipboardCheck, Trash2, Home, MessageSquare } from 'lucide-react';

const HMOManagementPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const hmoTiles = [
        { 
            title: "Professional Tenant Sourcing & Vetting", 
            desc: "We source, reference, and ID-verify working professionals for every room. Our thorough vetting filters for reliability, affordability, and household compatibility.",
            icon: <Users size={32} />
        },
        { 
            title: "Rent Collection & Guaranteed Income", 
            desc: "We collect rent and pay you a guaranteed fixed income on the same date every month, even if a room sits empty or tenants fall behind.",
            icon: <ShieldCheck size={32} />
        },
        { 
            title: "Tenancy Agreements & Documentation", 
            desc: "Handling all tenancy agreements, move-in documentation, deposit registration, and renewal paperwork for every room in your HMO.",
            icon: <FileText size={32} />
        },
        { 
            title: "Routine Property Inspections", 
            desc: "Regular scheduled inspections with written reports on condition and occupancy, resolving issues before they become costly problems.",
            icon: <Search size={32} />
        },
        { 
            title: "Professional Cleaning & UPKEEP", 
            desc: "Regular professional cleaning of communal areas, kitchens, bathrooms, and hallways, plus thorough end-of-tenancy deep cleans.",
            icon: <Trash2 size={32} />
        },
        { 
            title: "Minor Maintenance & Repairs", 
            desc: "Day-to-day minor maintenance (leaking taps, appliance issues) is handled by our team without any landlord involvement required.",
            icon: <Wrench size={32} />
        },
        { 
            title: "All Tenant Communication", 
            desc: "Managing every aspect of tenant communication, from move-in queries to renewals and notices. You never need to deal with tenants directly.",
            icon: <MessageSquare size={32} />
        },
        { 
            title: "Regular Landlord Reporting", 
            desc: "Regular updates on occupancy, condition, and performance, giving you the oversight you want without the operational burden.",
            icon: <ClipboardCheck size={32} />
        }
    ];

    const hmoSteps = [
        { title: "Free HMO Assessment", desc: "We evaluate the property's condition, room configuration, and rental potential, then agree a fair guaranteed rent with you." },
        { title: "We Manage Everything", desc: "Our team places vetted tenants and handles all day-to-day operations. You receive your guaranteed rent on time every month." }
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
                    <span className="text-[10px] uppercase tracking-[0.6em] text-white/40 block mb-6">Expert HMO Management</span>
                    <h1 className="text-5xl md:text-8xl font-[Outfit] font-extrabold uppercase tracking-tighter leading-[0.9] mb-8">
                        Expert HMO <br /> <span className="text-[#DAA520]">Property Management</span>
                    </h1>
                    <p className="max-w-3xl mx-auto text-white/60 text-sm md:text-base leading-relaxed font-sans mt-8 px-4">
                        Specialist HMO property management for landlords across London. We handle every operational aspect of your House in Multiple Occupation, tenants, minor maintenance, inspections, and pay you guaranteed rent every month, whether the property is full or not.
                    </p>
                </motion.div>
            </section>

            {/* 2-Step Process */}
            <ProcessSteps title="Operational Onboarding Sequence" steps={hmoSteps} />

            {/* Jump Straight into Boxed UI: 8-Tile Grid */}
            <TechnicalGrid 
                title="Service Architecture & Compliance Tier" 
                items={hmoTiles} 
                columns={4} 
            />

            <Contact faqs={managementFaqs} />
        </div>
    );
};

export default HMOManagementPage;
