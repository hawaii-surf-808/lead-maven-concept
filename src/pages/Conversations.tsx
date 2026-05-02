import React, { useState } from 'react';
import { Mail, Phone, Video, Search, MoreHorizontal, Reply, Forward, Star, CornerUpLeft, MessageSquare, Calendar, UserSquare, Paperclip, Smile, Send } from 'lucide-react';
import { CONVERSATIONS } from '../data';

const getChannelIcon = (type: string) => {
  switch (type) {
    case 'email': return <Mail size={14} />;
    case 'call': return <Phone size={14} />;
    case 'meeting': return <Video size={14} />;
    case 'sms': return <MessageSquare size={14} />;
    default: return <Mail size={14} />;
  }
};

const getChannelColor = (type: string) => {
  switch (type) {
    case 'email': return 'bg-blue-500/10 text-blue-500 border-blue-500/20';
    case 'sms': return 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20';
    case 'call': return 'bg-amber-500/10 text-amber-500 border-amber-500/20';
    case 'meeting': return 'bg-purple-500/10 text-purple-500 border-purple-500/20';
    default: return 'bg-blue-500/10 text-blue-500 border-blue-500/20';
  }
};

export default function Conversations() {
  const [selectedConv, setSelectedConv] = useState<any>(null);
  const [activeTab, setActiveTab] = useState('All');

  const tabs = ['All', 'Email', 'SMS', 'Calls', 'Meetings'];

  return (
    <div className="h-full flex flex-col max-w-7xl mx-auto">
      <div className="mb-6 flex flex-col sm:flex-row sm:justify-between sm:items-start sm:items-center gap-4 shrink-0">
        <div>
          <h1 className="text-2xl font-semibold text-text-primary">Conversations</h1>
          <p className="text-sm text-text-tertiary mt-1">Manage all multi-channel communications</p>
        </div>
        <button className="bg-emerald-500 hover:bg-emerald-400 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all emerald-glow w-full sm:w-auto">
          New Message
        </button>
      </div>

      <div className="crm-card flex-1 flex flex-col md:flex-row overflow-hidden shadow-sm border border-border-subtle min-h-0">
        
        {/* Left Panel - List */}
        <div className={`w-full md:w-[35%] md:min-w-[300px] border-r border-black/[0.08] dark:border-border-subtle flex-col bg-[#ffffff] dark:bg-surface-card ${selectedConv ? 'hidden md:flex' : 'flex'}`}>
          <div className="p-4 border-b border-black/[0.06] dark:border-border-subtle shrink-0">
            <div className="flex items-center gap-1 overflow-x-auto no-scrollbar mb-4">
               {tabs.map(tab => (
                 <button 
                   key={tab}
                   onClick={() => setActiveTab(tab)}
                   className={`px-3 py-1.5 rounded-full text-[11px] font-bold transition-colors uppercase tracking-wider whitespace-nowrap ${activeTab === tab ? 'bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 shadow-sm' : 'text-text-tertiary hover:text-text-secondary border border-transparent'}`}
                 >
                   {tab}
                 </button>
               ))}
            </div>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-text-tertiary" size={16} />
              <input 
                type="text" 
                placeholder="Search messages..." 
                className="w-full bg-surface-base dark:bg-surface-card border border-border-subtle text-text-primary text-sm rounded-lg pl-9 pr-4 py-2 focus:outline-none focus:border-emerald-500/50 transition-colors placeholder:text-text-tertiary shadow-sm"
              />
            </div>
          </div>
          
          <div className="flex-1 overflow-y-auto styled-scrollbar">
            {CONVERSATIONS.map((conv, idx) => {
              const isSelected = selectedConv?.id === conv.id;
              return (
              <div 
                key={conv.id}
                onClick={() => setSelectedConv(conv)}
                className={`h-20 px-4 py-3 cursor-pointer transition-colors border-b border-black/[0.06] dark:border-border-subtle relative group ${isSelected ? 'bg-surface-raised' : 'hover:bg-surface-raised'}`}
              >
                <div className={`absolute inset-y-0 left-0 w-[3px] bg-emerald-500 transition-opacity ${isSelected ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`} />
                <div className="flex gap-3 h-full">
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center border shrink-0 mt-1 ${getChannelColor(conv.type)}`}>
                    {getChannelIcon(conv.type)}
                  </div>
                  <div className="flex-1 min-w-0 flex flex-col justify-center">
                    <div className="flex justify-between items-start mb-0.5">
                      <div className={`font-bold text-[14px] truncate tracking-tight pr-2 ${conv.unread ? 'text-text-primary' : 'text-text-secondary'}`}>
                        {conv.contact}
                      </div>
                      <div className="flex items-center gap-1.5 shrink-0 mt-0.5">
                        {conv.unread && <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />}
                        <div className="text-[11px] font-medium text-text-tertiary uppercase tracking-wider">{conv.time}</div>
                      </div>
                    </div>
                    <div className="text-[13px] font-medium text-text-secondary truncate mb-0.5">
                      {conv.subject}
                    </div>
                    <div className="text-[12px] text-text-tertiary truncate">
                      {conv.preview}
                    </div>
                  </div>
                </div>
              </div>
            )})}
          </div>
        </div>

        {/* Right Panel - Thread */}
        <div className={`w-full md:w-[65%] flex-col bg-[#f4f5f7] dark:bg-surface-base ${selectedConv ? 'flex' : 'hidden md:flex'}`}>
          {selectedConv ? (
            <div className="flex-1 flex flex-col h-full min-h-0">
              {/* Thread Header */}
              <div className="p-4 md:p-6 border-b border-black/[0.06] dark:border-border-subtle bg-white dark:bg-surface-card shrink-0">
                <div className="flex justify-between items-start">
                  <div className="flex gap-3 md:gap-4 items-center">
                    <button onClick={() => setSelectedConv(null as any)} className="md:hidden p-2 -ml-2 text-text-tertiary">
                      <CornerUpLeft size={20} />
                    </button>
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full flex shrink-0 items-center justify-center text-[12px] md:text-[14px] font-bold border bg-emerald-500/10 text-emerald-500 border-emerald-500/20">
                      {selectedConv.contact.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-text-primary tracking-tight mb-0.5">{selectedConv.contact}</h2>
                      <div className="text-[13px] font-medium text-text-secondary">Made In Hawaii Enterprises</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="p-2 text-text-tertiary hover:text-emerald-500 hover:bg-emerald-500/10 rounded-md transition-colors">
                      <Star size={18} />
                    </button>
                    <button className="p-2 text-text-tertiary hover:text-emerald-500 hover:bg-emerald-500/10 rounded-md transition-colors">
                      <MoreHorizontal size={18} />
                    </button>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 mt-4 pt-4 border-t border-black/[0.04] dark:border-border-subtle">
                   <button className="p-1.5 text-text-tertiary hover:text-emerald-500 bg-surface-raised rounded-md transition-colors border border-border-subtle shadow-sm"><Phone size={14} /></button>
                   <button className="p-1.5 text-text-tertiary hover:text-emerald-500 bg-surface-raised rounded-md transition-colors border border-border-subtle shadow-sm"><Video size={14} /></button>
                   <button className="p-1.5 text-text-tertiary hover:text-emerald-500 bg-surface-raised rounded-md transition-colors border border-border-subtle shadow-sm"><Calendar size={14} /></button>
                   <button className="p-1.5 text-text-tertiary hover:text-emerald-500 bg-surface-raised rounded-md transition-colors border border-border-subtle shadow-sm"><UserSquare size={14} /></button>
                </div>
              </div>

              {/* Thread Content */}
              <div className="flex-1 p-6 overflow-y-auto styled-scrollbar">
                <div className="max-w-3xl mx-auto bg-white dark:bg-surface-card border border-black/[0.08] dark:border-border-subtle rounded-xl p-8 shadow-sm">
                   <h3 className="text-lg font-bold text-text-primary mb-6 pb-4 border-b border-black/[0.06] dark:border-border-subtle">{selectedConv.subject}</h3>
                   <div className="text-[14px] text-text-secondary leading-[1.7] space-y-6">
                     <div>
                       <p className="text-text-primary font-medium mb-1">Hi there,</p>
                       <p className="text-[11px] font-semibold text-text-tertiary uppercase tracking-wider">{selectedConv.time} • Today</p>
                     </div>
                     <p>{selectedConv.preview}</p>
                     <p>Looking forward to hearing from you. Let me know if you need any additional information from our side before proceeding. We are ready to move quickly once everything is aligned.</p>
                     <p className="pt-2">Best regards,<br/><span className="font-semibold text-text-primary">{selectedConv.contact}</span></p>
                   </div>
                </div>
              </div>

              {/* Thread Actions */}
              <div className="p-4 border-t border-black/[0.08] dark:border-border-subtle bg-white dark:bg-surface-card shrink-0">
                <div className="max-w-3xl mx-auto flex items-end gap-3 bg-surface-raised border border-border-subtle rounded-xl p-2 shadow-sm focus-within:border-emerald-500/50 transition-colors">
                  <div className="flex items-center gap-1 pb-1 px-2">
                    <button className="p-1.5 text-text-tertiary hover:text-text-secondary transition-colors"><Paperclip size={18} strokeWidth={2} /></button>
                    <button className="p-1.5 text-text-tertiary hover:text-text-secondary transition-colors"><Smile size={18} strokeWidth={2} /></button>
                  </div>
                  <textarea 
                    placeholder="Write a reply..." 
                    className="flex-1 bg-transparent border-none focus:outline-none text-sm text-text-primary placeholder:text-text-tertiary resize-none h-10 py-2.5 styled-scrollbar"
                  />
                  <button className="bg-emerald-500 hover:bg-emerald-400 text-white p-2.5 rounded-lg transition-colors shadow-sm mb-0.5 mr-0.5">
                    <Send size={16} strokeWidth={2} className="ml-0.5" />
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex-1 flex items-center justify-center text-text-tertiary text-sm">
              Select a conversation to view details
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
