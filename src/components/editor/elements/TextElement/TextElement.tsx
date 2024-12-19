import React from 'react';
import { useTextElement } from './useTextElement';
import { TextElementProps } from './types';

const TextElement: React.FC<TextElementProps> = ({ content, onChange }) => {
  const { handleBlur } = useTextElement({ onChange });

  return (
    <div
      contentEditable
      suppressContentEditableWarning
      className="min-h-[1em] outline-none"
      onBlur={handleBlur}
    >
      {content}
    </div>
  );
};

export default TextElement;