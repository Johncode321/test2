import { useEffect, useRef } from 'react';

interface MessageInputProps {
  value: string;
  onChange: (value: string) => void;
  autoFocus?: boolean;
}

export const MessageInput = ({ value, onChange, autoFocus }: MessageInputProps) => {
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (autoFocus && inputRef.current) {
      inputRef.current.focus();
      // Place cursor at the end of any existing text
      const length = inputRef.current.value.length;
      inputRef.current.setSelectionRange(length, length);
    }
  }, [autoFocus]);

  return (
    <textarea
      ref={inputRef}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Enter your message to sign..."
      className="w-full min-h-[120px] p-4 rounded-xl bg-gray-900/50 border border-gray-700 
        text-white placeholder-gray-500 text-sm resize-none focus:outline-none 
        focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
    />
  );
};