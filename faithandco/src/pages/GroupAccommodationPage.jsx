import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import TechnicalGrid from '../components/TechnicalGrid';
import Contact from '../components/Contact';
import { hospitalityFaqs } from '../data/faqData';
import { Users, Calendar, ShieldCheck, MapPin, Package, Home } from 'lucide-react';

const GroupAccommodationPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const groupTiles = [
        { 
            title: "Extended Occupancy Stability", 
            desc: "Contractor teams and relocating families typically book for weeks or months, reducing turnover friction and management costs.",
            icon: <Calendar size={32} />
        },
        { 
            title: "Purpose-Driven Residents", 
            desc: "Guests are in London for professional commitments or relocations, resulting in respectful use and consistent asset care.",
            icon: <Users size={32} />
        },
        { 
            title: "Year-Round Demand", 
            desc: "Infrastructure projects and major commercial hubs in London generate steady demand regardless of seasonal tourism loops.",
            icon: <MapPin size={32} />
        },
        { 
            title: "Premium Multi-Unit Rates", 
            desc: "Larger properties command superior weekly rates for group bookings, optimizing yield for 3+ bedroom assets and HMOs.",
            icon: <Home size={32} />
        },
        { 
            title: "Institutional Vetting & Bond", 
            desc: "Every group is ID-verified with security deposits held and full upfront payments collected as standard protocol.",
            icon: <ShieldCheck size={32} />
        },
        { 
            title: "Comprehensive Management", 
            desc: "100% hands-off stewardship covering guest communication, industrial cleaning, and proactive minor repairs.",
            icon: <Package size={32} />
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
                    <span className="text-[10px] uppercase tracking-[0.6em] text-white/40 block mb-6">High-Yield Lodging</span>
                    <h1 className="text-5xl md:text-8xl font-[Outfit] font-extrabold uppercase tracking-tighter leading-[0.9] mb-8">
                        Group <br /> <span className="text-[#DAA520]">Accommodation</span>
                    </h1>
                    <p className="max-w-3xl mx-auto text-white/60 text-sm md:text-base leading-relaxed font-sans px-4">
                        Quality, fully managed accommodation for teams, relocating families, and professional collectives across London. Maximum space, flexible terms, and institutional reliability.
                    </p>
                </motion.div>
            </section>

            {/* Matrix */}
            <TechnicalGrid 
                title="Group Booking Framework" 
                items={groupTiles} 
                columns={3} 
            />

            {/* Who We House Section */}
            <section className="py-24 px-6 md:px-10 bg-[#FAF9F6] border-t border-dark/5">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl md:text-6xl font-[Outfit] font-black uppercase tracking-tighter mb-16 italic text-center leading-[0.9]">
                        Specialist <span className="text-[#DAA520]">Resident Profiles</span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { t: "Contractor Teams", d: "Site crews and engineering teams on major infrastructure projects needing reliable local housing." },
                            { t: "Corporate Groups", d: "Colleagues on extended assignments or project launches who value shared professional living." },
                            { t: "Relocating Families", d: "Private families between permanent homes who treat properties with the highest standard of care." },
                            { t: "Aviation Collectives", d: "Flight crews and airport logistics teams requiring proximity to major London hubs." }
                        ].map((item, i) => (
                            <div key={i} className="p-8 border-[0.5px] border-dark/10 bg-white">
                                <h4 className="font-bold uppercase tracking-widest text-[#DAA520] text-[10px] mb-4">{item.t}</h4>
                                <p className="text-xs text-dark/50 leading-relaxed font-sans">{item.d}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Contact faqs={hospitalityFaqs} />
        </div>
    );
};

export default GroupAccommodationPage;
