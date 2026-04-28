import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import TechnicalGrid from '../components/TechnicalGrid';
import Contact from '../components/Contact';
import { hospitalityFaqs } from '../data/faqData';
import { Briefcase, Building, MapPin, Globe, CreditCard, ShieldCheck } from 'lucide-react';

const CorporateAccommodationPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const corporateItems = [
        { 
            title: "Premium Nightly Rates", 
            desc: "Business accommodation commands higher yields. Corporate employers prioritize quality and reliability, resulting in premium consistent revenue.",
            icon: <CreditCard size={32} />
        },
        { 
            title: "Direct B2B Relationships", 
            desc: "We maintain direct ties with relocation agencies and HR departments, accessing bookings that never appear on public platforms.",
            icon: <Building size={32} />
        },
        { 
            title: "Year-Round Business Demand", 
            desc: "Corporate demand in London remains consistent across all twelve months, insulating your asset from seasonal leisure dips.",
            icon: <Globe size={32} />
        },
        { 
            title: "Professionally Minded Guests", 
            desc: "Business guests maintain properties to a higher standard, raise issues promptly, and provide stable, reliable monthly income.",
            icon: <ShieldCheck size={32} />
        },
        { 
            title: "Strategic London Nodes", 
            desc: "Focusing on properties near London's commercial hubs, airport corridors, and major business parks for maximum occupancy.",
            icon: <MapPin size={32} />
        },
        { 
            title: "Fully Managed Stewardship", 
            desc: "100% hands-off management from arrival to departure, keeping your property in exceptional condition for repeat bookings.",
            icon: <Briefcase size={32} />
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
                    <span className="text-[10px] uppercase tracking-[0.6em] text-white/40 block mb-6">B2B Hospitality</span>
                    <h1 className="text-5xl md:text-8xl font-[Outfit] font-extrabold uppercase tracking-tighter leading-[0.9] mb-8">
                        Corporate <br /> <span className="text-[#DAA520]">Accommodation</span>
                    </h1>
                    <p className="max-w-3xl mx-auto text-white/60 text-sm md:text-base leading-relaxed font-sans px-4">
                        Premium, fully managed accommodation for business travelers, consultants, and visiting teams across London. Delivering the comfort and professional reliability that institutional residents expect.
                    </p>
                </motion.div>
            </section>

            {/* Matrix */}
            <TechnicalGrid 
                title="Business Stays Framework" 
                items={corporateItems} 
                columns={3} 
            />

            {/* Sector Deep Dive */}
            <section className="py-24 px-6 md:px-10 bg-[#FAF9F6] border-t border-dark/5">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-[Outfit] font-black uppercase tracking-tighter mb-12 italic text-center leading-[0.9]">
                        Corporate <span className="text-[#DAA520]">Sectors Housed</span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { group: "Int. Business Travelers", desc: "Executives and managers flying into London for conferences and short-term assignments." },
                            { group: "Relocation Teams", desc: "Employees moving to London permanently who need furnished homes while they source permanent housing." },
                            { group: "Extended Project Teams", desc: "Groups of colleagues on 14-to-90 day assignments requiring a centralized shared base." },
                            { group: "Remote Professionals", desc: "Digital nomads and remote workers needing high-speed connectivity and quiet work environments." }
                        ].map((sector, i) => (
                            <div key={i} className="p-8 bg-white border-[0.5px] border-dark/10">
                                <h4 className="font-bold text-[10px] uppercase tracking-widest text-[#DAA520] mb-3">{sector.group}</h4>
                                <p className="text-[10px] opacity-50 leading-relaxed font-sans">{sector.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Contact faqs={hospitalityFaqs} />
        </div>
    );
};

export default CorporateAccommodationPage;
