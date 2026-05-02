import React, { useState } from 'react';
import { Mail, Phone, Video, Search, MoreHorizontal, Reply, Forward, Star, CornerUpLeft } from 'lucide-react';
import { CONVERSATIONS } from '../data';

const getIcon = (type: string) => {
  switch (type) {
    case 'email': return <Mail size={16} />;
    case 'call': return <Phone size={16} />;
    case 'meeting': return <Video size={16} />;
    default: return <Mail size={16} />;
  }
};

export default function Conversations() {
  const [selectedConv, setSelectedConv] = useState(CONVERSATIONS[0]);

  return (
    <div className="h-full flex flex-col max-w-7xl mx-auto">
      <div className="mb-6 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-semibold text-text-primary">Conversations</h1>
          <p className="text-sm text-text-tertiary mt-1">Manage all multi-channel communications</p>
        </div>
        <button className="bg-emerald-500 hover:bg-emerald-400 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all emerald-glow">
          New Message
        </button>
      </div>

      <div className="crm-card flex-1 flex overflow-hidden">
        
        {/* Left Panel - List */}
        <div className="w-[350px] border-r border-border-subtle flex flex-col bg-surface-raised/10">
          <div className="p-4 border-b border-border-subtle">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-text-tertiary" size={16} />
              <input 
                type="text" 
                placeholder="Search messages..." 
                className="w-full bg-surface-card border border-border-subtle text-text-primary text-sm rounded-lg pl-9 pr-4 py-2 focus:outline-none focus:border-emerald-500/50 transition-colors placeholder:text-text-tertiary"
              />
            </div>
          </div>
          
          <div className="flex-1 overflow-y-auto">
            {CONVERSATIONS.map(conv => (
              <div 
                key={conv.id}
                onClick={() => setSelectedConv(conv)}
                className={`p-4 border-b border-border-subtle cursor-pointer transition-colors ${selectedConv.id === conv.id ? 'bg-surface-raised border-l-2 border-l-emerald-500' : 'hover:bg-surface-raised/50 border-l-2 border-l-transparent'}`}
              >
                <div className="flex justify-between items-start mb-1">
                  <div className={`font-medium ${conv.unread ? 'text-text-primary' : 'text-text-secondary'}`}>
                    {conv.contact}
                  </div>
                  <div className="text-xs text-text-tertiary">{conv.time}</div>
                </div>
                <div className="text-sm font-medium text-text-primary mb-1 truncate">
                  {conv.subject}
                </div>
                <div className="flex items-center gap-2 text-xs text-text-tertiary">
                  <span className={conv.type === 'email' ? 'text-emerald-500' : 'text-text-tertiary'}>
                    {getIcon(conv.type)}
                  </span>
                  <span className="truncate">{conv.preview}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Panel - Thread */}
        <div className="flex-1 flex flex-col bg-surface-base/30">
          {selectedConv ? (
            <>
              {/* Thread Header */}
              <div className="p-6 border-b border-border-subtle flex justify-between items-start bg-surface-card/50">
                <div>
                  <h2 className="text-xl font-semibold text-text-primary mb-2">{selectedConv.subject}</h2>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-surface-raised border border-border-subtle flex items-center justify-center text-[10px] font-semibold text-text-secondary">
                      {selectedConv.contact.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <div className="font-medium text-sm text-text-primary">{selectedConv.contact}</div>
                      <div className="text-xs text-text-tertiary">to me</div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button className="p-2 text-text-tertiary hover:text-text-primary hover:bg-surface-raised rounded-md transition-colors">
                    <Star size={18} />
                  </button>
                  <button className="p-2 text-text-tertiary hover:text-text-primary hover:bg-surface-raised rounded-md transition-colors">
                    <MoreHorizontal size={18} />
                  </button>
                </div>
              </div>

              {/* Thread Content */}
              <div className="flex-1 p-6 overflow-y-auto">
                <div className="text-sm text-text-secondary leading-relaxed space-y-4">
                  <p>Hi there,</p>
                  <p>{selectedConv.preview}</p>
                  <p>Looking forward to hearing from you. Let me know if you need any additional information from our side before proceeding.</p>
                  <p>Best regards,<br/>{selectedConv.contact}</p>
                </div>
              </div>

              {/* Thread Actions */}
              <div className="p-4 border-t border-border-subtle bg-surface-card">
                <div className="flex gap-2">
                  <button className="flex items-center gap-2 px-4 py-2 bg-surface-raised hover:bg-surface-raised/80 text-text-primary text-sm font-medium rounded-lg transition-colors border border-border-subtle">
                    <CornerUpLeft size={16} /> Reply
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 bg-surface-raised hover:bg-surface-raised/80 text-text-primary text-sm font-medium rounded-lg transition-colors border border-border-subtle">
                    <Forward size={16} /> Forward
                  </button>
                </div>
              </div>
            </>
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
