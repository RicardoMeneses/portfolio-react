import React, { createContext, useEffect, useState } from 'react';
import { ProviderProps } from '../interfaces';

export type ThemeContextType = {
  theme: string;
  handleThemeSwitch: (mode: string) => void;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

const ThemeProvider: React.FC<ProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') ?? 'light');

  const handleThemeSwitch = (mode: string) => {
    setTheme(mode);
  };

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.removeItem('theme');
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, handleThemeSwitch }}>{children}</ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
