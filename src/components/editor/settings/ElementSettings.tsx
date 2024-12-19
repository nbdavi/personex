import React from 'react';
import { X } from 'lucide-react';
import { EmailContent } from '../../../types/editor';
import ColorPicker from './ColorPicker';
import NumberInput from './NumberInput';

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
  const updateSettings = (updates: Partial<typeof content.settings>) => {
    onChange({
      ...content,
      settings: {
        ...content.settings,
        ...updates,
      },
    });
  };

  return (
    <div className="w-80 bg-white border-l border-gray-200">
      <div className="h-14 border-b border-gray-200 px-4 flex items-center justify-between">
        <h3 className="font-medium">Email Settings</h3>
        <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-md">
          <X className="h-5 w-5 text-gray-600" />
        </button>
      </div>
      
      <div className="p-4">
        <ColorPicker
          label="Background Color"
          value={content.settings.backgroundColor}
          onChange={(value) => updateSettings({ backgroundColor: value })}
        />
        <NumberInput
          label="Width (px)"
          value={content.settings.width}
          onChange={(value) => updateSettings({ width: value })}
        />
        <NumberInput
          label="Padding (px)"
          value={content.settings.padding}
          onChange={(value) => updateSettings({ padding: value })}
        />
      </div>
    </div>
  );
};

export default ElementSettings;