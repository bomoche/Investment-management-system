import React from 'react';
import { NavLink } from 'react-router-dom';
import ROUTES from '../../constants/routes';

const navItems = [
  { path: ROUTES.PORTFOLIO, icon: 'pie_chart', label: 'Portfolio' },
  { path: ROUTES.WITHDRAW,  icon: 'payments',  label: 'Withdraw'  },
  { path: ROUTES.HISTORY,   icon: 'history',   label: 'History'   },
];

export default function TopBar() {
  return (
    <header className="bg-surface sticky top-0 z-50 border-b border-outline-variant">
      <div className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto h-20">

        <div className="flex items-center gap-base">
          <span className="material-symbols-outlined text-primary">account_balance</span>
          <span className="font-headline-lg text-headline-lg font-bold text-primary">AssetFlow</span>
        </div>

        <nav className="hidden md:flex gap-stack-md">
          {navItems.map(({ path, label }) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                `font-label-caps text-label-caps uppercase transition-colors duration-200 pb-1
                ${isActive
                  ? 'text-secondary font-bold border-b-2 border-secondary'
                  : 'text-on-surface-variant hover:text-primary'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-stack-sm">
          <span className="material-symbols-outlined text-primary">account_circle</span>
        </div>

      </div>
    </header>
  );
}