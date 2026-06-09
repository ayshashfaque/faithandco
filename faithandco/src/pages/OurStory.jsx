import React from 'react';
import { Link } from 'react-router-dom';

const OurStory = () => {
  return (
    <div className="bg-bone text-navy min-h-screen pt-[120px] pb-24 selection:bg-navy selection:text-bone">
      <div className="max-w-[900px] mx-auto px-6 md:px-12">
        <span className="text-[#DAA520] font-automobile text-[10px] uppercase tracking-[0.4em] block mb-4">About Faith & Co Estates</span>
        <h1 className="text-4xl md:text-6xl font-headings italic mb-8">Our Story</h1>
        
        {/* Parallax / Cinematic image layout */}
        <div className="w-full h-[350px] overflow-hidden mb-12 border border-navy/10 relative">
          <img 
            src="/origin_slender_archway.png" 
            alt="Faith & Co Estates Front Door Origin" 
            className="w-full h-full object-cover mix-blend-luminosity brightness-95 contrast-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/30 to-transparent"></div>
        </div>

        <div className="space-y-6 text-sm text-navy/80 leading-relaxed font-automobile uppercase tracking-wider">
          <p>
            Founded in 2018 by Sunesh Koshy, Faith & Co Estates is an independent estate agency driven by a mission to redefine the property experience in London. Sunesh recognised a clear gap in the market for specialist property management - particularly in HMO properties, care sector lettings, and supported living accommodation. He established Faith & Co to serve landlords who value long-term stability and institutional compliance over standard market yields.
          </p>
          <p>
            What began as a mission to find one compliant, well-managed room for a vulnerable individual in need of supported housing grew into a comprehensive network of managed properties and institutional partnerships across Greater London and the Home Counties.
          </p>
          <p>
            Today, Faith & Co manages HMO and licensed properties for private landlords, London borough councils, supported living operators, care-sector organisations, and housing associations - with a team built on sector knowledge, compliance expertise, and a genuine commitment to the communities we serve.
          </p>
          <p>
            Our mission is clear: to provide landlords with stress-free, reliable property management while ensuring that councils, care providers, and housing organisations have access to high-quality, compliant properties that serve their communities. We believe property ownership should be rewarding, not overwhelming.
          </p>
        </div>

        <div className="border-t border-navy/10 mt-16 pt-8 flex justify-between items-center">
          <div>
            <div className="font-headings italic text-lg font-bold text-navy">Sunesh Koshy</div>
            <div className="text-[10px] font-automobile uppercase tracking-widest text-[#DAA520]">Founder, Faith & Co Estates</div>
          </div>
          <Link to="/contact" className="bg-navy hover:bg-navy/80 text-bone font-bold text-[10px] tracking-[0.25em] uppercase px-6 py-3">
            Speak to our founder
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OurStory;
