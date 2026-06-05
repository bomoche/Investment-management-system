import React from 'react';

const tabs = ['portfolio', 'withdraw', 'history'];
const labels = { portfolio: 'Portfolio', withdraw: 'Withdraw', history: 'History' };

export default function TopBar({ activeTab, onTabChange }) {
  return (
    <header className="bg-surface sticky top-0 z-50 border-b border-outline-variant">
      <div className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto h-20">

        {/* Brand */}
        <div className="flex items-center gap-base">
          <span className="material-symbols-outlined text-primary">account_balance</span>
          <span className="font-headline-lg text-headline-lg font-bold text-primary">AssetFlow</span>
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-stack-md">
          {tabs.map(tab => (
            <button
              key={tab}
              onClick={() => onTabChange(tab)}
              className={`font-label-caps text-label-caps uppercase transition-colors duration-200 pb-1
                ${activeTab === tab
                  ? 'text-secondary font-bold border-b-2 border-secondary'
                  : 'text-on-surface-variant hover:text-primary'
                }`}
            >
              {labels[tab]}
            </button>
          ))}
        </nav>

        {/* Avatar icon */}
        <div className="flex items-center gap-stack-sm">
          <span className="material-symbols-outlined text-primary">account_circle</span>
        </div>

      </div>
    </header>
  );
}