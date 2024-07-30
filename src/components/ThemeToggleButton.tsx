// src/components/ThemeToggleButton.tsx

import { Brightness4, Brightness7 } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React from "react";
import { useTheme } from "../components/Context/ThemeContext";

const ThemeToggleButton: React.FC = () => {
  const { mode, toggleMode } = useTheme();

  return (
    <IconButton onClick={toggleMode} color="inherit">
      {mode === "light" ? <Brightness7 /> : <Brightness4 />}
    </IconButton>
  );
};

export default ThemeToggleButton;
