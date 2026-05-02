import React, { useState } from 'react';
import { Search, Filter, MoreHorizontal, X, ArrowUpRight, ChevronLeft, ChevronRight, Mail, Phone, List, LayoutGrid, MapPinned, Plus, ChevronDown } from 'lucide-react';
import { CONTACTS } from '../data';
import { AnimatePresence, motion } from 'motion/react';

export default function Contacts() {
  const [selectedContact, setSelectedContact] = useState<any>(null);
  const [viewMode, setViewMode] = useState<'list' | 'grid' | 'map'>('list');

  const getAvatarColor = (initials: string) => {
    const colors = [
      'bg-blue-500/10 text-blue-500 border-blue-500/20',
      'bg-emerald-500/10 text-emerald-500 border-emerald-500/20',
      'bg-purple-500/10 text-purple-500 border-purple-500/20',
      'bg-amber-500/10 text-amber-500 border-amber-500/20',
      'bg-rose-500/10 text-rose-500 border-rose-500/20'
    ];
    return colors[initials.charCodeAt(0) % colors.length];
  };

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'bg-emerald-500 text-white border-emerald-600 shadow-[0_0_10px_rgba(16,185,129,0.3)]';
    if (score >= 70) return 'bg-blue-500 text-white border-blue-600';
    if (score >= 50) return 'bg-amber-500 text-white border-amber-600';
    return 'bg-rose-500 text-white border-rose-600';
  };

  const getDotColor = (timeStr: string) => {
    const lower = timeStr.toLowerCase();
    if (lower.includes('hour') || lower.includes('minute')) return 'bg-emerald-500';
    if (lower.includes('day')) {
      const days = parseInt(lower);
      if (days < 7) return 'bg-amber-500';
    }
    return 'bg-rose-500';
  };

  return (
    <div className="h-full flex flex-col max-w-7xl mx-auto relative">
      <div className="mb-6 flex justify-between items-end">
        <div>
          <h1 className="text-2xl font-semibold text-text-primary">Contacts</h1>
          <div className="flex items-center gap-2 mt-2">
             <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
             <p className="text-[13px] font-medium text-text-tertiary">Made In Hawaii Enterprises · Last synced 2 min ago</p>
          </div>
          <p className="text-sm text-text-tertiary mt-2">Manage your professional network and leads</p>
          <div className="flex items-center gap-3 mt-4 text-xs font-semibold uppercase tracking-wider text-text-tertiary">
            <span>45 Total Contacts</span>
            <span className="w-1.5 h-1.5 rounded-full bg-border-strong"></span>
            <span>12 Active This Week</span>
            <span className="w-1.5 h-1.5 rounded-full bg-border-strong"></span>
            <span>8 New This Month</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex bg-surface-raised p-1 rounded-lg border border-border-subtle">
            <button
              onClick={() => setViewMode('list')}
              className={`p-1.5 rounded-md transition-colors ${viewMode === 'list' ? 'bg-surface-card text-emerald-500 shadow-sm border border-border-subtle' : 'text-text-tertiary hover:text-text-secondary'}`}
            >
              <List size={16} />
            </button>
            <button
              onClick={() => setViewMode('grid')}
              className={`p-1.5 rounded-md transition-colors ${viewMode === 'grid' ? 'bg-surface-card text-emerald-500 shadow-sm border border-border-subtle' : 'text-text-tertiary hover:text-text-secondary'}`}
            >
              <LayoutGrid size={16} />
            </button>
            <button
              onClick={() => setViewMode('map')}
              className={`p-1.5 rounded-md transition-colors ${viewMode === 'map' ? 'bg-surface-card text-emerald-500 shadow-sm border border-border-subtle' : 'text-text-tertiary hover:text-text-secondary'}`}
            >
              <MapPinned size={16} />
            </button>
          </div>
          <button className="bg-emerald-500 hover:bg-emerald-400 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all emerald-glow flex items-center gap-2 shadow-[0_0_16px_rgba(16,185,129,0.2)]">
            <Plus size={16} />
            Add Contact
          </button>
        </div>
      </div>

      <div className="crm-card flex-1 flex flex-col overflow-hidden relative shadow-sm border border-border-subtle bg-surface-card">
        <div className="p-3 border-b border-border-subtle flex justify-between items-center bg-surface-raised/50">
          <div className="flex items-center gap-4 w-[60%]">
            <div className="relative w-full max-w-[45%]">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-text-tertiary" size={16} />
              <input 
                type="text" 
                placeholder="Search contacts..." 
                className="w-full bg-surface-card border border-border-subtle text-text-primary text-sm rounded-lg pl-9 pr-4 py-2 focus:outline-none focus:border-emerald-500/50 transition-colors placeholder:text-text-tertiary shadow-sm"
              />
            </div>
            <div className="flex items-center gap-1">
              {['All', 'Active', 'Inactive', 'High Score'].map(f => (
                <button key={f} className={`px-3 py-1.5 rounded-md text-[11px] font-bold transition-colors uppercase tracking-wider ${f === 'All' ? 'bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 shadow-sm' : 'text-text-tertiary hover:text-text-secondary border border-transparent'}`}>
                  {f}
                </button>
              ))}
            </div>
          </div>
          <button className="flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-text-secondary hover:text-text-primary px-3 py-2 border border-border-subtle rounded-lg bg-surface-card shadow-sm">
            Sort By: Newest <ChevronDown size={14} />
          </button>
        </div>

        <div className="flex-1 overflow-auto bg-surface-card">
          <table className="w-full text-left border-collapse min-w-[1000px]">
            <thead>
              <tr className="text-[10px] bg-surface-raised sticky top-0 z-10 font-bold text-text-secondary uppercase tracking-wider border-b border-border-subtle shadow-sm">
                <th className="py-3 px-6">Profile</th>
                <th className="py-3 px-6">Name</th>
                <th className="py-3 px-6">Company</th>
                <th className="py-3 px-6">Email</th>
                <th className="py-3 px-6">Phone</th>
                <th className="py-3 px-6">Last Contacted</th>
                <th className="py-3 px-6 text-center">Score</th>
                <th className="py-3 px-6 text-right"></th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {CONTACTS.map((cnt, i) => (
                <tr 
                  key={cnt.id} 
                  onClick={() => setSelectedContact(cnt)}
                  className="group h-16 border-b border-border-subtle hover:bg-surface-raised/50 transition-colors cursor-pointer relative even:bg-black/[0.02] dark:even:bg-white/[0.02]"
                >
                  <td className="py-2 px-6 relative">
                    <div className="absolute inset-y-0 left-0 w-[3px] bg-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-[11px] font-bold border ${getAvatarColor(cnt.initials)}`}>
                      {cnt.initials}
                    </div>
                  </td>
                  <td className="py-2 px-6">
                    <div className="font-semibold text-[15px] text-text-primary tracking-tight">{cnt.name}</div>
                    <div className="text-[13px] text-text-secondary mt-0.5">{cnt.role}</div>
                  </td>
                  <td className="py-2 px-6 font-medium text-text-secondary">{cnt.company}</td>
                  <td className="py-2 px-6 text-text-secondary">{cnt.email}</td>
                  <td className="py-2 px-6 text-text-secondary font-mono text-xs">{cnt.phone}</td>
                  <td className="py-2 px-6">
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${getDotColor(cnt.lastContact)}`} />
                      <span className="text-text-secondary text-[13px] font-medium">{cnt.lastContact}</span>
                    </div>
                  </td>
                  <td className="py-2 px-6 text-center">
                    <span className={`inline-flex w-8 h-8 items-center justify-center text-[11px] font-bold rounded-full border ${getScoreColor(cnt.score)}`}>
                      {cnt.score}
                    </span>
                  </td>
                  <td className="py-2 px-6 text-right w-32">
                    <div className="flex items-center justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-1.5 text-text-tertiary hover:text-emerald-500 hover:bg-emerald-500/10 rounded-md transition-colors"><Phone size={16} /></button>
                      <button className="p-1.5 text-text-tertiary hover:text-emerald-500 hover:bg-emerald-500/10 rounded-md transition-colors"><Mail size={16} /></button>
                      <button className="p-1.5 text-text-tertiary hover:text-emerald-500 hover:bg-emerald-500/10 rounded-md transition-colors"><MoreHorizontal size={16} /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {CONTACTS.length === 0 && (
            <div className="h-64 flex flex-col items-center justify-center text-center">
              <Search size={48} className="text-border-strong mb-4" strokeWidth={1} />
              <h3 className="text-lg font-semibold text-text-primary mb-1">No contacts found</h3>
              <p className="text-text-secondary mb-4">Try adjusting your search or filters.</p>
              <button className="text-emerald-500 font-semibold hover:text-emerald-400 transition-colors uppercase tracking-wider text-xs">Clear Filters</button>
            </div>
          )}
        </div>

        <div className="p-4 border-t border-border-subtle flex items-center justify-between text-sm text-text-tertiary bg-surface-card">
          <div>Showing <span className="font-semibold text-text-primary">1-5</span> of <span className="font-semibold text-text-primary">45</span> entries</div>
          <div className="flex gap-2">
            <button className="p-1.5 border border-border-subtle rounded-md hover:text-text-primary bg-surface-raised transition-colors"><ChevronLeft size={16} /></button>
            <button className="w-8 h-8 border border-emerald-500/30 bg-emerald-500/10 text-emerald-500 rounded-md font-bold text-[13px] shadow-sm">1</button>
            <button className="w-8 h-8 border border-border-subtle rounded-md hover:text-text-primary hover:bg-surface-raised font-semibold text-[13px] transition-colors">2</button>
            <button className="w-8 h-8 border border-border-subtle rounded-md hover:text-text-primary hover:bg-surface-raised font-semibold text-[13px] transition-colors">3</button>
            <button className="p-1.5 border border-border-subtle rounded-md hover:text-text-primary bg-surface-raised transition-colors"><ChevronRight size={16} /></button>
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
