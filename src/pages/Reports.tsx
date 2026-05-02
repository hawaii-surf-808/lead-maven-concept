import React from 'react';
import { AreaChart, Area, BarChart, Bar, ResponsiveContainer, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import { Calendar } from 'lucide-react';
import { MOCK_CHART_DATA } from '../data';

const SOURCE_DATA = [
  { name: 'Organic', rate: 65, color: '#10b981' },
  { name: 'Paid', rate: 45, color: '#059669' },
  { name: 'Referral', rate: 85, color: '#3f3f46' },
  { name: 'Social', rate: 35, color: '#18181b' },
];

const STAGE_DATA = [
  { name: 'Closed', value: 450, color: '#10b981' },
  { name: 'Negotiation', value: 320, color: '#059669' },
  { name: 'Proposal', value: 210, color: '#047857' },
  { name: 'Qualified', value: 150, color: '#065f46' },
  { name: 'New', value: 80, color: '#3f3f46' },
];

const TOP_DEALS = [
  { company: 'Apex Partners', value: '$210,000', owner: 'MK', date: 'Oct 24' },
  { company: 'TechNova Inc.', value: '$115,000', owner: 'JD', date: 'Oct 22' },
  { company: 'Nexus Industries', value: '$85,000', owner: 'MK', date: 'Oct 15' },
  { company: 'Starlight Media', value: '$65,000', owner: 'SL', date: 'Oct 12' },
  { company: 'GlobalTech Ltd', value: '$45,000', owner: 'JD', date: 'Oct 05' },
];

const LEADERBOARD = [
  { id: 'mk', name: 'Michael K.', revenue: '$850k', deals: 24, winRate: '68%' },
  { id: 'jd', name: 'Jessica D.', revenue: '$620k', deals: 18, winRate: '54%' },
  { id: 'sl', name: 'Sarah L.', revenue: '$410k', deals: 15, winRate: '45%' },
];

export default function Reports() {
  return (
    <div className="h-full flex flex-col max-w-7xl mx-auto overflow-y-auto pr-2 pb-10">
      <div className="mb-6 flex justify-between items-end">
        <div>
          <h1 className="text-2xl font-semibold text-text-primary">Reports & Analytics</h1>
          <p className="text-sm text-text-tertiary mt-1">Deep dive into your revenue and team performance</p>
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
          <button className="flex items-center gap-2 bg-surface-card border border-border-subtle text-text-secondary hover:text-text-primary px-4 py-2 rounded-lg text-sm font-medium transition-colors">
            <Calendar size={16} />
            Last 30 Days
          </button>
        </div>
      </div>

      <div className="space-y-6">
        {/* Full width revenue trend */}
        <div className="crm-card p-6 h-[400px] flex flex-col">
          <h2 className="text-lg font-semibold text-text-primary mb-6">Revenue Trend</h2>
          <div className="flex-1 w-full relative">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={MOCK_CHART_DATA}>
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--border-subtle)" />
                <XAxis dataKey="time" axisLine={false} tickLine={false} tick={{fill: 'var(--text-tertiary)', fontSize: 12}} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: 'var(--text-tertiary)', fontSize: 12}} dx={-10} />
                <Tooltip 
                  contentStyle={{ backgroundColor: 'var(--surface-card)', borderColor: 'var(--border-subtle)', borderRadius: '8px' }}
                  itemStyle={{ color: 'var(--text-primary)' }}
                />
                <Area type="monotone" dataKey="value" stroke="#10b981" strokeWidth={3} fillOpacity={1} fill="url(#colorValue)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* 2-column charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="crm-card p-6 h-[350px] flex flex-col">
            <h2 className="text-lg font-semibold text-text-primary mb-6">Win Rate by Source</h2>
            <div className="flex-1 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={SOURCE_DATA} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--border-subtle)" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: 'var(--text-tertiary)', fontSize: 12}} dy={10} />
                  <YAxis axisLine={false} tickLine={false} tick={{fill: 'var(--text-tertiary)', fontSize: 12}} />
                  <Tooltip 
                    cursor={{fill: 'var(--surface-raised)', opacity: 0.4}}
                    contentStyle={{ backgroundColor: 'var(--surface-card)', borderColor: 'var(--border-subtle)', borderRadius: '8px' }}
                  />
                  <Bar dataKey="rate" radius={[4, 4, 0, 0]}>
                    {SOURCE_DATA.map((entry, index) => (
                      <cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
          
          <div className="crm-card p-6 h-[350px] flex flex-col">
            <h2 className="text-lg font-semibold text-text-primary mb-6">Pipeline Value by Stage</h2>
            <div className="flex-1 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={STAGE_DATA} layout="vertical" margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="var(--border-subtle)" />
                  <XAxis type="number" axisLine={false} tickLine={false} tick={{fill: 'var(--text-tertiary)', fontSize: 12}} />
                  <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} tick={{fill: 'var(--text-tertiary)', fontSize: 12}} width={80} />
                  <Tooltip 
                    cursor={{fill: 'var(--surface-raised)', opacity: 0.4}}
                    contentStyle={{ backgroundColor: 'var(--surface-card)', borderColor: 'var(--border-subtle)', borderRadius: '8px' }}
                  />
                  <Bar dataKey="value" fill="#10b981" radius={[0, 4, 4, 0]} barSize={24} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Bottom Top Deals & Leaderboard */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          <div className="crm-card p-6">
            <h2 className="text-lg font-semibold text-text-primary mb-6">Top Deals (This Quarter)</h2>
            <div className="space-y-4">
              {TOP_DEALS.map((deal, i) => (
                <div key={i} className="flex items-center justify-between p-3 bg-surface-raised/30 rounded-lg border border-border-subtle">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center font-bold text-xs uppercase border border-emerald-500/20">
                      {deal.company.charAt(0)}
                    </div>
                    <div>
                      <div className="font-medium text-sm text-text-primary">{deal.company}</div>
                      <div className="text-xs text-text-tertiary">{deal.date} &bull; {deal.owner}</div>
                    </div>
                  </div>
                  <div className="font-semibold text-emerald-500">{deal.value}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="crm-card p-6">
            <h2 className="text-lg font-semibold text-text-primary mb-6">Rep Leaderboard</h2>
            <div className="space-y-4">
              {LEADERBOARD.map((rep, i) => (
                <div key={i} className="flex items-center justify-between p-3 bg-surface-raised/30 rounded-lg border border-border-subtle">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-surface-card border border-border-subtle flex items-center justify-center font-semibold text-xs text-text-secondary">
                      {rep.id.toUpperCase()}
                    </div>
                    <div>
                      <div className="font-medium text-sm text-text-primary">{rep.name}</div>
                      <div className="text-xs text-text-tertiary">{rep.deals} Deals Won • {rep.winRate} Win Rate</div>
                    </div>
                  </div>
                  <div className="font-semibold text-text-primary">{rep.revenue}</div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
