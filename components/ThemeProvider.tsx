'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

interface ThemeContextType {
  isOpayMode: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({ 
  isOpayMode: false, 
  toggleTheme: () => {} 
});

export const useTheme = () => useContext(ThemeContext);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [isOpayMode, setIsOpayMode] = useState(false);

  const toggleTheme = () => {
    const newMode = !isOpayMode;
    setIsOpayMode(newMode);
    
    if (newMode) {
      document.body.classList.add('opay-mode');
    } else {
      document.body.classList.remove('opay-mode');
    }
  };

  return (
    <ThemeContext.Provider value={{ isOpayMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
