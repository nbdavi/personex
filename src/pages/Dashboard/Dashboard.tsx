import React, { useState } from 'react';
import Sidebar from '../../components/Sidebar';

const Dashboard: React.FC = () => {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar onToggle={(isExpanded) => setIsSidebarExpanded(isExpanded)} />

      {/* Main Content */}
      <div
        className="dashboard-content flex-grow p-8 transition-all duration-300 bg-gray-100"
        style={{
          marginLeft: isSidebarExpanded ? '16rem' : '4rem', // Altera margem com base no estado da sidebar
        }}
      >
        <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
        <p>Welcome to your dashboard! Use the sidebar to navigate.</p>
      </div>
    </div>
  );
};

export default Dashboard;
