import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Home, Users, Heart, Briefcase, Activity, Landmark, Scale, Building2, UserPlus, FileCheck, ChevronDown, Plus, Minus, Database } from 'lucide-react';

const careCategories = [
    { 
        title: "Supported Living",
        desc: "Supported living enables individuals with learning disabilities, mental health needs, or physical disabilities to live in their own homes rather than residential care. Our infrastructure provides a baseline of safety while allowing for 24/7 on-site support staff. This model focuses on person-centred outcomes, ensuring that every resident has a tenancy agreement and control over their environment, fostering long-term independence and community integration."
    },
    { 
        title: "Children's Residential Homes",
        desc: "Specialized residential facilities designed to provide a nurturing, safe, and structured environment for children and young people who cannot live with their birth families. These homes are strictly registered with Ofsted and must meet rigorous Quality Standards. Our properties are selected for their proximity to schools and community services, featuring high-spec communal areas and private bedrooms that offer a sense of stability and domestic warmth."
    },
    { 
        title: "Semi-Independent Living (16-17)",
        desc: "A transitional housing model for 16 and 17-year-olds who are looked after by the local authority or are care leavers. These facilities provide an essential bridge between institutional care and full independence. Support is tailored to help young people develop life skills such as budgeting, cooking, and career planning, all within a supervised setting that ensures safeguarding protocols are maintained around the clock."
    },
    { 
        title: "Supported Accommodation (Care Leavers 16-25)",
        desc: "Targeted housing for care leavers aged 16 to 25, facilitating a gradual transition into adult life. This sector addresses the specific challenges faced by young people leaving the care system, providing stable tenancies combined with floating or on-site support. The goal is to prevent homelessness and social isolation during this vulnerable transition period, providing a solid foundation for further education and employment."
    },
    { 
        title: "Step-Down & Discharge-to-Assess Housing",
        desc: "Interim housing solutions for individuals who no longer require acute hospital care but are not yet ready to return to their permanent homes. This 'Step-Down' model is critical for reducing hospital bed blocking and ensuring patient flow within the NHS. Our properties are equipped to facilitate assessments by social workers and therapists, providing a safe environment for recuperation and re-ablement before a final move."
    },
    { 
        title: "Drug & Alcohol Recovery Housing",
        desc: "Specialist accommodation for individuals who have completed primary detox but require a stable, substance-free environment to maintain their recovery. These 'dry' houses provide a peer-supported community that is essential for relapse prevention. The infrastructure supports a culture of sobriety, helping residents re-establish healthy routines and prepare for long-term reintegration into the workforce and community."
    },
    { 
        title: "Domestic Abuse Refuge & Move-On Housing",
        desc: "Crucial safe havens for individuals and families fleeing domestic abuse. We provide high-security refuge accommodation followed by 'Move-On' housing that offers a path toward permanent rehousing. These facilities are designed with heightened privacy and security features, providing a calm and restorative environment where survivors can access trauma-informed support and begin rebuilding their lives in safety."
    },
    { 
        title: "Older People's Housing with Extra Care",
        desc: "A modern alternative to traditional residential care, Extra Care housing allows older people to live in their own self-contained apartments with the security of 24-hour care available on-site if needed. Our developments feature communal social spaces, accessible architecture, and smart technology, promoting both social inclusion and physical safety while preserving individual privacy and dignity."
    },
    { 
        title: "Forensic Supported Housing",
        desc: "Specialized housing for individuals with mental health issues who have entered the criminal justice system. This high-support environment provides a pathway from secure hospital units back into the community. Our forensic infrastructure is designed for robust risk management and clinical supervision, focusing on reducing re-offending and ensuring patient stability through structured rehabilitation programs."
    },
    { 
        title: "Forensic Community Accommodation (MAPPA/CAS3)",
        desc: "Highly managed housing for individuals under Multi-Agency Public Protection Arrangements (MAPPA) or the Commissioning of Accommodation and Support (CAS3) framework. These facilities provide the necessary oversight and structure to manage risk in the community effectively. The focus is on stringent compliance with license conditions while providing a stable base to prevent homelessness among high-risk individuals."
    },
    { 
        title: "Exempt Accommodation",
        desc: "A specific type of supported housing where the provider is 'exempt' from the standard Local Housing Allowance caps due to the level of care and support provided. This model is vital for housing some of the most vulnerable groups in society, ensuring that high-intensity support costs are met through specialized funding streams, enabling the provision of intensive housing management and personalized care."
    }
];

const GlassAccordion = ({ cat, index }) => {
    const [isOpen, setIsOpen] = useState(false);

    // Map different icons based on index
    const IconComponents = [Home, Users, Heart, Briefcase, Activity, Shield, Landmark, Scale, Building2, UserPlus, Database];
    const Icon = IconComponents[index % IconComponents.length];

    return (
        <div className="w-full">
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className={`w-full p-10 flex items-center justify-between border-b border-navy/5 transition-all duration-700 ${index % 2 === 0 ? 'bg-bone' : 'bg-navy/[0.02]'} ${isOpen ? 'bg-navy !text-bone' : 'hover:bg-navy/[0.05]'}`}
            >
                <div className="flex items-center gap-10">
                    <span className="text-[12px] font-automobile opacity-20">{String(index + 1).padStart(2, '0')}</span>
                    <Icon size={24} className={`transition-colors ${isOpen ? 'text-bone' : 'text-navy'}`} strokeWidth={1} />
                    <h2 className={`text-2xl md:text-3xl font-automobile transition-colors ${isOpen ? 'text-bone' : 'text-navy'}`}>{cat.title}</h2>
                </div>
                <div className={`w-10 h-10 flex items-center justify-center border transition-all duration-500 ${isOpen ? 'rotate-180 border-bone text-bone' : 'border-navy/20 text-navy'}`}>
                    <ChevronDown size={20} />
                </div>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
                        className="overflow-hidden bg-navy/[0.03] backdrop-blur-xl"
                    >
                        <div className="p-16">
                            <div className="max-w-4xl">
                                <h4 className="text-[10px] font-automobile uppercase tracking-[0.4em] text-navy/40 mb-8">Classification Insight</h4>
                                <p className="text-xl md:text-2xl font-headings text-navy italic leading-relaxed">
                                    {cat.desc}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

const CareSectorPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-bone pt-[100px] selection:bg-navy selection:text-white pb-40 overflow-hidden">
            <header className="px-6 md:px-12 py-32 border-b border-navy/5">
                <div className="max-w-[1400px] mx-auto">
                    <span className="text-navy/40 font-automobile uppercase tracking-[0.6em] text-[10px] mb-6 block">Facility Ledger</span>
                    <h1 className="text-6xl md:text-8xl font-headings text-navy leading-none">
                        Care Sector <br/> <span className="italic opacity-40">Classifications</span>
                    </h1>
                </div>
            </header>

            <section className="px-6 md:px-12 py-12">
                <div className="max-w-[1400px] mx-auto border-t border-navy/5">
                    {careCategories.map((cat, idx) => (
                        <div key={idx}>
                             <GlassAccordion cat={cat} index={idx} />
                        </div>
                    ))}
                </div>
            </section>

        </div>
    );
};

export default CareSectorPage;
