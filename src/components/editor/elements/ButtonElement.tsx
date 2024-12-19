import React from 'react';
import { buttonVariants } from '../../../utils/styles';

interface ButtonElementProps {
  content: string;
  onChange: (content: string) => void;
}

const ButtonElement: React.FC<ButtonElementProps> = ({ content, onChange }) => {
  return (
    <button
      className={buttonVariants.primary}
      contentEditable
      suppressContentEditableWarning
      onBlur={(e) => onChange(e.currentTarget.textContent || '')}
    >
      {content}
    </button>
  );
};

export default ButtonElement;