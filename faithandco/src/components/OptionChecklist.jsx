import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

/**
 * OptionChecklist - Benchmark Pattern
 * Side-by-side vertical tier comparison.
 */
const OptionChecklist = ({ tiers }) => {
  return (
    <section className="py-24 px-6 md:px-10 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {tiers.map((tier, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: idx === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white border-[0.5px] border-dark/10 p-12 md:p-16 flex flex-col items-start shadow-sm"
          >
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#DAA520] mb-8 block">
              Tier Option 0{idx + 1}
            </span>
            <h3 className="text-4xl md:text-5xl font-[Outfit] font-extrabold uppercase tracking-tighter text-dark mb-10 leading-none">
              {tier.title}
            </h3>
            
            <p className="text-sm text-dark/60 font-sans leading-relaxed mb-12 max-w-md">
              {tier.desc}
            </p>
            
            <div className="w-full space-y-4 mb-12">
              {tier.features.map((feature, fIdx) => (
                <div key={fIdx} className="flex items-start gap-4 py-4 border-b border-dark/5">
                  <Check size={14} className="mt-1 text-[#DAA520] flex-shrink-0" />
                  <span className="text-xs md:text-sm font-sans text-dark/70 font-medium">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
            
            <button className="mt-auto group flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.3em] text-dark hover:text-[#DAA520] transition-colors">
              Request Full Specification
              <div className="w-8 h-[0.5px] bg-current transition-all group-hover:w-12" />
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default OptionChecklist;
