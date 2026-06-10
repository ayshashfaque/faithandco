import React from 'react';
import { useParams, Link } from 'react-router-dom';

const LegalPages = () => {
  const { legalType } = useParams();

  const pages = {
    "privacy-policy": {
      title: "Privacy Policy",
      content: (
        <div className="space-y-6">
          <p>Faith & Co Estates Ltd is committed to protecting and respecting your privacy. This policy sets out the basis on which any personal data we collect from you, or that you provide to us, will be processed by us.</p>
          <h3 className="text-lg font-bold font-headings italic">1. Information We Collect</h3>
          <p>We may collect and process names, email addresses, phone numbers, property details, and financial verification documents as part of our property letting and management services.</p>
          <h3 className="text-lg font-bold font-headings italic">2. How We Use Information</h3>
          <p>To carry out our obligations arising from any contracts entered into between you and us, to provide you with letting and management information, and to comply with legal/licensing obligations.</p>
          <h3 className="text-lg font-bold font-headings italic">3. Data Security</h3>
          <p>We implement strict security measures to protect your personal data from unauthorised access, loss, or destruction. We are registered with the Information Commissioner's Office (ICO) under registration number ZB829371.</p>
        </div>
      )
    },
    "terms-of-service": {
      title: "Terms of Service",
      content: (
        <div className="space-y-6">
          <p>By using this website, you agree to comply with and be bound by the following terms and conditions of use, which together with our privacy policy govern Faith & Co Estates' relationship with you in relation to this website.</p>
          <h3 className="text-lg font-bold font-headings italic">1. Use of Content</h3>
          <p>The content of the pages of this website is for your general information and use only. It is subject to change without notice.</p>
          <h3 className="text-lg font-bold font-headings italic">2. Licensing and Compliance</h3>
          <p>All property listings and landlord options are subject to licensing checks, contract signing, and compliance verification. All services are subject to written terms of business.</p>
        </div>
      )
    },
    "cookie-policy": {
      title: "Cookie Policy",
      content: (
        <div className="space-y-6">
          <p>This website uses cookies to monitor browsing preferences and improve user experience. By continuing to browse the site, you agree to our use of cookies.</p>
          <h3 className="text-lg font-bold font-headings italic">1. What are Cookies?</h3>
          <p>Cookies are small text files placed on your device to help the site provide a better user experience.</p>
          <h3 className="text-lg font-bold font-headings italic">2. Controlling Cookies</h3>
          <p>You can choose to accept or decline cookies. Most web browsers automatically accept cookies, but you can usually modify your browser setting to decline cookies if you prefer.</p>
        </div>
      )
    },
    "fees": {
      title: "Fees & Compliance",
      content: (
        <div className="space-y-6">
          <p>Faith & Co Estates operates in full compliance with the Consumer Rights Act 2015 and the Client Money Protection Schemes for Property Agents Regulations 2019. Here are our standard landlord fees and consumer redress details.</p>
          
          <div className="border border-navy/10 p-6 bg-white/40 shadow-sm space-y-4">
            <h3 className="text-lg font-bold font-headings italic text-navy">Landlord Fees</h3>
            <div className="space-y-2 text-xs font-automobile uppercase tracking-wider text-navy/80">
              <div>• Tenant Sourcing Only: Agreed flat fee or percentage of the initial lease period.</div>
              <div>• Full Management: Agreed monthly percentage of the monthly rental income.</div>
              <div>• Guaranteed Rent Scheme: Zero commission, zero management fees, zero landlord setup charges.</div>
            </div>
          </div>

          <div className="border border-navy/10 p-6 bg-white/40 shadow-sm space-y-4">
            <h3 className="text-lg font-bold font-headings italic text-navy">Redress & Protection Schemes</h3>
            <div className="space-y-2 text-xs font-automobile uppercase tracking-wider text-navy/80">
              <div>• Property Redress Scheme (PRS): Member of the Property Redress Scheme, providing independent redress under the Consumer Rights Act 2015.</div>
              <div>• Client Money Protection (CMP): Our client accounts are protected under the UK Client Money Protection Scheme, ensuring all tenant deposits and landlord rents are secure.</div>
              <div>• ICO Registered: Registration No. ZB829371.</div>
            </div>
          </div>
        </div>
      )
    },
    "complaints": {
      title: "Complaints Procedure",
      content: (
        <div className="space-y-6">
          <p>Faith & Co Estates aims to provide a professional, high-quality service. If you are not satisfied with our service, here is our complaints procedure.</p>
          <h3 className="text-lg font-bold font-headings italic">1. How to Lodge a Complaint</h3>
          <p>Please send your complaint in writing to our Office Manager at info@faithandco.co.uk or by post to 86A High Street, Southall, UB1 3DB.</p>
          <h3 className="text-lg font-bold font-headings italic">2. Our Response Timeline</h3>
          <p>We will acknowledge your complaint within 3 working days. A full written response following a thorough internal review will be sent within 15 working days.</p>
          <h3 className="text-lg font-bold font-headings italic">3. Independent Redress</h3>
          <p>If you remain dissatisfied with our response, you can refer your complaint to the Property Redress Scheme (PRS) for independent adjudication.</p>
        </div>
      )
    }
  };

  const page = pages[legalType] || pages["privacy-policy"];

  return (
    <div className="bg-bone text-navy min-h-screen pt-[120px] pb-24 selection:bg-navy selection:text-bone">
      <div className="max-w-[800px] mx-auto px-6 md:px-12">
        <span className="text-[#DAA520] font-automobile text-[10px] uppercase tracking-[0.4em] block mb-4">Legal & Compliance</span>
        <h1 className="text-4xl md:text-5xl font-headings italic mb-8 font-bold">{page.title}</h1>
        
        <div className="border border-navy/10 p-8 md:p-12 bg-white/40 shadow-sm font-automobile text-xs uppercase tracking-wider leading-relaxed">
          {page.content}
        </div>

        <div className="mt-8 flex gap-4">
          <Link to="/" className="text-[#DAA520] font-automobile text-[10px] tracking-widest uppercase hover:underline">
            Back to Home
          </Link>
          <span className="text-navy/20">|</span>
          <Link to="/contact" className="text-navy font-automobile text-[10px] tracking-widest uppercase hover:underline">
            Contact Office
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LegalPages;
