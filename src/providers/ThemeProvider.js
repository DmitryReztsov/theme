import React, { createContext, useEffect, useState } from 'react';

// задаем константы для наших тем
const themes = {
  light: 'light',
  dark: 'dark',
};

const defineTheme = () => {
  // берем тему из хранилища браузера, если она есть в списке - возвращаем ее
  const theme = window?.localStorage?.getItem('theme');
  if (Object.values(themes).includes(theme)) return theme;

  // с помощью метода matchMedia определяем, какая из тем сейчас задана в браузере пользователя
  return window.matchMedia('(prefers-color-scheme: light)')
    ? themes.light
    : themes.dark
}

// создаем контекст, с помощью которого будем передавать состояние вниз по дереву компонентов
export const ThemeContext = createContext({theme: themes.light});

const ThemeProvider = ({ children }) => {
  // с помощью хука будем хранить данные о текущей теме
  const [ theme, setTheme ] = useState(defineTheme);

  // при изменении темы устанавливаем тему в хранилище браузера и атрибут html-тэга
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
};

export default ThemeProvider;