import { EditorElement } from '../types/editor';

export const createEditorElement = (
  type: EditorElement['type'],
  defaultContent: string = ''
): EditorElement => ({
  id: crypto.randomUUID(),
  type,
  content: defaultContent,
});

export const updateElementContent = (
  elements: EditorElement[],
  elementId: string,
  content: string
): EditorElement[] => {
  return elements.map(element =>
    element.id === elementId
      ? { ...element, content }
      : element
  );
};