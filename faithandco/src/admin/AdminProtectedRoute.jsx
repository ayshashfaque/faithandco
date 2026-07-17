import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import { auth } from '../firebase'
import { onAuthStateChanged } from 'firebase/auth'
import { Loader2 } from 'lucide-react'

const AdminProtectedRoute = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  const isAdmin = sessionStorage.getItem('adminAuth') === 'true';

  useEffect(() => {
    if (isAdmin) {
      setLoading(false);
      return;
    }
    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
      setUser(authUser)
      setLoading(false)
    })
    return () => unsubscribe()
  }, [isAdmin])

  if (loading) {
    return (
      <div className="min-h-screen bg-dark flex flex-col items-center justify-center text-pearl/50">
        <Loader2 className="animate-spin mb-4" size={32} />
        <span className="uppercase tracking-widest text-[10px] font-bold">Verifying Credentials...</span>
      </div>
    )
  }

  if (!user && !isAdmin) {
    return <Navigate to="/admin" replace />
  }

  return children
}

export default AdminProtectedRoute
