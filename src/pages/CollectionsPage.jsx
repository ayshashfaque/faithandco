import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const CollectionsPage = () => {
    const navigate = useNavigate();

    return (
        <div className="relative min-h-screen w-full bg-dark flex flex-col items-center justify-center overflow-hidden">
            {/* Background: Blurred Townhouse */}
            <div className="absolute inset-0 z-0">
                <img 
                    src="/townhouse.png" 
                    alt="Background" 
                    className="w-full h-full object-cover opacity-30 blur-2xl scale-110"
                />
                <div className="absolute inset-0 bg-dark/60" />
            </div>

            {/* Selection Interface */}
            <div className="relative z-10 w-full max-w-7xl px-10 flex flex-col md:flex-row items-center justify-center gap-20 md:gap-40">
                {/* RENT */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="group flex flex-col items-center"
                >
                    <button 
                        onClick={() => navigate('/properties?mode=rent')}
                        className="text-7xl md:text-9xl font-[Outfit] font-black uppercase tracking-tighter text-white/20 transition-all duration-700 group-hover:text-white group-hover:tracking-widest"
                    >
                        [ RENT ]
                    </button>
                    <span className="mt-8 text-white/40 text-[10px] uppercase font-bold tracking-[0.4em] opacity-0 group-hover:opacity-100 transition-opacity">
                        Managed Residential & HMOs
                    </span>
                </motion.div>

                {/* Vertical Divider */}
                <div className="hidden md:block w-[1px] h-40 bg-white/10" />

                {/* BUY */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="group flex flex-col items-center"
                >
                    <button 
                        onClick={() => navigate('/properties?mode=buy')}
                        className="text-7xl md:text-9xl font-[Outfit] font-black uppercase tracking-tighter text-white/20 transition-all duration-700 group-hover:text-[#DAA520] group-hover:tracking-widest"
                    >
                        [ BUY ]
                    </button>
                    <span className="mt-8 text-white/40 text-[10px] uppercase font-bold tracking-[0.4em] opacity-0 group-hover:opacity-100 transition-opacity">
                        Strategic Assets & Acquisitions
                    </span>
                </motion.div>
            </div>

            {/* Navigation Assist */}
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="absolute bottom-20 flex flex-col items-center gap-4"
            >
                <div className="w-[1px] h-12 bg-white/20" />
                <button 
                    onClick={() => navigate('/')}
                    className="text-[10px] text-white/40 uppercase tracking-[0.4em] hover:text-white transition-colors"
                >
                    Back to Origin
                </button>
            </motion.div>
        </div>
    );
};

export default CollectionsPage;
