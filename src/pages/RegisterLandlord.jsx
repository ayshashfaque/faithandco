import React, { useState } from 'react';
import { Check } from 'lucide-react';

const RegisterLandlord = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    portfolioSize: '1-2',
    boroughs: '',
    propertyTypes: 'HMO',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-bone text-navy min-h-screen pt-[120px] pb-24 selection:bg-navy selection:text-bone">
      <div className="max-w-[700px] mx-auto px-6 md:px-12">
        <span className="text-[#DAA520] font-automobile text-[10px] uppercase tracking-[0.4em] block mb-4">Landlord Network</span>
        <h1 className="text-4xl md:text-5xl font-headings italic mb-4">Register as a Landlord</h1>
        <p className="text-navy/70 leading-relaxed text-sm mb-12 font-automobile uppercase tracking-wider">
          Register with Faith & Co to receive notifications about suitable tenants, corporate leasing requests, and market updates across London.
        </p>

        {submitted ? (
          <div className="border border-[#DAA520]/30 bg-[#111827] text-bone p-12 text-center space-y-6">
            <div className="w-16 h-16 bg-[#DAA520] rounded-full flex items-center justify-center mx-auto">
              <Check className="text-navy" size={32} />
            </div>
            <h2 className="text-2xl md:text-3xl font-headings italic">Registration Complete</h2>
            <p className="text-xs font-automobile uppercase tracking-widest text-bone/60 max-w-sm mx-auto">
              Thank you for registering. A member of our team will contact you to discuss your portfolio and verify your account.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6 bg-white/40 border border-navy/5 p-8 md:p-12 shadow-sm font-automobile text-xs uppercase tracking-wider">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block mb-2 font-bold text-navy/70">Full Name *</label>
                <input 
                  type="text" 
                  name="name" 
                  required 
                  value={formData.name} 
                  onChange={handleChange}
                  className="w-full bg-bone border border-navy/10 py-3 px-4 focus:border-[#DAA520] focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block mb-2 font-bold text-navy/70">Email Address *</label>
                <input 
                  type="email" 
                  name="email" 
                  required 
                  value={formData.email} 
                  onChange={handleChange}
                  className="w-full bg-bone border border-navy/10 py-3 px-4 focus:border-[#DAA520] focus:outline-none transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block mb-2 font-bold text-navy/70">Phone Number *</label>
                <input 
                  type="tel" 
                  name="phone" 
                  required 
                  value={formData.phone} 
                  onChange={handleChange}
                  className="w-full bg-bone border border-navy/10 py-3 px-4 focus:border-[#DAA520] focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block mb-2 font-bold text-navy/70">Company Name (Optional)</label>
                <input 
                  type="text" 
                  name="company" 
                  value={formData.company} 
                  onChange={handleChange}
                  className="w-full bg-bone border border-navy/10 py-3 px-4 focus:border-[#DAA520] focus:outline-none transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block mb-2 font-bold text-navy/70">Portfolio Size</label>
                <select 
                  name="portfolioSize" 
                  value={formData.portfolioSize} 
                  onChange={handleChange}
                  className="w-full bg-bone border border-navy/10 py-3 px-4 focus:border-[#DAA520] focus:outline-none transition-colors appearance-none"
                >
                  <option value="1-2">1-2 properties</option>
                  <option value="3-5">3-5 properties</option>
                  <option value="6-10">6-10 properties</option>
                  <option value="10+">10+ properties</option>
                </select>
              </div>
              <div>
                <label className="block mb-2 font-bold text-navy/70">Preferred Property Type</label>
                <select 
                  name="propertyTypes" 
                  value={formData.propertyTypes} 
                  onChange={handleChange}
                  className="w-full bg-bone border border-navy/10 py-3 px-4 focus:border-[#DAA520] focus:outline-none transition-colors appearance-none"
                >
                  <option value="Single Let">Single Lets / Family Homes</option>
                  <option value="HMO">HMOs</option>
                  <option value="Supported Living">Supported Living</option>
                  <option value="Mixed Portfolio">Mixed Portfolio</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block mb-2 font-bold text-navy/70">Boroughs of Interest *</label>
              <input 
                type="text" 
                name="boroughs" 
                required 
                placeholder="e.g. Brent, Hounslow, Ealing"
                value={formData.boroughs} 
                onChange={handleChange}
                className="w-full bg-bone border border-navy/10 py-3 px-4 focus:border-[#DAA520] focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block mb-2 font-bold text-navy/70">Additional Notes / Message</label>
              <textarea 
                name="message" 
                rows="4"
                value={formData.message} 
                onChange={handleChange}
                placeholder="Tell us about your portfolio..."
                className="w-full bg-bone border border-navy/10 py-3 px-4 focus:border-[#DAA520] focus:outline-none transition-colors resize-none"
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="w-full bg-navy hover:bg-[#111827] text-bone font-bold text-[10px] tracking-[0.25em] py-4 transition-colors"
            >
              Submit Registration
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default RegisterLandlord;
