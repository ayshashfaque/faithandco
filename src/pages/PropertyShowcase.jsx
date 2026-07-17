import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { properties as localProperties } from '../data/properties';
import { Filter, Home, Key, MapPin, Eye, Building, ChevronRight } from 'lucide-react';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from '../firebase';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix leaflet default icon paths
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

const goldIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-gold.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

const LoadingSkeleton = () => (
    <div className="min-h-screen bg-midnight flex flex-col items-center justify-center p-12">
        <div className="flex flex-col items-center gap-6 animate-pulse">
            <div className="w-16 h-16 border-2 border-slate-blue border-t-white rounded-full animate-spin"></div>
            <span className="text-[12px] font-bold uppercase tracking-[0.4em] text-white">Loading...</span>
        </div>
    </div>
);

const PropertyCard = ({ p }) => {
    const cardRef = useRef(null);
    const [coords, setCoords] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        if (cardRef.current) {
            const rect = cardRef.current.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            setCoords({ x, y });
        }
    };

    return (
        <motion.div 
            ref={cardRef}
            onMouseMove={handleMouseMove}
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
            className="relative w-full max-w-[1200px] lg:min-w-[800px] lg:h-[450px] flex flex-col lg:flex-row bg-[#060e16] border-2 border-white/10 shadow-2xl overflow-hidden group hover:border-[#C9A84C]/50 hover:shadow-[0_0_30px_rgba(201,168,76,0.15)] transition-all duration-500"
        >
            {/* Ambient Gold Aura Layer */}
            <div 
                className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                    background: `radial-gradient(400px circle at ${coords.x}px ${coords.y}px, rgba(201, 168, 76, 0.12), transparent 80%)`,
                    zIndex: 1,
                }}
            />

            {/* Left Side: Feature Image (60%) */}
            <div className="w-full lg:w-[60%] h-[300px] lg:h-full overflow-hidden border-b lg:border-b-0 lg:border-r-2 border-white/10 relative z-10">
                {p.imageUrls && p.imageUrls[0] ? (
                    <img 
                        src={p.imageUrls[0]} 
                        alt={p.title} 
                        className="w-full h-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-107"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center bg-white/5">
                        <Building size={48} className="text-white/10" />
                    </div>
                )}
            </div>

            {/* Right Side: Details (40%) */}
            <div className="w-full lg:w-[40%] p-10 lg:p-14 flex flex-col justify-between bg-midnight/50 backdrop-blur-sm relative z-10">
                <div className="space-y-6">
                    <div className="flex justify-between items-start">
                        <span className="text-[10px] uppercase tracking-[0.4em] font-black text-white/40">{p.status}</span>
                        <span className="text-2xl font-headings text-[#C9A84C] italic">{p.price ? `£${Number(p.price).toLocaleString()}` : 'POA'}</span>
                    </div>
                    <h3 className="text-3xl lg:text-4xl font-bold font-headings text-white italic leading-tight">{p.title}</h3>
                    <div className="flex items-center gap-3 text-white/60">
                        <MapPin size={16} />
                        <span className="text-[11px] uppercase tracking-widest">{p.location || generateRandomLondonAddress()}</span>
                    </div>
                </div>

                <div className="pt-8">
                    <Link to={`/property/${p.id}`} onClick={(e) => e.stopPropagation()} className="inline-block bg-[#C9A84C] text-[#060e16] px-6 py-3 hover:bg-[#E8C878] transition-colors pb-3.5 w-fit">
                        <span className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-bold"><span>View Details</span> <ChevronRight size={14} /></span>
                    </Link>
                </div>
            </div>
        </motion.div>
    );
};

const PropertyShowcase = () => {
    const [properties, setProperties] = useState(null);
    const [filter, setFilter] = useState('Available');
    const [isLoading, setIsLoading] = useState(true);
    const [selectedProperty, setSelectedProperty] = useState(null);
    const [showMap, setShowMap] = useState(false);

    useEffect(() => {
        const fetchProperties = async () => {
            try {
                const q = query(collection(db, "properties"), orderBy("createdAt", "desc"));
                const querySnapshot = await getDocs(q);
                const fetchedProperties = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setProperties(fetchedProperties);
            } catch (error) {
                console.error("Error fetching properties: ", error);
                setProperties([]);
            } finally {
                setIsLoading(false);
            }
        };

        fetchProperties();
    }, []);

    // BUILD 43.0 DATA GUARDS: Fix for the "Blank Page" error
    if (isLoading || properties === null) return <LoadingSkeleton />;
    if (!properties) return null;

    const propertiesWithIsAvailable = properties.map(p => ({ ...p, isAvailable: p.status === 'Available' }));

    const filteredProperties = filter === 'All' 
        ? propertiesWithIsAvailable 
        : propertiesWithIsAvailable.filter(p => p.isAvailable === true);

    return (
        <div className="relative z-[100] min-h-screen bg-midnight pt-[100px] selection:bg-slate-blue selection:text-white">
            
            <header className="px-6 md:px-12 py-16 border-b border-white/5">
                <div className="max-w-[1400px] mx-auto text-center md:text-left">
                    <span className="text-slate font-bold uppercase tracking-[0.6em] text-[10px] mb-6 block">Asset Catalogue</span>
                    <h1 className="text-4xl md:text-6xl font-bold font-headings text-white leading-none">
                        Property <span className="italic opacity-60">Showcase</span>
                    </h1>
                </div>
            </header>

            <section className="px-6 md:px-12 py-12 bg-white/[0.02]">
                <div className="max-w-[1400px] mx-auto flex flex-wrap gap-4">
                                    {['Available Properties', 'Map View'].map((f) => (
                    <button 
                        key={f}
                        onClick={() => {
                            if (f === 'Map View') {
                                setShowMap(!showMap);
                            } else {
                                setFilter(filter === 'All' ? 'Available' : 'All');
                            }
                        }}
                        className={`px-8 py-3 text-[10px] uppercase font-black tracking-widest transition-all ${(filter === 'Available' && f === 'Available Properties') || (showMap && f === 'Map View') ? 'bg-white text-midnight' : 'bg-transparent text-white border border-white/10 hover:bg-white/10'}`}
                    >
                        {f}
                    </button>
                ))}

                </div>
            </section>

            <section className="px-6 md:px-12 py-32">
                <AnimatePresence>
                    {showMap && (
                        <motion.div 
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="max-w-[1400px] mx-auto mb-12 overflow-hidden"
                        >
                            <div className="h-[500px] w-full border border-white/10 overflow-hidden relative">
                                <MapContainer
                                    center={[51.509865, -0.118092]}
                                    zoom={10}
                                    style={{ height: '100%', width: '100%' }}
                                    scrollWheelZoom={false}
                                >
                                    <TileLayer
                                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                    />
                                    {filteredProperties.map((p) => p.lat && p.lng ? (
                                        <Marker key={p.id} position={[p.lat, p.lng]} icon={goldIcon}>
                                            <Popup>
                                                <div style={{ minWidth: 160 }}>
                                                    <strong>{p.title}</strong><br />
                                                    <span>{p.location}</span><br />
                                                    {p.price ? <span>£{Number(p.price).toLocaleString()}</span> : null}
                                                </div>
                                            </Popup>
                                        </Marker>
                                    ) : null)}
                                </MapContainer>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
                <div className="max-w-[1400px] mx-auto">
                    {filteredProperties.length === 0 ? (
                        <div className="p-40 text-center border border-white/5 uppercase tracking-[0.6em] text-white/20">No active assets matching your filter</div>
                    ) : (
                        <div className="flex flex-col gap-12 items-center">
                            <AnimatePresence mode="popLayout">
                                {filteredProperties.map((p) => (
                                    <PropertyCard key={p.id} p={p} />
                                ))}
               
                            </AnimatePresence>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
};

function generateRandomLondonAddress() {
  const addresses = [
    '10 Downing St, London',
    '221B Baker St, London',
    '30 St Mary Axe, London',
    '20 Fenchurch St, London',
    '1 Canada Square, London',
    'The Shard, London',
    '4 Palace St, London',
    'Flat Iron Building, London',
    'Buckingham Palace, London',
    'London Bridge, London'
  ];
  const idx = Math.floor(Math.random() * addresses.length);
  return addresses[idx];
}

export default PropertyShowcase;
