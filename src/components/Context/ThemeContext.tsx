// src/context/ThemeContext.tsx

import { ThemeProvider, createTheme } from "@mui/material/styles";
import React, { ReactNode, createContext, useContext, useState } from "react";

interface ThemeContextType {
  mode: "light" | "dark";
  toggleMode: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProviderComponent: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [mode, setMode] = useState<"light" | "dark">("light");

  const toggleMode = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  const theme = createTheme({
    palette: {
      mode,
      primary: {
        main: mode === "light" ? "#177245" : "#013220",
      },
      secondary: {
        main: mode === "light" ? "#177245" : "#000",
      },
      background: {
        default: mode === "light" ? "#fafafa" : "#000",
        paper: mode === "light" ? "#ffffff" : "#1d1d1d",
      },
      text: {
        primary: mode === "light" ? "#000000" : "#ffffff",
        secondary: mode === "light" ? "#666666" : "#aaaaaa",
      },
    },
    typography: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    },
  });

  return (
    <ThemeContext.Provider value={{ mode, toggleMode }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
