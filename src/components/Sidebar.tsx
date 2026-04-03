import { Link, useLocation } from 'react-router-dom';
import { Video, Home, Calendar, Film, Settings, LogOut } from 'lucide-react';
import { cn } from '../lib/utils';

export default function Sidebar() {
  const location = useLocation();

  const navItems = [
    { icon: Home, label: 'Home', path: '/dashboard' },
    { icon: Calendar, label: 'Meetings', path: '/schedule' },
    { icon: Film, label: 'Recordings', path: '/recordings' },
    { icon: Settings, label: 'Settings', path: '/settings' },
  ];

  return (
    <aside className="w-64 bg-surface-container-lowest flex flex-col h-screen sticky top-0 shadow-sm z-10">
      <div className="p-6">
        <Link to="/dashboard" className="flex items-center gap-2 text-primary font-headline font-bold text-xl">
          <div className="bg-primary text-on-primary p-1.5 rounded-lg">
            <Video size={20} />
          </div>
          Fluid
        </Link>
      </div>

      <nav className="flex-1 px-4 space-y-1 mt-4">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors",
                isActive 
                  ? "bg-primary/10 text-primary" 
                  : "text-on-surface-variant hover:bg-surface-container hover:text-on-surface"
              )}
            >
              <item.icon size={18} className={isActive ? "text-primary" : "text-on-surface-variant"} />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="p-4 bg-surface-container-lowest mt-auto">
        <div className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-surface-container transition-colors cursor-pointer">
          <img 
            src="https://i.pravatar.cc/150?u=a042581f4e29026704d" 
            alt="User" 
            className="w-10 h-10 rounded-full"
          />
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-on-surface truncate">Alex Morgan</p>
            <p className="text-xs text-on-surface-variant truncate">alex@example.com</p>
          </div>
          <LogOut size={16} className="text-on-surface-variant" />
        </div>
      </div>
    </aside>
  );
}
