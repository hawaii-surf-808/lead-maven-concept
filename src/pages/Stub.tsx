import React from 'react';
import { 
  CreditCard, Megaphone, Zap, Star, LayoutTemplate, ShieldCheck 
} from 'lucide-react';

const icons: Record<string, any> = {
  Payments: CreditCard,
  Marketing: Megaphone,
  Automation: Zap,
  Reputation: Star,
  Sites: LayoutTemplate,
  Memberships: ShieldCheck
};

const content: Record<string, { desc: string, points: string[] }> = {
  Payments: {
    desc: "Streamline your billing and revenue collection.",
    points: [
      "Send customizable invoices and tracking links",
      "Set up recurring subscriptions and payment plans",
      "Integrate directly with Stripe and PayPal"
    ]
  },
  Marketing: {
    desc: "Run multi-channel campaigns from one place.",
    points: [
      "Design advanced email marketing workflows",
      "Schedule social media posts across platforms",
      "Track campaign ROI and conversion metrics"
    ]
  },
  Automation: {
    desc: "Put your repetitive tasks on autopilot.",
    points: [
      "Build complex drag-and-drop logic builders",
      "Trigger actions based on customer behavior",
      "Sync data automatically between your favorite apps"
    ]
  },
  Reputation: {
    desc: "Manage and grow your online presence.",
    points: [
      "Send automated review requests to happy customers",
      "Monitor multiple review sites from a single dashboard",
      "Respond to feedback directly within the CRM"
    ]
  },
  Sites: {
    desc: "Build high-converting funnels and pages.",
    points: [
      "Launch stunning landing pages with the block editor",
      "A/B test different variations for maximum conversion",
      "Host custom domains with automatic SSL"
    ]
  },
  Memberships: {
    desc: "Monetize your knowledge with gated content.",
    points: [
      "Create video courses and digital products",
      "Manage subscriber access and billing tiers",
      "Track student progress and engagement"
    ]
  }
};

export default function Stub({ pageName }: { pageName: string }) {
  const Icon = icons[pageName] || LayoutTemplate;
  const data = content[pageName] || {
    desc: "This module is under active development.",
    points: [
      "New features are actively being built for this section",
      "Integration with core CRM data is expected soon",
      "Performance improvements and new layouts incoming"
    ]
  };

  return (
    <div className="h-full flex flex-col items-center justify-center max-w-[800px] mx-auto text-center">
      <div className="crm-card p-12 flex flex-col items-center w-full relative overflow-hidden">
        
        {/* Glow Background */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-48 bg-emerald-500/10 blur-3xl pointer-events-none rounded-full"></div>
        
        <div className="w-20 h-20 rounded-2xl bg-surface-raised border border-border-strong flex items-center justify-center mb-8 text-emerald-500 shadow-xl relative z-10">
          <Icon size={40} strokeWidth={1.5} />
        </div>
        
        <h1 className="text-3xl font-semibold text-text-primary tracking-tight mb-2 relative z-10">{pageName}</h1>
        <p className="text-text-tertiary mb-10 text-lg relative z-10">This module is under active development</p>
        
        <div className="text-left w-full max-w-[400px] mb-10 relative z-10">
          <p className="text-sm font-medium text-text-secondary mb-4 uppercase tracking-wider">{data.desc}</p>
          <ul className="space-y-4">
            {data.points.map((point, i) => (
              <li key={i} className="flex items-start gap-3">
                <div className="mt-0.5 w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0" />
                <span className="text-sm text-text-primary leading-relaxed">{point}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <button className="bg-emerald-500 hover:bg-emerald-400 text-white px-8 py-3 rounded-lg font-medium transition-all emerald-glow relative z-10">
          Join the Waitlist
        </button>
      </div>
    </div>
  );
}
