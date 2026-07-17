import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <section className="py-24 bg-[#0A192F] text-white overflow-hidden relative">
            <div className="max-w-[1400px] mx-auto px-12 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-32">
                    {/* Technical Contact Panel */}
                    <div>
                        <motion.span 
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-[10px] font-bold uppercase tracking-[0.6em] text-white/40 block mb-8"
                        >
                            Institutional Engagement
                        </motion.span>
                        <motion.h2 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-16 font-outfit"
                        >
                            Get In <br /> <span className="text-white/20">Touch</span>
                        </motion.h2>
                        
                        <div className="space-y-12">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                            >
                                <p className="text-[10px] font-bold uppercase tracking-widest text-white/30 mb-2">Registered Office</p>
                                <p className="text-xl font-bold uppercase tracking-tight">86A High Street, Southall, UB1 3DB</p>
                            </motion.div>
                            
                            <div className="flex flex-wrap gap-16">
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 }}
                                >
                                    <p className="text-[10px] font-bold uppercase tracking-widest text-white/30 mb-2">Telephone</p>
                                    <p className="text-xl font-bold uppercase tracking-tight text-[#FAF9F6]">020 8574 1700</p>
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.4 }}
                                >
                                    <p className="text-[10px] font-bold uppercase tracking-widest text-white/30 mb-2">Email</p>
                                    <p className="text-xl font-bold uppercase tracking-tight text-[#FAF9F6]">info@faithandco.co.uk</p>
                                </motion.div>
                            </div>
                        </div>
                    </div>

                    {/* Inquiry Form */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        className="bg-white p-12 border border-white/10 shadow-2xl relative"
                    >
                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <input 
                                type="text" 
                                placeholder="FULL NAME" 
                                className="w-full bg-[#FAF9F6] border-none p-6 text-[10px] font-bold tracking-widest outline-none text-[#0A192F] placeholder-[#0A192F]/30" 
                            />
                            <input 
                                type="email" 
                                placeholder="EMAIL ADDRESS" 
                                className="w-full bg-[#FAF9F6] border-none p-6 text-[10px] font-bold tracking-widest outline-none text-[#0A192F] placeholder-[#0A192F]/30" 
                            />
                            <select className="w-full bg-[#FAF9F6] border-none p-6 text-[10px] font-bold tracking-widest outline-none text-[#0A192F] appearance-none">
                                <option>STRATEGIC INQUIRY</option>
                                <option>HMO MANAGEMENT</option>
                                <option>CARE SECTOR INFRASTRUCTURE</option>
                                <option>PROPERTIES & ACQUISITIONS</option>
                            </select>
                            <textarea 
                                placeholder="TECHNICAL BRIEF..." 
                                rows="3" 
                                className="w-full bg-[#FAF9F6] border-none p-6 text-[10px] font-bold tracking-widest outline-none text-[#0A192F] placeholder-[#0A192F]/30 resize-none" 
                            />
                            <button className="w-full py-6 bg-[#0A192F] text-white text-[10px] uppercase font-bold tracking-[0.4em] hover:bg-black transition-all">
                                Engage Team
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
            
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-5 pointer-events-none grayscale">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/10 to-transparent"></div>
            </div>
        </section>
    );
};

export default Contact;
