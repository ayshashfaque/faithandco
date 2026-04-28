import React from 'react'
import { CheckCircle } from 'lucide-react'

const TechnicalBlocks = () => {
  return (
    <div className="mt-24 space-y-24">
      {/* 0.5px border divider */}
      <div className="w-full h-[0.5px] bg-[#734d26] opacity-50"></div>

      {/* Compliance & Audit Section */}
      <section>
        <h2 className="font-[Outfit] font-light text-3xl md:text-4xl text-white uppercase tracking-widest mb-2">Compliance & Audit</h2>
        <h3 className="font-serif italic text-pearl/60 text-xl md:text-2xl mb-12">Rigorous checks protecting your asset and tenants</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {['Gas Safety (CP12)', 'EICR (Electrical Installation)', 'Fire Risk Assessments', 'Furniture & Fire Regulations'].map((item, i) => (
            <div key={i} className="flex items-start gap-4 p-6 rounded-xl border border-white/5 bg-white/5 group hover:border-[#734d26]/50 transition-colors">
              <CheckCircle size={24} color="#734d26" strokeWidth={1.5} className="flex-shrink-0" />
              <span className="font-sans text-lg">{item}</span>
            </div>
          ))}
        </div>
      </section>

      <div className="w-full h-[0.5px] bg-[#734d26] opacity-50"></div>

      {/* The Management Loop Section */}
      <section>
        <h2 className="font-[Outfit] font-light text-3xl md:text-4xl text-white uppercase tracking-widest mb-2">The Management Loop</h2>
        <h3 className="font-serif italic text-pearl/60 text-xl md:text-2xl mb-16">Our 4-step seamless process</h3>
        
        <div className="flex flex-col gap-12 relative before:absolute before:left-6 before:top-2 before:bottom-2 before:w-[0.5px] before:bg-[#734d26]/50">
          {[
            { step: '01', title: 'Sourcing', desc: 'Comprehensive Referencing, ID Verification, and Credit Checks.' },
            { step: '02', title: 'Onboarding', desc: 'Detailed Photographic Inventory, Meter Readings, and Check-in.' },
            { step: '03', title: 'Lifecycle', desc: 'Regular Communal Cleaning, 24/7 Rapid Response Maintenance, and Inspections.' },
            { step: '04', title: 'Reporting', desc: 'Transparent Monthly Financial Statements and Performance Metrics.' }
          ].map((item, i) => (
            <div key={i} className="relative z-10 flex gap-10 group">
              <div className="w-12 h-12 rounded-full border border-[#734d26] bg-dark text-[#734d26] flex items-center justify-center font-bold flex-shrink-0 group-hover:bg-[#734d26] group-hover:text-white transition-colors duration-500">
                {item.step}
              </div>
              <div className="pt-2">
                <h4 className="text-xl font-bold mb-3 uppercase tracking-wider">{item.title}</h4>
                <p className="text-pearl/60 font-sans text-lg">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="w-full h-[0.5px] bg-[#734d26] opacity-50"></div>

      {/* Portfolio Utilization Protocol */}
      <section>
        <h2 className="font-[Outfit] font-light text-3xl md:text-4xl text-white uppercase tracking-widest mb-2">Portfolio Utilization</h2>
        <h3 className="font-serif italic text-pearl/60 text-xl md:text-2xl mb-12">Institutional benchmarks for asset performance</h3>
        
        <div className="overflow-x-auto border border-white/10 rounded-2xl bg-white/5 p-1">
          <table className="w-full text-left font-sans min-w-[600px]">
            <thead>
              <tr className="border-b border-white/10">
                <th className="p-6 text-pearl/50 uppercase tracking-widest text-xs font-bold">Strategy</th>
                <th className="p-6 text-pearl/50 uppercase tracking-widest text-xs font-bold">Risk Management</th>
                <th className="p-6 text-pearl/50 uppercase tracking-widest text-xs font-bold">Occupancy Focus</th>
                <th className="p-6 text-[#D4AF37] uppercase tracking-widest text-xs font-bold text-right">Capacity Tier</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                <td className="p-6 font-bold text-lg">Standard AST</td>
                <td className="p-6 text-pearl/70">Moderate</td>
                <td className="p-6 text-pearl/70">Periodic</td>
                <td className="p-6 text-right font-bold text-xl uppercase tracking-widest">Base line</td>
              </tr>
              <tr className="border-b border-white/5 bg-[#734d26]/10 hover:bg-[#734d26]/20 transition-colors">
                <td className="p-6 font-bold text-[#D4AF37] text-lg">Specialised HMO</td>
                <td className="p-6 text-pearl/70">Institutional</td>
                <td className="p-6 text-pearl/70">High Demand</td>
                <td className="p-6 text-right font-bold text-[#D4AF37] text-xl uppercase tracking-widest">Premium</td>
              </tr>
              <tr className="hover:bg-white/5 transition-colors">
                <td className="p-6 font-bold text-lg">Serviced Acc.</td>
                <td className="p-6 text-pearl/70">Commercial</td>
                <td className="p-6 text-pearl/70">Dynamic</td>
                <td className="p-6 text-right font-bold text-xl uppercase tracking-widest">Ultra</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      
      <div className="w-full h-[0.5px] bg-[#734d26] opacity-50 mb-10"></div>
    </div>
  )
}

export default TechnicalBlocks
