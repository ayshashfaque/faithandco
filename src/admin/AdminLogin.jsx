import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { auth } from '../firebase'
import { signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'
import { Lock, User, Loader2, ShieldCheck, Database } from 'lucide-react'
import toast, { Toaster } from 'react-hot-toast'

const AdminLogin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) navigate('/admin/dashboard')
    })
    return () => unsubscribe()
  }, [navigate])

  const handleLogin = async (e) => {
    e.preventDefault()
    setLoading(true)
    const toastId = toast.loading("Loading...")

    if (email === 'admin' && password === 'faithandco123') {
      sessionStorage.setItem('adminAuth', 'true')
      toast.success("Identity Verified: Initializing Terminal", { id: toastId })
      navigate('/admin/dashboard')
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password)
      toast.success("Identity Verified: Initializing Terminal", { id: toastId })
      navigate('/admin/dashboard')
    } catch (error) {
      toast.error("VETTING_FAILURE: INVALID_CREDENTIALS", { id: toastId })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="font-inter w-full min-h-[100vh] py-32 flex items-center justify-center" style={{ background: '#010B14', color: '#EBE9E4' }}>
      <Toaster position="top-center" reverseOrder={false} />
      
      <div className="w-full max-w-md px-8" style={{ pointerEvents: 'all', zIndex: 10 }}>
        <div className="glass-machined p-12 space-y-12 border border-navy/30 bg-bone/90 backdrop-blur-xl">
          
          <div className="text-center space-y-4">
            <div className="mx-auto w-20 h-20 border border-navy/20 flex items-center justify-center text-navy mb-8 rotate-45">
                <Database className="-rotate-45" size={32} />
            </div>
            <h1 className="text-4xl font-medium tracking-[0.02em] font-headings text-navy italic">Management Interface</h1>
            <p className="text-[10px] font-automobile uppercase tracking-[0.4em] text-navy/40">Administrative Protocol Access</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-10">
            <div className="space-y-8">
              <div className="relative group">
                <User className="absolute left-0 top-4 text-navy/30 group-focus-within:text-navy transition-colors" size={18} />
                <input 
                  type="email" 
                  placeholder="AUTHORISED EMAIL" 
                  className="input-underline w-full pl-10 text-[11px] font-automobile font-bold tracking-[0.2em] pointer-events-auto bg-transparent focus:outline-none py-4 text-navy" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{ pointerEvents: 'all', cursor: 'text' }}
                  required 
                />
              </div>
              <div className="relative group">
                <Lock className="absolute left-0 top-4 text-navy/30 group-focus-within:text-navy transition-colors" size={18} />
                <input 
                  type="password" 
                  placeholder="SECURITY PROTOCOL" 
                  className="input-underline w-full pl-10 text-[11px] font-automobile font-bold tracking-[0.2em] pointer-events-auto bg-transparent focus:outline-none py-4 text-navy" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  style={{ pointerEvents: 'all', cursor: 'text' }}
                  required 
                />
              </div>
            </div>

            <button 
              type="submit" 
              disabled={loading}
              className="w-full py-6 bg-navy text-bone font-automobile text-[10px] tracking-[0.4em] uppercase hover:bg-navy/90 transition-all disabled:opacity-50"
              style={{ pointerEvents: 'all' }}
            >
              {loading ? (
                <div className="flex items-center justify-center gap-3">
                  <Loader2 className="animate-spin" size={18} />
                  <span>DECRYPTING...</span>
                </div>
              ) : (
                <div className="flex items-center justify-center gap-3">
                  <ShieldCheck size={18} />
                  <span>INITIALISE SESSION</span>
                </div>
              )}
            </button>
          </form>

          <div className="pt-10 border-t border-navy/10 flex flex-col items-center gap-6">
            <p className="text-[9px] font-automobile tracking-[0.4em] text-navy/40 text-center uppercase">Secure Terminal Endpoint: UB1-3DB</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminLogin
