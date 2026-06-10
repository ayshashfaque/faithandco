import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const CollectionsGate = () => {
  const navigate = useNavigate();

  return (
    <section className="relative w-full h-[70vh] md:h-[90vh] overflow-hidden group">
      {/* Background Asset: desaturated 40% overlay */}
      <div className="absolute inset-0">
        <img 
          src="/townhouse.png" 
          alt="London Townhouse Exterior" 
          className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-105 filter grayscale-[0.3]"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Centered Action Gate */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
          className="max-w-4xl"
        >
          <span className="text-white/40 text-[10px] md:text-xs font-bold uppercase tracking-[0.5em] mb-8 block">
            Institutional Portfolio
          </span>
          <h2 className="text-4xl md:text-7xl lg:text-8xl font-[Outfit] font-extrabold uppercase tracking-tighter text-white mb-12 leading-[0.9]">
            The Faith <br className="hidden md:block"/> Collections
          </h2>
          
          <button 
            onClick={() => navigate('/collections')}
            className="group relative inline-flex items-center gap-6 px-12 py-5 bg-white text-dark font-bold uppercase tracking-widest text-[10px] md:text-xs rounded-full hover:bg-[#DAA520] hover:text-white transition-all duration-500 overflow-hidden shadow-2xl"
          >
            <span className="relative z-10">EXPLORE PORTFOLIO</span>
            <ArrowRight size={16} className="relative z-10 group-hover:translate-x-2 transition-transform duration-500" />
            <div className="absolute inset-0 bg-dark opacity-0 group-hover:opacity-10 transition-opacity" />
          </button>
        </motion.div>
      </div>

      {/* Decorative Structural Accents */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-4 opacity-30">
        <div className="w-[1px] h-12 bg-white" />
        <span className="text-[10px] text-white uppercase tracking-[0.3em] vertical-text">Scroll To Experience</span>
      </div>
    </section>
  );
};

export default CollectionsGate;
