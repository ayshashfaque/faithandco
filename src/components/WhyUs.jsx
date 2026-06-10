import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const WhyUs = () => {
  const textRef = useRef(null)

  useEffect(() => {
    // GSAP reveal animation for the power statement
    gsap.from(textRef.current, {
      opacity: 0,
      y: 50,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse"
      }
    })
  }, [])

  return (
    <section 
      id="mission"
      className="bg-white min-h-[70vh] flex flex-col items-center justify-center py-40 px-6"
    >
      <div className="max-w-6xl mx-auto text-center" ref={textRef}>
        <h2 className="text-[#121212] text-6xl md:text-8xl lg:text-9xl font-serif font-bold tracking-tighter leading-tight italic drop-shadow-sm mb-12">
          "Building Relationships, Not Just Deals."
        </h2>
        <div className="w-24 h-[2px] bg-dark/10 mx-auto mb-10" />
        <p className="text-dark/40 text-xs md:text-sm font-sans tracking-[0.5em] font-bold">
           Faith and Co | EST. 2018
        </p>
      </div>

       {/* Sub-philosophy text (Magazine feel) */}
       <div className="mt-32 grid grid-cols-1 md:grid-cols-2 gap-16 max-w-5xl mx-auto border-t border-dark/5 pt-20">
          <div>
             <h4 className="text-dark text-xl font-serif mb-6 leading-relaxed">
                Beyond lettings, we build legacies. Quality is the core of our success.
             </h4>
             <p className="text-dark/60 font-sans text-base md:text-lg leading-relaxed">
                 Faith and Co has established itself as a leading market player, 
                specialising in HMO properties that cater to specialised housing 
                associations and supported living providers.
             </p>
          </div>
          <div className="flex flex-col justify-end">
             <div className="text-dark font-serif italic text-3xl md:text-4xl leading-tight">
                "Where Faith Meets Excellence."
             </div>
             <p className="mt-6 text-dark/30 text-[10px] uppercase tracking-widest font-bold font-sans">
                A NEW STANDARD IN SPECIALISED CARE
             </p>
          </div>
       </div>
    </section>
  )
}

export default WhyUs
