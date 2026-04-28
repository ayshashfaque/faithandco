import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown } from 'lucide-react'

const navData = [
  { type: 'link', label: 'Home', path: '/' },
  { type: 'link', label: 'Properties', path: '/properties' },
  { 
    type: 'dropdown', 
    label: 'Services', 
    path: '/#services',
    items: [
      { name: 'HMO Management', path: '/services/hmo' },
      { name: 'Property Management', path: '/services/management' },
      { name: 'Residential Letting', path: '/services/residential' },
      { name: 'Portfolio Management', path: '/services/assets' },
      { name: 'Care Sector Lettings', path: '/services/care-sector' },
      { name: 'Council & Temporary Accommodation', path: '/services/council' },
      { name: 'Serviced Accommodation', path: '/services/serviced-acc' },
      { name: 'Company & Corporate Lets', path: '/services/corporate' },
      { name: 'For Landlords', path: '/landlords' }
    ]
  },
  { type: 'link', label: 'About Us', path: '/#origin' },
  { type: 'link', label: 'Contact', path: '/#contact' }
]

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeMenu, setActiveMenu] = useState(null);
    const navigate = useNavigate();

    const handleNavClick = (path) => {
        setIsOpen(false);
        setActiveMenu(null);
        if (path.startsWith('/#')) {
            const id = path.substring(2);
            const el = document.getElementById(id);
            if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
                return;
            }
        }
        navigate(path);
    }

    return (
        <nav className="navbar fixed top-0 left-0 right-0 flex items-center border-b border-navy/5 bg-bone/90 backdrop-blur-xl selection:bg-navy selection:text-bone z-[99999]">
            <div className="w-full mx-auto flex items-center justify-between overflow-visible">
                
                <Link to="/" onClick={() => handleNavClick('/')} className="flex flex-col items-start nav-link">
                    <img src="/logofinal.png" className="h-[60px] !h-[60px] w-auto object-contain" alt="Faith & Co Estates" />
                </Link>

                <div className="hidden lg:flex items-center gap-12 pr-12">
                    {navData.map((menu, idx) => (
                        <div 
                            key={menu.label}
                            className="relative py-4"
                            onMouseEnter={() => menu.type === 'dropdown' ? setActiveMenu(idx) : null}
                            onMouseLeave={() => setActiveMenu(null)}
                        >
                            <button 
                                onClick={() => menu.type === 'link' ? handleNavClick(menu.path) : null}
                                className="nav-link text-[10px] font-automobile uppercase tracking-[0.4em] text-navy/40 hover:text-navy transition-colors font-bold flex items-center gap-2"
                            >
                                {menu.label}
                                {menu.type === 'dropdown' && <ChevronDown size={12} className={`transition-transform duration-500 ${activeMenu === idx ? 'rotate-180' : ''}`} />}
                            </button>

                            <AnimatePresence>
                                {activeMenu === idx && menu.type === 'dropdown' && (
                                    <motion.div 
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        className="absolute top-full left-0 w-72 bg-bone border border-navy/5 p-6 shadow-2xl space-y-4"
                                    >
                                        {menu.items.map((sub) => (
                                            <Link 
                                                key={sub.name} 
                                                to={sub.path} 
                                                onClick={() => handleNavClick(sub.path)}
                                                className="nav-link block text-[10px] font-automobile uppercase tracking-[0.2em] text-navy/40 hover:text-navy transition-all py-2 border-b border-navy/5 last:border-0"
                                            >
                                                {sub.name}
                                            </Link>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>

                <button onClick={() => setIsOpen(!isOpen)} className="nav-link lg:hidden text-navy">
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div 
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        className="fixed inset-0 bg-bone lg:hidden z-[110] flex flex-col p-12 overflow-y-auto"
                    >
                        <div className="flex justify-between items-center mb-20">
                           <img src="/logofinal.png" className="h-[60px] !h-[60px] w-auto object-contain" alt="Logo" />
                           <button onClick={() => setIsOpen(false)}><X size={32}/></button>
                        </div>
                        <div className="flex flex-col gap-8">
                            {navData.map(link => (
                                <div key={link.label}>
                                    <button 
                                        onClick={() => link.type === 'link' ? handleNavClick(link.path) : null} 
                                        className="text-4xl font-headings text-navy text-left italic hover:opacity-40 transition-all block w-full"
                                    >
                                        {link.label}
                                    </button>
                                    {link.type === 'dropdown' && (
                                        <div className="grid grid-cols-1 gap-4 mt-6 pl-6 border-l border-navy/10">
                                            {link.items.map(sub => (
                                                <Link key={sub.name} to={sub.path} onClick={() => setIsOpen(false)} className="text-[10px] font-automobile uppercase tracking-widest text-navy/40">{sub.name}</Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
  )
}
export default Navbar
