import React, { useState } from 'react';
import { Save, Settings, LayoutTemplate, Undo, Redo } from 'lucide-react';
import ToolbarSection from './ToolbarSection';
import EditorCanvas from './EditorCanvas';
import TemplateSelector from './TemplateSelector';
import ElementSettings from './ElementSettings';
import { EmailContent } from '../../types/editor';

const EmailEditor: React.FC = () => {
  const [showTemplates, setShowTemplates] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [content, setContent] = useState<EmailContent>({
    subject: 'Untitled Email',
    elements: [],
    settings: {
      backgroundColor: '#ffffff',
      width: 600,
      padding: 20,
    },
  });

  const handleSave = () => {
    // TODO: Implement save functionality
    console.log('Saving email template:', content);
  };

  return (
    <div className="h-screen flex flex-col bg-gray-50">
      {/* Top Toolbar */}
      <div className="h-14 bg-white border-b border-gray-200 px-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <input
            type="text"
            value={content.subject}
            onChange={(e) => setContent({ ...content, subject: e.target.value })}
            className="text-lg font-medium border-none focus:ring-0 px-2 py-1 rounded"
            placeholder="Email Subject"
          />
        </div>
        <div className="flex items-center space-x-2">
          <button className="p-2 hover:bg-gray-100 rounded-md" onClick={() => {}}>
            <Undo className="h-5 w-5 text-gray-600" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-md" onClick={() => {}}>
            <Redo className="h-5 w-5 text-gray-600" />
          </button>
          <button
            className="p-2 hover:bg-gray-100 rounded-md"
            onClick={() => setShowTemplates(true)}
          >
            <LayoutTemplate className="h-5 w-5 text-gray-600" />
          </button>
          <button
            className="p-2 hover:bg-gray-100 rounded-md"
            onClick={() => setShowSettings(true)}
          >
            <Settings className="h-5 w-5 text-gray-600" />
          </button>
          <button
            onClick={handleSave}
            className="ml-4 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 flex items-center"
          >
            <Save className="h-4 w-4 mr-2" />
            Save
          </button>
        </div>
      </div>

      <div className="flex-1 flex">
        {/* Left Toolbar */}
        <ToolbarSection onAddElement={(element) => {
          setContent({
            ...content,
            elements: [...content.elements, element]
          });
        }} />

        {/* Main Canvas */}
        <EditorCanvas
          content={content}
          onChange={setContent}
        />

        {/* Right Settings Panel */}
        {showSettings && (
          <ElementSettings
            content={content}
            onChange={setContent}
            onClose={() => setShowSettings(false)}
          />
        )}
      </div>

      {/* Template Selector Modal */}
      {showTemplates && (
        <TemplateSelector
          onSelect={(template) => {
            setContent(template);
            setShowTemplates(false);
          }}
          onClose={() => setShowTemplates(false)}
        />
      )}
    </div>
  );
};

export default EmailEditor;