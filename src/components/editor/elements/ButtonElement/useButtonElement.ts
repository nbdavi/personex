import { useCallback } from 'react';

interface UseButtonElementProps {
  onChange: (content: string) => void;
}

export const useButtonElement = ({ onChange }: UseButtonElementProps) => {
  const handleBlur = useCallback((e: React.FocusEvent<HTMLButtonElement>) => {
    onChange(e.currentTarget.textContent || '');
  }, [onChange]);

  return { handleBlur };
};