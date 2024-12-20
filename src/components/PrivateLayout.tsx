import React from 'react';
import Sidebar from './Sidebar';

interface PrivateLayoutProps {
  children: React.ReactNode;
}

const PrivateLayout: React.FC<PrivateLayoutProps> = ({ children }) => {
  return (
    <div className="flex h-screen">
      {/* Sidebar fixa */}
      <Sidebar />

      {/* Conteúdo dinâmico */}
      <div
        className="flex-grow p-8 transition-all duration-300 bg-gray-100"
        style={{ marginLeft: '4rem' }}
      >
        {children}
      </div>
    </div>
  );
};

export default PrivateLayout;
