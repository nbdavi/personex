import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Home, Mail, BarChart, LogOut, Users, Settings } from 'lucide-react';

interface SidebarProps {
  onToggle: (isExpanded: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onToggle }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleMouseEnter = () => {
    setIsExpanded(true);
    onToggle(true); // Informa que a sidebar está expandida
  };

  const handleMouseLeave = () => {
    setIsExpanded(false);
    onToggle(false); // Informa que a sidebar está colapsada
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`h-screen bg-gray-800 text-white fixed top-0 left-0 transition-all duration-300 ${
        isExpanded ? 'w-64' : 'w-16'
      }`}
    >
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="flex items-center justify-center h-16 border-b border-gray-700">
          <span className="text-lg font-bold">{isExpanded ? 'Dashboard' : 'AI'}</span>
        </div>

        {/* Menu Items */}
        <nav className="flex-grow">
          <ul className="space-y-4 mt-4">
            <li>
              <Link
                to="/dashboard"
                className="flex items-center space-x-4 px-4 py-2 hover:bg-gray-700 rounded-md"
              >
                <Home className="w-6 h-6" />
                {isExpanded && <span>Dashboard</span>}
              </Link>
            </li>
            <li>
              <Link
                to="/campaigns"
                className="flex items-center space-x-4 px-4 py-2 hover:bg-gray-700 rounded-md"
              >
                <Mail className="w-6 h-6" />
                {isExpanded && <span>Campaigns</span>}
              </Link>
            </li>
            <li>
              <Link
                to="/analytics"
                className="flex items-center space-x-4 px-4 py-2 hover:bg-gray-700 rounded-md"
              >
                <BarChart className="w-6 h-6" />
                {isExpanded && <span>Analytics</span>}
              </Link>
            </li>
            <li>
              <Link
                to="/users"
                className="flex items-center space-x-4 px-4 py-2 hover:bg-gray-700 rounded-md"
              >
                <Users className="w-6 h-6" />
                {isExpanded && <span>Users</span>}
              </Link>
            </li>
            <li>
              <Link
                to="/settings"
                className="flex items-center space-x-4 px-4 py-2 hover:bg-gray-700 rounded-md"
              >
                <Settings className="w-6 h-6" />
                {isExpanded && <span>Settings</span>}
              </Link>
            </li>
          </ul>
        </nav>

        {/* Logout */}
        <div className="absolute bottom-0 w-full border-t border-gray-700">
          <Link
            to="/logout"
            className="flex items-center space-x-4 px-4 py-2 hover:bg-gray-700 rounded-md"
          >
            <LogOut className="w-6 h-6" />
            {isExpanded && <span>Logout</span>}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
