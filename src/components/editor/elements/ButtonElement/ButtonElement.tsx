import React from 'react';
import { useButtonElement } from './useButtonElement';
import { ButtonElementProps } from './types';
import { buttonVariants } from '../../../../utils/styles';

const ButtonElement: React.FC<ButtonElementProps> = ({ content, onChange }) => {
  const { handleBlur } = useButtonElement({ onChange });

  return (
    <button
      className={buttonVariants.primary}
      contentEditable
      suppressContentEditableWarning
      onBlur={handleBlur}
    >
      {content}
    </button>
  );
};

export default ButtonElement;