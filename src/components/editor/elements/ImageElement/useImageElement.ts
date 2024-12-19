import { useCallback } from 'react';

interface UseImageElementProps {
  onChange: (content: string) => void;
}

export const useImageElement = ({ onChange }: UseImageElementProps) => {
  const handleImageClick = useCallback(() => {
    // For now, just use a placeholder image. In a real app, this would open an image picker
    const imageUrl = 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80';
    onChange(imageUrl);
  }, [onChange]);

  return { handleImageClick };
};