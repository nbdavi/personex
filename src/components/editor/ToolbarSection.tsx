import React from 'react';
import { Type, Image, Button as ButtonIcon, Minus, Maximize } from 'lucide-react';
import { EditorElement } from '../../types/editor';

interface ToolbarSectionProps {
  onAddElement: (element: EditorElement) => void;
}

const ToolbarSection: React.FC<ToolbarSectionProps> = ({ onAddElement }) => {
  const elements = [
    {
      type: 'text',
      icon: Type,
      label: 'Text',
      defaultContent: 'Add your text here',
    },
    {
      type: 'image',
      icon: Image,
      label: 'Image',
      defaultContent: '',
    },
    {
      type: 'button',
      icon: ButtonIcon,
      label: 'Button',
      defaultContent: 'Click Here',
    },
    {
      type: 'divider',
      icon: Minus,
      label: 'Divider',
    },
    {
      type: 'spacer',
      icon: Maximize,
      label: 'Spacer',
    },
  ];

  return (
    <div className="w-20 bg-white border-r border-gray-200 p-2">
      {elements.map((element) => (
        <button
          key={element.type}
          className="w-full p-3 hover:bg-gray-50 rounded-lg mb-2 flex flex-col items-center"
          onClick={() => onAddElement({
            id: crypto.randomUUID(),
            type: element.type,
            content: element.defaultContent,
          })}
        >
          <element.icon className="h-5 w-5 text-gray-600 mb-1" />
          <span className="text-xs text-gray-600">{element.label}</span>
        </button>
      ))}
    </div>
  );
};

export default ToolbarSection;