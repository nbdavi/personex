import React from 'react';

interface TextElementProps {
  content: string;
  onChange: (content: string) => void;
}

const TextElement: React.FC<TextElementProps> = ({ content, onChange }) => {
  return (
    <div
      contentEditable
      suppressContentEditableWarning
      className="min-h-[1em] outline-none"
      onBlur={(e) => onChange(e.currentTarget.textContent || '')}
    >
      {content}
    </div>
  );
};

export default TextElement;