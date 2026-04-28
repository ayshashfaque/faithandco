import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Contact from '../components/Contact';
import { complianceFaqs } from '../data/faqData';
import { CheckCircle2, ArrowRight } from 'lucide-react';

const ValuationPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [formState, setFormState] = useState('idle'); // idle, submitting, success
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        targetRent: '',
        propertyAddress: '',
        propertyType: '',
        bedrooms: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormState('submitting');
        
        // Institutional Simulation
        setTimeout(() => {
            setFormState('success');
            // Reset form for demo purposes
            setFormData({
                firstName: '', lastName: '', email: '', phone: '',
                targetRent: '', propertyAddress: '', propertyType: '',
                bedrooms: '', message: ''
            });
        }, 1500);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="min-h-screen bg-white text-dark pt-[80px]">
            {/* Technical Hero */}
            <section className="px-6 md:px-10 py-24 bg-dark text-white text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                >
                    <span className="text-[10px] uppercase tracking-[0.6em] text-white/40 block mb-6">Asset Discovery</span>
                    <h1 className="text-5xl md:text-8xl font-[Outfit] font-extrabold uppercase tracking-tighter leading-[0.9] mb-8">
                        Request Free <br /> <span className="text-[#DAA520]">Valuation</span>
                    </h1>
                    <p className="max-w-3xl mx-auto text-white/60 text-sm md:text-base leading-relaxed font-sans px-4">
                        Accurate, data-driven market appraisals for London assets. Our valuation protocol combines local velocity metrics with institutional demand data to provide an honest, professional rental projection.
                    </p>
                </motion.div>
            </section>

            {/* Split Layout: Content + Form */}
            <section className="py-24 px-6 md:px-10">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Left: Why Valuation */}
                    <div className="flex flex-col justify-center">
                        <h2 className="text-3xl md:text-5xl font-[Outfit] font-black uppercase tracking-tighter mb-8 italic">
                            Why Get a <br /> <span className="text-[#DAA520]">Professional Appraisal?</span>
                        </h2>
                        <div className="space-y-8 max-w-lg">
                            <div>
                                <h4 className="font-bold text-xs uppercase tracking-widest mb-2 border-l-2 border-[#DAA520] pl-4">Institutional Accuracy</h4>
                                <p className="text-xs text-dark/60 leading-relaxed font-sans">We go beyond guesswork. Our projections are based on real occupancy velocity and live London demand statistics.</p>
                            </div>
                            <div>
                                <h4 className="font-bold text-xs uppercase tracking-widest mb-2 border-l-2 border-[#DAA520] pl-4">Optimisation Strategy</h4>
                                <p className="text-xs text-dark/60 leading-relaxed font-sans">We identify yield gaps and recommend protocol adjustments—from HMO conversions to Guaranteed Rent shielding—to maximize your returns.</p>
                            </div>
                            <div>
                                <h4 className="font-bold text-xs uppercase tracking-widest mb-2 border-l-2 border-[#DAA520] pl-4">No-Obligation Protocol</h4>
                                <p className="text-xs text-dark/60 leading-relaxed font-sans">Receive a detailed technical assessment of your property's value within 24 hours. Entirely free of institutional charge.</p>
                            </div>
                        </div>
                    </div>

                    {/* Right: Valuation Form */}
                    <div className="bg-[#FAF9F6] p-8 md:p-12 border-[0.5px] border-dark/10 relative overflow-hidden">
                        <AnimatePresence mode="wait">
                            {formState === 'success' ? (
                                <motion.div 
                                    key="success"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="h-full flex flex-col items-center justify-center text-center py-20"
                                >
                                    <CheckCircle2 size={64} className="text-[#DAA520] mb-6" />
                                    <h3 className="text-2xl font-black uppercase tracking-widest mb-4">Request Logged</h3>
                                    <p className="text-xs text-dark/50 max-w-xs mb-8">Your asset metadata has been received. An institutional valuer will contact you within 24 operational hours.</p>
                                    <button 
                                        onClick={() => setFormState('idle')}
                                        className="text-[10px] font-bold uppercase tracking-[0.3em] border-b border-dark/20 pb-1"
                                    >
                                        Log Another Asset?
                                    </button>
                                </motion.div>
                            ) : (
                                <motion.form 
                                    key="form"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    onSubmit={handleSubmit} 
                                    className="grid grid-cols-2 gap-6"
                                >
                                    <div className="col-span-1">
                                        <label className="text-[10px] font-bold uppercase tracking-[0.3em] block mb-2 opacity-40">First Name</label>
                                        <input required name="firstName" value={formData.firstName} onChange={handleChange} type="text" className="w-full bg-white border border-dark/10 p-4 text-xs font-sans focus:outline-none focus:border-[#DAA520]" />
                                    </div>
                                    <div className="col-span-1">
                                        <label className="text-[10px] font-bold uppercase tracking-[0.3em] block mb-2 opacity-40">Last Name</label>
                                        <input required name="lastName" value={formData.lastName} onChange={handleChange} type="text" className="w-full bg-white border border-dark/10 p-4 text-xs font-sans focus:outline-none focus:border-[#DAA520]" />
                                    </div>
                                    <div className="col-span-2">
                                        <label className="text-[10px] font-bold uppercase tracking-[0.3em] block mb-2 opacity-40">Institutional Email</label>
                                        <input required name="email" value={formData.email} onChange={handleChange} type="email" className="w-full bg-white border border-dark/10 p-4 text-xs font-sans focus:outline-none focus:border-[#DAA520]" />
                                    </div>
                                    <div className="col-span-2">
                                        <label className="text-[10px] font-bold uppercase tracking-[0.3em] block mb-2 opacity-40">Contact Number</label>
                                        <input required name="phone" value={formData.phone} onChange={handleChange} type="tel" className="w-full bg-white border border-dark/10 p-4 text-xs font-sans focus:outline-none focus:border-[#DAA520]" />
                                    </div>
                                    <div className="col-span-2">
                                        <label className="text-[10px] font-bold uppercase tracking-[0.3em] block mb-2 opacity-40">Asset Address</label>
                                        <input required name="propertyAddress" value={formData.propertyAddress} onChange={handleChange} type="text" className="w-full bg-white border border-dark/10 p-4 text-xs font-sans focus:outline-none focus:border-[#DAA520]" />
                                    </div>
                                    <div className="col-span-1">
                                        <label className="text-[10px] font-bold uppercase tracking-[0.3em] block mb-2 opacity-40">Bedrooms</label>
                                        <select name="bedrooms" value={formData.bedrooms} onChange={handleChange} className="w-full bg-white border border-dark/10 p-4 text-xs font-sans focus:outline-none focus:border-[#DAA520]">
                                            <option value="">Select</option>
                                            <option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5+">5+</option>
                                        </select>
                                    </div>
                                    <div className="col-span-1">
                                        <label className="text-[10px] font-bold uppercase tracking-[0.3em] block mb-2 opacity-40">Asset Type</label>
                                        <select name="propertyType" value={formData.propertyType} onChange={handleChange} className="w-full bg-white border border-dark/10 p-4 text-xs font-sans focus:outline-none focus:border-[#DAA520]">
                                            <option value="">Select</option>
                                            <option value="Flat">Flat</option><option value="House">House</option><option value="HMO">HMO</option><option value="Portfolio">Portfolio</option>
                                        </select>
                                    </div>
                                    <div className="col-span-2">
                                        <label className="text-[10px] font-bold uppercase tracking-[0.3em] block mb-2 opacity-40">Target Monthly Rent (£)</label>
                                        <input name="targetRent" value={formData.targetRent} onChange={handleChange} type="text" placeholder="e.g. 2500" className="w-full bg-white border border-dark/10 p-4 text-xs font-sans focus:outline-none focus:border-[#DAA520]" />
                                    </div>
                                    <button 
                                        type="submit" 
                                        disabled={formState === 'submitting'}
                                        className="col-span-2 mt-4 bg-dark text-white py-5 font-bold uppercase tracking-widest text-[10px] hover:bg-[#DAA520] transition-all flex items-center justify-center gap-3 disabled:opacity-50"
                                    >
                                        {formState === 'submitting' ? 'Processing Protocol...' : 'Initiate Valuation Oversight'}
                                        <ArrowRight size={14} />
                                    </button>
                                </motion.form>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </section>

            <Contact faqs={complianceFaqs} />
        </div>
    );
};

export default ValuationPage;
