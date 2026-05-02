export const PENDING_TASKS = [
  { id: 1, type: 'PROPOSAL', title: 'Finalize contract for TechNova Inc.', due: 'Due in 2h', initials: ['JD', 'MK'] },
  { id: 2, type: 'FOLLOW-UP', title: 'Call David regarding Q3 budget', due: 'Overdue', overdue: true, initials: ['SL'] }
];

export const LEAD_SOURCES = [
  { channel: 'Organic Search', icon: 'globe', total: '1,204', conv: '8.2%', trend: '+12%', up: true },
  { channel: 'Paid Search', icon: 'target', total: '842', conv: '14.1%', trend: '-3%', up: false },
  { channel: 'Social Media', icon: 'share', total: '2,410', conv: '5.9%', trend: '+24%', up: true }
];

export const MINI_STATS = [
  { label: 'WEB SESSIONS', value: '12.4k', trend: '+4.2%' },
  { label: 'PROFILE CLICKS', value: '842', trend: '+1.8%' },
  { label: 'CALL VOLUME', value: '156', trend: '+5%' },
  { label: 'REVIEW SCORE', value: '4.9', stars: true }
];

export const MOCK_CHART_DATA = [
  { time: '1', value: 30 }, { time: '2', value: 32 }, { time: '3', value: 35 },
  { time: '4', value: 45 }, { time: '5', value: 55 }, { time: '6', value: 68 },
  { time: '7', value: 72 }, { time: '8', value: 85 }, { time: '9', value: 95 }
];

export const PIPELINE_DEALS = [
  { id: 'd1', company: 'GlobalTech Ltd', contact: 'Sarah Jenkins', value: 45000, owner: 'JD', days: 2, stage: 'new' },
  { id: 'd2', company: 'InnovateSpace', contact: 'Alex Rivera', value: 12000, owner: 'SL', days: 5, stage: 'new' },
  { id: 'd3', company: 'Nexus Industries', contact: 'Michael Chang', value: 85000, owner: 'MK', days: 12, stage: 'qualified' },
  { id: 'd4', company: 'Quantum Corp', contact: 'David Miller', value: 24000, owner: 'JD', days: 8, stage: 'qualified' },
  { id: 'd5', company: 'TechNova Inc.', contact: 'James Wilson', value: 115000, owner: 'MK', days: 3, stage: 'proposal' },
  { id: 'd6', company: 'Starlight Media', contact: 'Emma Stone', value: 65000, owner: 'SL', days: 14, stage: 'negotiation' },
  { id: 'd7', company: 'Evergreen Logistics', contact: 'Olivia Parker', value: 32000, owner: 'JD', days: 1, stage: 'negotiation' },
  { id: 'd8', company: 'Apex Partners', contact: 'Rachel Green', value: 210000, owner: 'MK', days: 45, stage: 'closed' },
  { id: 'd9', company: 'Sunburst Energy', contact: 'Daniel Cole', value: 15000, owner: 'SL', days: 10, stage: 'closed' },
];

export const CUSTOMERS = [
  { id: 'c1', company: 'GlobalTech Ltd', contact: 'Sarah Jenkins', stage: 'Onboarding', value: '$45,000', activity: '2h ago', owner: 'JD', status: 'Active' },
  { id: 'c2', company: 'Nexus Industries', contact: 'Michael Chang', stage: 'Active', value: '$85,000', activity: '1d ago', owner: 'MK', status: 'Active' },
  { id: 'c3', company: 'Starlight Media', contact: 'Emma Stone', stage: 'At Risk', value: '$65,000', activity: '2w ago', owner: 'SL', status: 'Warning' },
  { id: 'c4', company: 'Quantum Corp', contact: 'David Miller', stage: 'Active', value: '$24,000', activity: '5h ago', owner: 'JD', status: 'Active' },
  { id: 'c5', company: 'Apex Partners', contact: 'Rachel Green', stage: 'Renewal', value: '$210,000', activity: '1d ago', owner: 'MK', status: 'Active' },
];

export const CONTACTS = [
  { id: 'cnt1', name: 'Sarah Jenkins', company: 'GlobalTech Ltd', role: 'VP Engineering', email: 'sarah.j@globaltech.com', phone: '+1 (555) 123-4567', lastContact: '2h ago', score: 92, initials: 'SJ' },
  { id: 'cnt2', name: 'Michael Chang', company: 'Nexus Industries', role: 'CTO', email: 'm.chang@nexus.io', phone: '+1 (555) 987-6543', lastContact: '1d ago', score: 85, initials: 'MC' },
  { id: 'cnt3', name: 'Emma Stone', company: 'Starlight Media', role: 'Marketing Director', email: 'emma@starlight.media', phone: '+1 (555) 456-7890', lastContact: '2w ago', score: 45, initials: 'ES' },
  { id: 'cnt4', name: 'David Miller', company: 'Quantum Corp', role: 'COO', email: 'david.m@quantum.co', phone: '+1 (555) 234-5678', lastContact: '5h ago', score: 78, initials: 'DM' },
  { id: 'cnt5', name: 'Rachel Green', company: 'Apex Partners', role: 'CEO', email: 'rachel@apexpartners.com', phone: '+1 (555) 876-5432', lastContact: '1d ago', score: 95, initials: 'RG' },
];

export const CONVERSATIONS = [
  { id: 'conv1', contact: 'Sarah Jenkins', subject: 'Re: Technical Requirements', preview: 'Thanks for the document. We will review it and get back to you next week.', time: '10:45 AM', type: 'email', unread: true },
  { id: 'conv2', contact: 'Michael Chang', subject: 'Q3 Roadmap Discussion', preview: 'Great meeting today. Attached are the slides we reviewed.', time: 'Yesterday', type: 'meeting', unread: false },
  { id: 'conv3', contact: 'David Miller', subject: 'Quick question about pricing', preview: 'Can you clarify the enterprise tier volume discounts?', time: 'Mon', type: 'email', unread: false },
  { id: 'conv4', contact: 'Emma Stone', subject: 'Check-in Call', preview: 'Left a voicemail regarding the upcoming renewal.', time: 'Last Week', type: 'call', unread: false },
];
