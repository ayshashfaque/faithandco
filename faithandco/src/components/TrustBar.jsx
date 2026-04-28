import React from 'react'
import { motion } from 'framer-motion'

const logos = [
  { name: 'Label 1', src: '/footer/l1.svg' },
  { name: 'Label 2', src: '/footer/l2.avif' },
  { name: 'Label 4', src: '/footer/l4.png' },
  { name: 'Label 5', src: '/footer/l5.png' },
  { name: 'Label 6', src: '/footer/l6.png' },
  { name: 'Label 7', src: '/footer/l7.png' }
]

const TrustBar = () => {
  return (
    <section className="bg-[#F3F4F6] py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-6 text-center">
          <p className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-dark/40 font-bold">
            REGULATED BY & FEATURED ON
          </p>
        </div>
        
        <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16 lg:gap-20">
          {logos.map((logo, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, opacity: 1 }}
              className="w-24 md:w-32 lg:w-40 h-12 flex items-center justify-center opacity-60 hover:opacity-100 transition-all duration-500 cursor-pointer"
            >
              <img 
                src={logo.src} 
                alt={logo.name} 
                className="max-w-full max-h-full object-contain"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TrustBar
