import React from 'react';
import { EmailContent, EditorElement } from '../../types/editor';
import DraggableElement from './DraggableElement';

interface EditorCanvasProps {
  content: EmailContent;
  onChange: (content: EmailContent) => void;
}

const EditorCanvas: React.FC<EditorCanvasProps> = ({ content, onChange }) => {
  const handleElementUpdate = (elementId: string, updates: Partial<EditorElement>) => {
    const newElements = content.elements.map(element =>
      element.id === elementId ? { ...element, ...updates } : element
    );
    onChange({ ...content, elements: newElements });
  };

  return (
    <div className="flex-1 bg-gray-100 overflow-auto p-8">
      <div
        style={{
          width: `${content.settings.width}px`,
          margin: '0 auto',
          backgroundColor: content.settings.backgroundColor,
          padding: `${content.settings.padding}px`,
        }}
        className="min-h-[600px] shadow-lg"
      >
        {content.elements.map((element) => (
          <DraggableElement
            key={element.id}
            element={element}
            onChange={(updates) => handleElementUpdate(element.id, updates)}
          />
        ))}
      </div>
    </div>
  );
};

export default EditorCanvas;