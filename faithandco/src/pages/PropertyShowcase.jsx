import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { properties as localProperties } from '../data/properties';
import { Filter, Home, Key, MapPin, Eye, Building, ChevronRight } from 'lucide-react';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from '../firebase';

const LoadingSkeleton = () => (
    <div className="min-h-screen bg-midnight flex flex-col items-center justify-center p-12">
        <div className="flex flex-col items-center gap-6 animate-pulse">
            <div className="w-16 h-16 border-2 border-slate-blue border-t-white rounded-full animate-spin"></div>
            <span className="text-[12px] font-bold uppercase tracking-[0.4em] text-white">Opening Public Records...</span>
        </div>
    </div>
);

const PropertyShowcase = () => {
    const [properties, setProperties] = useState(null);
    const [filter, setFilter] = useState('Available');
    const [isLoading, setIsLoading] = useState(true);
    const [showGIS, setShowGIS] = useState(false);

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
                    {['Available Properties', 'GIS View'].map((f) => (
                        <button 
                            key={f}
                            onClick={() => {
                                if (f === 'GIS View') {
                                    setShowGIS(!showGIS);
                                } else {
                                    setFilter(filter === 'All' ? 'Available' : 'All');
                                }
                            }}
                            className={`px-8 py-3 text-[10px] uppercase font-black tracking-widest transition-all ${(filter === 'Available' && f === 'Available Properties') || (showGIS && f === 'GIS View') ? 'bg-white text-midnight' : 'bg-transparent text-white border border-white/10 hover:bg-white/10'}`}
                        >
                            {f}
                        </button>
                    ))}
                </div>
            </section>

            <section className="px-6 md:px-12 py-32">
                <AnimatePresence>
                    {showGIS && (
                        <motion.div 
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="max-w-[1400px] mx-auto mb-12 overflow-hidden"
                        >
                            <div className="h-[500px] w-full border border-white/10 bg-white/5 relative">
                                <iframe 
                                    src="https://maps.google.com/maps?q=Faith+and+Co+Estates+Southall&t=&z=15&ie=UTF8&iwloc=&output=embed"
                                    width="100%" 
                                    height="100%" 
                                    style={{ border: 0 }} 
                                    allowFullScreen="" 
                                    loading="lazy" 
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="GIS Map"
                                ></iframe>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
                <div className="max-w-[1400px] mx-auto">
                    {filteredProperties.length === 0 ? (
                        <div className="p-40 text-center border border-white/5 uppercase tracking-[0.6em] text-white/20">Zero Assets Available</div>
                    ) : (
                        <div className="flex flex-col gap-12 items-center">
                            <AnimatePresence mode="popLayout">
                                {filteredProperties.map((p) => (
                                    <motion.div 
                                        key={p.id}
                                        layout
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
                                        className="relative w-full max-w-[1200px] lg:min-w-[800px] lg:h-[450px] flex flex-col lg:flex-row bg-midnight border-2 border-bone/20 shadow-2xl overflow-hidden group hover:border-bone/40 transition-colors"
                                    >
                                        {/* Left Side: Feature Image (60%) */}
                                        <div className="w-full lg:w-[60%] h-[300px] lg:h-full overflow-hidden border-b lg:border-b-0 lg:border-r-2 border-bone/20">
                                            {p.imageUrls && p.imageUrls[0] ? (
                                                <img src={p.imageUrls[0]} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
                                            ) : (
                                                <div className="w-full h-full flex items-center justify-center bg-white/5">
                                                    <Building size={48} className="text-white/10" />
                                                </div>
                                            )}
                                        </div>

                                        {/* Right Side: Details (40%) */}
                                        <div className="w-full lg:w-[40%] p-10 lg:p-14 flex flex-col justify-between bg-midnight/50 backdrop-blur-sm">
                                            <div className="space-y-6">
                                                <div className="flex justify-between items-start">
                                                    <span className="text-[10px] uppercase tracking-[0.4em] font-black text-bone/40">{p.status}</span>
                                                    <span className="text-2xl font-headings text-bone italic">£{p.price || 'POA'}</span>
                                                </div>
                                                <h3 className="text-3xl lg:text-4xl font-bold font-headings text-white italic leading-tight">{p.title}</h3>
                                                <div className="flex items-center gap-3 text-bone/60">
                                                    <MapPin size={16} />
                                                    <span className="text-[11px] uppercase tracking-widest">{p.location}</span>
                                                </div>
                                            </div>

                                            <div className="pt-8">
                                                <a 
                                                    href={`https://www.google.com/maps/place/Faith+and+Co+Estates/@51.5106921,-0.3747878,17z/data=!3m2!4b1!5s0x48760d543f16e18d:0x4bc0ee56e898a2c3!4m6!3m5!1s0x48760d543f105555:0xce112c803821e726!8m2!3d51.5106921!4d-0.3722129!16s%2Fg%2F11fl8xfy0h?entry=ttu&g_ep=EgoyMDI2MDQyNi4wIKXMDSoASAFQAw%3D%3D`}
                                                    target="_blank" 
                                                    rel="noopener noreferrer"
                                                    onClick={(e) => e.stopPropagation()}
                                                    className="inline-flex items-center gap-4 text-white font-automobile text-[10px] tracking-[0.4em] uppercase border-b-2 border-bone/20 pb-3 hover:border-bone transition-all w-fit"
                                                >
                                                    GIS Navigation Terminal <ChevronRight size={14} />
                                                </a>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
};

export default PropertyShowcase;
