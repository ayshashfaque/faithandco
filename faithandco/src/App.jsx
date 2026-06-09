import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import TrustBadgeStrip from './components/TrustBadgeStrip';

// Pages
import Home from './pages/Home';
import PropertyShowcase from './pages/PropertyShowcase';
import PropertyDetail from './pages/PropertyDetail';
import FAQPage from './pages/FAQPage';
import ContactPage from './pages/ContactPage';
import AboutUsPage from './pages/AboutUsPage';

// Services Pages
import ServicesOverview from './pages/ServicesOverview';
import HMOManagementPage from './pages/HMOManagementPage';
import PropertyManagementPage from './pages/PropertyManagementPage';
import ResidentialLettingsPage from './pages/ResidentialLettingsPage';
import PortfolioManagementPage from './pages/PortfolioManagementPage';
import GuaranteedRentPage from './pages/GuaranteedRentPage';
import CareSectorPage from './pages/CareSectorPage';
import CouncilAccommodation from './pages/CouncilAccommodation';
import SupportedLiving from './pages/SupportedLiving';
import ServicedAccommodationPage from './pages/ServicedAccommodationPage';
import ServicedAccommodationSub from './pages/ServicedAccommodationSub';
import CompanyCorporateLets from './pages/CompanyCorporateLets';
import ServicePlaceholder from './pages/ServicePlaceholder';
import LandlordsPage from './pages/LandlordsPage';

// Landlords Pages
import LetWithUs from './pages/LetWithUs';
import ValuationPage from './pages/ValuationPage';
import RegisterLandlord from './pages/RegisterLandlord';
import LettingGuidePage from './pages/LettingGuidePage';
import HMOLicensingPage from './pages/HMOLicensingPage';
import MaintenancePage from './pages/MaintenancePage';

// About Us Pages
import WhyChooseUs from './pages/WhyChooseUs';
import OurStory from './pages/OurStory';
import ResourcesAndGuides from './pages/ResourcesAndGuides';
import AreasWeCover from './pages/AreasWeCover';

// Legal & Compliance Page
import LegalPages from './pages/LegalPages';

// SEO Borough landing
import BoroughLanding from './pages/BoroughLanding';

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
        {/* Core */}
        <Route path="/" element={<Home />} />
        <Route path="/properties" element={<PropertyShowcase />} />
        <Route path="/property/:id" element={<PropertyDetail />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        
        {/* Services Hub & Sub-pages */}
        <Route path="/services" element={<ServicesOverview />} />
        <Route path="/services/hmo-management" element={<HMOManagementPage />} />
        <Route path="/services/hmo-management/:borough" element={<BoroughLanding />} />
        <Route path="/services/property-management" element={<PropertyManagementPage />} />
        <Route path="/services/residential-letting" element={<ResidentialLettingsPage />} />
        <Route path="/services/portfolio-management" element={<PortfolioManagementPage />} />
        <Route path="/services/care-sector-lettings" element={<CareSectorPage />} />
        <Route path="/services/council-accommodation" element={<CouncilAccommodation />} />
        <Route path="/services/supported-living" element={<SupportedLiving />} />
        <Route path="/services/serviced-accommodation" element={<ServicedAccommodationPage />} />
        <Route path="/services/serviced-accommodation/:subType" element={<ServicedAccommodationSub />} />
        <Route path="/services/company-corporate-lets" element={<CompanyCorporateLets />} />
        <Route path="/services/specialist" element={<ServicesOverview />} />
        <Route path="/services/c2-licensed-properties" element={<ServicePlaceholder />} />
        
        {/* Guaranteed Rent (Top level) */}
        <Route path="/guaranteed-rent" element={<GuaranteedRentPage />} />
        <Route path="/guaranteed-rent/:borough" element={<BoroughLanding />} />
        
        {/* Landlords Hub & Sub-pages */}
        <Route path="/landlords" element={<LandlordsPage />} />
        <Route path="/landlords/let-with-us" element={<LetWithUs />} />
        <Route path="/landlords/free-valuation" element={<ValuationPage />} />
        <Route path="/landlords/register" element={<RegisterLandlord />} />
        <Route path="/landlords/guide-to-letting" element={<LettingGuidePage />} />
        <Route path="/landlords/hmo-licensing-guide" element={<HMOLicensingPage />} />
        <Route path="/landlords/maintenance-guide" element={<MaintenancePage />} />
        
        {/* About Us Sub-pages */}
        <Route path="/about-us/why-choose-us" element={<WhyChooseUs />} />
        <Route path="/about-us/our-story" element={<OurStory />} />
        <Route path="/about-us/resources-and-guides" element={<ResourcesAndGuides />} />
        <Route path="/about-us/areas-we-cover" element={<AreasWeCover />} />
        
        {/* Legal Pages */}
        <Route path="/privacy-policy" element={<LegalPages />} />
        <Route path="/terms-of-service" element={<LegalPages />} />
        <Route path="/cookie-policy" element={<LegalPages />} />
        <Route path="/fees" element={<LegalPages />} />
        <Route path="/complaints" element={<LegalPages />} />
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

      <TrustBadgeStrip />
      <Footer />
      <WhatsAppButton />
    </Router>
  );
}

export default App;
