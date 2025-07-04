import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const themeColors =
    theme === "light"
      ? {
          background: "#FFFFFF",
          card: "#F5F5F5",
          text: "#000000",
          icon: "#EF5656",
        }
      : {
          background: "#000000",
          card: "#1E1E1E",
          text: "#FFFFFF",
          icon: "#FFFFFF",
        };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, themeColors }}>
      {children}
    </ThemeContext.Provider>
  );
};
