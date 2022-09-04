import React, { useContext } from 'react';

import { ThemeContext } from "../../providers/ThemeProvider";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <button
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      style={{padding: 12, fontWeight: 500}}
    >
      Сменить тему
    </button>
  );
};

export default ThemeSwitcher;