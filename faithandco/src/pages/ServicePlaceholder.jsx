import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ServicePlaceholder = ({ title }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-bone pt-[100px] selection:bg-navy selection:text-white pb-40 overflow-hidden font-automobile">
            <header className="px-6 md:px-12 py-32 border-b border-navy/5">
                <div className="max-w-[1400px] mx-auto">
                    <span className="text-navy/40 uppercase tracking-[0.6em] text-[10px] mb-6 block">Service Classification</span>
                    <h1 className="text-6xl md:text-8xl font-headings text-navy leading-none">
                        {title} <br/> <span className="italic opacity-40">Framework</span>
                    </h1>
                </div>
            </header>

            <section className="px-6 md:px-12 py-32">
                <div className="max-w-[1400px] mx-auto text-center space-y-16">
                    <div className="space-y-6">
                        <h2 className="text-3xl md:text-5xl font-headings text-navy italic">Technical Architecture In Progress</h2>
                        <div className="w-12 h-[1px] bg-navy/10 mx-auto"></div>
                        <p className="text-lg text-navy/60 max-w-2xl mx-auto italic">
                            The technical specifications and institutional framework for {title} are currently being synchronised. Our property portfolio remains accessible during this transition.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                        <div className="p-12 border border-navy/5 bg-navy/[0.01]">
                             <h4 className="text-[10px] uppercase tracking-widest opacity-40 mb-4">Current Status</h4>
                             <p className="text-2xl font-headings text-navy italic">Active Operations</p>
                        </div>
                        <div className="p-12 border border-navy/5 bg-navy/[0.01]">
                             <h4 className="text-[10px] uppercase tracking-widest opacity-40 mb-4">Availability</h4>
                             <p className="text-2xl font-headings text-navy italic">National Network</p>
                        </div>
                    </div>

                    <div className="pt-20">
                         <Link to="/properties" className="ghoast-btn">
                             View Current Properties
                         </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ServicePlaceholder;
