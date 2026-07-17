import React from 'react'
import { motion } from 'framer-motion'

const ZPatternLayout = ({ blocks }) => {
  return (
    <div className="mt-20 flex flex-col gap-24 md:gap-32">
      {blocks.map((block, i) => (
        <div key={i} className={`flex flex-col md:flex-row gap-12 md:gap-20 items-center ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
          
          {/* Image Side */}
          <motion.div 
             initial={{ opacity: 0, x: i % 2 === 1 ? 30 : -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
             className="w-full md:w-1/2 h-[350px] md:h-[450px] border border-white/10 rounded-[2rem] overflow-hidden p-2 bg-white/5 shadow-2xl relative group"
          >
            <div className="w-full h-full rounded-2xl overflow-hidden relative">
               <img 
                 src={block.image} 
                 alt={block.title} 
                 className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 ease-in-out" 
               />
               <div className="absolute inset-0 bg-[#734d26]/10 mix-blend-overlay"></div>
            </div>
          </motion.div>

          {/* Text Side */}
          <motion.div 
             initial={{ opacity: 0, x: i % 2 === 1 ? -30 : 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8, delay: 0.2 }}
             className="w-full md:w-1/2 flex flex-col justify-center"
          >
            <h2 className="font-[Outfit] font-light text-3xl md:text-5xl uppercase tracking-[0.15em] text-white mb-4">
              {block.title}
            </h2>
            <h3 className="font-serif italic text-pearl/50 text-xl md:text-2xl mb-8">
              {block.subtitle}
            </h3>
            <div className="w-12 h-[1px] bg-[#734d26] mb-8"></div>
            <p className="font-sans text-pearl/70 leading-relaxed text-lg whitespace-pre-wrap">
              {block.description}
            </p>
          </motion.div>

        </div>
      ))}
    </div>
  )
}

export default ZPatternLayout
