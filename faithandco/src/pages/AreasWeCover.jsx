import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Globe } from 'lucide-react';

const AreasWeCover = () => {
  const innerLondon = [
    "Camden", "Hackney", "Hammersmith & Fulham", "Islington", "Kensington & Chelsea", 
    "Lambeth", "Lewisham", "Newham", "Southwark", "Tower Hamlets", "Wandsworth", 
    "Westminster", "Haringey", "City of London"
  ];

  const outerLondon = [
    "Barking & Dagenham", "Barnet", "Bexley", "Brent", "Bromley", "Croydon", "Ealing", 
    "Enfield", "Harrow", "Havering", "Hillingdon", "Hounslow", "Kingston upon Thames", 
    "Merton", "Redbridge", "Richmond upon Thames", "Sutton", "Waltham Forest"
  ];

  const homeCounties = [
    { county: "Essex", towns: ["Romford", "Brentwood", "Harlow", "Basildon", "Chelmsford", "Grays", "Thurrock", "Chigwell"] },
    { county: "Hertfordshire", towns: ["Watford", "St Albans", "Hemel Hempstead", "Stevenage", "Hatfield", "Welwyn Garden City"] },
    { county: "Surrey", towns: ["Guildford", "Woking", "Reigate", "Epsom", "Elmbridge", "Spelthorne"] },
    { county: "Kent", towns: ["Dartford", "Sevenoaks", "Bromley-adjacent", "Medway"] },
    { county: "Berkshire", towns: ["Slough", "Windsor", "Maidenhead", "Reading", "Bracknell"] },
    { county: "Buckinghamshire", towns: ["High Wycombe", "Aylesbury", "Beaconsfield", "Chesham"] }
  ];

  // Helper to check if a borough has a priority page and get its URL slug
  const getBoroughSlug = (borough) => {
    return borough.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-').replace(/'/g, '');
  };

  const getBoroughUrl = (borough, type) => {
    const slug = getBoroughSlug(borough);
    return type === 'hmo' ? `/services/hmo-management/${slug}` : `/guaranteed-rent/${slug}`;
  };

  return (
    <div className="bg-bone text-navy min-h-screen pt-[120px] pb-24 selection:bg-navy selection:text-bone">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <span className="text-[#DAA520] font-automobile text-[10px] uppercase tracking-[0.4em] block mb-4">Geographic Coverage</span>
        <h1 className="text-4xl md:text-6xl font-headings italic mb-8">Letting & Property Management Across Greater London and the Home Counties</h1>
        
        <p className="text-navy/70 leading-relaxed text-lg max-w-3xl mb-12">
          Faith & Co manages and lets properties across all 32 London boroughs and into the surrounding Home Counties. From Barnet in the north to Bromley in the south, Havering in the east to Hillingdon in the west - wherever your property is in Greater London or the commuter belt, our team can manage it.
        </p>

        {/* Active Council Relationships Banner */}
        <div className="bg-navy text-bone p-8 border border-white/5 mb-16 flex flex-col md:flex-row gap-6 items-center justify-between">
          <div className="space-y-2">
            <span className="text-[#DAA520] font-automobile text-[9px] uppercase tracking-[0.3em] font-bold block">Active Procurement relationships</span>
            <p className="text-xs uppercase tracking-wider font-automobile text-bone/80 max-w-xl">
              Faith & Co has particularly active council procurement relationships in: Ealing, Hounslow, Brent, Hillingdon, Hammersmith & Fulham, Westminster, and Harrow. These are areas of strength - not geographic limits.
            </p>
          </div>
          <Link to="/contact" className="bg-[#DAA520] hover:bg-[#B8860B] text-navy font-bold text-[10px] tracking-[0.25em] uppercase px-6 py-4 shrink-0">
            Submit Procurement Inquiry
          </Link>
        </div>

        {/* Inner London Grid */}
        <div className="mb-16">
          <h2 className="text-2xl font-headings italic mb-6 flex items-center gap-2">
            <MapPin size={20} className="text-[#DAA520]" /> Inner London Boroughs
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {innerLondon.map((b, idx) => (
              <div key={idx} className="border border-navy/10 p-4 bg-white/40 shadow-sm flex flex-col justify-between">
                <span className="font-headings italic text-base font-bold">{b}</span>
                <div className="flex gap-2 mt-4 text-[8px] font-automobile tracking-wider uppercase">
                  <Link to={getBoroughUrl(b, 'rent')} className="text-[#DAA520] hover:underline">Guaranteed Rent</Link>
                  <span className="text-navy/20">|</span>
                  <Link to={getBoroughUrl(b, 'hmo')} className="text-navy hover:underline">HMO</Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Outer London Grid */}
        <div className="mb-16">
          <h2 className="text-2xl font-headings italic mb-6 flex items-center gap-2">
            <MapPin size={20} className="text-[#DAA520]" /> Outer London Boroughs
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {outerLondon.map((b, idx) => (
              <div key={idx} className="border border-navy/10 p-4 bg-white/40 shadow-sm flex flex-col justify-between">
                <span className="font-headings italic text-base font-bold">{b}</span>
                <div className="flex gap-2 mt-4 text-[8px] font-automobile tracking-wider uppercase">
                  <Link to={getBoroughUrl(b, 'rent')} className="text-[#DAA520] hover:underline">Guaranteed Rent</Link>
                  <span className="text-navy/20">|</span>
                  <Link to={getBoroughUrl(b, 'hmo')} className="text-navy hover:underline">HMO</Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Home Counties Grid */}
        <div>
          <h2 className="text-2xl font-headings italic mb-6 flex items-center gap-2">
            <Globe size={20} className="text-[#DAA520]" /> Home Counties - Commuter Belt
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {homeCounties.map((hc, idx) => (
              <div key={idx} className="border border-navy/10 p-6 bg-white/40 shadow-sm space-y-4">
                <h3 className="font-headings italic text-xl font-bold text-navy border-b border-navy/10 pb-2">{hc.county}</h3>
                <div className="flex flex-wrap gap-2">
                  {hc.towns.map((town, tIdx) => (
                    <span 
                      key={tIdx} 
                      className="bg-navy/5 text-navy/70 text-[9px] uppercase tracking-wider font-automobile py-1 px-2.5 rounded-full"
                    >
                      {town}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AreasWeCover;
