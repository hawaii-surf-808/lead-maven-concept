import React, { useState } from 'react';
import { Search, Filter, MoreHorizontal, X, ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { CUSTOMERS } from '../data';
import { AnimatePresence, motion } from 'motion/react';

export default function Customers() {
  const [selectedCustomer, setSelectedCustomer] = useState<any>(null);

  return (
    <div className="h-full flex flex-col max-w-7xl mx-auto relative">
      <div className="mb-6 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-semibold text-text-primary">Customers</h1>
          <p className="text-sm text-text-tertiary mt-1">Manage and view all your customer data</p>
        </div>
        <button className="bg-emerald-500 hover:bg-emerald-400 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all emerald-glow">
          Add Customer
        </button>
      </div>

      <div className="crm-card flex-1 flex flex-col overflow-hidden relative">
        <div className="p-4 border-b border-border-subtle flex justify-between items-center bg-surface-raised/30">
          <div className="relative w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-text-tertiary" size={16} />
            <input 
              type="text" 
              placeholder="Search customers..." 
              className="w-full bg-surface-card border border-border-subtle text-text-primary text-sm rounded-lg pl-9 pr-4 py-2 focus:outline-none focus:border-emerald-500/50 transition-colors placeholder:text-text-tertiary"
            />
          </div>
          <button className="flex items-center gap-2 text-sm font-medium text-text-secondary hover:text-text-primary px-3 py-2 border border-border-subtle rounded-lg bg-surface-card">
            <Filter size={16} />
            Filters
          </button>
        </div>

        <div className="flex-1 overflow-auto">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr className="text-[10px] bg-surface-card sticky top-0 z-10 font-semibold text-text-tertiary uppercase tracking-wider border-b border-border-subtle">
                <th className="py-3 px-6 font-semibold uppercase">Company</th>
                <th className="py-3 px-6 font-semibold uppercase">Contact</th>
                <th className="py-3 px-6 font-semibold uppercase">Stage</th>
                <th className="py-3 px-6 font-semibold uppercase">Deal Value</th>
                <th className="py-3 px-6 font-semibold uppercase">Last Activity</th>
                <th className="py-3 px-6 font-semibold uppercase">Owner</th>
                <th className="py-3 px-6 font-semibold uppercase text-center">Status</th>
                <th className="py-3 px-6 font-semibold uppercase text-right"></th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {CUSTOMERS.map((cur, i) => (
                <tr 
                  key={i} 
                  onClick={() => setSelectedCustomer(cur)}
                  className="group border-b border-border-subtle hover:bg-surface-raised/50 transition-colors cursor-pointer"
                >
                  <td className="py-4 px-6 font-medium text-text-primary">{cur.company}</td>
                  <td className="py-4 px-6 text-text-secondary">{cur.contact}</td>
                  <td className="py-4 px-6 text-text-secondary">{cur.stage}</td>
                  <td className="py-4 px-6 font-medium text-text-primary">{cur.value}</td>
                  <td className="py-4 px-6 text-text-tertiary">{cur.activity}</td>
                  <td className="py-4 px-6">
                    <div className="w-6 h-6 rounded-full bg-surface-raised border border-border-subtle flex items-center justify-center text-[9px] font-semibold text-text-secondary">
                      {cur.owner}
                    </div>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <span className={`inline-flex items-center justify-center px-2 py-0.5 text-[10px] uppercase tracking-wider font-semibold rounded-full border ${cur.status === 'Active' ? 'text-emerald-500 border-emerald-500/20 bg-emerald-500/5' : 'text-amber-500 border-amber-500/20 bg-amber-500/5'}`}>
                      {cur.status}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-right text-text-tertiary group-hover:text-emerald-500 transition-colors">
                    <MoreHorizontal size={18} className="ml-auto" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-4 border-t border-border-subtle flex items-center justify-between text-sm text-text-tertiary bg-surface-raised/30">
          <div>Showing 1 to 5 of 24 entries</div>
          <div className="flex gap-1">
            <button className="p-1 border border-border-subtle rounded-md hover:text-text-primary"><ChevronLeft size={16} /></button>
            <button className="p-1 px-3 border border-border-subtle rounded-md bg-surface-card font-medium text-text-primary">1</button>
            <button className="p-1 px-3 border border-border-subtle rounded-md hover:text-text-primary">2</button>
            <button className="p-1 px-3 border border-border-subtle rounded-md hover:text-text-primary">3</button>
            <button className="p-1 border border-border-subtle rounded-md hover:text-text-primary"><ChevronRight size={16} /></button>
          </div>
        </div>

        {/* Slide-over */}
        <AnimatePresence>
          {selectedCustomer && (
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute top-0 right-0 h-full w-96 bg-surface-card border-l border-border-subtle shadow-[-10px_0_30px_rgba(0,0,0,0.1)] flex flex-col z-20"
            >
              <div className="p-6 border-b border-border-subtle flex justify-between items-center">
                <h2 className="text-lg font-semibold text-text-primary">Customer Details</h2>
                <button onClick={() => setSelectedCustomer(null)} className="text-text-tertiary hover:text-text-primary bg-surface-raised rounded-md p-1.5 transition-colors">
                  <X size={16} />
                </button>
              </div>
              <div className="p-6 flex-1 overflow-y-auto">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center text-2xl font-bold uppercase border border-emerald-500/20">
                    {selectedCustomer.company.charAt(0)}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-text-primary">{selectedCustomer.company}</h3>
                    <p className="text-sm text-text-tertiary">{selectedCustomer.contact}</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <div className="text-[10px] font-semibold uppercase tracking-wider text-text-tertiary mb-2">Deal Value</div>
                    <div className="text-2xl font-light text-text-primary">{selectedCustomer.value}</div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="crm-card p-4">
                      <div className="text-[10px] font-semibold uppercase tracking-wider text-text-tertiary mb-1">Stage</div>
                      <div className="text-sm font-medium text-text-primary">{selectedCustomer.stage}</div>
                    </div>
                    <div className="crm-card p-4">
                      <div className="text-[10px] font-semibold uppercase tracking-wider text-text-tertiary mb-1">Status</div>
                      <div className={`text-sm font-medium ${selectedCustomer.status === 'Active' ? 'text-emerald-500' : 'text-amber-500'}`}>{selectedCustomer.status}</div>
                    </div>
                  </div>

                  <div>
                    <div className="text-[10px] font-semibold uppercase tracking-wider text-text-tertiary mb-2">Account Owner</div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-surface-raised border border-border-subtle flex items-center justify-center text-xs font-semibold text-text-secondary">
                        {selectedCustomer.owner}
                      </div>
                      <div className="text-sm font-medium text-text-primary">Sales Rep {selectedCustomer.owner}</div>
                    </div>
                  </div>
                  
                  <button className="w-full mt-4 py-3 rounded-xl border border-border-subtle text-xs font-semibold text-text-secondary hover:text-text-primary hover:bg-surface-raised transition-colors uppercase tracking-wider flex items-center justify-center gap-2">
                    View Full Profile <ArrowUpRight size={14} />
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
