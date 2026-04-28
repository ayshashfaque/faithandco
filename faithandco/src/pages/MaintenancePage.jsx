import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import TechnicalGrid from '../components/TechnicalGrid';
import Contact from '../components/Contact';
import { Wrench, ShieldCheck, Clock, CheckCircle, Zap, Droplets, HardHat, FileText } from 'lucide-react';

const MaintenancePage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const maintenanceTiles = [
        { 
            title: "24/7 Response Protocol", 
            desc: "Institutional emergency hotline for rapid response to critical asset failures and safety issues.",
            icon: <Clock size={32} />
        },
        { 
            title: "Gas & Heating Care", 
            desc: "Annual CP12 certification and proactive boiler lifecycle management by certified engineers.",
            icon: <Zap size={32} />
        },
        { 
            title: "Electrical Stewardship", 
            desc: "Regular EICR auditing and responsive repair of all power and lighting infrastructure.",
            icon: <Zap size={32} />
        },
        { 
            title: "Plumbing & Drainage", 
            desc: "Swift mitigation of water ingress and drainage blockages to protect the property's structural integrity.",
            icon: <Droplets size={32} />
        },
        { 
            title: "General Repair Tier", 
            desc: "Minor repairs, carpentry, and fixture replacements handled with hospitality-level precision.",
            icon: <Wrench size={32} />
        },
        { 
            title: "Safety Compliance", 
            desc: "Fire alarm testing, emergency lighting audits, and legionella risk assessments.",
            icon: <ShieldCheck size={32} />
        },
        { 
            title: "Roof & Structure", 
            desc: "Periodic external audits to identify and resolve roofing and structural damp issues.",
            icon: <HardHat size={32} />
        },
        { 
            title: "Audit Documentation", 
            desc: "Full photographic and written reports for every intervention, stored for institutional compliance.",
            icon: <FileText size={32} />
        }
    ];

    return (
        <div className="min-h-screen bg-white text-dark pt-[80px]">
            {/* Minimal Technical Hero */}
            <section className="px-6 md:px-10 py-24 bg-dark text-white text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                >
                    <span className="text-[10px] uppercase tracking-[0.6em] text-white/40 block mb-6">Asset Stewardship</span>
                    <h1 className="text-5xl md:text-8xl font-[Outfit] font-extrabold uppercase tracking-tighter leading-[0.9] mb-8">
                        Maintenance <br /> <span className="text-[#DAA520]">& Repairs</span>
                    </h1>
                </motion.div>
            </section>

            {/* Technical Service Grid */}
            <TechnicalGrid 
                title="Operational Maintenance Framework" 
                items={maintenanceTiles} 
                columns={4} 
            />

            <Contact />
        </div>
    );
};

export default MaintenancePage;
