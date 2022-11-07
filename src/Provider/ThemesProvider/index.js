import React, { createContext, useState } from "react";

import { ThemeDark } from "../../Styles/Themes/dark";
import { ThemeLight } from "../../Styles/Themes/light";

export const ThemeContext = createContext();

export function ThemesProvider(props) {
  const [theme, setTheme] = useState(ThemeDark);
 
  function handleThemes() {
    theme.title === 'dark' ? setTheme(ThemeLight) : setTheme(ThemeDark)
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, handleThemes}}>
      {props.children}
    </ThemeContext.Provider>
  );
};