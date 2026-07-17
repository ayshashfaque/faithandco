import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import TechnicalGrid from '../components/TechnicalGrid';
import Contact from '../components/Contact';
import { hospitalityFaqs } from '../data/faqData';
import { MessageSquare, ShieldCheck, TrendingUp, Sparkles, Camera, Globe } from 'lucide-react';

const AirbnbManagementPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const airbnbTiles = [
        { 
            title: "24/7 Guest Concierge", 
            desc: "Institutional handling of all enquiries, check-ins, and guest support, ensuring 100% responsive stewardship.",
            icon: <MessageSquare size={32} />
        },
        { 
            title: "Professional Media Audit", 
            desc: "Cinematic photography and optimised keyword listing creation to ensure your property ranks #1 in London search results.",
            icon: <Camera size={32} />
        },
        { 
            title: "Multi-Platform Visibility", 
            desc: "Simultaneous management across Airbnb, Booking.com, and VRBO, expanding your asset's global reach and occupancy.",
            icon: <Globe size={32} />
        },
        { 
            title: "Dynamic Revenue Optimisation", 
            desc: "Real-time pricing algorithms that adjust nightly rates based on London events, demand velocity, and competitor data.",
            icon: <TrendingUp size={32} />
        },
        { 
            title: "Professional Guest Vetting", 
            desc: "Rigorous ID verification and security deposit protocols for every booking, protecting your asset as a primary priority.",
            icon: <ShieldCheck size={32} />
        },
        { 
            title: "Hotel-Standard Continuity", 
            desc: "Industrial-grade cleaning and maintenance between every stay, maintaining premium condition and elite guest reviews.",
            icon: <Sparkles size={32} />
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
                    <span className="text-[10px] uppercase tracking-[0.6em] text-white/40 block mb-6">Hospitality Tiers</span>
                    <h1 className="text-5xl md:text-8xl font-[Outfit] font-extrabold uppercase tracking-tighter leading-[0.9] mb-8">
                        Airbnb <br /> <span className="text-[#DAA520]">Management</span>
                    </h1>
                    <p className="max-w-3xl mx-auto text-white/60 text-sm md:text-base leading-relaxed font-sans px-4">
                        Professional, hands-off Airbnb management tailored for London landlords. We optimise your listing, handle 100% of guest communication, and maximize yields via dynamic institutional pricing.
                    </p>
                </motion.div>
            </section>

            {/* Matrix */}
            <TechnicalGrid 
                title="Management Framework" 
                items={airbnbTiles} 
                columns={3} 
            />

            {/* Resident Profile Integration */}
            <section className="py-24 px-6 md:px-10 bg-[#FAF9F6] border-t border-dark/5 text-center">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-[Outfit] font-black uppercase tracking-tighter mb-8 italic">
                        The <span className="text-[#DAA520]">Guest Profile</span>
                    </h2>
                    <p className="text-dark/60 text-base leading-relaxed mb-12">
                        We prioritize high-value, professional guests including aviation industry workers, healthcare staff, and corporate consultants who treat your asset with the highest standards of respect.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        {['Aviation Crew', 'Medical Rotationals', 'B2B Consultants', 'Relocation Families'].map((tag, i) => (
                            <span key={i} className="px-6 py-2 bg-white border-[0.5px] border-dark/10 text-[10px] font-bold uppercase tracking-widest text-[#DAA520]">{tag}</span>
                        ))}
                    </div>
                </div>
            </section>

            <Contact faqs={hospitalityFaqs} />
        </div>
    );
};

export default AirbnbManagementPage;
