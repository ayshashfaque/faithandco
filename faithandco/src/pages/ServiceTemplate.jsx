import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Shield, Activity, Target } from 'lucide-react';
import { testimonials } from '../data/socialProof';

const serviceData = {
    'hmo': {
        title: 'HMO Management & Compliance',
        summary: 'Specialised management for multi-unit shared assets. We navigate the complexities of mandatory, additional, and selective licensing to ensure total regulatory hygiene and high-yield returns.',
        matrix: [
            { t: 'Strategic Objective', d: 'Maximizing shared-living occupancy and absolute regulatory hygiene for institutional shared assets.' },
            { t: 'Operational Protocol', d: '24/7 reactive maintenance, high-intensity tenant sourcing, and weekly fire-safety audits.' },
            { t: 'Compliance & Yield', d: 'Total licensing adherence and high-density rent optimization via specialised HMO frameworks.' }
        ],
        testimonialId: 'sadeem'
    },
    'management': {
        title: 'Full-Spectrum Property Management',
        summary: 'End-to-end asset stewardship focusing on long-term capital preservation and administrative excellence for single units and extensive portfolios.',
        matrix: [
            { t: 'Strategic Objective', d: 'Passive investment security and the absolute preservation of asset longevity across the London portfolio.' },
            { t: 'Operational Protocol', d: 'Dedicated senior account management, routine technical inspections, and digital transparency.' },
            { t: 'Compliance & Yield', d: 'Zero-arrears protocol, technical compliance auditing, and optimized cost-to-income ratios.' }
        ],
        testimonialId: 'naeem'
    },
    'residential': {
        title: 'Premium Residential Lettings',
        summary: 'Connecting high-value London assets with reliable, high-caliber residents through a rigorous vetting process and market-leading strategic appraisals.',
        matrix: [
            { t: 'Strategic Objective', d: 'Matching prestige assets with institutional-grade residents to minimize turnover and maximize stability.' },
            { t: 'Operational Protocol', d: 'Bespoke professional marketing, high-intent applicant vetting, and precise legal onboarding.' },
            { t: 'Compliance & Yield', d: 'Strategic rent appraisals aligned with prime market shifts and institutional onboarding standards.' }
        ],
        testimonialId: 'ahassan'
    },
    'portfolio': {
        title: 'Strategic Portfolio Optimization',
        summary: 'Scalable yield strategies for private and institutional investors. We manage multi-asset portfolios with a focus on administrative consolidation and growth.',
        matrix: [
            { t: 'Strategic Objective', d: 'Diversified growth and the strategic consolidation of multi-asset administrative overheads.' },
            { t: 'Operational Protocol', d: 'Quarterly asset performance reviews and sector-shift advisory based on institutional data.' },
            { t: 'Compliance & Yield', d: 'Strategic acquisition audits, yield stress-testing, and total portfolio reporting integrity.' }
        ],
        testimonialId: 'mobeen'
    },
    'care-sector': {
        title: 'Specialised Care Infrastructure',
        summary: 'Bridging the gap between institutional property investment and high-quality social care delivery through CQC-aligned housing solutions.',
        matrix: [
            { t: 'Strategic Objective', d: 'Providing stable, high-specification infrastructure for CQC-registered providers and social care organizations.' },
            { t: 'Operational Protocol', d: 'Deep-level provider partnership models and specialised adaptation management for assisted living.' },
            { t: 'Compliance & Yield', d: 'Absolute regulatory stability and guaranteed long-term returns through institutional care frameworks.' }
        ],
        testimonialId: 'jonah'
    },
    'council': {
        title: 'Local Authority Frameworks',
        summary: 'Institutional partnerships with Local Authorities and Housing Associations. We specialize in social impact housing models with zero void certainty.',
        matrix: [
            { t: 'Strategic Objective', d: 'Providing institutional stability and safe, reliable housing stock for community social impact frameworks.' },
            { t: 'Operational Protocol', d: 'Alignment with Local Authority legislative requirements and rapid turnover management.' },
            { t: 'Compliance & Yield', d: 'Guaranteed social impact returns and long-term lease certainty regardless of occupancy.' }
        ],
        testimonialId: 'sulaman'
    },
    'serviced-acc': {
        title: 'Serviced Accommodation',
        summary: 'Optimizing hospitality revenue through dynamic pricing, 5-star custodial management, and global multi-platform exposure for premium London assets.',
        matrix: [
            { t: 'Strategic Objective', d: 'Maximizing nightly nightly revenue and nightly yield through professional hospitality and short-term stay models.' },
            { t: 'Operational Protocol', d: '5-star housekeeping standards, dynamic re-pricing logic, and professional guest vetting.' },
            { t: 'Compliance & Yield', d: 'Maximum nightly nightly rental (ADR) optimization and high-intensity luxury asset care.' }
        ],
        testimonialId: 'darian'
    },
    'corporate': {
        title: 'Corporate Housing Solutions',
        summary: 'Bespoke leases for corporate relocations and personnel. We provide high-intent placement for London\'s corporate and business elite.',
        matrix: [
            { t: 'Strategic Objective', d: 'Providing high-intent corporate placement and lease stability for high-spec relocation assets.' },
            { t: 'Operational Protocol', d: 'Bespoke corporate lease drafting, relocation-concierge support, and professional onboarding.' },
            { t: 'Compliance & Yield', d: 'Institutional resident quality, long-term lease stability, and absolute asset protection.' }
        ],
        testimonialId: 'rachel'
    }
};

const ServiceTemplate = () => {
    const { serviceId } = useParams();
    const subpage = serviceData[serviceId] || serviceData['hmo'];
    const testimonial = testimonials.find(t => t.id === subpage.testimonialId) || testimonials[0];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [serviceId]);

    return (
        <div className="min-h-screen bg-[#FAF9F6] text-[#1A1A1A] font-sans selection:bg-[#0A192F] selection:text-white">
            {/* Phase 1: The Institutional Hero Split */}
            <section className="pt-[200px] pb-32 border-b border-dark/5">
                <div className="max-w-[1400px] mx-auto px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-end">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1 }}
                        >
                            <span className="text-[#0A192F]/40 font-bold uppercase tracking-[0.4em] text-[10px] mb-8 block">Faith and Co | Institutional Briefing</span>
                            <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter text-[#0A192F] leading-[0.85] font-outfit">
                                {subpage.title}
                            </h1>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.3 }}
                        >
                            <p className="text-2xl font-serif italic text-[#1A1A1A]/60 leading-relaxed max-w-xl">
                                "{subpage.summary}"
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Phase 2: The Technical Service Matrix */}
            <section className="py-32">
                <div className="max-w-[1400px] mx-auto px-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {subpage.matrix.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white p-12 border border-[#0A192F]/5 shadow-sm hover:shadow-xl transition-all duration-700 group"
                            >
                                <div className="mb-10 text-[#0A192F]/20 group-hover:text-[#0A192F] transition-colors">
                                    {i === 0 && <Target size={32} />}
                                    {i === 1 && <Activity size={32} />}
                                    {i === 2 && <Shield size={32} />}
                                </div>
                                <h3 className="text-xs font-bold uppercase tracking-[0.2em] mb-6 text-[#0A192F]">{item.t}</h3>
                                <div className="w-10 h-[1px] bg-[#0A192F]/10 mb-8" />
                                <p className="text-sm text-[#1A1A1A]/50 font-sans leading-relaxed">
                                    {item.d}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Phase 3: Sector Analysis / Next Steps */}
            <section className="py-24 bg-white border-y border-dark/5">
                <div className="max-w-[1400px] mx-auto px-12">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
                        <div className="max-w-xl">
                            <h2 className="text-3xl font-black uppercase tracking-tighter text-[#0A192F] mb-6 font-outfit">Ready for Deployment?</h2>
                            <p className="text-sm text-[#1A1A1A]/40 font-sans leading-relaxed">
                                Our senior asset managers are ready to develop a custom protocol for your property or portfolio within this sector.
                            </p>
                        </div>
                        <Link to="/properties" className="inline-flex items-center gap-8 px-12 py-6 bg-[#0A192F] text-white font-bold uppercase tracking-widest text-[10px] hover:bg-black transition-all">
                            View Portfolio Inventory <ArrowRight size={16} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Phase 5: The Wall of Social Proof (All Testimonials) */}
            <section className="py-32 bg-[#0A192F] text-white">
                <div className="max-w-[1400px] mx-auto px-12">
                    <div className="mb-20">
                        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4 font-outfit">Global Recognition Library</h2>
                        <p className="text-[#FAF9F6]/40 font-bold uppercase tracking-[0.2em] text-[10px]">Verified feedback across all institutional sectors.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {testimonials.map((t, i) => (
                            <motion.div 
                                key={i}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.05 }}
                                className="bg-white/5 border border-white/10 p-8 flex flex-col justify-between hover:bg-white hover:text-[#0A192F] transition-all duration-500"
                            >
                                <p className="text-[11px] font-serif italic italic leading-relaxed mb-8 opacity-60">
                                    "{t.text}"
                                </p>
                                <div>
                                    <h4 className="text-[10px] font-bold uppercase tracking-widest mb-1">{t.name}</h4>
                                    <p className="text-[8px] uppercase tracking-[0.2em] opacity-30">{t.sector.replace('-', ' ')}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Global Infrastructure Anchor */}
            <div className="max-w-[1400px] mx-auto px-12 py-24 group">
                <Link to="/" className="inline-flex items-center gap-4 text-dark/20 group-hover:text-[#0A192F] transition-all uppercase tracking-widest text-[10px] font-bold">
                    <ArrowLeft size={16} className="group-hover:-translate-x-2 transition-all" /> Return to Infrastructure Overview
                </Link>
            </div>
        </div>
    );
};

export default ServiceTemplate;
