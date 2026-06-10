import React, { useState, useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import { Link } from 'react-router-dom'
import { ExternalLink, Home, Map as MapIcon, Loader2 } from 'lucide-react'
import { db } from '../firebase'
import { collection, onSnapshot, query } from 'firebase/firestore'

// Custom Marker: Solid Slate Blue Circle for Institutional Precision
const slateMarker = L.divIcon({
  html: `<div style="width: 16px; height: 16px; background-color: #4A6274; border: 2px solid white; border-radius: 50%; box-shadow: 0 0 10px rgba(74, 98, 116, 0.5);"></div>`,
  className: 'custom-slate-marker',
  iconSize: [16, 16],
  iconAnchor: [8, 8],
  popupAnchor: [0, -8]
})

const MapPage = () => {
  const [properties, setProperties] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const q = query(collection(db, "properties"))
    const unsubscribe = onSnapshot(q, (snapshot) => {
      let props = snapshot.docs
        .map(doc => ({ id: doc.id, ...doc.data() }))
        .filter(p => p.lat && p.lng)
      
      setProperties(props)
      setLoading(false)
    })

    return () => unsubscribe()
  }, [])

  if (loading) {
    return (
      <div className="h-screen w-full bg-midnight flex flex-col items-center justify-center text-white">
        <Loader2 className="w-12 h-12 animate-spin text-slate mb-4" />
        <p className="uppercase tracking-[0.3em] text-xs font-bold font-inter">Synchronizing GIS Data...</p>
      </div>
    )
  }

  return (
    <div className="h-screen w-full relative pt-[80px] bg-obsidian">
      {/* Map Control Overlay: Glass Machined */}
      <div className="absolute top-24 left-10 z-[1000] p-8 glass-machined hidden md:block max-w-sm rounded-none border-slate/40">
        <div className="flex items-center gap-4 mb-6">
          <MapIcon className="text-slate" size={20} />
          <h2 className="text-xl font-bold uppercase tracking-widest font-headings text-white">Asset Deployment Grid</h2>
        </div>
        <p className="text-[11px] text-white/40 mb-8 leading-relaxed font-bold uppercase tracking-widest">
          Visualizing {properties.length} live tactical cloud entries across the territorial corridor.
        </p>
        <div className="flex items-center gap-3 text-[10px] uppercase font-black tracking-[0.3em] text-slate/60">
            <div className="w-2 h-2 rounded-full bg-slate animate-pulse" />
            <span>Active Cloud Sync</span>
        </div>
      </div>

      <MapContainer 
        center={[51.5074, -0.3780]} 
        zoom={11} 
        style={{ height: '100%', width: '100%', background: '#050505' }}
        zoomControl={false}
      >
        {/* CartoDB Voyager Dark: Grayscale Cinematic Theme */}
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
          attribution='&copy; CARTO'
        />

        {properties.map((prop) => (
          <Marker 
            key={prop.id} 
            position={[Number(prop.lat), Number(prop.lng)]}
            icon={slateMarker}
          >
            <Popup className="institutional-popup">
              <div className="w-[300px] bg-midnight text-white overflow-hidden p-0 border-0">
                <div className="h-44 w-full relative overflow-hidden">
                  <img 
                    src={prop.imageUrls?.[0] || '/origin.jpeg'} 
                    alt={prop.title} 
                    className="w-full h-full object-cover grayscale brightness-75 transition-all duration-700 hover:grayscale-0 hover:scale-110"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-midnight to-transparent">
                     <p className="text-[9px] uppercase font-black tracking-[0.4em] text-slate">Technical Asset</p>
                  </div>
                </div>
                
                <div className="p-8 space-y-6">
                    <h3 className="text-2xl font-medium uppercase font-headings text-white truncate">{prop.title}</h3>
                    <div className="flex justify-between items-center pb-6 border-b border-slate/10">
                        <p className="text-xs text-slate font-inter uppercase tracking-widest">{prop.location}</p>
                        <p className="text-xl font-medium text-white font-headings">£{prop.isForSale ? prop.salePrice : prop.monthlyRent}</p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                    <Link 
                        to={`/property/${prop.id}`}
                        className="institutional-btn w-full !text-[9px] !h-12"
                    >
                        Protocol Details
                    </Link>
                    <a 
                        href={`https://www.google.com/maps/search/?api=1&query=${prop.lat},${prop.lng}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center border border-slate text-slate text-[9px] uppercase font-bold tracking-widest hover:bg-slate hover:text-white transition-all"
                    >
                        GIS Link
                    </a>
                    </div>
                </div>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>

      <style>{`
        .leaflet-popup-content-wrapper {
          background: #0A1A2F !important;
          color: white !important;
          border-radius: 0px !important;
          padding: 0 !important;
          border: 0.5px solid #4A6274;
        }
        .leaflet-popup-content {
          margin: 0 !important;
          width: 300px !important;
        }
        .leaflet-popup-tip {
          background: #0A1A2F !important;
          border: 0.5px solid #4A6274;
        }
        .custom-slate-marker {
            transition: transform 0.3s ease;
        }
        .custom-slate-marker:hover {
            transform: scale(1.5) !important;
        }
      `}</style>
    </div>
  )
}

export default MapPage
