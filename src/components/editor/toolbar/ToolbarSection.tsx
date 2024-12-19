import React from 'react';
import { EditorElement } from '../../../types/editor';
import ToolbarButton from './ToolbarButton';
import { TOOLBAR_ELEMENTS } from './constants';
import { createEditorElement } from '../../../utils/element';

interface ToolbarSectionProps {
  onAddElement: (element: EditorElement) => void;
}

const ToolbarSection: React.FC<ToolbarSectionProps> = ({ onAddElement }) => {
  return (
    <div className="w-20 bg-white border-r border-gray-200 p-2">
      {TOOLBAR_ELEMENTS.map((element) => (
        <ToolbarButton
          key={element.type}
          icon={element.icon}
          label={element.label}
          onClick={() => onAddElement(createEditorElement(element.type, element.defaultContent))}
        />
      ))}
    </div>
  );
};

export default ToolbarSection;