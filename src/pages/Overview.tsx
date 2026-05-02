import React from 'react';
import { TrendingUp, BarChart, Download, ArrowUpRight, ArrowDownRight, Sparkles, MoveRight, Star, GitMerge } from 'lucide-react';
import { AreaChart, Area, ResponsiveContainer } from 'recharts';
import { PENDING_TASKS, LEAD_SOURCES, MINI_STATS, MOCK_CHART_DATA } from '../data';

const FunnelChart = () => (
  <div className="relative w-full aspect-[2/1] mt-6 select-none">
    <svg viewBox="0 0 400 200" className="w-full h-full drop-shadow-md">
      <defs>
        <linearGradient id="g1" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#10b981" />
          <stop offset="100%" stopColor="#059669" />
        </linearGradient>
        <linearGradient id="g2" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#059669" />
          <stop offset="100%" stopColor="#047857" />
        </linearGradient>
        <linearGradient id="g3" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#047857" />
          <stop offset="100%" stopColor="#065f46" />
        </linearGradient>
        <linearGradient id="g4" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#065f46" />
          <stop offset="100%" stopColor="#064e3b" />
        </linearGradient>
      </defs>
      
      {/* 100% */}
      <path d="M 0 0 L 400 0 L 330 45 L 70 45 Z" fill="url(#g1)" className="hover:opacity-90 transition-opacity cursor-pointer" />
      {/* 46.4% */}
      <path d="M 75 52 L 325 52 L 260 97 L 140 97 Z" fill="url(#g2)" className="hover:opacity-90 transition-opacity cursor-pointer" />
      {/* 18.8% */}
      <path d="M 145 104 L 255 104 L 210 149 L 190 149 Z" fill="url(#g3)" className="hover:opacity-90 transition-opacity cursor-pointer" />
      {/* 7.1% */}
      <path d="M 190 156 L 210 156 L 195 200 L 205 200 Z" fill="url(#g4)" className="hover:opacity-90 transition-opacity cursor-pointer" />
    </svg>
    
    {/* Labels Left */}
    <div className="absolute top-2 left-0 text-right text-xs">
      <div className="font-semibold text-text-primary">NEW LEADS</div>
      <div className="text-text-tertiary">452 Leads</div>
    </div>
    <div className="absolute top-[56px] left-[10%] text-right text-xs">
      <div className="font-semibold text-text-primary">QUALIFIED</div>
      <div className="text-text-tertiary">210 Leads</div>
    </div>
    <div className="absolute top-[108px] left-[25%] text-right text-xs">
      <div className="font-semibold text-text-primary">PROPOSAL</div>
      <div className="text-text-tertiary">85 Sent</div>
    </div>
    <div className="absolute top-[160px] left-[35%] text-right text-xs">
      <div className="font-semibold text-text-primary">CLOSED</div>
      <div className="text-text-tertiary">32 Won</div>
    </div>

    {/* Percentages Right */}
    <div className="absolute top-4 right-0 font-medium text-text-primary text-sm">100%</div>
    <div className="absolute top-[64px] right-[10%] font-medium text-text-primary text-sm">46.4%</div>
    <div className="absolute top-[116px] right-[25%] font-medium text-text-primary text-sm">18.8%</div>
    <div className="absolute top-[168px] right-[35%] font-medium text-text-primary text-sm">7.1%</div>
  </div>
);

const DonutChart = () => (
  <div className="relative w-40 h-40">
    <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
      {/* Background Track */}
      <circle cx="50" cy="50" r="40" fill="none" stroke="currentcolor" className="text-border-subtle" strokeWidth="8" />
      
      {/* Discovery (45%) */}
      <circle cx="50" cy="50" r="40" fill="none" stroke="#10b981" strokeWidth="8" strokeDasharray="251.2" strokeDashoffset="138" strokeLinecap="round" />
      {/* Evaluation (25%) */}
      <circle cx="50" cy="50" r="40" fill="none" stroke="#059669" strokeWidth="8" strokeDasharray="251.2" strokeDashoffset="188" strokeLinecap="round" className="rotate-[162deg] origin-center" />
      {/* Negotiation (30%) */}
      <circle cx="50" cy="50" r="40" fill="none" stroke="#3f3f46" strokeWidth="8" strokeDasharray="251.2" strokeDashoffset="175" strokeLinecap="round" className="rotate-[252deg] origin-center" />
    </svg>
    <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
      <div className="text-3xl font-light text-text-primary tracking-tight">24</div>
      <div className="text-[10px] text-text-tertiary font-medium tracking-wider uppercase mt-1">STAGES</div>
    </div>
  </div>
);

const MiniLineChart = ({ data, color }: { data: any[], color: string }) => (
  <div className="h-10 w-24">
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart data={data}>
        <defs>
          <linearGradient id={`color-${color}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor={color} stopOpacity={0.3}/>
            <stop offset="95%" stopColor={color} stopOpacity={0}/>
          </linearGradient>
        </defs>
        <Area type="monotone" dataKey="value" stroke={color} strokeWidth={2} fillOpacity={1} fill={`url(#color-${color})`} />
      </AreaChart>
    </ResponsiveContainer>
  </div>
);

export default function Overview() {
  return (
    <div className="max-w-7xl mx-auto space-y-6">
      
      {/* ROW 1: KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Opportunity Status */}
        <div className="crm-card p-6 flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-[11px] font-semibold tracking-wider text-text-tertiary uppercase mb-2">Opportunity Status</h3>
              <div className="text-5xl font-light text-text-primary tracking-tight">185</div>
            </div>
            <div className="relative w-16 h-16 shrink-0">
              <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                <circle cx="50" cy="50" r="44" fill="none" stroke="var(--border-subtle)" strokeWidth="6" />
                <circle cx="50" cy="50" r="44" fill="none" stroke="#059669" strokeWidth="6" strokeDasharray="276" strokeDashoffset="69" strokeLinecap="round" />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center text-xs font-semibold text-text-primary">75%</div>
            </div>
          </div>
          <div className="flex items-center gap-2 text-xs font-medium text-emerald-500 mt-6">
            <TrendingUp size={14} />
            <span>+12% from last month</span>
          </div>
        </div>

        {/* Won Revenue */}
        <div className="crm-card p-6 flex flex-col justify-between relative overflow-hidden group">
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-emerald-500/5 to-transparent pointer-events-none"></div>
          <h3 className="text-[11px] font-semibold tracking-wider text-text-tertiary uppercase mb-2 text-emerald-500">Won Revenue</h3>
          <div className="flex items-baseline gap-2">
            <div className="text-5xl font-light text-text-primary tracking-tight">$33.2K</div>
            <ArrowUpRight className="text-emerald-500 w-6 h-6" />
          </div>
          
          {/* Tiny Bar Chart bg */}
          <div className="mt-8 flex items-end gap-2 h-8 w-full">
            {[0.3, 0.4, 0.2, 0.5, 0.4, 0.7, 1].map((val, i) => (
              <div key={i} className="flex-1 bg-emerald-500/20 rounded-t-sm group-hover:bg-emerald-500/30 transition-colors" style={{ height: `${val * 100}%` }}></div>
            ))}
          </div>
        </div>

        {/* Conversion Rate */}
        <div className="crm-card p-6 flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-[11px] font-semibold tracking-wider text-text-tertiary uppercase mb-2">Conversion Rate</h3>
              <div className="text-5xl font-light text-text-primary tracking-tight">12.97<span className="text-2xl text-text-tertiary">%</span></div>
            </div>
            <button className="w-10 h-10 rounded-xl bg-yellow-500/10 text-yellow-500 flex items-center justify-center hover:bg-yellow-500/20 transition-colors">
              <BarChart size={20} />
            </button>
          </div>
          <div className="flex items-center gap-6 mt-6">
            <div>
              <div className="text-[10px] text-text-tertiary uppercase font-medium">Current</div>
              <div className="text-sm font-semibold text-text-primary mt-0.5">12.9%</div>
            </div>
            <div>
              <div className="text-[10px] text-text-tertiary uppercase font-medium">Target</div>
              <div className="text-sm font-semibold text-emerald-500 mt-0.5">15.0%</div>
            </div>
          </div>
        </div>

      </div>

      {/* ROW 2: Funnel & Critical Tasks */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        <div className="crm-card p-6 lg:col-span-2 flex flex-col">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-lg font-semibold text-text-primary">Sales Funnel</h2>
              <p className="text-sm text-text-tertiary mt-1">Visualizing transition velocity between stages</p>
            </div>
            <select className="bg-surface-raised border border-border-subtle text-xs text-text-secondary rounded-md px-3 py-1.5 focus:outline-none appearance-none cursor-pointer">
                <option>Last 30 Days</option>
                <option>Last Quarter</option>
            </select>
          </div>
          <div className="flex-1 flex items-center justify-center min-h-[250px]">
            <FunnelChart />
          </div>
        </div>

        <div className="crm-card p-6 flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-semibold text-text-primary">Critical Tasks</h2>
            <span className="text-[10px] tracking-wider font-semibold text-rose-500 bg-rose-500/10 px-2.5 py-1 rounded-sm uppercase">Action Required</span>
          </div>
          
          <div className="flex-1 space-y-4">
            {PENDING_TASKS.map(task => (
              <div key={task.id} className={`p-4 rounded-xl border ${task.overdue ? 'border-orange-500/30 bg-orange-500/5' : 'border-border-subtle bg-surface-raised/50'}`}>
                <div className="flex justify-between items-center mb-3">
                  <span className={`text-[10px] px-2 py-0.5 rounded-sm font-semibold tracking-wider ${task.type === 'PROPOSAL' ? 'bg-emerald-500/10 text-emerald-500' : 'bg-orange-500/10 text-orange-500'}`}>
                    {task.type}
                  </span>
                  <span className={`text-xs ${task.overdue ? 'text-orange-500 font-medium' : 'text-text-tertiary'}`}>{task.due}</span>
                </div>
                <p className="text-sm text-text-primary font-medium pr-4 leading-relaxed mb-4">{task.title}</p>
                <div className="flex justify-between items-center">
                  <div className="flex -space-x-2">
                    {task.initials.map((init, i) => (
                      <div key={i} className="w-6 h-6 rounded-full bg-surface-card border border-border-subtle flex items-center justify-center text-[9px] font-semibold text-text-secondary">
                        {init}
                      </div>
                    ))}
                  </div>
                  {task.overdue ? (
                    <div className="w-5 h-5 flex items-center justify-center text-orange-500">!</div>
                  ) : (
                    <MoveRight size={16} className="text-text-secondary cursor-pointer hover:text-text-primary" />
                  )}
                </div>
              </div>
            ))}
          </div>

          <button className="w-full mt-4 py-3 rounded-xl border border-border-subtle text-xs font-semibold text-text-secondary hover:text-text-primary hover:bg-surface-raised transition-colors uppercase tracking-wider">
            View All Tasks
          </button>
        </div>

      </div>

      {/* ROW 3: Stage Distribution & Lead Source Report */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        <div className="crm-card p-6 flex flex-col h-[340px]">
          <h2 className="text-lg font-semibold text-text-primary mb-6">Stage Distribution</h2>
          <div className="flex-1 flex items-center justify-between">
            <DonutChart />
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>
                <div className="text-sm text-text-secondary mr-6">Discovery</div>
                <div className="text-sm text-text-primary font-medium ml-auto">45%</div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-600"></div>
                <div className="text-sm text-text-secondary mr-6">Evaluation</div>
                <div className="text-sm text-text-primary font-medium ml-auto">25%</div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-zinc-600"></div>
                <div className="text-sm text-text-secondary mr-6">Negotiation</div>
                <div className="text-sm text-text-primary font-medium ml-auto">30%</div>
              </div>
            </div>
          </div>
        </div>

        <div className="crm-card p-6 lg:col-span-2 flex flex-col h-[340px]">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-semibold text-text-primary">Lead Source Report</h2>
            <button className="text-emerald-500 text-xs font-bold tracking-wider hover:text-emerald-400 flex items-center gap-1 uppercase transition-colors">
              <Download size={14} /> Export
            </button>
          </div>
          
          <div className="flex-1 overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="text-[10px] font-semibold text-text-tertiary uppercase tracking-wider border-b border-border-subtle">
                  <th className="pb-3 px-4 font-semibold uppercase">Source Channel</th>
                  <th className="pb-3 px-4 font-semibold uppercase">Total</th>
                  <th className="pb-3 px-4 font-semibold uppercase">Conv.</th>
                  <th className="pb-3 px-4 font-semibold uppercase text-right">Trend</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {LEAD_SOURCES.map((source, i) => (
                  <tr key={i} className="group border-b border-border-subtle/50 hover:bg-surface-raised/50 transition-colors">
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-3 text-text-primary font-medium">
                        <span className="text-text-tertiary group-hover:text-text-secondary transition-colors">
                          {source.icon === 'globe' && <div className="w-4 h-4 rounded-full border-2 border-current opacity-70" />}
                          {source.icon === 'target' && <div className="w-4 h-4 rounded-full border-2 border-current opacity-70" />}
                          {source.icon === 'share' && <GitMerge size={16} className="opacity-70" />}
                        </span>
                        {source.channel}
                      </div>
                    </td>
                    <td className="py-4 px-4 text-text-secondary">{source.total}</td>
                    <td className="py-4 px-4 font-medium text-emerald-500">{source.conv}</td>
                    <td className="py-4 px-4 text-right">
                      <span className={`inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded-full border ${source.up ? 'text-emerald-500 border-emerald-500/20 bg-emerald-500/5' : 'text-amber-500 border-amber-500/20 bg-amber-500/5'}`}>
                        {source.up ? <ArrowUpRight size={12}/> : <ArrowDownRight size={12}/>}
                        {source.trend}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>

      {/* ROW 4: Stat Strips & Velocity */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {MINI_STATS.map((stat, i) => (
          <div key={i} className="crm-card p-5 flex flex-col justify-between h-[100px]">
            <div className="flex justify-between items-start w-full">
              <div className="text-[10px] font-semibold text-text-tertiary uppercase tracking-wider">{stat.label}</div>
              {stat.trend && (
                <div className="text-[10px] font-bold text-emerald-500">{stat.trend}</div>
              )}
            </div>
            <div className="flex items-end justify-between mt-auto">
              <div className="text-2xl font-light tracking-tight text-text-primary">{stat.value}</div>
              {stat.stars ? (
                <div className="flex gap-0.5">
                  {[1,2,3,4,5].map(s => <Star key={s} size={12} className={s === 5 ? "text-emerald-500/30" : "text-emerald-500"} fill={s !== 5 ? "currentColor" : "none"} />)}
                </div>
              ) : (
                <div className="w-12 h-6 opacity-60">
                  <MiniLineChart data={MOCK_CHART_DATA} color="#10b981" />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Sales Velocity */}
        <div className="crm-card p-6 flex items-center justify-between">
          <div>
            <h3 className="text-[11px] font-semibold tracking-wider text-text-tertiary uppercase mb-2">Sales Velocity</h3>
            <div className="text-3xl font-light text-text-primary tracking-tight mb-2">$2.4k<span className="text-base text-text-tertiary"> /day</span></div>
            <div className="text-xs font-medium text-emerald-500">Pacing 15% faster than previous period</div>
          </div>
          <div className="w-1/3 max-w-[140px]">
              <div className="h-1.5 w-full bg-surface-raised rounded-full overflow-hidden">
                <div className="h-full bg-emerald-500 rounded-full w-[70%] shadow-[0_0_8px_rgba(16,185,129,0.5)]"></div>
              </div>
          </div>
        </div>

        {/* Avg Sales Cycle */}
        <div className="crm-card p-6 flex flex-col justify-center">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-[11px] font-semibold tracking-wider text-text-tertiary uppercase mb-2 text-yellow-500">Avg. Sales Cycle</h3>
              <div className="text-3xl font-light text-text-primary tracking-tight mb-2">18.5 <span className="text-base text-text-tertiary">Days</span></div>
              <div className="text-xs font-medium text-yellow-500">Target: {'<'} 15 days</div>
            </div>
            <div className="flex items-end gap-1.5 h-10">
              <div className="w-1.5 h-4 bg-yellow-500/40 rounded-sm"></div>
              <div className="w-1.5 h-6 bg-yellow-500/70 rounded-sm"></div>
              <div className="w-1.5 h-8 bg-yellow-500 rounded-sm shadow-[0_0_8px_rgba(234,179,8,0.3)]"></div>
            </div>
          </div>
        </div>

      </div>

      {/* ROW 5: AI Executive Insights */}
      <div className="crm-card p-8 md:p-10 flex flex-col lg:flex-row gap-10">
        
        {/* Content Side */}
        <div className="flex-1 flex flex-col">
          <div className="flex items-center gap-2 mb-6">
            <Sparkles size={16} className="text-emerald-500" />
            <span className="text-xs font-bold tracking-wider text-emerald-500 uppercase">AI Executive Insights</span>
          </div>
          
          <h1 className="text-3xl lg:text-4xl font-light text-text-primary tracking-tight leading-tight mb-8">
            Your pipeline health is in the <span className="text-emerald-500 font-medium emerald-text-glow">top 5%</span> of your industry.
          </h1>

          <ul className="space-y-4 mb-10 opacity-90">
            <li className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0"></div>
              <p className="text-text-secondary text-sm leading-relaxed">
                Based on current velocity, reallocate budget to <strong className="text-text-primary font-medium">Organic Search</strong> to capitalize on high conversion trends.
              </p>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0"></div>
              <p className="text-text-secondary text-sm leading-relaxed">
                <strong className="text-text-primary font-medium">Paid Search</strong> conversion is peaking at <strong className="text-text-primary font-medium">14.1%</strong>, suggesting diminishing returns at higher spend levels.
              </p>
            </li>
          </ul>

          <div className="flex flex-wrap items-center gap-4 mt-auto">
            <button className="bg-emerald-500 hover:bg-emerald-400 text-white px-6 py-3 rounded-lg text-sm font-medium flex items-center gap-2 emerald-glow transition-all">
              <Download size={16} />
              Generate Full Report
            </button>
            <button className="px-6 py-3 rounded-lg border border-border-subtle text-sm font-medium text-text-secondary hover:text-text-primary hover:bg-surface-raised transition-colors">
              View Simulation
            </button>
          </div>
        </div>

        {/* Chart Side */}
        <div className="flex-1 bg-surface-raised/30 rounded-2xl border border-border-subtle p-6 flex flex-col min-h-[300px]">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-[10px] font-semibold uppercase tracking-wider text-text-tertiary">Real-time Pipeline Velocity</h3>
            <div className="text-sm font-semibold text-emerald-500">+15.4%</div>
          </div>
          
          <div className="flex-1 w-full min-h-[150px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={MOCK_CHART_DATA}>
                <defs>
                  <linearGradient id="ai-chart" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#10b981" stopOpacity={0.2}/>
                    <stop offset="100%" stopColor="#10b981" stopOpacity={0}/>
                  </linearGradient>
                  <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                      <feGaussianBlur stdDeviation="4" result="blur" />
                      <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                </defs>
                <Area 
                  type="monotone" 
                  dataKey="value" 
                  stroke="#10b981" 
                  strokeWidth={3} 
                  fillOpacity={1} 
                  fill="url(#ai-chart)" 
                  activeDot={{ r: 6, fill: '#10b981', stroke: '#111118', strokeWidth: 2 }}
                  filter="url(#glow)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          <div className="grid grid-cols-3 gap-4 mt-6">
            <div className="bg-surface-card border border-border-subtle rounded-lg p-3">
              <div className="text-[9px] uppercase tracking-wider text-text-tertiary mb-1">Avg. Flow</div>
              <div className="font-semibold text-text-primary text-sm">2.4 days</div>
            </div>
            <div className="bg-surface-card border border-border-subtle rounded-lg p-3">
              <div className="text-[9px] uppercase tracking-wider text-text-tertiary mb-1">Bottlenecks</div>
              <div className="font-semibold text-orange-500 text-sm">None</div>
            </div>
            <div className="bg-surface-card border border-border-subtle rounded-lg p-3">
              <div className="text-[9px] uppercase tracking-wider text-text-tertiary mb-1">Forecast</div>
              <div className="font-semibold text-emerald-500 text-sm">Optimistic</div>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}
