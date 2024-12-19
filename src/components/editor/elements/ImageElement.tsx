import React from 'react';

interface ImageElementProps {
  content?: string;
  onChange: (content: string) => void;
}

const ImageElement: React.FC<ImageElementProps> = ({ content }) => {
  return (
    <div className="relative group">
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