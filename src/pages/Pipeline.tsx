import React from 'react';
import { PIPELINE_DEALS } from '../data';

const columns = [
  { id: 'new', label: 'New', color: 'bg-blue-500' },
  { id: 'qualified', label: 'Qualified', color: 'bg-indigo-500' },
  { id: 'proposal', label: 'Proposal', color: 'bg-amber-500' },
  { id: 'negotiation', label: 'Negotiation', color: 'bg-orange-500' },
  { id: 'closed', label: 'Closed Won', color: 'bg-emerald-500' },
];

export default function Pipeline() {
  const getDealsForStage = (stageId: string) => PIPELINE_DEALS.filter(d => d.stage === stageId);
  const getTotalValue = (stageId: string) => getDealsForStage(stageId).reduce((acc, curr) => acc + curr.value, 0);

  return (
    <div className="h-full flex flex-col max-w-[1600px] mx-auto">
      <div className="mb-6 flex justify-between items-end">
        <div>
          <h1 className="text-2xl font-semibold text-text-primary">Pipeline</h1>
          <p className="text-sm text-text-tertiary mt-1">Manage active deals across all stages</p>
        </div>
      </div>

      <div className="flex-1 overflow-x-auto pb-4">
        <div className="flex gap-6 min-w-max h-full">
          {columns.map(col => {
            const deals = getDealsForStage(col.id);
            const total = getTotalValue(col.id);
            
            return (
              <div key={col.id} className="w-[300px] flex flex-col h-full bg-surface-raised/30 rounded-xl border border-border-subtle p-3">
                <div className="flex justify-between items-center mb-4 px-1">
                  <div className="flex items-center gap-2">
                    <div className={`w-2.5 h-2.5 rounded-full ${col.color}`} />
                    <h3 className="text-sm font-semibold text-text-primary uppercase tracking-wider">{col.label}</h3>
                    <span className="text-xs text-text-tertiary bg-surface-card px-1.5 py-0.5 rounded-md border border-border-subtle">{deals.length}</span>
                  </div>
                  <div className="text-sm font-medium text-text-secondary">
                    ${total.toLocaleString()}
                  </div>
                </div>

                <div className="flex-1 overflow-y-auto space-y-3 px-1 no-scrollbar">
                  {deals.map(deal => (
                    <div key={deal.id} className="crm-card p-4 flex flex-col gap-3 cursor-grab hover:border-emerald-500/30 transition-colors">
                      <div className="flex justify-between items-start">
                        <div className="font-medium text-sm text-text-primary">{deal.company}</div>
                      </div>
                      <div className="text-xl font-light text-text-primary tracking-tight">
                        ${deal.value.toLocaleString()}
                      </div>
                      <div className="flex justify-between items-center mt-1">
                        <div className="text-[10px] text-text-tertiary uppercase tracking-wider font-medium bg-surface-raised px-2 py-1 rounded-md">
                          {deal.days} Days In Stage
                        </div>
                        <div className="w-6 h-6 rounded-full bg-surface-base border border-border-subtle flex items-center justify-center text-[9px] font-semibold text-text-secondary">
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
