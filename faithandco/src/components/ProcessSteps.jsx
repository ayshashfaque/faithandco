import React from 'react';
import { motion } from 'framer-motion';

/**
 * ProcessSteps - Benchmark Pattern
 * The 3-step numbered cards for operational flows.
 */
const ProcessSteps = ({ title, steps }) => {
  return (
    <section className="py-24 px-6 md:px-10 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-[10px] md:text-xs font-bold uppercase tracking-[0.5em] text-dark/30 mb-20 text-center">
          {title}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="relative flex flex-col items-center text-center group"
            >
              {/* Boxed Number */}
              <div className="w-16 h-16 border-[0.5px] border-dark/10 flex items-center justify-center mb-10 group-hover:bg-dark group-hover:text-white transition-all duration-500">
                <span className="font-[Outfit] font-extrabold text-xl">0{idx + 1}</span>
              </div>
              
              <h3 className="text-xl font-bold uppercase tracking-tighter text-dark mb-6">
                {step.title}
              </h3>
              <p className="text-sm text-dark/50 leading-relaxed font-sans max-w-xs">
                {step.desc}
              </p>
              
              {/* Connecting Line (Desktop) */}
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[calc(50%+4rem)] w-[calc(100%-8rem)] h-[0.5px] bg-dark/10" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;
