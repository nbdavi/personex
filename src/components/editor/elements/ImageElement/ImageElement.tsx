import React from 'react';
import { useImageElement } from './useImageElement';
import { ImageElementProps } from './types';

const ImageElement: React.FC<ImageElementProps> = ({ content, onChange }) => {
  const { handleImageClick } = useImageElement({ onChange });

  return (
    <div className="relative group" onClick={handleImageClick}>
      {content ? (
        <img
          src={content}
          alt=""
          className="max-w-full"
        />
      ) : (
        <div className="h-32 bg-gray-100 flex items-center justify-center border-2 border-dashed border-gray-300 rounded-md">
          <span className="text-gray-500">Click to add image</span>
        </div>
      )}
    </div>
  );
};

export default ImageElement;