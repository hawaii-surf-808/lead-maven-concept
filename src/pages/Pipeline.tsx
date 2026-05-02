import React from 'react';
import { PIPELINE_DEALS } from '../data';

const columns = [
  { id: 'new', label: 'New', color: 'bg-zinc-400' },
  { id: 'qualified', label: 'Qualified', color: 'bg-zinc-600' },
  { id: 'proposal', label: 'Proposal', color: 'bg-emerald-600' },
  { id: 'negotiation', label: 'Negotiation', color: 'bg-emerald-700' },
  { id: 'closed', label: 'Closed Won', color: 'bg-emerald-500' },
];

export default function Pipeline() {
  const getDealsForStage = (stageId: string) => PIPELINE_DEALS.filter(d => d.stage === stageId);
  const getTotalValue = (stageId: string) => getDealsForStage(stageId).reduce((acc, curr) => acc + curr.value, 0);

  return (
    <div className="h-full flex flex-col max-w-[1600px] mx-auto overflow-hidden">
      <div className="mb-6 flex justify-between items-end shrink-0">
        <div>
          <h1 className="text-2xl font-semibold text-text-primary">Pipeline</h1>
          <p className="text-sm text-text-tertiary mt-1">Manage active deals across all stages</p>
        </div>
      </div>

      <div className="flex-1 min-h-0 pb-4">
        <div className="flex gap-4 h-full">
          {columns.map(col => {
            const deals = getDealsForStage(col.id);
            const total = getTotalValue(col.id);
            
            return (
              <div key={col.id} className="flex-1 min-w-0 flex flex-col h-full bg-surface-raised/30 rounded-xl border border-border-subtle p-3">
                <div className="flex justify-between items-center mb-4 px-1 shrink-0">
                  <div className="flex items-center gap-2">
                    <div className={`w-2.5 h-2.5 rounded-full shrink-0 ${col.color}`} />
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
                    <div key={deal.id} className="crm-card p-3 flex flex-col gap-2 cursor-grab hover:border-emerald-500/30 transition-colors">
                      <div className="font-medium text-xs sm:text-sm text-text-primary truncate">{deal.company}</div>
                      <div className="text-sm sm:text-lg font-light text-text-primary tracking-tight">
                        ${deal.value.toLocaleString()}
                      </div>
                      <div className="flex justify-between items-center mt-1">
                        <div className="text-[9px] text-text-tertiary uppercase tracking-wider font-medium bg-surface-raised px-1.5 py-0.5 rounded-md">
                          {deal.days}D
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
      </div>
    </div>
  );
}
