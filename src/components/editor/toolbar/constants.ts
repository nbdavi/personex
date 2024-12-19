import { Type, Image, Square, Minus, Maximize } from 'lucide-react';
import { EditorElement } from '../../../types/editor';

export type ToolbarElementConfig = {
  type: EditorElement['type'];
  icon: typeof Type | typeof Image | typeof Square | typeof Minus | typeof Maximize;
  label: string;
  defaultContent: string;
};

export const TOOLBAR_ELEMENTS: ToolbarElementConfig[] = [
  {
    type: 'text',
    icon: Type,
    label: 'Text',
    defaultContent: 'Add your text here',
  },
  {
    type: 'image',
    icon: Image,
    label: 'Image',
    defaultContent: '',
  },
  {
    type: 'button',
    icon: Square, // Changed from Button to Square
    label: 'Button',
    defaultContent: 'Click Here',
  },
  {
    type: 'divider',
    icon: Minus,
    label: 'Divider',
    defaultContent: '',
  },
  {
    type: 'spacer',
    icon: Maximize,
    label: 'Spacer',
    defaultContent: '',
  },
];