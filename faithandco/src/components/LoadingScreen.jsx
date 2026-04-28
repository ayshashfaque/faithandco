import React from 'react';
import { motion } from 'framer-motion';

const LoadingScreen = () => {
    return (
        <motion.div 
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-[10000] bg-dark flex flex-col items-center justify-center p-10"
        >
            <div className="relative overflow-hidden w-64 h-32 flex items-center justify-center">
                <motion.img 
                    src="/logofinal.png" 
                    alt="Faith and Co Logo"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="w-full h-auto object-contain"
                />
                <motion.div 
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#DAA520] origin-left"
                />
            </div>
            <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="mt-8 text-[10px] uppercase font-bold tracking-[0.4em] text-white/40"
            >
                Loading
            </motion.p>
        </motion.div>
    );
};

export default LoadingScreen;
