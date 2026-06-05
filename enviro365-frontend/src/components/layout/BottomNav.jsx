import React from 'react';
import { NavLink } from 'react-router-dom';
import ROUTES from '../../constants/routes';

const navItems = [
  { path: ROUTES.PORTFOLIO, icon: 'pie_chart', label: 'Portfolio' },
  { path: ROUTES.WITHDRAW,  icon: 'payments',  label: 'Withdraw'  },
  { path: ROUTES.HISTORY,   icon: 'history',   label: 'History'   },
];

export default function BottomNav() {
  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-surface border-t border-outline-variant flex justify-around py-base z-50">
      {navItems.map(({ path, icon, label }) => (
        <NavLink
          key={path}
          to={path}
          className={({ isActive }) =>
            `flex flex-col items-center p-2 transition-colors
            ${isActive ? 'text-secondary' : 'text-on-surface-variant'}`
          }
        >
          <span className="material-symbols-outlined">{icon}</span>
          <span className="text-[10px] font-bold uppercase mt-1">{label}</span>
        </NavLink>
      ))}
    </nav>
  );
}