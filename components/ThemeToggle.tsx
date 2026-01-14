'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from './ThemeProvider';

export default function ThemeToggle() {
  const { isOpayMode, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full hover:bg-gray-100 transition-colors"
      aria-label="Toggle Theme"
    >
      {isOpayMode ? (
        <Sun className="w-5 h-5 text-[#1DC9A0]" />
      ) : (
        <Moon className="w-5 h-5 text-gray-500" />
      )}
    </button>
  );
}
