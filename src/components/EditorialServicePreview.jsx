import React, { useRef, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ChevronDown, Send, Globe, Shield, Linkedin, Instagram, Twitter, Facebook, ExternalLink } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const FAQItem = ({ faq, index }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border-b border-white/5 py-8">
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center text-left"
            >
                <h3 className="text-2xl md:text-3xl font-headings text-[#F2F0EB] italic">{faq.q}</h3>
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
                >
                    <ChevronDown className="text-[#F2F0EB]/20" />
                </motion.div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
                        className="overflow-hidden"
                    >
                        <p className="pt-8 text-xl font-body text-[#F2F0EB]/60 italic leading-relaxed max-w-3xl">
                            {faq.a}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const EditorialServicePreview = () => {
    const containerRef = useRef(null);
    const [activeTab, setActiveTab] = useState('contact');
    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

    useEffect(() => {
        gsap.to(".origin-image", {
            scale: 1.15,
            ease: "none",
            scrollTrigger: {
                trigger: "#origin",
                start: "top bottom",
                end: "bottom top",
                scrub: 1
            }
        });
    }, []);

    const services = [
        { name: 'HMO Management', path: '/services/hmo' },
        { name: 'Property Management', path: '/services/management' },
        { name: 'Residential Letting', path: '/services/residential' },
        { name: 'Portfolio Management', path: '/services/assets' },
        { name: 'Care Sector Lettings', path: '/services/care-sector' },
        { name: 'Council & Temporary Accommodation', path: '/services/council' },
        { name: 'Serviced Accommodation', path: '/services/serviced-acc' },
        { name: 'Company & Corporate Lets', path: '/services/corporate' },
        { name: 'For Landlords', path: '/landlords' }
    ];

    const faqs = [
        { q: "What is supported living housing?", a: "Supported living housing is designed for individuals who require some level of care or support but want to live independently. While we provide the home, professional support services are delivered separately by care providers." },
        { q: "Who lives in your homes?", a: "Our properties are designed for individuals with a range of needs, including: Learning disabilities, Autism spectrum conditions, Mental health needs, and Physical disabilities. Residents are typically referred through local authorities." },
        { q: "Are your homes adapted for accessibility?", a: "Yes. Many of our properties feature step-free access, ground-floor bedrooms, wide doorways, and wet rooms. We can also make further adaptations based on tenant needs." },
        { q: "Do you provide care or support services?", a: "No. We specialize in housing only. Support is arranged through local authorities or private care providers. We work in partnership with them to ensure homes remain suitable." },
        { q: "Where are your properties located?", a: "We offer homes across our service areas, primarily Southall and London. All locations are chosen for their community integration, safety, and accessibility to public services." },
        { q: "How is rent paid for supported living homes?", a: "Rent is usually covered through Housing Benefit or Universal Credit (UK) for eligible tenants. We work closely with families and care teams to ensure the process is transparent." },
        { q: "What rights do tenants have?", a: "All tenants have full tenancy or license agreements in line with the law. They have the right to privacy, choice, and the same legal protections as any other private tenant." },
        { q: "How can I get in touch for more information?", a: "You can call us at 020 8574 1700, email info@faithandco.co.uk, or fill out our contact form. We're happy to answer questions and discuss partnership opportunities." }
    ];

    return (
        <div ref={containerRef} className="relative w-full overflow-hidden">
            
            {/* SECTION 1: HERO (CLEAR VIDEO) */}
            <section id="hero" className="relative w-full h-[100vh] flex flex-col items-center justify-center bg-navy" style={{ backgroundColor: '#0A1A2F' }}>
                <div className="absolute inset-0 z-0" style={{ backgroundColor: '#0A1A2F' }}>
                    <video autoPlay loop muted playsInline className="w-full h-full object-cover">
                        <source src="/loophero.mp4" type="video/mp4" />
                    </video>
                </div>
                
                <div className="relative z-10 text-center px-12 space-y-12 interaction-patch pt-[20vh]">
                    <h1 className="text-white font-headings text-[2.2rem] md:text-7xl lg:text-[8vw] drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)] text-center">Faith & Co</h1>
                    <p className="text-[#F2F0EB]/80 font-inter tracking-[0.6em] hero-tagline drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)]">Specialised HMO and Supported Living</p>
                    <div className="pt-8 block gis-link">
                        <Link to="/properties" className="btn-slate">
                            View Properties
                        </Link>
                    </div>
                </div>
            </section>

            {/* SECTION 2: SERVICES (COOL PLATINUM) */}
            <section id="services" className="relative min-h-screen bg-[#E5E7E9] flex flex-col items-center justify-center py-32 px-6 border-t border-navy/5">
                <div className="w-full max-w-[1400px] mx-auto">
                    <div className="mb-20 text-center">
                        <span className="text-[#0A1A2F]/30 font-automobile text-[10px]">Portfolio</span>
                        <h2 className="text-5xl md:text-6xl font-headings text-[#0A1A2F] italic mt-4">Services</h2>
                        <div className="w-12 h-[0.5px] bg-[#0A1A2F]/20 mx-auto mt-6"></div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {services.map((sub, idx) => (
                            <Link 
                                key={idx} 
                                to={sub.path} 
                                className="service-card group"
                                style={{ pointerEvents: 'all' }}
                            >
                                <span className="text-[10px] font-automobile text-[#0A1A2F]/30 mb-4">{String(idx + 1).padStart(2, '0')}</span>
                                <h3 className="text-lg md:text-xl font-headings text-[#0A1A2F] italic group-hover:tracking-wider transition-all duration-700">
                                    {sub.name}
                                </h3>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION 3: THE ORIGIN */}
            <section id="origin" className="relative min-h-screen flex items-center py-32 border-t border-navy/5 bg-[#DEDCD5]">
                <div className="w-full max-w-[1700px] mx-auto flex flex-col-reverse lg:grid lg:grid-cols-[50fr_50fr] items-center gap-24 px-12 origin-container">
                    <div className="flex justify-center interaction-patch w-full lg:h-[70vh] arch-image-wrapper max-lg:w-[320px] max-lg:h-auto max-lg:mx-auto max-lg:mb-[30px]">
                        <img 
                            src="/FINAL.jpeg" 
                            className="origin-image w-full h-full object-cover rounded-xl shadow-2xl" 
                            alt="Our Story" 
                        />
                    </div>
                    <div className="space-y-8 text-[#0A1A2F]/80 font-body text-xl italic leading-relaxed">
                        <h2 className="text-4xl md:text-5xl font-headings text-navy italic mb-12">Our Story</h2>
                        <p>
                            Founded in 2018 by Mr. Sunesh Koshy, Faith & Co Estates is an independent estate agency driven by a mission to redefine the property experience.
                        </p>
                        <p>
                            Recognizing a gap in the market for specialized care services, particularly in the realm of HMO properties, Mr. Koshy established a platform for landlords who value stability over standard market yields. 
                        </p>
                        <p>
                            Specializing in social care housing and supported living facilities, our mission began with a goal of finding one room to support a vulnerable individual, which eventually grew into a national network.
                        </p>
                    </div>
                </div>
            </section>

            {/* SECTION 4: THE NAVY ANCHOR (CONTACT/FAQ/LOCATION) */}
            <section id="contact" className="contact-anchor relative min-h-screen bg-[#0A1A2F] py-40 border-t border-white/5 selection:bg-[#F2F0EB] selection:text-[#0A1A2F] interaction-patch" style={{ position: 'relative', zIndex: 9999, pointerEvents: 'all' }}>
                <div className="w-full max-w-[1400px] mx-auto px-12">
                    
                    {/* Tab Navigation */}
                    <div className="flex justify-center mb-24">
                        <div className="inline-flex bg-white/5 p-1 rounded-full border border-white/10" style={{ pointerEvents: 'all' }}>
                            {['contact', 'location', 'faqs'].map(tab => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`px-10 py-3 rounded-full text-[10px] font-automobile tracking-[0.3em] transition-all duration-500 ${activeTab === tab ? 'bg-[#F2F0EB] text-[#0A1A2F]' : 'text-white/40 hover:text-white'}`}
                                    style={{ pointerEvents: 'all' }}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>
                    </div>

                    <AnimatePresence mode="wait">
                        {activeTab === 'contact' && (
                            <motion.div 
                                key="contact"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                className="grid grid-cols-1 md:grid-cols-2 gap-24 items-start"
                                style={{ pointerEvents: 'all' }}
                            >
                                <div className="space-y-12 bg-white/5 p-12 border border-white/10" style={{ pointerEvents: 'all' }}>
                                    <h3 className="text-3xl font-headings text-[#F2F0EB] italic mb-10">REACH OUT</h3>
                                    <form className="contact-form space-y-8" onSubmit={(e) => e.preventDefault()} style={{ pointerEvents: 'all' }}>
                                        <input 
                                            type="text" 
                                            placeholder="FULL NAME" 
                                            className="w-full bg-transparent border-b border-[#F2F0EB]/20 py-4 text-[#F2F0EB] font-automobile text-[10px] outline-none focus:border-[#F2F0EB] transition-all"
                                            value={formData.name}
                                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                                            style={{ pointerEvents: 'all', cursor: 'text' }}
                                            required
                                        />
                                        <input 
                                            type="email" 
                                            placeholder="EMAIL ADDRESS" 
                                            className="w-full bg-transparent border-b border-[#F2F0EB]/20 py-4 text-[#F2F0EB] font-automobile text-[10px] outline-none focus:border-[#F2F0EB] transition-all"
                                            value={formData.email}
                                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                                            style={{ pointerEvents: 'all', cursor: 'text' }}
                                            required
                                        />
                                        <textarea 
                                            rows={4} 
                                            placeholder="MESSAGE" 
                                            className="w-full bg-transparent border-b border-[#F2F0EB]/20 py-4 text-[#F2F0EB] font-automobile text-[10px] outline-none focus:border-[#F2F0EB] transition-all resize-none"
                                            value={formData.message}
                                            onChange={(e) => setFormData({...formData, message: e.target.value})}
                                            style={{ pointerEvents: 'all', cursor: 'text' }}
                                            required
                                        />
                                        <button 
                                            type="submit"
                                            className="w-full py-6 bg-transparent border border-[#F2F0EB] text-[#F2F0EB] font-automobile text-[10px] tracking-[0.4em] hover:bg-[#F2F0EB] hover:text-[#0A1A2F] transition-all"
                                            style={{ pointerEvents: 'all' }}
                                        >
                                            Send Message
                                        </button>
                                    </form>
                                </div>
                                <div className="space-y-12 pt-12">
                                    <div>
                                        <h4 className="text-[#F2F0EB]/20 font-automobile text-[10px] mb-6">Coordinates</h4>
                                        <p className="text-3xl md:text-4xl font-headings text-[#F2F0EB] italic leading-[1.6]">
                                            86A High Street, <br/> Southall, UB1 3DB
                                        </p>
                                    </div>
                                    <div>
                                        <h4 className="text-[#F2F0EB]/20 font-automobile text-[10px] mb-6">Direct Lines</h4>
                                        <p className="text-3xl md:text-4xl font-headings text-[#F2F0EB] italic leading-[1.6] mb-4">020 8574 1700</p>
                                        <p className="text-xl md:text-2xl font-headings text-[#F2F0EB]/60 italic">info@faithandco.co.uk</p>
                                    </div>
                                </div>
                            </motion.div>
                        )}

                        {activeTab === 'location' && (
                            <motion.div 
                                key="location"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                className="w-full border border-white/5 bg-white/5 relative overflow-hidden p-12"
                                style={{ pointerEvents: 'all' }}
                            >

                                <div className="h-[400px] w-full border border-white/5 relative mt-12">
                                    <iframe 
                                        src="https://maps.google.com/maps?q=Faith+and+Co+Estates+Southall&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                                        width="100%" 
                                        height="100%" 
                                        style={{ border: 0 }} 
                                        allowFullScreen="" 
                                        loading="lazy" 
                                        referrerPolicy="no-referrer-when-downgrade"
                                        title="Faith & Co Location"
                                    ></iframe>
                                </div>
                            </motion.div>

                        )}

                        {activeTab === 'faqs' && (
                            <motion.div 
                                key="faqs"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                className="max-w-4xl mx-auto"
                                style={{ pointerEvents: 'all' }}
                            >
                                {faqs.map((faq, idx) => (
                                    <FAQItem key={idx} faq={faq} index={idx} />
                                ))}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </section>

            {/* TORN PAPER TRANSITION */}
            <div className="h-40 bg-[#0A1A2F] relative z-20">
                <div className="absolute bottom-0 left-0 w-full h-full bg-[#0A1A2F] shadow-[0_-20px_50px_rgba(0,0,0,0.3)] torn-paper"></div>
            </div>
        </div>
    );
};

export default EditorialServicePreview;
