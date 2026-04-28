import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import TechnicalGrid from '../components/TechnicalGrid';
import Contact from '../components/Contact';
import { complianceFaqs } from '../data/faqData';
import { ShieldAlert, Users, Home } from 'lucide-react';

const HMOLicensingPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const licensingCriteria = [
        { 
            title: "5+ Occupants", 
            desc: "Mandatory licensing applies if your property is rented to five or more individuals who are not part of the same family.",
            icon: <Users size={32} />
        },
        { 
            title: "Multiple Households", 
            desc: "Applicable where occupants form more than one household (unrelated individuals or couples) within the building.",
            icon: <ShieldAlert size={32} />
        },
        { 
            title: "Shared Facilities", 
            desc: "Tenants share essential spaces like kitchens or bathrooms, defining the property as a shared home under HMO law.",
            icon: <Home size={32} />
        }
    ];

    const safetyDocs = [
        { item: "Gas Safety Certificate (CP12)", cycle: "Annually" },
        { item: "EICR (Electrical Inspection)", cycle: "Every 5 Years" },
        { item: "Fire Risk Assessment", cycle: "Annually (Recommended)" },
        { item: "Fire Alarm Testing Cert", cycle: "Annually" },
        { item: "Emergency Lighting Test", cycle: "Annually (If Applicable)" },
        { item: "Portable Appliance Testing (PAT)", cycle: "Annually" },
        { item: "Legionella Risk Assessment", cycle: "Periodic Review" }
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
                    <span className="text-[10px] uppercase tracking-[0.6em] text-white/40 block mb-6">Regulatory Stewardship</span>
                    <h1 className="text-5xl md:text-8xl font-[Outfit] font-extrabold uppercase tracking-tighter leading-[0.9] mb-8">
                        The HMO <br /> <span className="text-[#DAA520]">Licensing Guide</span>
                    </h1>
                    <p className="max-w-3xl mx-auto text-white/60 text-sm md:text-base leading-relaxed font-sans px-4">
                        Comprehensive compliance for London HMO landlords. Ensure your property meets mandatory standards and protects your investment from regulatory friction.
                    </p>
                </motion.div>
            </section>

            {/* Licensing Thresholds */}
            <TechnicalGrid 
                title="When is a Licence Mandatory?" 
                items={licensingCriteria} 
                columns={3} 
            />

            {/* Compliance Matrix Table */}
            <section className="py-24 px-6 md:px-10 bg-[#FAF9F6] border-t border-dark/5">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-[Outfit] font-black uppercase tracking-tighter mb-12 text-center italic">
                        Safety & <span className="text-[#DAA520]">Compliance Matrix</span>
                    </h2>
                    <div className="overflow-x-auto border-[0.5px] border-dark/10 bg-white">
                        <table className="w-full border-collapse">
                            <thead>
                                <tr className="border-b-[0.5px] border-dark/10 bg-dark text-white">
                                    <th className="p-8 text-left text-[10px] uppercase tracking-widest font-bold">Essential Documentation</th>
                                    <th className="p-8 text-left text-[10px] uppercase tracking-widest font-bold">Review Cycle</th>
                                </tr>
                            </thead>
                            <tbody>
                                {safetyDocs.map((doc, idx) => (
                                    <tr key={idx} className="border-b-[0.5px] border-dark/10 hover:bg-dark/[0.02]">
                                        <td className="p-8 text-xs font-bold uppercase tracking-tight">{doc.item}</td>
                                        <td className="p-8 text-xs font-medium text-[#DAA520] uppercase tracking-widest">{doc.cycle}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <p className="mt-8 text-[10px] uppercase tracking-widest text-dark/30 text-center">
                        Note: Local authorities may require additional selective or additional licensing tiers.
                    </p>
                </div>
            </section>

            <Contact faqs={complianceFaqs} />
        </div>
    );
};

export default HMOLicensingPage;
