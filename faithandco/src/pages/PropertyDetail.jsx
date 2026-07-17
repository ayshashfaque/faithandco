import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { db } from '../firebase'
import { doc, getDoc } from 'firebase/firestore'
import { ArrowLeft, Wifi, Zap, Building, Square, Bed, Bath, Share2, Heart, Shield, Loader2 } from 'lucide-react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

const goldPin = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-gold.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

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
                <p className="text-[10px] uppercase font-black tracking-[0.5em] text-slate">Loading...</p>
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
          {(property.imageUrls && property.imageUrls.length > 0 ? property.imageUrls : ['https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=2000']).map((img, idx) => (
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
                <h1 className="text-2xl md:text-4xl font-medium font-headings tracking-[0.02em] leading-tight mb-6 text-white italic">
                  {property.location || 'London, UK'}
                </h1>
                <div className="flex flex-wrap items-center gap-6 text-[12px] font-bold uppercase tracking-[0.4em] text-white/50 font-inter">
                  <span>{property.beds || 0} Beds</span>
                  <span>•</span>
                  <span>{property.baths || 0} Baths</span>
                  <span>•</span>
                  <span>{property.propertyType || 'Property'}</span>
                </div>
              </div>

              <div className="text-4xl font-medium font-headings tracking-[0.02em] mb-12 pb-12 border-b border-slate/10 text-white flex items-baseline gap-4">
                £{property.isForSale ? property.salePrice : property.monthlyRent}
                {!property.isForSale && <span className="text-[10px] font-bold uppercase tracking-[0.4em] opacity-30 font-inter">/ PCM</span>}
              </div>

              <div className="space-y-12">
                <div className="grid grid-cols-2 gap-y-12 gap-x-8 border-t border-slate/10 pt-12">
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

                <div className="flex flex-col gap-6">
                  <Link to="/contact" className="w-full text-center py-5 bg-[#DAA520] hover:bg-white text-midnight hover:text-midnight font-bold uppercase tracking-[0.3em] transition-colors">
                    Contact Us
                  </Link>
                </div>

                {/* GIS View */}
                <div className="pt-12 border-t border-slate/10">
                  <h4 className="text-[10px] font-bold uppercase tracking-[0.5em] text-slate/50 mb-6 font-inter">Location</h4>
                  <div className="h-[300px] w-full border border-slate/10 overflow-hidden">
                    {property.lat && property.lng ? (
                      <MapContainer
                        center={[property.lat, property.lng]}
                        zoom={15}
                        style={{ height: '100%', width: '100%' }}
                        scrollWheelZoom={false}
                      >
                        <TileLayer
                          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={[property.lat, property.lng]} icon={goldPin}>
                          <Popup>{property.title || property.location || 'Property'}</Popup>
                        </Marker>
                      </MapContainer>
                    ) : (
                      <iframe
                        src={`https://maps.google.com/maps?q=${encodeURIComponent(property.location || 'London, UK')}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Property Location"
                      ></iframe>
                    )}
                  </div>
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
