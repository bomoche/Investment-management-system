import React from 'react';

const navItems = [
  { tab: 'portfolio', icon: 'pie_chart', label: 'Portfolio' },
  { tab: 'withdraw',  icon: 'payments',  label: 'Withdraw'  },
  { tab: 'history',   icon: 'history',   label: 'History'   },
];

export default function BottomNav({ activeTab, onTabChange }) {
  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-surface border-t border-outline-variant flex justify-around py-base z-50">
      {navItems.map(({ tab, icon, label }) => (
        <button
          key={tab}
          onClick={() => onTabChange(tab)}
          className={`flex flex-col items-center p-2 transition-colors
            ${activeTab === tab ? 'text-secondary' : 'text-on-surface-variant'}`}
        >
          <span className="material-symbols-outlined">{icon}</span>
          <span className="text-[10px] font-bold uppercase mt-1">{label}</span>
        </button>
      ))}
    </nav>
  );
}