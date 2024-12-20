import React from 'react';
import { NavLink } from 'react-router-dom';
import { Map, Info, MessageSquare, Package, Users } from 'lucide-react';

const Navigation = ({ mobile = false }) => {
  const navItems = [
    { to: '/match', icon: Map, label: '施設検索' },
    { to: '/info', icon: Info, label: '育児情報' },
    { to: '/contact', icon: MessageSquare, label: '連絡帳' },
    { to: '/rental', icon: Package, label: '用品レンタル' },
    { to: '/community', icon: Users, label: '子育て仲間' },
  ];

  const baseClasses = mobile
    ? 'block px-4 py-2 text-base font-medium'
    : 'inline-flex items-center px-3 py-2 text-sm font-medium';

  const activeClasses = 'text-rose-500';
  const inactiveClasses = 'text-gray-600 hover:text-gray-900';

  return (
    <nav className={mobile ? 'px-2 pb-3 pt-2' : 'flex space-x-4'}>
      {navItems.map(({ to, icon: Icon, label }) => (
        <NavLink
          key={to}
          to={to}
          className={({ isActive }) =>
            `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`
          }
        >
          <Icon className={`${mobile ? 'mr-3' : 'mr-1.5'} h-5 w-5`} />
          {label}
        </NavLink>
      ))}
    </nav>
  );
};

export default Navigation;
