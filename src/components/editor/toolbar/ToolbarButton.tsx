import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ToolbarButtonProps {
  icon: LucideIcon;
  label: string;
  onClick: () => void;
}

const ToolbarButton: React.FC<ToolbarButtonProps> = ({ icon: Icon, label, onClick }) => {
  return (
    <button
      className="w-full p-3 hover:bg-gray-50 rounded-lg mb-2 flex flex-col items-center"
      onClick={onClick}
    >
      <Icon className="h-5 w-5 text-gray-600 mb-1" />
      <span className="text-xs text-gray-600">{label}</span>
    </button>
  );
};

export default ToolbarButton;