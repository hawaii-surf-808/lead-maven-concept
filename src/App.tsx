import React, { useState, useEffect } from 'react';
import { 
  Activity, Grid, GitMerge, Users, MessageSquare, Contact, 
  Briefcase, BarChart2, Settings, HelpCircle, 
  Search, Plus, Bell, X, Menu, Sun, Moon
} from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';

// Pages
import Overview from './pages/Overview';
import Pipeline from './pages/Pipeline';
import Customers from './pages/Customers';
import Contacts from './pages/Contacts';
import Conversations from './pages/Conversations';
import Reports from './pages/Reports';

const SidebarItem = ({ icon: Icon, label, active = false, onClick }: { icon: any, label: string, active?: boolean, onClick: () => void }) => (
  <button 
    onClick={onClick}
    className={`flex w-full items-center gap-3 px-4 py-2.5 rounded-lg mb-1 transition-colors ${
    active 
      ? 'bg-emerald-500/10 text-emerald-500 font-medium' 
      : 'text-text-secondary hover:bg-surface-raised hover:text-text-primary'
  }`}>
    <Icon className="w-5 h-5" />
    <span>{label}</span>
  </button>
);

export default function App() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') !== 'light';
    }
    return true;
  });
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activePage, setActivePage] = useState('Overview');

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const renderPage = () => {
    switch (activePage) {
      case 'Overview': return <Overview />;
      case 'Dashboard': return <Overview />;
      case 'Pipeline': return <Pipeline />;
      case 'Customers': return <Customers />;
      case 'Contacts': return <Contacts />;
      case 'Conversations': return <Conversations />;
      case 'Opportunities': return <Pipeline />;
      case 'Reports': return <Reports />;
      default: return <Overview />;
    }
  };

  const navItems1 = [
    { label: 'Overview', icon: Activity },
    { label: 'Pipeline', icon: GitMerge },
    { label: 'Customers', icon: Users },
  ];

  const navItems2 = [
    { label: 'Conversations', icon: MessageSquare },
    { label: 'Contacts', icon: Contact },
    { label: 'Reports', icon: BarChart2 },
  ];

  return (
    <div className="min-h-screen bg-surface-base dot-grid flex overflow-hidden transition-colors duration-300">
      
      {/* Overlay for mobile sidebar */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 z-50 w-64 border-r border-border-subtle bg-surface-base flex flex-col transition-transform duration-300 lg:relative lg:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="h-20 flex items-center px-6 border-b border-border-subtle">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-emerald-500/20 text-emerald-500 flex items-center justify-center font-bold text-xl">
              L
            </div>
            <div>
              <div className="font-semibold text-text-primary tracking-tight text-lg">Lead Maven</div>
              <div className="text-[9px] uppercase tracking-widest text-text-tertiary">CRM Platform</div>
            </div>
          </div>
          <button className="ml-auto lg:hidden text-text-secondary" onClick={() => setSidebarOpen(false)}>
            <X size={20}/>
          </button>
        </div>
        
        <div className="flex-1 overflow-y-auto p-4 py-6">
          <div className="space-y-6">
            <div>
              {navItems1.map(item => (
                <SidebarItem 
                  key={item.label} 
                  icon={item.icon} 
                  label={item.label} 
                  active={activePage === item.label} 
                  onClick={() => { setActivePage(item.label); setSidebarOpen(false); }} 
                />
              ))}
            </div>
            <div>
              {navItems2.map(item => (
                <SidebarItem 
                  key={item.label} 
                  icon={item.icon} 
                  label={item.label} 
                  active={activePage === item.label} 
                  onClick={() => { setActivePage(item.label); setSidebarOpen(false); }} 
                />
              ))}
            </div>
          </div>
        </div>

        <div className="p-4 border-t border-border-subtle">
          <SidebarItem icon={Settings} label="Settings" onClick={() => {}} />
          <SidebarItem icon={HelpCircle} label="Help" onClick={() => {}} />
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0 h-screen overflow-hidden relative">
        
        {/* Top Header */}
        <header className="h-20 flex items-center justify-between px-6 lg:px-10 border-b border-border-subtle bg-surface-base/80 backdrop-blur-md sticky top-0 z-30">
          <div className="flex items-center gap-4 flex-1">
            <button className="lg:hidden text-text-secondary" onClick={() => setSidebarOpen(true)}>
              <Menu size={24} />
            </button>
            <div className="relative max-w-md w-full hidden sm:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-text-tertiary" size={18} />
              <input 
                type="text" 
                placeholder="Global Command Search..." 
                className="w-full bg-surface-raised border border-border-subtle text-text-primary text-sm rounded-full pl-10 pr-4 py-2 focus:outline-none focus:border-emerald-500/50 transition-colors placeholder:text-text-tertiary"
              />
            </div>
          </div>

          <div className="flex items-center gap-6">
            {/* Theme Toggle */}
            <button 
              onClick={() => setIsDark(!isDark)}
              className="text-text-tertiary hover:text-text-primary transition-colors flex items-center justify-center p-2 rounded-full hover:bg-surface-raised"
              title="Toggle Theme"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            
            <button className="bg-emerald-500 hover:bg-emerald-400 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 emerald-glow transition-all">
              <Plus size={16} />
              <span className="hidden sm:inline">Quick Add</span>
            </button>

            <button className="relative text-text-secondary hover:text-text-primary">
              <Bell size={20} />
              <span className="absolute 0 right-0 w-2 h-2 bg-rose-500 rounded-full ring-2 ring-surface-base"></span>
            </button>

            <div className="w-9 h-9 rounded-full bg-surface-raised border border-border-subtle overflow-hidden cursor-pointer shrink-0">
              <img src="https://i.pravatar.cc/150?u=nexus_admin" alt="User Avatar" className="w-full h-full object-cover" />
            </div>
          </div>
        </header>

        {/* Scrollable Dashboard / Replaced Page */}
        <div className="flex-1 overflow-y-auto p-6 lg:p-10 scroll-smooth">
          <AnimatePresence mode="wait">
            <motion.div
              key={activePage}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="h-full"
            >
              {renderPage()}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}
