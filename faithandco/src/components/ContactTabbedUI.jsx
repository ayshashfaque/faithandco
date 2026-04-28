import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MapPin, HelpCircle, ChevronDown, Send } from 'lucide-react';
import { db } from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import toast, { Toaster } from 'react-hot-toast';

const ContactTabbedUI = () => {
    const [activeTab, setActiveTab] = useState('message');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({ name: '', email: '', subject: 'STRATEGIC PARTNERSHIP', message: '' });
    const [openFaq, setOpenFaq] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.name || !formData.email) return toast.error("IDENTITY VERIFICATION REQUIRED");
        
        setIsSubmitting(true);
        const toastId = toast.loading("Broadcasting Technical Protocol...");

        try {
            await addDoc(collection(db, "messages"), {
                ...formData,
                timestamp: serverTimestamp(),
                source: 'institutional_portal'
            });
            toast.success("TECHNICAL BRIEF RECEIVED", { id: toastId });
            setFormData({ name: '', email: '', subject: 'STRATEGIC PARTNERSHIP', message: '' });
        } catch (error) {
            toast.error(`TRANSMISSION_ERROR: ${error.code}`, { id: toastId });
        } finally {
            setIsSubmitting(false);
        }
    };

    const tabs = [
        { id: 'message', label: 'MESSAGE', icon: <Mail size={14} /> },
        { id: 'location', label: 'LOCATION', icon: <MapPin size={14} /> },
        { id: 'faq', label: 'FAQ', icon: <HelpCircle size={14} /> }
    ];

    const faqs = [
        { q: "HMO Lease Terms?", a: "Professional leases ranging from 5 to 10 years, providing stabilised yield." },
        { q: "Compliance Infrastructure?", a: "Property assets are maintained to CQC and Local Authority standards through continuous auditing." },
        { q: "Geographic Specialism?", a: "Specialised in residential deployment across West London zones." },
        { q: "Asset Safety Certification?", a: "All units carry mandatory Grade-A compliance certification and structural insurance." }
    ];

    return (
        <div className="w-full font-inter">
            <Toaster position="bottom-right" />
            
            {/* 3-Way Interactive Toggle - No Glass background for the switcher itself */}
            <div className="flex justify-center mb-12">
                <div className="bg-midnight/30 p-1 rounded-none flex items-center border border-white/10">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`flex items-center gap-3 px-8 py-3 rounded-none text-[10px] uppercase font-black tracking-[0.3em] transition-all duration-500 ${
                                activeTab === tab.id 
                                ? 'bg-slate text-white shadow-xl' 
                                : 'text-white/40 hover:text-white'
                            }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>
            </div>

            <div className="relative min-h-[500px]">
                <AnimatePresence mode="wait">
                    {activeTab === 'message' && (
                        <motion.div
                            key="message"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="bg-transparent pt-12"
                        >
                            
                            <form onSubmit={handleSubmit} className="space-y-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <input 
                                        type="text" 
                                        value={formData.name}
                                        onChange={e => setFormData({...formData, name: e.target.value})}
                                        className="input-underline w-full text-[11px] font-bold tracking-widest" 
                                        placeholder="AUTHORISED NAME"
                                    />
                                    <input 
                                        type="email" 
                                        value={formData.email}
                                        onChange={e => setFormData({...formData, email: e.target.value})}
                                        className="input-underline w-full text-[11px] font-bold tracking-widest" 
                                        placeholder="OFFICIAL EMAIL"
                                    />
                                </div>
                                <select 
                                    value={formData.subject}
                                    onChange={e => setFormData({...formData, subject: e.target.value})}
                                    className="input-underline w-full text-[11px] font-bold tracking-widest appearance-none"
                                >
                                    <option value="PARTNERSHIP" className="bg-midnight">PARTNERSHIP</option>
                                    <option value="ASSET MANAGEMENT" className="bg-midnight">ASSET MANAGEMENT</option>
                                    <option value="COMPLIANCE" className="bg-midnight">COMPLIANCE</option>
                                </select>
                                <textarea 
                                    rows="4" 
                                    value={formData.message}
                                    onChange={e => setFormData({...formData, message: e.target.value})}
                                    className="input-underline w-full text-[11px] font-bold tracking-widest resize-none" 
                                    placeholder="DETAILED REQUIREMENT..."
                                />
                                <button 
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="institutional-btn w-full disabled:opacity-50"
                                >
                                    {isSubmitting ? 'TRANSMITTING...' : 'SEND MESSAGE'}
                                </button>
                            </form>
                        </motion.div>
                    )}

                    {activeTab === 'location' && (
                        <motion.div
                            key="location"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="w-full h-[500px] grayscale invert opacity-60 border border-white/5"
                        >
                             <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.565739097!2d-0.3780!3d51.5074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760de3bed8767b%3A0x6796bed8767b0!2s86A%20High%20St%2C%20Southall%20UB1%203DB!5e0!3m2!1sen!2suk!4v1700000000000!5m2!1sen!2suk" 
                                className="w-full h-full"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                            ></iframe>
                        </motion.div>
                    )}

                    {activeTab === 'faq' && (
                        <motion.div
                            key="faq"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="space-y-4"
                        >
                             {faqs.map((item, idx) => (
                                <div key={idx} className="border border-white/10 p-6 hover:bg-white/5 transition-all">
                                    <button 
                                        onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                                        className="w-full flex items-center justify-between text-white"
                                    >
                                        <h4 className="text-[11px] font-black uppercase tracking-[0.25em] text-left">
                                            {item.q}
                                        </h4>
                                        <ChevronDown className={`shrink-0 transition-transform duration-500 ${openFaq === idx ? 'rotate-180 text-sand' : 'text-white/20'}`} size={16} />
                                    </button>
                                    <AnimatePresence>
                                        {openFaq === idx && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                className="overflow-hidden"
                                            >
                                                <div className="mt-6 text-[12px] font-medium leading-relaxed text-white/60 uppercase tracking-[0.1em] border-t border-white/5 pt-6 italic font-inter">
                                                    {item.a}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default ContactTabbedUI;
