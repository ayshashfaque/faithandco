import React, { useState } from 'react';
import { Phone, Mail, MapPin, Check } from 'lucide-react';

const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false);
  const [showMap, setShowMap] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    role: 'Landlord',
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
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <span className="text-[#DAA520] font-automobile text-[10px] uppercase tracking-[0.4em] block mb-4">Get In Touch</span>
        <h1 className="text-4xl md:text-6xl font-headings italic mb-8 font-bold">Contact Faith & Co</h1>
        
        <p className="text-navy/70 leading-relaxed text-lg max-w-3xl mb-16">
          Whether you are a private landlord, a housing association procurement officer, or a care provider, our specialist London team is ready to assist you.
        </p>

        <div className="flex justify-center border-b border-navy/10 mb-12">
          <button 
            onClick={() => setShowMap(false)}
            className={`px-8 py-4 text-[10px] uppercase tracking-[0.25em] font-bold transition-all ${!showMap ? 'border-b-2 border-[#DAA520] text-navy' : 'text-navy/40 hover:text-navy/70'}`}
          >
            Contact Details
          </button>
          <button 
            onClick={() => setShowMap(true)}
            className={`px-8 py-4 text-[10px] uppercase tracking-[0.25em] font-bold transition-all ${showMap ? 'border-b-2 border-[#DAA520] text-navy' : 'text-navy/40 hover:text-navy/70'}`}
          >
            Location
          </button>
        </div>

        {showMap ? (
          <div className="border border-navy/10 p-4 bg-white/40 shadow-sm h-[600px] w-full animate-in fade-in duration-500">
            <iframe 
              src="https://maps.google.com/maps?q=Faith%20and%20Co%20Estates,%2086A%20High%20Street,%20Southall,%20UB1%203DB&t=&z=17&ie=UTF8&iwloc=&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Faith and Co Estates Location"
            ></iframe>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 animate-in fade-in duration-500">
            
            {/* Contact Details */}
            <div className="space-y-8">
              <div className="border border-navy/10 p-8 bg-white/40 shadow-sm space-y-6">
                <h3 className="font-headings italic text-2xl font-bold mb-4">Office Details</h3>
                <div className="space-y-4 text-xs font-automobile uppercase tracking-wider text-navy/80">
                  <div className="flex items-center gap-3">
                    <Phone size={18} className="text-[#DAA520]" />
                    <span>020 8574 1700</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail size={18} className="text-[#DAA520]" />
                    <span>info@faithandco.co.uk</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin size={18} className="text-[#DAA520] shrink-0 mt-0.5" />
                    <span>86A High Street, Southall, UB1 3DB</span>
                  </div>
                </div>
              </div>

              <div className="border border-navy/10 p-8 bg-[#111827] text-bone space-y-4">
                <h3 className="font-headings italic text-2xl text-[#DAA520] font-bold">Operational Hours</h3>
                <p className="text-xs font-automobile uppercase tracking-widest text-bone/60">
                  Our team is responsive and available during standard business hours:
                </p>
                <div className="text-xs uppercase tracking-wider font-automobile text-bone/80">
                  Mon–Fri 9:00–18:30 <br />
                  Saturday & Sunday: Closed (Emergencies Only)
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="border border-navy/10 p-8 bg-white/40 shadow-sm">
              {submitted ? (
                <div className="text-center py-12 space-y-6">
                  <div className="w-16 h-16 bg-[#DAA520] rounded-full flex items-center justify-center mx-auto">
                    <Check className="text-navy" size={32} />
                  </div>
                  <h3 className="font-headings italic text-2xl font-bold">Message Sent</h3>
                  <p className="text-xs font-automobile uppercase tracking-widest text-navy/60 max-w-sm mx-auto">
                    Thank you for contacting us. A member of our team will respond to your inquiry within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 font-automobile text-xs uppercase tracking-wider">
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

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                  </div>

                  <div>
                    <label className="block mb-2 font-bold text-navy/70">I am a...</label>
                    <select 
                      name="role" 
                      value={formData.role} 
                      onChange={handleChange}
                      className="w-full bg-bone border border-navy/10 py-3 px-4 focus:border-[#DAA520] focus:outline-none transition-colors appearance-none"
                    >
                      <option value="Landlord">Landlord</option>
                      <option value="Tenant">Tenant</option>
                      <option value="Care Provider">Care Provider</option>
                      <option value="Council Officer">Council Officer</option>
                    </select>
                  </div>

                  <div>
                    <label className="block mb-2 font-bold text-navy/70">Message *</label>
                    <textarea 
                      name="message" 
                      rows="6" 
                      required
                      value={formData.message} 
                      onChange={handleChange}
                      placeholder="How can we help you?"
                      className="w-full bg-bone border border-navy/10 py-3 px-4 focus:border-[#DAA520] focus:outline-none transition-colors resize-none"
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    className="w-full bg-navy hover:bg-[#111827] text-bone font-bold text-[10px] tracking-[0.25em] py-4 transition-colors"
                  >
                    Submit Message
                  </button>
                </form>
              )}
            </div>

          </div>
        )}
      </div>
    </div>
  );
};

export default ContactPage;
