import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import PropertyShowcase from './pages/PropertyShowcase';
import CareSectorPage from './pages/CareSectorPage';
import AboutUsPage from './pages/AboutUsPage';
import LandlordsPage from './pages/LandlordsPage';
import PropertyDetail from './pages/PropertyDetail';
import Footer from './components/Footer';
import ServicePlaceholder from './pages/ServicePlaceholder';
import FAQPage from './pages/FAQPage';

// Admin
import AdminLogin from './admin/AdminLogin';
import AdminDashboard from './admin/AdminDashboard';
import AdminProtectedRoute from './admin/AdminProtectedRoute';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
      setUser(authUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/properties" element={<PropertyShowcase />} />
        <Route path="/property/:id" element={<PropertyDetail />} />
        <Route path="/faq" element={<FAQPage />} />
        
        {/* Services */}
        <Route path="/services/hmo" element={<ServicePlaceholder title="HMO Management" />} />
        <Route path="/services/management" element={<ServicePlaceholder title="Property Management" />} />
        <Route path="/services/residential" element={<ServicePlaceholder title="Residential Letting" />} />
        <Route path="/services/assets" element={<ServicePlaceholder title="Portfolio Management" />} />
        <Route path="/services/care-sector" element={<CareSectorPage />} />
        <Route path="/services/council" element={<ServicePlaceholder title="Council & Temporary Accommodation" />} />
        <Route path="/services/serviced-acc" element={<ServicePlaceholder title="Serviced Accommodation" />} />
        <Route path="/services/corporate" element={<ServicePlaceholder title="Company & Corporate Lets" />} />
        <Route path="/landlords" element={<ServicePlaceholder title="For Landlords" />} />
        
        {/* About & Contact placeholders */}
        <Route path="/about" element={<AboutUsPage />} />
        
        {/* Admin */}
        <Route 
          path="/admin" 
          element={user ? <Navigate to="/admin/dashboard" replace /> : <AdminLogin />} 
        />
        <Route 
          path="/admin/dashboard" 
          element={
            <AdminProtectedRoute>
              <AdminDashboard />
            </AdminProtectedRoute>
          } 
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
