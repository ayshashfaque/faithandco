import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';

const ServicedAccPreview = () => {
    return (
        <section className="relative w-full bg-dark py-24 md:py-32 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col lg:flex-row-reverse gap-20 items-center">
                
                {/* Right Content */}
                <div className="w-full lg:w-1/2">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-[#DAA520] font-bold uppercase tracking-[0.4em] text-[10px] mb-6 block">
                            Managed Accommodation
                        </span>
                        <h2 className="text-5xl md:text-7xl font-[Outfit] font-extrabold uppercase tracking-tighter text-white leading-[0.9] text-left">
                            Managed <br /> <span className="text-white/40">Accommodation</span>
                        </h2>
                        <p className="text-lg md:text-xl font-serif italic text-white/50 leading-relaxed mb-12 max-w-xl">
                            Maximizing property performance through optimized corporate stays and professional hospitality management.
                        </p>

                        <div className="flex flex-col gap-6 mb-16">
                            {[
                                { title: "Listing Optimization", desc: "Multi-platform exposure on Airbnb, Booking.com & VRBO." },
                                { title: "Dynamic Pricing", desc: "Real-time rate adjustments to maximize nightly revenue." },
                                { title: "24/7 Guest Relations", desc: "End-to-end hosting from inquiry to professional housekeeping." }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-6">
                                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0">
                                        <Star size={16} className="text-[#DAA520]" />
                                    </div>
                                    <div>
                                        <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-1">{item.title}</h4>
                                        <p className="text-xs text-white/40">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <Link 
                            to="/properties"
                            className="group inline-flex items-center gap-6 px-12 py-5 bg-white text-dark font-bold uppercase tracking-widest text-[10px] rounded-full hover:bg-[#D4AF37] hover:text-white transition-all duration-500 shadow-xl hover:shadow-[0_0_30px_rgba(212,175,55,0.3)]"
                        >
                            View Available Units <ArrowRight className="group-hover:translate-x-2 transition-all" />
                        </Link>
                    </motion.div>
                </div>

                {/* Left Visual (Dynamic Yield Focus) */}
                <div className="w-full lg:w-1/2 relative group">
                    <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
                        <img 
                            src="/img2.jpeg" 
                            alt="Luxury Serviced Apartment" 
                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent"></div>
                        
                        {/* Overlay Performance Badge */}
                        <div className="absolute bottom-10 left-10 p-8 bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl">
                            <span className="text-[10px] font-bold uppercase tracking-widest text-white/60 block mb-2">Portfolio Management</span>
                            <span className="text-2xl font-black text-white uppercase tracking-tighter italic">Faith and Co <span className="text-[#D4AF37]">Managed</span></span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicedAccPreview;
