import React, { useState } from 'react';
import { Search, Filter, MoreHorizontal, X, ArrowUpRight, ChevronLeft, ChevronRight, Mail, Phone } from 'lucide-react';
import { CONTACTS } from '../data';
import { AnimatePresence, motion } from 'motion/react';

export default function Contacts() {
  const [selectedContact, setSelectedContact] = useState<any>(null);

  return (
    <div className="h-full flex flex-col max-w-7xl mx-auto relative">
      <div className="mb-6 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-semibold text-text-primary">Contacts</h1>
          <p className="text-sm text-text-tertiary mt-1">Manage your professional network and leads</p>
        </div>
        <button className="bg-emerald-500 hover:bg-emerald-400 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all shadow-[0_0_16px_rgba(16,185,129,0.2)]">
          Add Contact
        </button>
      </div>

      <div className="crm-card flex-1 flex flex-col overflow-hidden relative">
        <div className="p-4 border-b border-border-subtle flex justify-between items-center bg-surface-raised/30">
          <div className="relative w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-text-tertiary" size={16} />
            <input 
              type="text" 
              placeholder="Search contacts..." 
              className="w-full bg-surface-card border border-border-subtle text-text-primary text-sm rounded-lg pl-9 pr-4 py-2 focus:outline-none focus:border-emerald-500/50 transition-colors placeholder:text-text-tertiary"
            />
          </div>
          <button className="flex items-center gap-2 text-sm font-medium text-text-secondary hover:text-text-primary px-3 py-2 border border-border-subtle rounded-lg bg-surface-card">
            <Filter size={16} />
            Filters
          </button>
        </div>

        <div className="flex-1 overflow-auto">
          <table className="w-full text-left border-collapse min-w-[1000px]">
            <thead>
              <tr className="text-[10px] bg-surface-card sticky top-0 z-10 font-semibold text-text-tertiary uppercase tracking-wider border-b border-border-subtle">
                <th className="py-3 px-6 font-semibold uppercase">Profile</th>
                <th className="py-3 px-6 font-semibold uppercase">Name</th>
                <th className="py-3 px-6 font-semibold uppercase">Company</th>
                <th className="py-3 px-6 font-semibold uppercase">Role</th>
                <th className="py-3 px-6 font-semibold uppercase">Email</th>
                <th className="py-3 px-6 font-semibold uppercase">Phone</th>
                <th className="py-3 px-6 font-semibold uppercase">Last Contacted</th>
                <th className="py-3 px-6 font-semibold uppercase text-center">Score</th>
                <th className="py-3 px-6 font-semibold uppercase text-right"></th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {CONTACTS.map((cnt, i) => (
                <tr 
                  key={cnt.id} 
                  onClick={() => setSelectedContact(cnt)}
                  className="group border-b border-border-subtle hover:bg-surface-raised/50 transition-colors cursor-pointer"
                >
                  <td className="py-4 px-6">
                    <div className="w-8 h-8 rounded-full bg-surface-raised border border-border-subtle flex items-center justify-center text-[10px] font-semibold text-text-secondary">
                      {cnt.initials}
                    </div>
                  </td>
                  <td className="py-4 px-6 font-medium text-text-primary">{cnt.name}</td>
                  <td className="py-4 px-6 text-text-secondary">{cnt.company}</td>
                  <td className="py-4 px-6 text-text-secondary">{cnt.role}</td>
                  <td className="py-4 px-6 text-text-secondary">{cnt.email}</td>
                  <td className="py-4 px-6 text-text-secondary">{cnt.phone}</td>
                  <td className="py-4 px-6 text-text-tertiary">{cnt.lastContact}</td>
                  <td className="py-4 px-6 text-center">
                    <span className={`inline-flex items-center justify-center px-2 py-0.5 text-[10px] uppercase tracking-wider font-semibold rounded-full border ${cnt.score > 80 ? 'text-emerald-500 border-emerald-500/20 bg-emerald-500/5' : cnt.score > 50 ? 'text-amber-500 border-amber-500/20 bg-amber-500/5' : 'text-rose-500 border-rose-500/20 bg-rose-500/5'}`}>
                      {cnt.score}
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
          <div>Showing 1 to 5 of 45 entries</div>
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
          {selectedContact && (
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute top-0 right-0 h-full w-96 bg-surface-card border-l border-border-subtle shadow-[-10px_0_30px_rgba(0,0,0,0.1)] flex flex-col z-20"
            >
              <div className="p-6 border-b border-border-subtle flex justify-between items-center">
                <h2 className="text-lg font-semibold text-text-primary">Contact Details</h2>
                <button onClick={() => setSelectedContact(null)} className="text-text-tertiary hover:text-text-primary bg-surface-raised rounded-md p-1.5 transition-colors">
                  <X size={16} />
                </button>
              </div>
              <div className="p-6 flex-1 overflow-y-auto">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center text-2xl font-bold uppercase border border-emerald-500/20">
                    {selectedContact.initials}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-text-primary">{selectedContact.name}</h3>
                    <p className="text-sm text-text-tertiary">{selectedContact.role} at {selectedContact.company}</p>
                  </div>
                </div>

                <div className="space-y-6">
                  
                  <div className="flex gap-2">
                    <button className="flex-1 crm-card py-2 flex justify-center items-center gap-2 text-sm font-medium text-emerald-500 hover:text-emerald-400">
                      <Mail size={16} /> Email
                    </button>
                    <button className="flex-1 crm-card py-2 flex justify-center items-center gap-2 text-sm font-medium text-text-secondary hover:text-text-primary">
                      <Phone size={16} /> Call
                    </button>
                  </div>

                  <div className="crm-card p-4 space-y-4">
                    <div>
                      <div className="text-[10px] font-semibold uppercase tracking-wider text-text-tertiary mb-1">Email Address</div>
                      <div className="text-sm font-medium text-text-primary">{selectedContact.email}</div>
                    </div>
                    <div>
                      <div className="text-[10px] font-semibold uppercase tracking-wider text-text-tertiary mb-1">Phone Number</div>
                      <div className="text-sm font-medium text-text-primary">{selectedContact.phone}</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="crm-card p-4">
                      <div className="text-[10px] font-semibold uppercase tracking-wider text-text-tertiary mb-1">Last Contact</div>
                      <div className="text-sm font-medium text-text-primary">{selectedContact.lastContact}</div>
                    </div>
                    <div className="crm-card p-4">
                      <div className="text-[10px] font-semibold uppercase tracking-wider text-text-tertiary mb-1">Lead Score</div>
                      <div className={`text-sm font-semibold ${selectedContact.score > 80 ? 'text-emerald-500' : 'text-amber-500'}`}>{selectedContact.score}</div>
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
