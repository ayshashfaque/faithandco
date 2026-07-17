import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const StrategicPortal = () => {
    const navigate = useNavigate();

    return (
        <section className="relative w-full h-[60vh] md:h-[80vh] flex flex-col md:flex-row overflow-hidden font-sans">
            
            {/* Left Panel: RENT */}
            <div 
                className="group relative w-full md:w-1/2 h-full cursor-pointer overflow-hidden border-b md:border-b-0 md:border-r border-white/10"
                onClick={() => navigate('/properties?mode=rent')}
            >
                <img 
                    src="/img3.jpeg" 
                    alt="Luxury Rentals" 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500" />
                
                <div className="absolute inset-0 flex flex-col items-center justify-center p-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-6xl md:text-8xl font-[Outfit] font-extrabold uppercase tracking-tighter text-white mb-6">
                            RENT
                        </h2>
                        <div className="inline-flex items-center gap-4 px-8 py-3 bg-white text-dark font-bold uppercase tracking-widest text-xs rounded-full group-hover:bg-dark group-hover:text-white transition-all">
                            Explore Collections <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Right Panel: BUY */}
            <div 
                className="group relative w-full md:w-1/2 h-full cursor-pointer overflow-hidden"
                onClick={() => navigate('/properties?mode=buy')}
            >
                <img 
                    src="/img4.jpeg" 
                    alt="Investment Purchases" 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500" />

                <div className="absolute inset-0 flex flex-col items-center justify-center p-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <h2 className="text-6xl md:text-8xl font-[Outfit] font-extrabold uppercase tracking-tighter text-white mb-6">
                            BUY
                        </h2>
                        <div className="inline-flex items-center gap-4 px-8 py-3 bg-[#DAA520] text-white font-bold uppercase tracking-widest text-xs rounded-full group-hover:bg-white group-hover:text-dark transition-all">
                            Strategic Assets <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
                        </div>
                    </motion.div>
                </div>
            </div>

        </section>
    );
};

export default StrategicPortal;
