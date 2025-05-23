'use client';

import { createContext, useContext, useEffect } from 'react';

// Create Theme Context
const ThemeContext = createContext({
  darkMode: true, // Default context value for type safety
});

// Theme Provider Component
export const ThemeProvider = ({ children }) => {
  // Dark mode is always enabled, no state needed
  const darkMode = true;

  // Apply dark mode class to HTML element and ensure no light mode interference
  useEffect(() => {
    const htmlElement = document.documentElement;
    // Ensure dark mode class is present
    htmlElement.classList.add('dark');
    // Explicitly remove light mode class (if any framework or library adds it)
    htmlElement.classList.remove('light');
    // Set data-theme attribute for CSS selector compatibility
    htmlElement.setAttribute('data-theme', 'dark');
    // Ensure background and text colors for dark mode
    htmlElement.style.backgroundColor = '#1a1a1a'; // Dark background
    htmlElement.style.color = '#ffffff'; // Light text
  }, []); // Empty dependency array ensures this runs once on mount

  return (
    <ThemeContext.Provider value={{ darkMode }}>
      <div className="dark" data-theme="dark">
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

// Custom Hook to use Theme Context
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};