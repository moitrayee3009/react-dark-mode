import { createContext } from "react";

export const themes = {
  darkMode: "",
  lightMode: "app"
};

export const ThemeContext = createContext({
  theme: themes.darkMode,
  changeTheme: () => {}
});
