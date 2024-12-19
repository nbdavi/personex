import React from 'react';
import { GripVertical } from 'lucide-react';
import { EditorElement } from '../../types/editor';
import {
  TextElement,
  ImageElement,
  ButtonElement,
  DividerElement,
  SpacerElement
} from './elements';

interface DraggableElementProps {
  element: EditorElement;
  onChange: (updates: Partial<EditorElement>) => void;
}

const DraggableElement: React.FC<DraggableElementProps> = ({ element, onChange }) => {
  const renderElement = () => {
    switch (element.type) {
      case 'text':
        return (
          <TextElement
            content={element.content || ''}
            onChange={(content) => onChange({ content })}
          />
        );
      
      case 'image':
        return (
          <ImageElement
            content={element.content}
            onChange={(content) => onChange({ content })}
          />
        );
      
      case 'button':
        return (
          <ButtonElement
            content={element.content || ''}
            onChange={(content) => onChange({ content })}
          />
        );
      
      case 'divider':
        return <DividerElement />;
      
      case 'spacer':
        return <SpacerElement />;
      
      default:
        return null;
    }
  };

  return (
    <div className="relative group mb-4">
      <div className="opacity-0 group-hover:opacity-100 absolute -left-10 top-1/2 transform -translate-y-1/2 flex flex-col">
        <button className="p-1 hover:bg-gray-200 rounded mb-1">
          <GripVertical className="h-5 w-5 text-gray-400" />
        </button>
      </div>
      {renderElement()}
    </div>
  );
};

export default DraggableElement;