import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const FAQPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const faqs = [
        { 
            q: "What is supported living housing?", 
            a: "Supported living is designed for individuals who require some form of care or support but still want to live as independently as possible in their own homes. Faith & Co provides the suitable housing infrastructure, while professional care and support are delivered separately by one of our partner care providers." 
        },
        { 
            q: "Who lives in your homes?", 
            a: "Our homes are designed for individuals with learning disabilities, autism spectrum conditions, mental health needs, and physical disabilities. Residents are typically referred to us through local authorities or social services." 
        },
        { 
            q: "Are your homes adapted for accessibility?", 
            a: "Yes, many of our properties are adapted to meet specific needs, featuring step-free access, ground-floor bedrooms, wide doorways, assisted technologies, and wet rooms to ensure absolute comfort and safety." 
        },
        { 
            q: "Do you provide care or support services?", 
            a: "No. At Faith & Co, we specialise strictly in property stewardship and housing infrastructure. We partner with dedicated care providers who manage the day-to-day support services for the residents." 
        },
        { 
            q: "Where are your properties located?", 
            a: "Our core portfolio is focused on the London corridor, with a high density of specialized homes in Southall and surrounding West London boroughs." 
        },
        { 
            q: "How is rent paid?", 
            a: "Rent is typically covered through Housing Benefit or Universal Credit (Housing Element) for eligible tenants, managed directly between the local authority and the housing provider." 
        },
        { 
            q: "What rights do tenants have?", 
            a: "Tenants have full legal rights through tenancy or license agreements. This includes the right to privacy, choice, and a secure environment that they can call their own." 
        },
        { 
            q: "How can I get in touch for more information?", 
            a: "You can reach our HQ at 020 8574 1700, email us at info@faithandco.co.uk, or submit an inquiry protocol through our contact form. Our analysts are available Monday – Friday, 9:00 AM – 5:00 PM." 
        }
    ];

    return (
        <div className="min-h-screen bg-navy pt-[100px] selection:bg-bone selection:text-navy pb-40 overflow-hidden font-automobile">
            <header className="px-6 md:px-12 py-32 border-b border-white/5">
                <div className="max-w-[1400px] mx-auto">
                    <span className="text-white/40 uppercase tracking-[0.6em] text-[10px] mb-6 block">Information Portal</span>
                    <h1 className="text-6xl md:text-8xl font-headings text-white leading-none">
                        Protocol <br/> <span className="italic opacity-40">Frequency (FAQ)</span>
                    </h1>
                </div>
            </header>

            <section className="px-6 md:px-12 py-32">
                <div className="max-w-[1000px] mx-auto space-y-20">
                    {faqs.map((faq, idx) => (
                        <motion.div 
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="space-y-6 p-10 bg-white/5 backdrop-blur-3xl border border-white/5"
                        >
                            <h3 className="text-2xl md:text-3xl font-headings text-white italic">{faq.q}</h3>
                            <div className="w-12 h-[1px] bg-white/10"></div>
                            <p className="text-lg text-white/70 leading-relaxed font-body italic">
                                {faq.a}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default FAQPage;
