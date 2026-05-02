import React from 'react';
import { TrendingUp, BarChart, Download, ArrowUpRight, ArrowDownRight, Sparkles, MoveRight, Star, GitMerge } from 'lucide-react';
import { AreaChart, Area, ResponsiveContainer } from 'recharts';
import { PENDING_TASKS, LEAD_SOURCES, MINI_STATS, MOCK_CHART_DATA } from '../data';

const FunnelChart = () => (
  <div className="flex w-full items-center justify-center h-[220px] mt-6 select-none relative gap-6">
    {/* Left Labels */}
    <div className="flex flex-col h-full justify-between text-right shrink-0">
      <div className="h-[55px] flex flex-col justify-center">
        <div className="text-text-secondary text-xs uppercase tracking-wider mb-0.5">New Leads</div>
        <div className="font-bold text-text-primary text-sm">452</div>
      </div>
      <div className="h-[55px] flex flex-col justify-center">
        <div className="text-text-secondary text-xs uppercase tracking-wider mb-0.5">Qualified</div>
        <div className="font-bold text-text-primary text-sm">210</div>
      </div>
      <div className="h-[55px] flex flex-col justify-center">
        <div className="text-text-secondary text-xs uppercase tracking-wider mb-0.5">Proposal</div>
        <div className="font-bold text-text-primary text-sm">85</div>
      </div>
      <div className="h-[55px] flex flex-col justify-center">
        <div className="text-text-secondary text-xs uppercase tracking-wider mb-0.5">Closed Won</div>
        <div className="font-bold text-text-primary text-sm">32</div>
      </div>
    </div>

    {/* SVG Funnel */}
    <div className="h-full px-2 flex-1 max-w-[280px] relative">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-32 bg-emerald-500/15 blur-2xl rounded-full pointer-events-none"></div>
      
      <svg viewBox="0 0 400 220" className="w-full h-full drop-shadow-md relative z-10" preserveAspectRatio="none">
        {/* Stage 1: 100% to 46.4% */}
        <path d="M 0 0 L 400 0 L 292.8 55 L 107.2 55 Z" fill="rgba(16, 185, 129, 0.85)" className="hover:opacity-90 transition-opacity cursor-pointer" />
        <line x1="107.2" y1="55" x2="292.8" y2="55" stroke="#059669" strokeWidth="2" />
        
        {/* Stage 2: 46.4% to 18.8% */}
        <path d="M 107.2 55 L 292.8 55 L 237.6 110 L 162.4 110 Z" fill="rgba(16, 185, 129, 0.65)" className="hover:opacity-90 transition-opacity cursor-pointer" />
        <line x1="162.4" y1="110" x2="237.6" y2="110" stroke="#059669" strokeWidth="2" />
        
        {/* Stage 3: 18.8% to 7.1% */}
        <path d="M 162.4 110 L 237.6 110 L 214.2 165 L 185.8 165 Z" fill="rgba(16, 185, 129, 0.45)" className="hover:opacity-90 transition-opacity cursor-pointer" />
        <line x1="185.8" y1="165" x2="214.2" y2="165" stroke="#059669" strokeWidth="2" />
        
        {/* Stage 4: 7.1% to ~4% */}
        <path d="M 185.8 165 L 214.2 165 L 208 220 L 192 220 Z" fill="rgba(16, 185, 129, 0.30)" className="hover:opacity-90 transition-opacity cursor-pointer" />
        <line x1="192" y1="220" x2="208" y2="220" stroke="#059669" strokeWidth="2" />
      </svg>
    </div>

    {/* Right Labels */}
    <div className="flex flex-col h-full justify-between text-left shrink-0">
      <div className="h-[55px] flex items-center font-medium text-text-tertiary text-sm">100%</div>
      <div className="h-[55px] flex items-center font-medium text-text-tertiary text-sm">46.4%</div>
      <div className="h-[55px] flex items-center font-medium text-text-tertiary text-sm">18.8%</div>
      <div className="h-[55px] flex items-center font-medium text-text-tertiary text-sm">7.1%</div>
    </div>
  </div>
);

const DonutChart = () => (
  <div className="flex w-full items-center justify-between">
    <div className="relative w-32 h-32 shrink-0">
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
        <div className="text-[10px] text-text-tertiary font-medium tracking-wider uppercase mt-1">ACTIVE<br/>STAGES</div>
      </div>
    </div>
    <div className="space-y-4 flex-1 pl-8">
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
);

const MiniLineChart = ({ data, color }: { data: any[], color: string }) => (
  <div className="h-full w-full">
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
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 shrink-0">
                <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                  <circle cx="50" cy="50" r="44" fill="none" stroke="var(--border-subtle)" strokeWidth="6" />
                  <circle cx="50" cy="50" r="44" fill="none" stroke="#059669" strokeWidth="6" strokeDasharray="276" strokeDashoffset="69" strokeLinecap="round" />
                </svg>
              </div>
              <div className="text-xl font-medium text-emerald-500">75%<br/><span className="text-[10px] text-text-tertiary tracking-wider uppercase leading-none">Goal</span></div>
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
          <div className="flex-1 flex flex-col items-start justify-center">
            <DonutChart />
          </div>
        </div>

        <div className="crm-card p-6 lg:col-span-2 flex flex-col h-[340px]">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-semibold text-text-primary">Lead Source Report</h2>
            <div className="flex items-center gap-4">
              <select className="bg-surface-raised border border-border-subtle text-[11px] font-medium text-text-secondary rounded-lg px-2 py-1.5 focus:outline-none appearance-none cursor-pointer hover:border-emerald-500/50 transition-colors hidden sm:block">
                <option>Made In Hawaii Enterprises — All Pipelines</option>
                <option>Made In Hawaii Enterprises — Sales Pipeline</option>
              </select>
              <button className="text-emerald-500 text-xs font-bold tracking-wider hover:text-emerald-400 flex items-center gap-1 uppercase transition-colors">
                <Download size={14} /> Export
              </button>
            </div>
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
          <div key={i} className="crm-card p-5 flex flex-col justify-between h-[100px] relative overflow-hidden">
            <div className="flex justify-between items-start w-full relative z-10">
              <div className="text-[10px] font-semibold text-text-tertiary uppercase tracking-wider">{stat.label}</div>
              {stat.trend && (
                <div className="text-[10px] font-bold text-emerald-500">{stat.trend}</div>
              )}
            </div>
            <div className="flex items-end justify-between mt-auto relative z-10">
              <div className="text-2xl font-light tracking-tight text-text-primary">{stat.value}</div>
              {stat.stars && (
                <div className="flex gap-0.5">
                  {[1,2,3,4,5].map(s => <Star key={s} size={12} className={s === 5 ? "text-emerald-500/30" : "text-emerald-500"} fill={s !== 5 ? "currentColor" : "none"} />)}
                </div>
              )}
            </div>
            {!stat.stars && (
              <div className="absolute bottom-0 right-0 w-[80px] h-[32px] opacity-60 pointer-events-none z-0">
                <MiniLineChart data={MOCK_CHART_DATA} color="#10b981" />
              </div>
            )}
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
