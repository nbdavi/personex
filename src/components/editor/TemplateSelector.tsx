import React from 'react';
import { X } from 'lucide-react';
import { EmailContent, EmailTemplate } from '../../types/editor';

interface TemplateSelectorProps {
  onSelect: (template: EmailContent) => void;
  onClose: () => void;
}

const TemplateSelector: React.FC<TemplateSelectorProps> = ({ onSelect, onClose }) => {
  const templates: EmailTemplate[] = [
    {
      id: '1',
      name: 'Welcome Email',
      thumbnail: 'https://images.unsplash.com/photo-1557200134-90327ee9fafa?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
      content: '',
      category: 'welcome',
    },
    {
      id: '2',
      name: 'Newsletter',
      thumbnail: 'https://images.unsplash.com/photo-1558104631-0fa41a8f6c20?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
      content: '',
      category: 'newsletter',
    },
    {
      id: '3',
      name: 'Promotional',
      thumbnail: 'https://images.unsplash.com/photo-1557200134-90327ee9fafa?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
      content: '',
      category: 'promotional',
    },
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-[800px] max-h-[80vh] flex flex-col">
        <div className="p-4 border-b border-gray-200 flex items-center justify-between">
          <h2 className="text-lg font-medium">Choose a Template</h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-md">
            <X className="h-5 w-5 text-gray-600" />
          </button>
        </div>
        
        <div className="flex-1 overflow-auto p-4">
          <div className="grid grid-cols-3 gap-4">
            {templates.map((template) => (
              <button
                key={template.id}
                className="text-left group"
                onClick={() => {
                  onSelect({
                    subject: template.name,
                    elements: [],
                    settings: {
                      backgroundColor: '#ffffff',
                      width: 600,
                      padding: 20,
                    },
                  });
                }}
              >
                <div className="aspect-video rounded-lg overflow-hidden mb-2">
                  <img
                    src={template.thumbnail}
                    alt={template.name}
                    className="w-full h-full object-cover group-hover:opacity-75 transition-opacity"
                  />
                </div>
                <h3 className="font-medium">{template.name}</h3>
                <p className="text-sm text-gray-500 capitalize">{template.category}</p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemplateSelector;