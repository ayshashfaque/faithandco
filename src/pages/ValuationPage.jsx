import React, { useState } from 'react';
import { Check } from 'lucide-react';

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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a production app, this would submit to an email service, CRM, or Firebase DB.
    // For our prototype, we transition directly to a premium thank you layout.
    setSubmitted(true);
  };

  return (
    <div className="bg-bone text-navy min-h-screen pt-[120px] pb-24 selection:bg-navy selection:text-bone">
      <div className="max-w-[700px] mx-auto px-6 md:px-12">
        <span className="text-[#DAA520] font-automobile text-[10px] uppercase tracking-[0.4em] block mb-4">No-Obligation Assessment</span>
        <h1 className="text-4xl md:text-5xl font-headings italic mb-4">Free Rental Valuation</h1>
        <p className="text-navy/70 leading-relaxed text-sm mb-12 font-automobile uppercase tracking-wider">
          Find out what your property could earn in the current London rental market under Faith & Co management.
        </p>

        {submitted ? (
          <div className="border border-[#DAA520]/30 bg-[#111827] text-bone p-12 text-center space-y-6">
            <div className="w-16 h-16 bg-[#DAA520] rounded-full flex items-center justify-center mx-auto">
              <Check className="text-navy" size={32} />
            </div>
            <h2 className="text-2xl md:text-3xl font-headings italic">Thank You</h2>
            <p className="text-xs font-automobile uppercase tracking-widest text-bone/60 max-w-sm mx-auto">
              We have received your valuation request. A member of our specialist London team will review the details and contact you within 24 hours.
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
                <label className="block mb-2 font-bold text-navy/70">Postcode *</label>
                <input 
                  type="text" 
                  name="postcode" 
                  required 
                  value={formData.postcode} 
                  onChange={handleChange}
                  className="w-full bg-bone border border-navy/10 py-3 px-4 focus:border-[#DAA520] focus:outline-none transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block mb-2 font-bold text-navy/70">Property Address *</label>
              <input 
                type="text" 
                name="address" 
                required 
                value={formData.address} 
                onChange={handleChange}
                className="w-full bg-bone border border-navy/10 py-3 px-4 focus:border-[#DAA520] focus:outline-none transition-colors"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block mb-2 font-bold text-navy/70">Property Type</label>
                <select 
                  name="type" 
                  value={formData.type} 
                  onChange={handleChange}
                  className="w-full bg-bone border border-navy/10 py-3 px-4 focus:border-[#DAA520] focus:outline-none transition-colors appearance-none"
                >
                  <option value="Studio">Studio</option>
                  <option value="Flat">Flat</option>
                  <option value="House">House</option>
                  <option value="HMO">HMO</option>
                </select>
              </div>
              <div>
                <label className="block mb-2 font-bold text-navy/70">Number of Bedrooms</label>
                <select 
                  name="bedrooms" 
                  value={formData.bedrooms} 
                  onChange={handleChange}
                  className="w-full bg-bone border border-navy/10 py-3 px-4 focus:border-[#DAA520] focus:outline-none transition-colors appearance-none"
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
              <label className="block mb-2 font-bold text-navy/70">Expected Monthly Rent (£)</label>
              <input 
                type="number" 
                name="expectedRent" 
                value={formData.expectedRent} 
                onChange={handleChange}
                placeholder="e.g. 1500"
                className="w-full bg-bone border border-navy/10 py-3 px-4 focus:border-[#DAA520] focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block mb-2 font-bold text-navy/70">Message / Specific Requirements</label>
              <textarea 
                name="message" 
                rows="4"
                value={formData.message} 
                onChange={handleChange}
                placeholder="Tell us about the property..."
                className="w-full bg-bone border border-navy/10 py-3 px-4 focus:border-[#DAA520] focus:outline-none transition-colors resize-none"
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="w-full bg-navy hover:bg-[#111827] text-bone font-bold text-[10px] tracking-[0.25em] py-4 transition-colors"
            >
              Submit Valuation Request
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ValuationPage;
