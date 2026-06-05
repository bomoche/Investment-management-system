import React from 'react';

const navItems = [
  { tab: 'portfolio', icon: 'pie_chart', label: 'Portfolio' },
  { tab: 'withdraw',  icon: 'payments',  label: 'Withdraw'  },
  { tab: 'history',   icon: 'history',   label: 'History'   },
];

export default function Sidebar({ activeTab, onTabChange }) {
  return (
    <aside className="hidden md:flex fixed left-0 top-20 h-[calc(100vh-80px)] w-72 bg-surface border-r border-outline-variant flex-col p-stack-md z-40">
      <div className="mb-stack-lg">
        <p className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest mb-base">
          Management
        </p>
        <h2 className="font-headline-md text-headline-md font-bold text-primary">Investment Manager</h2>
      </div>

      <nav className="flex flex-col gap-base">
        {navItems.map(({ tab, icon, label }) => (
          <button
            key={tab}
            onClick={() => onTabChange(tab)}
            className={`flex items-center gap-base p-stack-sm rounded-lg transition-all text-left
              ${activeTab === tab
                ? 'bg-secondary-container text-on-secondary-container font-semibold translate-x-1'
                : 'text-on-surface-variant hover:bg-surface-container-highest'
              }`}
          >
            <span className="material-symbols-outlined">{icon}</span>
            <span className="font-body-md text-body-md">{label}</span>
          </button>
        ))}
      </nav>
    </aside>
  );
}