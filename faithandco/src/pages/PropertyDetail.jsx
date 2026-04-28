import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { db } from '../firebase'
import { doc, getDoc } from 'firebase/firestore'
import { ArrowLeft, Wifi, Zap, Building, Square, Bed, Bath, Share2, Heart, Shield, Loader2 } from 'lucide-react'

const PropertyDetail = () => {
    const { id } = useParams();
    const [property, setProperty] = React.useState(null);
    const [loading, setLoading] = React.useState(true);

    useEffect(() => {
        window.scrollTo(0, 0);
        const fetchProperty = async () => {
            try {
                const docRef = doc(db, "properties", id);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    setProperty({ id: docSnap.id, ...docSnap.data() });
                }
            } catch (error) {
                console.error("Fetch Error:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchProperty();
    }, [id]);

    if (loading) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen bg-midnight text-white">
                <Loader2 className="w-12 h-12 border-slate text-slate animate-spin mb-6" />
                <p className="text-[10px] uppercase font-black tracking-[0.5em] text-slate">Synchronizing Protocol...</p>
            </div>
        );
    }

  if (!property) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-midnight text-white">
        <h2 className="text-4xl font-medium font-headings mb-8 italic">Asset Record Not Found</h2>
        <Link to="/properties" className="institutional-btn">Return to Catalogue</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-midnight text-white selection:bg-slate selection:text-white">
      <div className="flex flex-col lg:flex-row w-full">
        
        {/* Left Column - Dynamic Gallery (Parallax Ready) */}
        <div className="w-full lg:w-[60%] flex flex-col pt-[100px] bg-obsidian">
          {(property.imageUrls || ['/origin.jpeg']).map((img, idx) => (
            <div key={idx} className="w-full h-[70vh] lg:h-screen relative overflow-hidden mb-4 lg:mb-0 grayscale brightness-50 hover:grayscale-0 transition-all duration-1000">
                <img 
                    src={img} 
                    alt={`Asset Elevation ${idx}`} 
                    className="w-full h-full object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-r from-obsidian via-transparent to-transparent opacity-60" />
            </div>
          ))}
        </div>

        {/* Right Column - Premium Asset Info Sidebar (Obsidian) */}
        <div className="w-full lg:w-[40%] bg-obsidian relative border-l border-slate/10">
          <div className="lg:sticky lg:top-[100px] lg:h-[calc(100vh-100px)] overflow-y-auto px-8 md:px-16 pt-20 pb-32 flex flex-col">
            
            <div className="flex justify-between items-center mb-16">
              <Link to="/properties" className="inline-flex items-center text-white/30 uppercase tracking-[0.4em] text-[10px] font-bold hover:text-white transition-all">
                <ArrowLeft size={16} className="mr-3" /> Back to Catalogue
              </Link>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <div className="mb-12">
                <span className="text-slate font-bold uppercase tracking-[0.5em] text-[10px] mb-6 block font-inter">Institutional Asset Record</span>
                <h1 className="text-6xl md:text-8xl font-medium font-headings tracking-[0.02em] leading-tight mb-4 text-white italic">
                  {property.title}
                </h1>
                <p className="text-[12px] font-bold uppercase tracking-[0.4em] text-white/30 font-inter">
                  {property.location}
                </p>
              </div>

              <div className="text-4xl font-medium font-headings tracking-[0.02em] mb-16 pb-12 border-b border-slate/10 text-white flex items-baseline gap-4">
                £{property.isForSale ? property.salePrice : property.monthlyRent}
                {!property.isForSale && <span className="text-[10px] font-bold uppercase tracking-[0.4em] opacity-30 font-inter">/ PCM</span>}
              </div>

              <div className="space-y-20">
                <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-[0.5em] text-slate/30 mb-8 font-inter">Technical Description</h4>
                  <p className="text-white/60 text-xl leading-relaxed font-headings italic">
                    {property.description}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-y-16 gap-x-12 border-y border-slate/10 py-16">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 glass-machined flex items-center justify-center text-slate"><Bed size={20}/></div>
                    <div>
                      <h5 className="text-[9px] uppercase font-bold tracking-[0.4em] text-white/20 mb-2 font-inter">Capacity</h5>
                      <p className="text-xl font-medium font-headings truncate">{property.beds} Bedrooms</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 glass-machined flex items-center justify-center text-slate"><Bath size={20}/></div>
                    <div>
                      <h5 className="text-[9px] uppercase font-bold tracking-[0.4em] text-white/20 mb-2 font-inter">Facilities</h5>
                      <p className="text-xl font-medium font-headings truncate">{property.baths} Bathrooms</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 glass-machined flex items-center justify-center text-slate"><Building size={20}/></div>
                    <div>
                      <h5 className="text-[9px] uppercase font-bold tracking-[0.4em] text-white/20 mb-2 font-inter">Category</h5>
                      <p className="text-xl font-medium font-headings truncate">{property.propertyType}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 glass-machined flex items-center justify-center text-slate"><Shield size={20}/></div>
                    <div>
                      <h5 className="text-[9px] uppercase font-bold tracking-[0.4em] text-white/20 mb-2 font-inter">Compliance</h5>
                      <p className="text-xl font-medium font-headings text-slate">Grade A</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-8">
                  <button className="institutional-btn w-full">
                    Request technical protocol
                  </button>
                  <p className="text-[9px] text-center text-white/20 font-bold uppercase tracking-[0.4em] font-inter">Subject to institutional vetting procedures</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default PropertyDetail
