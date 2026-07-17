import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const services = [
  {
    title: "Social & Supported Housing",
    description: "Designed for individuals requiring care but wanting independent living. We provide the home, while services are delivered by trusted care partners.",
    image: "/img1.jpeg",
    link: "/services/social-housing"
  },
  {
    title: "HMO Management",
    description: "Expert oversight of high-yield HMO properties, catering to supported living and semi-independent housing associations.",
    image: "/img2.jpeg",
    link: "/services/hmo"
  },
  {
    title: "Landlord Services",
    description: "Simplifying compliance and safety requirements for landlords, while optimizing properties through guaranteed rent and management.",
    image: "/img3.jpeg",
    link: "/services/landlords"
  },
  {
    title: "Serviced Accommodation",
    description: "Working in close partnership with local tourism and corporate providers to ensure homes yield high returns as premium short term lets.",
    image: "/img4.jpeg",
    link: "/services/accommodation"
  }
]

const Services = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    const cards = containerRef.current.querySelectorAll('.service-card')
    
    cards.forEach((card) => {
      const mask = card.querySelector('.reveal-mask')
      const content = card.querySelector('.service-content')
      
      gsap.set(content, { opacity: 0, y: 30 })
      
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      })
      
      tl.to(mask, {
        xPercent: 100,
        duration: 0.8,
        ease: "power2.inOut"
      })
      .to(content, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out"
      }, "-=0.4")
    })

    // Animated Mesh Gradient (using CSS with GSAP for subtle shifting)
    gsap.to('.mesh-gradient', {
      backgroundPosition: '200% 200%',
      duration: 20,
      repeat: -1,
      ease: "none"
    })
  }, [])

  return (
    <section 
      id="services"
      className="relative min-h-screen py-32 overflow-hidden"
    >
      {/* Animated Mesh Gradient Background */}
      <div className="mesh-gradient absolute inset-0 z-0 opacity-40 mix-blend-multiply" 
           style={{
             background: 'linear-gradient(45deg, #EEF2FF 25%, #FFFFFF 50%, #FCE7F3 75%)',
             backgroundSize: '400% 400%'
           }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10" ref={containerRef}>
        <div className="mb-24 text-center">
          <h2 className="text-dark/40 text-xs md:text-sm font-sans tracking-[0.4em] uppercase mb-4 font-bold">
             OUR SERVICES & EXPERTISE
          </h2>
          <h3 className="text-dark text-5xl md:text-6xl font-serif mb-10 leading-tight">Expertise Grid</h3>
          <div className="w-20 h-[1px] bg-dark/10 mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {services.map((s, i) => (
             <div 
               key={i}
               className="service-card group relative bg-white/40 backdrop-blur-md rounded-3xl border border-white/50 p-10 md:p-12 overflow-hidden"
             >
                {/* Reveal Mask Layer */}
                <div className="reveal-mask absolute inset-0 bg-white z-20" />
                
                <div className="service-content relative z-10">
                   <div className="w-24 h-24 mb-10 rounded-2xl overflow-hidden border border-dark/5 bg-offBlue">
                      <img 
                         src={s.image} 
                         alt={s.title}
                         className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110" 
                       />
                   </div>
                   <h3 className="text-dark text-3xl font-serif mb-6 group-hover:text-dark transition-all">{s.title}</h3>
                   <p className="text-dark/60 text-lg leading-relaxed font-sans mb-8">
                      {s.description}
                   </p>
                   <Link to={s.link} className="inline-block mt-4 uppercase tracking-widest text-xs font-bold text-[#734d26] hover:text-dark transition-colors">
                      Learn More <span className="ml-2">→</span>
                   </Link>
                </div>
             </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
