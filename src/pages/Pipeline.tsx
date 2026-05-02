import React, { useState } from 'react';
import { PIPELINE_DEALS } from '../data';
import { List, LayoutGrid, ChevronDown, Clock, Layers, DollarSign, PieChart, Target } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const columns = [
  { id: 'new', label: 'New', color: 'bg-slate-500', hex: '#64748b' },
  { id: 'qualified', label: 'Qualified', color: 'bg-blue-500', hex: '#3b82f6' },
  { id: 'proposal', label: 'Proposal', color: 'bg-amber-500', hex: '#f59e0b' },
  { id: 'negotiation', label: 'Negotiation', color: 'bg-orange-500', hex: '#f97316' },
  { id: 'closed', label: 'Closed Won', color: 'bg-emerald-500', hex: '#10b981' },
];

export default function Pipeline({ isOpportunities = false }: { isOpportunities?: boolean }) {
  const [viewMode, setViewMode] = useState<'list' | 'board'>('list');

  const getDealsForStage = (stageId: string) => PIPELINE_DEALS.filter(d => d.stage === stageId);
  const getTotalValue = (stageId: string) => getDealsForStage(stageId).reduce((acc, curr) => acc + curr.value, 0);

  const totalDeals = PIPELINE_DEALS.length;
  const totalValue = PIPELINE_DEALS.reduce((acc, curr) => acc + curr.value, 0);
  const avgDealSize = totalDeals > 0 ? totalValue / totalDeals : 0;
  const weightedForecast = 312000; 

  const SUMMARY_STATS = [
    { label: 'TOTAL DEALS', value: totalDeals, icon: Layers },
    { label: 'TOTAL VALUE', value: `$${totalValue.toLocaleString()}`, icon: DollarSign },
    { label: 'AVG DEAL SIZE', value: `$${Math.round(avgDealSize).toLocaleString()}`, icon: PieChart },
    { label: 'WEIGHTED FORECAST', value: `$${weightedForecast.toLocaleString()}`, icon: Target, isKey: true }
  ];

  return (
    <div className="h-full flex flex-col max-w-[1600px] mx-auto overflow-hidden">
      <div className="mb-6 flex justify-between items-end shrink-0">
        <div>
          <h1 className="text-2xl font-semibold text-text-primary">
            {isOpportunities ? 'Opportunities — Pipeline View' : 'Pipeline'}
          </h1>
          <p className="text-sm text-text-tertiary mt-1">Manage active deals across all stages</p>
        </div>
        
        {/* View Toggle */}
        <div className="flex bg-surface-raised p-1 rounded-lg border border-border-subtle">
          <button
            onClick={() => setViewMode('list')}
            className={`p-1.5 rounded-md transition-colors ${viewMode === 'list' ? 'bg-surface-card text-emerald-500 shadow-sm border border-border-subtle' : 'text-text-tertiary hover:text-text-secondary'}`}
          >
            <List size={16} />
          </button>
          <button
            onClick={() => setViewMode('board')}
            className={`p-1.5 rounded-md transition-colors ${viewMode === 'board' ? 'bg-surface-card text-emerald-500 shadow-sm border border-border-subtle' : 'text-text-tertiary hover:text-text-secondary'}`}
          >
            <LayoutGrid size={16} />
          </button>
        </div>
      </div>

      {/* Sticky Summary Bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 shrink-0">
        {SUMMARY_STATS.map((stat, i) => {
          const Icon = stat.icon;
          return (
          <div key={i} className={`crm-card p-4 flex flex-col justify-between ${stat.isKey ? 'border-b-4 border-b-emerald-500' : ''}`}>
            <div className="flex justify-between items-start mb-2">
              <div className="text-[10px] font-semibold text-text-tertiary uppercase tracking-wider">{stat.label}</div>
              <Icon size={16} className="text-text-tertiary" />
            </div>
            <div className="text-xl lg:text-2xl font-semibold tracking-tight text-text-primary">{stat.value}</div>
          </div>
        )})}
      </div>

      {/* Content Area */}
      <div className="flex-1 min-h-0 relative">
        <AnimatePresence mode="wait">
          {viewMode === 'list' && (
            <motion.div
              key="list-view"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 overflow-y-auto pr-2 no-scrollbar"
            >
              <div className="flex flex-col gap-2 pb-8">
                {columns.map(col => (
                  <ListStageSection 
                    key={col.id} 
                    col={col} 
                    getDealsForStage={getDealsForStage} 
                    getTotalValue={getTotalValue} 
                  />
                ))}
              </div>
            </motion.div>
          )}

          {viewMode === 'board' && (
            <motion.div
              key="board-view"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 overflow-x-auto pb-4 no-scrollbar"
            >
              <div className="flex gap-4 h-full min-w-max">
                {columns.map(col => {
                  const deals = getDealsForStage(col.id);
                  const total = getTotalValue(col.id);
                  
                  return (
                    <div key={col.id} className="w-[300px] flex-1 min-w-0 flex flex-col h-full bg-surface-raised/30 rounded-xl border border-border-subtle p-3 border-t-4" style={{ borderTopColor: col.hex }}>
                      <div className="flex justify-between items-center mb-4 px-1 shrink-0">
                        <div className="flex items-center gap-2">
                          <div className="w-[8px] h-[8px] rounded-full shrink-0" style={{ backgroundColor: col.hex }} />
                          <h3 className="text-xs lg:text-sm font-semibold text-text-primary uppercase tracking-wider truncate">{col.label}</h3>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] sm:text-xs text-text-tertiary bg-surface-card px-1.5 py-0.5 rounded-md border border-border-subtle">{deals.length}</span>
                        </div>
                      </div>
                      
                      <div className="text-[10px] sm:text-xs font-medium text-text-secondary px-1 mb-3 truncate shrink-0">
                        ${total.toLocaleString()}
                      </div>

                      <div className="flex-1 overflow-y-auto space-y-3 px-1 no-scrollbar">
                        {deals.map(deal => (
                          <div key={deal.id} className="crm-card p-3 flex flex-col gap-2 cursor-grab hover:border-emerald-500/30 transition-colors border-l-4" style={{ borderLeftColor: col.hex }}>
                            <div className="font-medium text-xs sm:text-sm text-text-primary truncate">{deal.company}</div>
                            <div className="text-xs text-text-secondary truncate">{deal.contact}</div>
                            <div className="text-sm sm:text-lg font-light text-text-primary tracking-tight mt-1">
                              ${deal.value.toLocaleString()}
                            </div>
                            <div className="flex justify-between items-center mt-1">
                              <div className="flex items-center gap-1.5 bg-surface-raised px-1.5 py-0.5 rounded-md border border-border-subtle text-text-secondary">
                                <Clock size={10} />
                                <span className="text-[9px] font-semibold uppercase tracking-wider">{deal.days}d</span>
                              </div>
                              <div className="w-5 h-5 rounded-full bg-surface-base border border-border-subtle flex items-center justify-center text-[9px] font-semibold text-text-secondary shrink-0">
                                {deal.owner}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

function ListStageSection({ col, getDealsForStage, getTotalValue }: { 
  col: typeof columns[0], 
  getDealsForStage: (id: string) => any[], 
  getTotalValue: (id: string) => number 
}) {
  const [isOpen, setIsOpen] = useState(true);
  const deals = getDealsForStage(col.id);
  const total = getTotalValue(col.id);

  return (
    <div className="mb-2">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-4 border-b border-border-subtle group hover:border-border-strong transition-colors bg-transparent"
      >
        <div className="flex items-center gap-4">
          <div className="w-[8px] h-[8px] rounded-full shrink-0" style={{ backgroundColor: col.hex }} />
          <h3 className="text-[13px] font-semibold text-text-primary uppercase tracking-widest">{col.label}</h3>
          <span className="text-[10px] text-text-tertiary font-medium bg-surface-card px-2 py-0.5 rounded-md border border-border-subtle group-hover:border-border-strong transition-colors">
            {deals.length}
          </span>
        </div>
        <div className="flex items-center gap-6">
          <div className="text-[15px] font-medium text-text-primary">
            ${total.toLocaleString()}
          </div>
          <div className="text-text-tertiary group-hover:text-text-secondary transition-colors">
            <ChevronDown size={20} className={`transition-transform duration-300 ${isOpen ? '' : '-rotate-90'}`} />
          </div>
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="flex flex-col gap-3 mt-4 mb-4">
              {deals.map(deal => (
                <div key={deal.id} className="w-full min-h-[80px] py-4 flex items-center justify-between px-6 rounded-xl border border-border-subtle hover:bg-surface-raised/50 transition-all cursor-pointer bg-surface-card/30">
                  <div className="flex flex-col w-1/3 text-left">
                    <div className="font-medium text-[15px] text-text-primary">{deal.company}</div>
                    <div className="text-[13px] text-text-secondary mt-0.5">{deal.contact}</div>
                  </div>
                  
                  <div className="flex justify-center w-1/3">
                     <div className="text-[10px] uppercase tracking-wider font-bold px-3 py-1.5 rounded border bg-opacity-10" style={{ borderColor: `${col.hex}33`, color: col.hex, backgroundColor: `${col.hex}11` }}>
                       {col.label}
                     </div>
                  </div>

                  <div className="flex items-center justify-end gap-6 w-1/3 min-w-[200px]">
                     <div className="flex items-center gap-1.5 bg-surface-raised px-2.5 py-1 rounded-md border border-border-subtle text-text-secondary">
                       <Clock size={12} />
                       <span className="text-[11px] font-semibold tracking-wider uppercase">{deal.days}d</span>
                     </div>
                     <div className="text-xl font-medium text-emerald-500 tracking-tight w-24 text-right">
                        ${deal.value.toLocaleString()}
                     </div>
                     <div className="w-9 h-9 rounded-full bg-surface-base border border-border-subtle flex items-center justify-center text-xs font-semibold text-text-secondary shrink-0">
                       {deal.owner}
                     </div>
                  </div>
                </div>
              ))}
              {deals.length === 0 && (
                <div className="h-16 flex items-center justify-center rounded-xl border border-dashed border-border-subtle text-sm text-text-tertiary">
                  No deals in this stage
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
