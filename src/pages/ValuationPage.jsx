import React, { useState } from 'react';
import { Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ValuationPage = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    postcode: '',
    type: 'Flat',
    bedrooms: '1',
    expectedRent: '',
    message: ''
  });

  // Automatic progression logic based on filled data
  const isStep1Valid = formData.name.trim().length > 2 && formData.email.includes('@');
  const isStep2Valid = isStep1Valid && formData.phone.trim().length > 5 && formData.postcode.trim().length > 2 && formData.address.trim().length > 5;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-[#060e16] text-white min-h-screen pt-[120px] pb-24 selection:bg-[#C9A84C] selection:text-midnight relative overflow-hidden">
      {/* Background ambient gold glow */}
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#C9A84C] opacity-5 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 relative z-10">
        
        {/* Left Sticky Column (5 cols) */}
        <div className="lg:col-span-5 lg:sticky lg:top-[120px] h-fit space-y-8 py-6">
          <span className="text-[#C9A84C] font-automobile text-[10px] uppercase tracking-[0.4em] block mb-2">No-Obligation Assessment</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-headings text-white leading-tight">
            Free Rental <span className="italic opacity-60">Valuation</span>
          </h1>
          <p className="text-white/60 leading-relaxed text-sm max-w-md">
            Find out what your property could earn in the current London rental market under Faith & Co specialist management. We provide a comprehensive, data-driven revenue projection tailored to your specific asset class.
          </p>
          
          <div className="space-y-6 pt-6 border-t border-white/10 max-w-md">
            <div className="flex items-start gap-4">
              <div className="w-5 h-5 rounded-full border border-[#C9A84C]/40 flex items-center justify-center text-[#C9A84C] mt-1 shrink-0 text-[10px]">✓</div>
              <div>
                <h4 className="text-xs uppercase tracking-wider font-bold text-white">Guaranteed Rent Analysis</h4>
                <p className="text-xs text-white/50">Compare standard management net yields against our direct corporate lease options.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-5 h-5 rounded-full border border-[#C9A84C]/40 flex items-center justify-center text-[#C9A84C] mt-1 shrink-0 text-[10px]">✓</div>
              <div>
                <h4 className="text-xs uppercase tracking-wider font-bold text-white">Borough Compliance Audit</h4>
                <p className="text-xs text-white/50">Detailed review of selective, HMO, or C2 planning use classification constraints.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-5 h-5 rounded-full border border-[#C9A84C]/40 flex items-center justify-center text-[#C9A84C] mt-1 shrink-0 text-[10px]">✓</div>
              <div>
                <h4 className="text-xs uppercase tracking-wider font-bold text-white">Delivered Within 24 Hours</h4>
                <p className="text-xs text-white/50">Prepared by local market experts with deep knowledge of West and Greater London.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Scrollable Column / Form (7 cols) */}
        <div className="lg:col-span-7">
          {submitted ? (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="border border-[#C9A84C]/30 bg-[#0b1825] text-white p-12 md:p-16 text-center space-y-6 shadow-2xl"
            >
              <div className="w-16 h-16 bg-[#C9A84C] rounded-full flex items-center justify-center mx-auto shadow-[0_0_20px_rgba(201,168,76,0.3)]">
                <Check className="text-midnight" size={32} />
              </div>
              <h2 className="text-3xl font-headings italic text-[#C9A84C]">Thank You</h2>
              <p className="text-xs font-automobile uppercase tracking-widest text-white/60 max-w-sm mx-auto leading-relaxed">
                We have received your valuation request. A member of our specialist London lettings team will review the details and contact you within 24 hours.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8 bg-[#0b1825]/40 border border-white/5 p-8 md:p-12 shadow-2xl backdrop-blur-sm">
              
              {/* Step 1: Personal Details */}
              <div className="space-y-6">
                <div className="flex items-center gap-3 pb-2 border-b border-white/5">
                  <span className="text-[10px] font-black text-[#C9A84C] bg-[#C9A84C]/10 w-6 h-6 rounded-full flex items-center justify-center">1</span>
                  <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-white">Contact Details</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block mb-2 text-[10px] uppercase tracking-wider font-bold text-white/50">Full Name *</label>
                    <input 
                      type="text" 
                      name="name" 
                      required 
                      value={formData.name} 
                      onChange={handleChange}
                      placeholder="Enter name"
                      className="w-full bg-[#060e16] border border-white/10 py-3 px-4 text-white focus:border-[#C9A84C] focus:outline-none transition-colors text-sm font-light animate-none"
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-[10px] uppercase tracking-wider font-bold text-white/50">Email Address *</label>
                    <input 
                      type="email" 
                      name="email" 
                      required 
                      value={formData.email} 
                      onChange={handleChange}
                      placeholder="Enter email"
                      className="w-full bg-[#060e16] border border-white/10 py-3 px-4 text-white focus:border-[#C9A84C] focus:outline-none transition-colors text-sm font-light animate-none"
                    />
                  </div>
                </div>
              </div>

              {/* Step 2: Location (Revealed when Step 1 is valid) */}
              <AnimatePresence>
                {isStep1Valid && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0, y: 20 }}
                    animate={{ opacity: 1, height: 'auto', y: 0 }}
                    exit={{ opacity: 0, height: 0, y: 20 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="space-y-6 overflow-hidden"
                  >
                    <div className="flex items-center gap-3 pb-2 border-b border-white/5 pt-4">
                      <span className="text-[10px] font-black text-[#C9A84C] bg-[#C9A84C]/10 w-6 h-6 rounded-full flex items-center justify-center">2</span>
                      <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-white">Property Location</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block mb-2 text-[10px] uppercase tracking-wider font-bold text-white/50">Phone Number *</label>
                        <input 
                          type="tel" 
                          name="phone" 
                          required 
                          value={formData.phone} 
                          onChange={handleChange}
                          placeholder="Enter phone"
                          className="w-full bg-[#060e16] border border-white/10 py-3 px-4 text-white focus:border-[#C9A84C] focus:outline-none transition-colors text-sm font-light"
                        />
                      </div>
                      <div>
                        <label className="block mb-2 text-[10px] uppercase tracking-wider font-bold text-white/50">Postcode *</label>
                        <input 
                          type="text" 
                          name="postcode" 
                          required 
                          value={formData.postcode} 
                          onChange={handleChange}
                          placeholder="e.g. W5 2PJ"
                          className="w-full bg-[#060e16] border border-white/10 py-3 px-4 text-white focus:border-[#C9A84C] focus:outline-none transition-colors text-sm font-light"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block mb-2 text-[10px] uppercase tracking-wider font-bold text-white/50">Property Address *</label>
                      <input 
                        type="text" 
                        name="address" 
                        required 
                        value={formData.address} 
                        onChange={handleChange}
                        placeholder="Enter full address"
                        className="w-full bg-[#060e16] border border-white/10 py-3 px-4 text-white focus:border-[#C9A84C] focus:outline-none transition-colors text-sm font-light"
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Step 3: Property Specifics (Revealed when Step 2 is valid) */}
              <AnimatePresence>
                {isStep2Valid && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0, y: 20 }}
                    animate={{ opacity: 1, height: 'auto', y: 0 }}
                    exit={{ opacity: 0, height: 0, y: 20 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="space-y-6 overflow-hidden"
                  >
                    <div className="flex items-center gap-3 pb-2 border-b border-white/5 pt-4">
                      <span className="text-[10px] font-black text-[#C9A84C] bg-[#C9A84C]/10 w-6 h-6 rounded-full flex items-center justify-center">3</span>
                      <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-white">Asset Details</h3>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block mb-2 text-[10px] uppercase tracking-wider font-bold text-white/50">Property Type</label>
                        <select 
                          name="type" 
                          value={formData.type} 
                          onChange={handleChange}
                          className="w-full bg-[#060e16] border border-white/10 py-3 px-4 text-white focus:border-[#C9A84C] focus:outline-none transition-colors text-sm font-light appearance-none"
                        >
                          <option value="Studio">Studio</option>
                          <option value="Flat">Flat</option>
                          <option value="House">House</option>
                          <option value="HMO">HMO</option>
                        </select>
                      </div>
                      <div>
                        <label className="block mb-2 text-[10px] uppercase tracking-wider font-bold text-white/50">Number of Bedrooms</label>
                        <select 
                          name="bedrooms" 
                          value={formData.bedrooms} 
                          onChange={handleChange}
                          className="w-full bg-[#060e16] border border-white/10 py-3 px-4 text-white focus:border-[#C9A84C] focus:outline-none transition-colors text-sm font-light appearance-none"
                        >
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5+">5+</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block mb-2 text-[10px] uppercase tracking-wider font-bold text-white/50">Expected Monthly Rent (£)</label>
                      <input 
                        type="number" 
                        name="expectedRent" 
                        value={formData.expectedRent} 
                        onChange={handleChange}
                        placeholder="e.g. 1500"
                        className="w-full bg-[#060e16] border border-white/10 py-3 px-4 text-white focus:border-[#C9A84C] focus:outline-none transition-colors text-sm font-light"
                      />
                    </div>

                    <div>
                      <label className="block mb-2 text-[10px] uppercase tracking-wider font-bold text-white/50">Message / Specific Requirements</label>
                      <textarea 
                        name="message" 
                        rows="4"
                        value={formData.message} 
                        onChange={handleChange}
                        placeholder="Tell us about the property..."
                        className="w-full bg-[#060e16] border border-white/10 py-3 px-4 text-white focus:border-[#C9A84C] focus:outline-none transition-colors text-sm font-light resize-none"
                      ></textarea>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Submit Button (Only enabled when the form is valid to submit) */}
              <button 
                type="submit" 
                disabled={!isStep2Valid}
                className={`w-full text-midnight font-bold text-[10px] tracking-[0.25em] uppercase py-4 transition-all duration-300 ${isStep2Valid ? 'bg-[#C9A84C] hover:bg-[#E8C878] cursor-pointer' : 'bg-white/10 text-white/30 cursor-not-allowed'}`}
              >
                Submit Valuation Request
              </button>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};

export default ValuationPage;
