import React from 'react';
import { X } from 'lucide-react';
import { EmailContent } from '../../types/editor';

interface ElementSettingsProps {
  content: EmailContent;
  onChange: (content: EmailContent) => void;
  onClose: () => void;
}

const ElementSettings: React.FC<ElementSettingsProps> = ({
  content,
  onChange,
  onClose,
}) => {
  return (
    <div className="w-80 bg-white border-l border-gray-200">
      <div className="h-14 border-b border-gray-200 px-4 flex items-center justify-between">
        <h3 className="font-medium">Email Settings</h3>
        <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-md">
          <X className="h-5 w-5 text-gray-600" />
        </button>
      </div>
      
      <div className="p-4">
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Background Color
          </label>
          <input
            type="color"
            value={content.settings.backgroundColor}
            onChange={(e) =>
              onChange({
                ...content,
                settings: {
                  ...content.settings,
                  backgroundColor: e.target.value,
                },
              })
            }
            className="w-full h-8 p-1 rounded border border-gray-300"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Width (px)
          </label>
          <input
            type="number"
            value={content.settings.width}
            onChange={(e) =>
              onChange({
                ...content,
                settings: {
                  ...content.settings,
                  width: parseInt(e.target.value),
                },
              })
            }
            className="w-full p-2 rounded border border-gray-300"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Padding (px)
          </label>
          <input
            type="number"
            value={content.settings.padding}
            onChange={(e) =>
              onChange({
                ...content,
                settings: {
                  ...content.settings,
                  padding: parseInt(e.target.value),
                },
              })
            }
            className="w-full p-2 rounded border border-gray-300"
          />
        </div>
      </div>
    </div>
  );
};

export default ElementSettings;