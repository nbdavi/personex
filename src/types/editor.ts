export interface EmailTemplate {
  id: string;
  name: string;
  thumbnail: string;
  content: string;
  category: 'promotional' | 'newsletter' | 'transactional' | 'welcome';
}

export interface EditorElement {
  id: string;
  type: 'text' | 'image' | 'button' | 'divider' | 'spacer';
  content?: string;
  styles?: Record<string, string>;
  settings?: Record<string, any>;
}

export interface EmailContent {
  subject: string;
  preheader?: string;
  elements: EditorElement[];
  settings: {
    backgroundColor: string;
    width: number;
    padding: number;
  };
}