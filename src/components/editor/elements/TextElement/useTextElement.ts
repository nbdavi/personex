import { useCallback } from 'react';

interface UseTextElementProps {
  onChange: (content: string) => void;
}

export const useTextElement = ({ onChange }: UseTextElementProps) => {
  const handleBlur = useCallback((e: React.FocusEvent<HTMLDivElement>) => {
    onChange(e.currentTarget.textContent || '');
  }, [onChange]);

  return { handleBlur };
};