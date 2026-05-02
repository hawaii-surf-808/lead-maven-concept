import React, { useState } from 'react';
import { AreaChart, Area, Line, ResponsiveContainer, XAxis, YAxis, Tooltip, CartesianGrid, ComposedChart, BarChart, Bar, Cell } from 'recharts';

const REVENUE_DATA = [
  { day: '01', value: 4200, target: 5000 },
  { day: '03', value: 8500, target: 6000 },
  { day: '06', value: 12400, target: 9000 },
  { day: '09', value: 11200, target: 12000 },
  { day: '12', value: 16800, target: 15000 },
  { day: '15', value: 21000, target: 18000 },
  { day: '18', value: 23500, target: 21000 },
  { day: '21', value: 28900, target: 24000 },
  { day: '24', value: 31000, target: 28000 },
  { day: '27', value: 29500, target: 32000 },
  { day: '30', value: 33200, target: 35000 },
];

const SOURCE_RATES = [
  { name: 'Organic Search', rate: 8.2 },
  { name: 'Paid Search', rate: 14.1 },
  { name: 'Social Media', rate: 5.9 },
  { name: 'Referral', rate: 22.4 },
  { name: 'Direct', rate: 11.8 },
];

const VELOCITY_DATA = [
  { name: 'Discovery', avg: 8, target: 5 },
  { name: 'Evaluation', avg: 12, target: 15 },
  { name: 'Negotiation', avg: 4, target: 7 },
  { name: 'Closing', avg: 3, target: 3 },
];

const TOP_DEALS = [
  { company: 'Apex Partners', value: 210000, stage: 'Proposal', owner: 'MK', prob: 75 },
  { company: 'TechNova Inc.', value: 115000, stage: 'Negotiation', owner: 'JD', prob: 90 },
  { company: 'Nexus Industries', value: 85000, stage: 'Qualified', owner: 'SL', prob: 40 },
  { company: 'Quantum Corp', value: 65000, stage: 'Discovery', owner: 'MK', prob: 20 },
  { company: 'Evergreen Logistics', value: 45000, stage: 'Qualified', owner: 'JD', prob: 55 },
];

const LEADERBOARD = [
  { id: 'mk', name: 'Michael K.', revenue: 850000, deals: 24, quota: 95 },
  { id: 'jd', name: 'Jessica D.', revenue: 620000, deals: 18, quota: 82 },
  { id: 'sl', name: 'Sarah L.', revenue: 410000, deals: 15, quota: 70 },
  { id: 'dr', name: 'David R.', revenue: 280000, deals: 8, quota: 48 },
];

export default function Dashboard() {
  const [dateRange, setDateRange] = useState('30D');
  const [compare, setCompare] = useState(true);

  return (
    <div className="h-full flex flex-col max-w-[1600px] mx-auto overflow-y-auto pr-2 pb-10 space-y-6">
      
      {/* HEADER */}
      <div className="flex justify-between items-end shrink-0">
        <div>
          <h1 className="text-2xl font-semibold text-text-primary">Performance Dashboard</h1>
          <div className="flex items-center gap-2 mt-2">
             <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
             <p className="text-[13px] font-medium text-text-tertiary">Made In Hawaii Enterprises · Last synced 2 min ago</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <select className="bg-surface-raised border border-border-subtle text-[13px] font-medium text-text-secondary rounded-lg px-3 py-2 focus:outline-none appearance-none cursor-pointer hover:border-emerald-500/50 transition-colors hidden sm:block">
            <option>Made In Hawaii Enterprises — All Pipelines</option>
            <option>Made In Hawaii Enterprises — Sales Pipeline</option>
          </select>
          <div className="bg-surface-raised border border-border-subtle p-1 rounded-lg flex items-center text-xs font-medium">
            {['7D', '30D', 'QTR', 'YTD'].map(range => (
              <button 
                key={range}
                onClick={() => setDateRange(range)}
                className={`px-3 py-1.5 rounded-md transition-all ${dateRange === range ? 'bg-surface-card shadow-sm text-text-primary border border-border-subtle' : 'text-text-tertiary hover:text-text-secondary'}`}
              >
                {range}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => setCompare(!compare)}>
            <div className={`w-8 h-4 rounded-full flex items-center px-0.5 transition-colors ${compare ? 'bg-emerald-500/20 border border-emerald-500/30' : 'bg-surface-raised border border-border-subtle'}`}>
              <div className={`w-3 h-3 rounded-full transition-transform ${compare ? 'bg-emerald-500 translate-x-3.5' : 'bg-text-tertiary translate-x-0'}`} />
            </div>
            <span className="text-xs text-text-tertiary font-medium uppercase tracking-wider">vs Prev</span>
          </div>
        </div>
      </div>

      {/* QUOTA ATTAINMENT ROW */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <QuotaCard label="Revenue Attainment" current={33200} target={45000} type="currency" />
        <QuotaCard label="Deals Closed" current={32} target={40} type="number" />
        <QuotaCard label="New Leads" current={452} target={500} type="number" />
      </div>

      {/* MAIN CHART */}
      <div className="crm-card p-6 flex flex-col h-[400px]">
        <div className="mb-6 flex justify-between items-start">
           <div>
             <h2 className="text-lg font-semibold text-text-primary">Revenue Trend</h2>
             <p className="text-sm text-text-tertiary mt-1">Daily revenue versus forecasted target</p>
           </div>
           <div className="flex items-center gap-4 text-xs font-medium">
             <div className="flex items-center gap-2 text-text-secondary">
               <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></div>
               Actual Revenue
             </div>
             <div className="flex items-center gap-2 text-text-tertiary">
               <div className="w-3 border border-dashed border-text-tertiary"></div>
               Forecast Target
             </div>
           </div>
        </div>
        <div className="flex-1 w-full relative">
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart data={REVENUE_DATA}>
              <defs>
                <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10b981" stopOpacity={0.15}/>
                  <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--border-subtle)" />
              <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{fill: 'var(--text-tertiary)', fontSize: 12}} dy={10} />
              <YAxis axisLine={false} tickLine={false} tickFormatter={(val) => `$${val/1000}k`} tick={{fill: 'var(--text-tertiary)', fontSize: 12}} dx={-10} />
              <Tooltip 
                contentStyle={{ backgroundColor: 'var(--surface-card)', borderColor: 'var(--border-subtle)', borderRadius: '8px' }}
                itemStyle={{ color: 'var(--text-primary)' }}
                formatter={(value: number) => `$${value.toLocaleString()}`}
              />
              <Area type="monotone" dataKey="value" stroke="#10b981" strokeWidth={3} fillOpacity={1} fill="url(#areaGradient)" />
              <Line type="monotone" dataKey="target" stroke="var(--text-tertiary)" strokeWidth={2} strokeDasharray="5 5" dot={false} />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* MIDDLE ROW (2 COLUMNS) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Win Rate by Source */}
        <div className="crm-card p-6 h-[340px] flex flex-col">
          <h2 className="text-lg font-semibold text-text-primary mb-6">Win Rate by Source</h2>
          <div className="flex-1 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={SOURCE_RATES} layout="vertical" margin={{ top: 0, right: 30, left: 20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="var(--border-subtle)" />
                <XAxis type="number" axisLine={false} tickLine={false} tick={{fill: 'var(--text-tertiary)', fontSize: 12}} tickFormatter={(val) => `${val}%`} />
                <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} tick={{fill: 'var(--text-secondary)', fontSize: 12, fontWeight: 500}} width={100} />
                <Tooltip 
                  cursor={{fill: 'var(--surface-raised)', opacity: 0.4}}
                  contentStyle={{ backgroundColor: 'var(--surface-card)', borderColor: 'var(--border-subtle)', borderRadius: '8px' }}
                  formatter={(value: number) => `${value}%`}
                />
                <Bar dataKey="rate" radius={[0, 4, 4, 0]} barSize={20}>
                  {SOURCE_RATES.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill="#10b981" />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Pipeline Velocity */}
        <div className="crm-card p-6 h-[340px] flex flex-col">
          <div className="mb-6 flex justify-between items-start">
             <h2 className="text-lg font-semibold text-text-primary">Pipeline Velocity</h2>
             <div className="text-[10px] text-text-tertiary uppercase tracking-wider font-medium">Avg Days / Target</div>
          </div>
          <div className="flex-1 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={VELOCITY_DATA} layout="vertical" margin={{ top: 0, right: 30, left: 10, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="var(--border-subtle)" />
                <XAxis type="number" axisLine={false} tickLine={false} tick={{fill: 'var(--text-tertiary)', fontSize: 12}} />
                <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} tick={{fill: 'var(--text-secondary)', fontSize: 12, fontWeight: 500}} width={80} />
                <Tooltip 
                  cursor={{fill: 'var(--surface-raised)', opacity: 0.4}}
                  contentStyle={{ backgroundColor: 'var(--surface-card)', borderColor: 'var(--border-subtle)', borderRadius: '8px' }}
                />
                <Bar dataKey="avg" radius={[0, 4, 4, 0]} barSize={20}>
                  {VELOCITY_DATA.map((entry, index) => {
                    const isOver = entry.avg > entry.target;
                    return <Cell key={`cell-${index}`} fill={isOver ? '#f59e0b' : '#10b981'} />;
                  })}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* BOTTOM ROW (2 COLUMNS) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Top 5 Deals */}
        <div className="crm-card p-6 flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-semibold text-text-primary">Top Active Deals</h2>
            <button className="text-xs font-semibold text-text-secondary hover:text-text-primary tracking-wider uppercase">View All</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="text-[10px] bg-surface-card sticky top-0 z-10 font-semibold text-text-tertiary uppercase tracking-wider border-b border-border-subtle">
                  <th className="py-2.5 font-semibold uppercase">Company</th>
                  <th className="py-2.5 font-semibold uppercase text-right">Value</th>
                  <th className="py-2.5 px-4 font-semibold uppercase">Stage</th>
                  <th className="py-2.5 font-semibold uppercase text-center">Owner</th>
                  <th className="py-2.5 font-semibold uppercase text-right">Prob.</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {TOP_DEALS.map((deal, i) => {
                   const probColor = deal.prob >= 75 ? 'text-emerald-500 border-emerald-500/20 bg-emerald-500/5' : deal.prob >= 40 ? 'text-yellow-500 border-yellow-500/20 bg-yellow-500/5' : 'text-text-tertiary border-border-subtle bg-surface-raised';
                   return (
                  <tr key={i} className="border-b border-border-subtle/50 hover:bg-surface-raised/30 transition-colors">
                    <td className="py-3.5 font-medium text-text-primary">{deal.company}</td>
                    <td className="py-3.5 text-right font-semibold text-text-primary ${deal.value.toLocaleString()}">${deal.value.toLocaleString()}</td>
                    <td className="py-3.5 px-4 text-text-secondary text-xs">{deal.stage}</td>
                    <td className="py-3.5 flex justify-center">
                       <div className="w-6 h-6 rounded-full bg-surface-raised border border-border-subtle flex items-center justify-center text-[9px] font-semibold text-text-secondary">
                         {deal.owner}
                       </div>
                    </td>
                    <td className="py-3.5 text-right">
                      <span className={`inline-flex items-center justify-center px-2 py-0.5 text-[10px] uppercase tracking-wider font-semibold rounded-full border ${probColor}`}>
                        {deal.prob}%
                      </span>
                    </td>
                  </tr>
                )})}
              </tbody>
            </table>
          </div>
        </div>

        {/* Rep Leaderboard */}
        <div className="crm-card p-6 flex flex-col">
          <h2 className="text-lg font-semibold text-text-primary mb-6">Rep Leaderboard</h2>
          <div className="space-y-4">
            {LEADERBOARD.map((rep, i) => (
              <div key={rep.id} className="flex items-center gap-4 bg-surface-raised/20 p-3 rounded-xl border border-border-subtle border-transparent hover:border-border-subtle transition-colors">
                <div className="w-6 h-6 rounded-full bg-surface-card border border-border-subtle flex items-center justify-center text-xs font-semibold text-text-tertiary shrink-0">
                  {i + 1}
                </div>
                <div className="w-10 h-10 rounded-full bg-surface-card border border-border-subtle flex items-center justify-center text-sm font-semibold text-text-secondary shrink-0">
                  {rep.id.toUpperCase()}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-1">
                    <div className="font-medium text-sm text-text-primary">{rep.name}</div>
                    <div className="font-semibold text-emerald-500">${(rep.revenue/1000).toFixed(0)}k</div>
                  </div>
                  <div className="flex justify-between items-center text-xs text-text-tertiary mb-1">
                    <span>{rep.deals} Deals Won</span>
                    <span>{rep.quota}% Quota</span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-surface-raised overflow-hidden">
                    <div className="h-full bg-emerald-500 rounded-full" style={{ width: `${rep.quota}%` }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
}

function QuotaCard({ label, current, target, type }: { label: string, current: number, target: number, type: 'number' | 'currency' }) {
  const percent = Math.min(100, Math.round((current / target) * 100));
  const isHealthy = percent >= 80;
  return (
    <div className="crm-card p-6 flex flex-col justify-between h-[120px]">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-[11px] font-semibold text-text-tertiary tracking-wider uppercase">{label}</h3>
        <div className={`text-xs font-bold ${isHealthy ? 'text-emerald-500' : 'text-amber-500'}`}>
          {percent}%
        </div>
      </div>
      <div className="flex items-baseline gap-1 mt-auto mb-3">
        <div className="text-2xl font-light text-text-primary tracking-tight">
          {type === 'currency' ? `$${(current/1000).toFixed(1)}k` : current}
        </div>
        <div className="text-sm text-text-tertiary">
          / {type === 'currency' ? `$${(target/1000).toFixed(1)}k` : target}
        </div>
      </div>
      <div className="w-full h-1.5 rounded-full bg-surface-raised overflow-hidden">
        <div className={`h-full rounded-full transition-all duration-500 ${isHealthy ? 'bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.3)]' : 'bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.3)]'}`} style={{ width: `${percent}%` }} />
      </div>
    </div>
  );
}
