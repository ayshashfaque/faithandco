import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import TechnicalGrid from '../components/TechnicalGrid';
import ProcessSteps from '../components/ProcessSteps';
import Contact from '../components/Contact';
import { hospitalityFaqs } from '../data/faqData';
import { TrendingUp, Globe, Camera, LineChart, Sparkles, BarChart, ShieldCheck, MapPin } from 'lucide-react';

const ShortTermLetsPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const stlTiles = [
        { 
            title: "Multi-Platform Marketing", 
            desc: "Maximum reach via Airbnb, Booking.com, and corporate B2B channels, ensuring optimized occupancy year-round across London.",
            icon: <Globe size={32} />
        },
        { 
            title: "Dynamic Pricing Engine", 
            desc: "Real-time adjustments based on hyper-local demand, events, and seasonal fluctuations to capture peak nightly rates.",
            icon: <TrendingUp size={32} />
        },
        { 
            title: "Revenue Optimization", 
            desc: "Data-driven strategies designed to maximize net yields, typically outperforming standard tenancies by up to 30%.",
            icon: <LineChart size={32} />
        },
        { 
            title: "Performance Based Fees", 
            desc: "Our incentives are directly aligned with yours; we earn on a percentage of the revenue generated for your asset.",
            icon: <BarChart size={32} />
        },
        { 
            title: "Professional Media Creation", 
            desc: "Institutional photography and optimized listing creation to ensure your property ranks at the top of every platform.",
            icon: <Camera size={32} />
        },
        { 
            title: "Hotel-Standard Stewardship", 
            desc: "Professional cleaning and housekeeping between every stay, protecting your ratings and asset condition long-term.",
            icon: <Sparkles size={32} />
        },
        { 
            title: "Asset Condition Monitoring", 
            desc: "Frequent changeovers allow for regular inspections and proactive maintenance responses that ASTs simply can't match.",
            icon: <ShieldCheck size={32} />
        },
        { 
            title: "London Market Expertise", 
            desc: "Deep knowledge of professional demand corridors, focusing on corporate, aviation, and healthcare resident profiles.",
            icon: <MapPin size={32} />
        }
    ];

    const stlSteps = [
        { 
            title: "Technical Valuation", 
            desc: "No-obligation assessment of your asset's short-let potential based on London market velocity." 
        },
        { 
            title: "Strategic Onboarding", 
            desc: "Full preparation including media capture, listing optimization, and pricing framework setup." 
        },
        { 
            title: "Go-Live & Management", 
            desc: "Wait for the first booking. We handle 100% of guest communication, cleaning, and revenue management." 
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
                    <span className="text-[10px] uppercase tracking-[0.6em] text-white/40 block mb-6">Short Stay Optimization</span>
                    <h1 className="text-5xl md:text-8xl font-[Outfit] font-extrabold uppercase tracking-tighter leading-[0.9] mb-8">
                        Short Term <br /> <span className="text-[#DAA520]">Let Management</span>
                    </h1>
                    <p className="max-w-3xl mx-auto text-white/60 text-sm md:text-base leading-relaxed font-sans px-4">
                        Maximize your London property's yield with hotel-standard management. From Airbnb optimization to dynamic pricing, we handle every stay so you can simply receive the returns.
                    </p>
                </motion.div>
            </section>

            {/* Performance Matrix */}
            <TechnicalGrid 
                title="Management Framework" 
                items={stlTiles} 
                columns={4} 
            />

            {/* Process Sequence */}
            <ProcessSteps 
                title="The Setup Sequence" 
                steps={stlSteps} 
            />

            {/* Section: The Resident Profile */}
            <section className="py-24 px-6 md:px-10 bg-[#FAF9F6]">
                <div className="max-w-5xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl md:text-5xl font-[Outfit] font-black uppercase tracking-tighter mb-8 leading-[0.9]">
                                High-Tier <br /> <span className="text-[#DAA520]">Professional Residents</span>
                            </h2>
                            <p className="text-dark/60 text-base leading-relaxed mb-6">
                                We target the right residents for every stay. London attracts a steady flow of aviation professionals, business travelers, and healthcare staff who value快適, well-managed stays.
                            </p>
                            <p className="text-dark/40 text-sm italic font-serif">
                                Every resident is fully vetted with ID verification, security deposits, and upfront payments as standard protocol.
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { t: "Aviation", d: "Crew & Airport Staff" },
                                { t: "Healthcare", d: "Rotation Medicals" },
                                { t: "Corporate", d: "B2B Relocations" },
                                { t: "Contractors", d: "Site Infrastructure" }
                            ].map((item, i) => (
                                <div key={i} className="p-6 bg-white border-[0.5px] border-dark/10 shadow-sm">
                                    <h4 className="font-bold text-xs uppercase tracking-widest mb-2 text-[#DAA520]">{item.t}</h4>
                                    <p className="text-[10px] uppercase text-dark/40 tracking-tighter">{item.d}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <Contact faqs={hospitalityFaqs} />
        </div>
    );
};

export default ShortTermLetsPage;
