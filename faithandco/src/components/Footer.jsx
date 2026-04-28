import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Instagram, Facebook, ArrowRight, Linkedin, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const accreditations = [
        { name: 'PRS', src: '/prs.jpeg' },
        { name: 'DPS', src: '/dps.jpeg' },
        { name: 'AMLA', label: 'AMLA' },
        { name: 'Zoopla', label: 'ZOOPLA' },
        { name: 'Rightmove', label: 'RIGHTMOVE' },
        { name: 'CMP', label: 'CLIENT MONEY PROTECT' }
    ];

    const socials = [
        { icon: <Linkedin size={18} />, url: 'https://www.linkedin.com/in/faith-and-co-estates-58938a316/' },
        { icon: <Instagram size={18} />, url: 'https://www.instagram.com/faithandcoestates?igsh=MXAxdjlzemxzNzhpOA%3D%3D&utm_source=qr' },
        { icon: <Twitter size={18} />, url: 'https://x.com/Faithandco94999?t=tfxxnZ6Qi1eyDMilzdtRyg&s=09' },
        { icon: <Facebook size={18} />, url: 'https://www.facebook.com/people/Faith-Co-Estates/61566760918518/?mibextid=wwXIfr&rdid=wuK268E8qHAfNY4M&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1AjSubd5KC%2F%3Fmibextid%3DwwXIfr' }
    ];

    return (
        <footer className="relative bg-navy pt-32 pb-10 overflow-hidden font-automobile selection:bg-bone selection:text-navy border-t border-white/5">
            <div className="max-w-[1400px] mx-auto px-12">
                
                {/* Strategic Partner Row */}
                <div className="logo-grid grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-24 max-w-[1200px] mx-auto place-items-center">
                    <img src="/footer/logo1.png" className="h-12 w-auto object-contain filter invert" alt="Partner Logo 1" />
                    <img src="/footer/logo2.png" className="h-12 w-auto object-contain filter invert" alt="Partner Logo 2" />
                    <img src="/footer/logo3.png" className="h-12 w-auto object-contain filter invert" alt="Partner Logo 3" />
                    <img src="/footer/logo4.png" className="h-12 w-auto object-contain filter invert" alt="Partner Logo 4" />
                    <img src="/footer/logo5.png" className="h-12 w-auto object-contain filter invert" alt="Partner Logo 5" />
                    <img src="/footer/logo6.png" className="h-12 w-auto object-contain filter invert" alt="Partner Logo 6" />
                    <img src="/footer/logo7.png" className="h-12 w-auto object-contain filter invert" alt="Partner Logo 7" />
                    <img src="/footer/logo8.png" className="h-12 w-auto object-contain filter invert" alt="Partner Logo 8" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-20">
                    {/* Brand */}
                    <div className="space-y-4">
                        <div className="flex flex-col items-start mb-6">
                            <span className="font-headings text-2xl font-black italic text-bone tracking-widest">FAITH & CO.</span>
                            <span className="font-automobile text-[8px] uppercase tracking-[0.4em] text-bone/60 font-bold relative top-[-4px]">Estates</span>
                        </div>
                        <p className="text-[10px] uppercase tracking-[0.3em] text-bone/40 leading-relaxed max-w-xs">
                          Institutional-grade HMO & Supported Living infrastructure. Redefining residential stewardship since 2018.
                        </p>
                        <div className="flex gap-4 pt-4">
                            {socials.map((social, i) => (
                                <a key={i} href={social.url} target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-bone/10 flex items-center justify-center text-bone/40 hover:text-bone hover:border-bone transition-all duration-500">
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h5 className="text-bone/20 font-bold uppercase tracking-[0.3em] text-[10px] mb-8">Navigation</h5>
                        <ul className="space-y-4 text-bone text-[12px] uppercase tracking-widest font-bold">
                            <li><Link to="/" className="hover:opacity-40 transition-all">Home</Link></li>
                            <li><Link to="/properties" className="hover:opacity-40 transition-all">Properties</Link></li>
                            <li><Link to="/#services" className="hover:opacity-40 transition-all">Services</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h5 className="text-bone/20 font-bold uppercase tracking-[0.3em] text-[10px] mb-8">Information</h5>
                        <ul className="space-y-4 text-bone text-[12px] uppercase tracking-widest font-bold">
                            <li><Link to="/about" className="hover:opacity-40 transition-all">About Us</Link></li>
                            <li><Link to="/faq" className="hover:opacity-40 transition-all">FAQ</Link></li>
                            <li><Link to="/#contact" className="hover:opacity-40 transition-all">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h5 className="text-bone/20 font-bold uppercase tracking-[0.3em] text-[10px] mb-8">HQ Coordinates</h5>
                        <p className="text-bone text-[12px] uppercase tracking-widest font-bold leading-loose">
                            86A High Street<br/>
                            Southall, UB1 3DB<br/>
                            020 8574 1700
                        </p>
                    </div>
                </div>

                {/* Deprecated Logo Zone (Moved to Accreditation Row) */}

                <div className="flex flex-col md:flex-row justify-between items-center gap-10 pt-10 border-t border-white/5">
                    <p className="text-[9px] uppercase tracking-[0.5em] text-bone/20">© {new Date().getFullYear()} Faith And Co Technical Infrastructure. All Rights Reserved.</p>
                    <a href="https://www.instagram.com/intellex.web/" target="_blank" rel="noopener noreferrer" className="text-bone/20 text-[9px] uppercase tracking-[0.4em] hover:text-bone transition-all">
                      MEET THE DEVELOPERS
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
