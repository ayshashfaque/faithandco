import React from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import { MapPin, ShieldCheck, Key, ArrowRight } from 'lucide-react';

const BoroughLanding = () => {
  const { borough } = useParams();
  const location = useLocation();

  // Determine if it is HMO Management or Guaranteed Rent from the pathname
  const isHmo = location.pathname.includes('/services/hmo-management');
  
  // Format borough name from slug (e.g. hammersmith-fulham -> Hammersmith & Fulham)
  const formatBoroughName = (slug) => {
    if (!slug) return '';
    return slug
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')
      .replace('And', '&');
  };

  const boroughName = formatBoroughName(borough);

  const boroughData = {
    "hounslow": "Hounslow Council operates mandatory HMO, additional HMO, and selective licensing schemes. Faith & Co manages active licensing portfolios near Hounslow Central, Brentford, Feltham, and Chiswick.",
    "ealing": "Ealing Council requires licensing for all HMOs. We manage extensive properties near Ealing Broadway, Acton, Hanwell, and Southall (including our office at 86A High Street, Southall).",
    "croydon": "Croydon Council's licensing scheme applies widely. We supply HMO and family let management near Croydon Town Centre, Thornton Heath, Purley, and Norwood.",
    "brent": "Brent Council is a high-volume licensing ward. We manage HMO and supported living properties near Wembley, Willesden, Kilburn, and Harlesden.",
    "hillingdon": "Hillingdon Council operates selective licensing schemes. We manage portfolios near Uxbridge, Hayes, Ruislip, and West Drayton.",
    "hammersmith-fulham": "Hammersmith & Fulham Council has strict licensing controls. We manage high-specification stock near Fulham, Hammersmith, Shepherd's Bush, and Chelsea borders.",
    "westminster": "Westminster City Council has active selective licensing. We manage premium corporate and residential properties near Paddington, Marylebone, and Pimlico.",
    "harrow": "Harrow Council operates additional licensing. We manage properties near Harrow-on-the-Hill, Wealdstone, and Pinner.",
    "newham": "Newham Council operates borough-wide licensing. We manage properties near Stratford, East Ham, and Beckton.",
    "hackney": "Hackney Council operates selective licensing in designated wards. We manage properties near Hackney Central, Shoreditch, and Stoke Newington.",
    "lambeth": "Lambeth Council operates licensing in key wards. We manage properties near Brixton, Clapham, and Vauxhall."
  };

  const localKey = borough ? borough.toLowerCase() : '';
  const specificInfo = boroughData[localKey] || `Faith & Co provides professional property management services across ${boroughName || 'this borough'}. We actively monitor local licensing guidelines, council procurement policies, and market rent levels in the area to ensure your property remains compliant and highly profitable.`;

  const serviceTitle = isHmo ? `HMO Property Management` : `Guaranteed Rent Scheme`;
  const metaTitle = `${serviceTitle} in ${boroughName}`;

  return (
    <div className="bg-bone text-navy min-h-screen pt-[120px] pb-24 selection:bg-navy selection:text-bone">
      <div className="max-w-[1000px] mx-auto px-6 md:px-12">
        <span className="text-[#DAA520] font-automobile text-[10px] uppercase tracking-[0.4em] block mb-4">
          Local London Expertise
        </span>
        
        <div className="flex flex-col md:flex-row gap-8 items-start justify-between mb-12 border-b border-navy/10 pb-8">
          <div>
            <h1 className="text-4xl md:text-5xl font-headings italic mb-4">{metaTitle}</h1>
            <div className="flex items-center gap-2 text-xs font-automobile uppercase tracking-wider text-[#DAA520] font-bold">
              <MapPin size={14} />
              <span>{boroughName} Ward coverage</span>
            </div>
          </div>
          <div className="p-4 border border-navy/5 bg-white/40 shadow-sm shrink-0">
            {isHmo ? <ShieldCheck size={40} className="text-[#DAA520]" /> : <Key size={40} className="text-[#DAA520]" />}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <div className="space-y-6">
            <h3 className="font-headings italic text-2xl font-bold">Local Ward Insights</h3>
            <p className="text-sm leading-relaxed text-navy/80 font-automobile uppercase tracking-wider">
              {specificInfo}
            </p>
            <p className="text-sm leading-relaxed text-navy/80 font-automobile uppercase tracking-wider">
              Our Southall office is perfectly positioned to serve Western and Greater London, with a dedicated local management team overseeing property inspections, council procurement contacts, and maintenance contracts in {boroughName}.
            </p>
          </div>

          <div className="border border-navy/10 p-8 bg-[#111827] text-bone space-y-6">
            <h3 className="font-headings italic text-xl text-[#DAA520] font-bold">Service Inclusions for {boroughName}</h3>
            <ul className="space-y-3 text-[10px] uppercase tracking-wider font-automobile text-bone/70">
              <li>✓ Local borough licensing checks & coordination</li>
              <li>✓ 24/7 localized maintenance & emergency dispatch</li>
              <li>✓ Regular photographic inspections & landlord reports</li>
              <li>✓ Handled directly by our specialist team</li>
              {isHmo && <li>✓ HMO compliance: EICR, Gas Safety, Fire Assessments</li>}
              {!isHmo && <li>✓ Direct corporate lease with fixed monthly payments</li>}
            </ul>
          </div>
        </div>

        <div className="flex gap-4">
          <Link to="/about-us/areas-we-cover" className="border border-navy/20 hover:border-navy text-navy font-bold text-[10px] tracking-[0.25em] uppercase px-8 py-4">
            Back to Areas
          </Link>
          <Link to="/landlords/free-valuation" className="bg-[#DAA520] hover:bg-[#B8860B] text-navy font-bold text-[10px] tracking-[0.25em] uppercase px-8 py-4">
            Request {boroughName} Assessment
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BoroughLanding;
