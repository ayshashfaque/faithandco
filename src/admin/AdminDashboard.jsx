import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { LogOut, Plus, Trash2, Edit2, CheckCircle, UploadCloud, Loader2, Database, LayoutDashboard } from 'lucide-react'
import toast, { Toaster } from 'react-hot-toast'
import { db, auth } from '../firebase'
import { signOut, onAuthStateChanged } from 'firebase/auth'
import { collection, addDoc, getDocs, deleteDoc, doc, updateDoc, serverTimestamp, query, orderBy, onSnapshot } from 'firebase/firestore'

const initialForm = {
  title: '',
  location: '',
  description: '',
  isForSale: false,
  isForRent: true,
  salePrice: '',
  monthlyRent: '',
  propertyType: 'HMO Management',
  status: 'Available',
  imageUrls: [],
}

const LoadingSpinner = ({ message = "Synchronising Database..." }) => (
    <div className="min-h-screen bg-midnight flex flex-col items-center justify-center p-12">
        <div className="flex flex-col items-center gap-6 animate-pulse">
            <div className="w-16 h-16 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
            <span className="text-[12px] font-bold uppercase tracking-[0.4em] text-white/50">{message}</span>
        </div>
    </div>
)

const AdminDashboard = () => {
  const [properties, setProperties] = useState([])
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [formData, setFormData] = useState(initialForm)
  const [editingId, setEditingId] = useState(null)
  const [isUploading, setIsUploading] = useState(false)
  const [isSaving, setIsSaving] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [authChecked, setAuthChecked] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    // Rigid bypass guard
    const authIsReady = auth.currentUser;
    const adminToken = localStorage.getItem('adminToken');
    
    const unsubscribeAuth = onAuthStateChanged(auth, (user) => {
      setAuthChecked(true)
      if (!user) {
        navigate('/admin')
      }
    })

    const q = query(collection(db, "properties"), orderBy("createdAt", "desc"))
    const unsubscribeSnapshot = onSnapshot(q, (snapshot) => {
      const listings = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
      setProperties(listings || [])
      setIsLoading(false)
    }, (error) => {
      console.error("ADMIN_SNAPSHOT_ERR:", error)
      setIsLoading(false)
    })

    return () => {
        unsubscribeAuth();
        unsubscribeSnapshot();
    }
  }, [navigate])

  const handleLogout = async () => {
    await signOut(auth)
    navigate('/admin')
  }

  const handleImageUpload = async (e) => {
    const file = e.target.files?.[0]
    if (!file) return

    setIsUploading(true)
    const toastId = toast.loading("TRANSMITTING ASSET...")

    const cloudinaryData = new FormData()
    cloudinaryData.append("file", file)
    cloudinaryData.append("upload_preset", import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET)
    cloudinaryData.append("cloud_name", import.meta.env.VITE_CLOUDINARY_CLOUD_NAME)

    try {
      const resp = await fetch(`https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUDINARY_CLOUD_NAME}/image/upload`, {
        method: "POST",
        body: cloudinaryData
      })
      const result = await resp.json()
      
      if (result && result.secure_url) {
        setFormData(prev => ({ ...prev, imageUrls: [result.secure_url] }))
        toast.success("ASSET SYNCED", { id: toastId })
      }
    } catch (error) {
      toast.error("UPLOAD FAILED", { id: toastId })
    } finally {
      setIsUploading(false)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!formData.title) return toast.error("TITLE REQUIRED")

    setIsSaving(true)
    const toastId = toast.loading("SYNCHRONISING...")

    try {
      const payload = {
        ...formData,
        updatedAt: serverTimestamp()
      }
      
      if (editingId) {
        const docRef = doc(db, "properties", editingId)
        await updateDoc(docRef, payload)
        toast.success("DATABASE UPDATED", { id: toastId })
      } else {
        payload.createdAt = serverTimestamp()
        await addDoc(collection(db, "properties"), payload)
        toast.success("NEW ASSET COMMITTED", { id: toastId })
      }

      setIsFormOpen(false)
      setFormData(initialForm)
      setEditingId(null)
    } catch (error) {
      toast.error(`ERROR: ${error.message}`, { id: toastId })
    } finally {
      setIsSaving(false)
    }
  }

  if (!authChecked || isLoading) return <LoadingSpinner />

  return (
    <div className="min-h-screen bg-bone text-navy selection:bg-navy selection:text-white font-automobile relative">
      <Toaster position="top-right" />
      
      <nav className="fixed top-0 left-0 right-0 z-[100] h-[60px] bg-bone border-b border-navy/10 flex items-center">
        <div className="max-w-[1700px] mx-auto px-12 w-full flex justify-between items-center">
          <div className="flex items-center gap-4">
            <img src="/logofinal.png" className="h-8 filter brightness-0" alt="Logo" />
            <h1 className="text-sm font-automobile uppercase tracking-widest opacity-40">Security Console</h1>
          </div>
          <button onClick={handleLogout} className="text-[10px] font-automobile uppercase tracking-widest border border-navy/20 px-6 py-2 hover:bg-navy hover:text-bone transition-all">
            Logout
          </button>
        </div>
      </nav>

      <main className="max-w-[1700px] mx-auto px-12 py-32">
        <div className="flex justify-between items-end mb-20 border-b border-navy/5 pb-12">
            <div>
                <span className="text-navy/40 text-[10px] uppercase tracking-[0.4em] mb-4 block">Asset Management</span>
                <h2 className="text-5xl font-headings italic">Inventory Ledger</h2>
            </div>
            <button 
                onClick={() => { setFormData(initialForm); setEditingId(null); setIsFormOpen(!isFormOpen); }}
                className="ghoast-btn"
            >
                {isFormOpen ? 'Cancel Operation' : 'Register New Asset'}
            </button>
        </div>

        <div className="flex flex-col lg:flex-row gap-20">
            {/* LIST */}
            <div className={`transition-all duration-700 ${isFormOpen ? 'lg:w-1/2 opacity-40' : 'lg:w-full'}`}>
                <div className="grid grid-cols-1 gap-4">
                    {properties.map(p => (
                        <div key={p.id} className="p-8 border border-navy/5 bg-navy/[0.01] flex items-center justify-between group hover:bg-navy/[0.03] transition-all">
                            <div className="flex items-center gap-8">
                                <div className="w-20 h-20 bg-navy/5 overflow-hidden">
                                    <img src={p.imageUrls?.[0] || '/origin.jpeg'} className="w-full h-full object-cover grayscale opacity-60" alt="" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-headings italic">{p.title}</h3>
                                    <p className="text-[10px] uppercase tracking-widest text-navy/40">{p.location}</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <button onClick={() => { setFormData(p); setEditingId(p.id); setIsFormOpen(true); }} className="p-4 border border-navy/10 hover:bg-navy hover:text-bone transition-all">
                                    <Edit2 size={16} />
                                </button>
                                <button onClick={() => window.confirm("PURGE RECORD?") && deleteDoc(doc(db, "properties", p.id))} className="p-4 border border-navy/10 hover:bg-red-500 hover:text-white transition-all">
                                    <Trash2 size={16} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* FORM */}
            <AnimatePresence>
                {isFormOpen && (
                    <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        className="w-full lg:w-1/2 bg-bone border border-navy/10 p-12 shadow-2xl relative z-50"
                    >
                        <h3 className="text-3xl font-headings italic mb-12 border-b border-navy/5 pb-6">
                            {editingId ? 'Modify Record' : 'Initial Registration'}
                        </h3>
                        <form onSubmit={handleSubmit} className="space-y-10">
                            <div className="grid grid-cols-2 gap-10">
                                <div className="space-y-2">
                                    <label className="text-[9px] uppercase tracking-widest opacity-40">Asset Title</label>
                                    <input type="text" value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} className="input-underline w-full !text-xl" required />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[9px] uppercase tracking-widest opacity-40">Geographic Coord</label>
                                    <input type="text" value={formData.location} onChange={e => setFormData({...formData, location: e.target.value})} className="input-underline w-full" />
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-10">
                                <div className="space-y-2">
                                    <label className="text-[9px] uppercase tracking-widest opacity-40">Classification</label>
                                    <select value={formData.propertyType} onChange={e => setFormData({...formData, propertyType: e.target.value})} className="input-underline w-full">
                                        {['HMO Management', 'Portfolio Management', 'Care Sector', 'Serviced Accommodation'].map(v => <option key={v} value={v} className="bg-bone text-navy">{v}</option>)}
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[9px] uppercase tracking-widest opacity-40">Price / Rent</label>
                                    <input type="text" value={formData.monthlyRent} onChange={e => setFormData({...formData, monthlyRent: e.target.value})} className="input-underline w-full" />
                                </div>
                            </div>

                            <div className="space-y-4">
                                <label className="text-[9px] uppercase tracking-widest opacity-40">Visual Data</label>
                                <div className="h-48 border border-navy/10 relative flex items-center justify-center bg-navy/[0.02] cursor-pointer overflow-hidden">
                                    <input type="file" onChange={handleImageUpload} className="absolute inset-0 opacity-0 cursor-pointer z-10" />
                                    {isUploading ? <Loader2 className="animate-spin text-navy/20" /> : (
                                        formData.imageUrls[0] ? <img src={formData.imageUrls[0]} className="w-full h-full object-cover opacity-60" /> : <UploadCloud className="opacity-10" size={48} />
                                    )}
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[9px] uppercase tracking-widest opacity-40">Technical Brief</label>
                                <textarea rows={4} value={formData.description} onChange={e => setFormData({...formData, description: e.target.value})} className="input-underline w-full resize-none italic" />
                            </div>

                            <button type="submit" disabled={isSaving || isUploading} className="ghoast-btn w-full !bg-navy !text-bone">
                                {isSaving ? 'Synchronising...' : 'Commit to Database'}
                            </button>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
      </main>
    </div>
  )
}

export default AdminDashboard;
