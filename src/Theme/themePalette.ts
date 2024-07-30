// src/Theme/themePalette.ts
import { PaletteOptions } from "@mui/material";

export interface IColorsOption {
  colors?: {
    primaryLight?: string;
    primaryMain?: string;
    primaryDark?: string;
    secondaryLight?: string;
    secondaryMain?: string;
    secondaryDark?: string;
    background?: string;
    paper?: string;
  };
  textColor?: string;
  textGrayColor?: string;
  paletteMode?: "light" | "dark";
}

export default function themePalette(theme: IColorsOption): PaletteOptions {
  return {
    mode: theme.paletteMode || "light", // Ensure mode is set to either "light" or "dark"
    primary: {
      light: theme.colors?.primaryLight || "#000000",
      main: theme.colors?.primaryMain || "#000000",
      dark: theme.colors?.primaryDark || "#000000",
    },
    secondary: {
      light: theme.colors?.secondaryLight || "#000000",
      main: theme.colors?.secondaryMain || "#000000",
      dark: theme.colors?.secondaryDark || "#000000",
    },
    background: {
      default: theme.colors?.background || "#ffffff",
      paper: theme.colors?.paper || "#ffffff",
    },
    text: {
      primary: theme.textColor || "#000000",
      secondary: theme.textGrayColor || "#6b6b6b",
    },
  };
}
