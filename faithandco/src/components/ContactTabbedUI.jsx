import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';
import { db } from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import toast, { Toaster } from 'react-hot-toast';

const ContactTabbedUI = () => {
  const [activeTab, setActiveTab] = useState('details'); // 'details' or 'location'
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'STRATEGIC PARTNERSHIP',
    message: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return toast.error('IDENTITY VERIFICATION REQUIRED');
    setIsSubmitting(true);
    const toastId = toast.loading('Loading...');
    try {
      await addDoc(collection(db, 'messages'), {
        ...formData,
        timestamp: serverTimestamp(),
        source: 'institutional_portal'
      });
      toast.success('TECHNICAL BRIEF RECEIVED', { id: toastId });
      setFormData({ name: '', email: '', subject: 'STRATEGIC PARTNERSHIP', message: '' });
    } catch (error) {
      toast.error(`TRANSMISSION_ERROR: ${error.code}`, { id: toastId });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto font-inter py-8">
      <Toaster position="bottom-right" />
      {/* Tab Header */}
      <div className="flex justify-center mb-8 border-b border-white/10">
        {['details', 'location'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-3 text-sm uppercase tracking-wider font-bold transition-all duration-300 ${
              activeTab === tab ? 'bg-[#1f365a] text-white border-b-2 border-[#DAA520]' : 'text-white/60 hover:text-white'}
            `}
          >
            {tab === 'details' ? 'Contact Details' : 'Our Location'}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {activeTab === 'details' && (
          <motion.div
            key="details"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="bg-[#0b1320]/70 backdrop-blur-xl rounded-lg p-8 border border-white/20 shadow-xl"
          >
            <div className="flex items-center gap-4 mb-8">
              <Mail size={18} className="text-[#DAA520]" />
              <a href="mailto:info@faithandco.co.uk" className="hover:underline text-white">info@faithandco.co.uk</a>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="input-underline w-full text-[11px] font-bold tracking-widest text-white bg-transparent placeholder-white/50"
                  placeholder="AUTHORISED NAME"
                />
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="input-underline w-full text-[11px] font-bold tracking-widest text-white bg-transparent placeholder-white/50"
                  placeholder="OFFICIAL EMAIL"
                />
              </div>
              <select
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="input-underline w-full text-[11px] font-bold tracking-widest bg-transparent text-white placeholder-white/50 appearance-none"
              >
                <option value="PARTNERSHIP" className="bg-[#0b1320] text-white">PARTNERSHIP</option>
                <option value="ASSET MANAGEMENT" className="bg-[#0b1320] text-white">ASSET MANAGEMENT</option>
                <option value="COMPLIANCE" className="bg-[#0b1320] text-white">COMPLIANCE</option>
              </select>
              <textarea
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="input-underline w-full text-[11px] font-bold tracking-widest text-white bg-transparent placeholder-white/50 resize-none"
                placeholder="DETAILED REQUIREMENT..."
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-[#1f365a] hover:bg-[#1f4a7a] text-white font-bold text-[10px] uppercase tracking-[0.25em] py-3 px-6 w-full transition-all duration-300 disabled:opacity-50"
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
            className="rounded-lg overflow-hidden shadow-xl border border-white/20"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.565739097!2d-0.3780!3d51.5074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760de3bed8767b%3A0x6796bed8767b0!2s86A%20High%20St%2C%20Southall%20UB1%203DB!5e0!3m2!1sen!2suk!4v1700000000000!5m2!1sen!2suk"
              className="w-full h-[400px] md:h-[500px]"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ContactTabbedUI;
