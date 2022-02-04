import React, { useState, useEffect } from "react";
import { ThemeContext, themes } from "./context";

export default function ThemeContextWrapper(props) {
  const [mode, setMode] = useState(themes.darkMode);
  function changeTheme(mode) {
    setMode(mode);
  }

  useEffect(() => {
    //const body = document.getElementById("body");

    switch (mode) {
      case themes.lightMode:
        document.getElementById("body").classList.add("app");
        break;
      case themes.darkMode:
      default:
        document.getElementById("body").classList.remove("app");
        break;
    }
  }, [mode]);

  return (
    <ThemeContext.Provider value={{ theme: mode, changeTheme: changeTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}
