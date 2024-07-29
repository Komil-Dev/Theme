// src/App.tsx

import { AppBar, Button, Container, Toolbar, Typography } from "@mui/material";
import React from "react";
import { useTheme } from "./components/Context/ThemeContext";
import ThemeToggleButton from "./components/ThemeToggleButton";

const App: React.FC = () => {
  const { mode } = useTheme();

  return (
    <div>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            My App
          </Typography>
          <ThemeToggleButton />
        </Toolbar>
      </AppBar>
      <Container sx={{ my: 2 }}>
        <Typography variant="h4" gutterBottom>
          Welcome to {mode === "light" ? "Light" : "Dark"} Mode!
        </Typography>
        <Button variant="contained" color="secondary">
          Sample Button
        </Button>
      </Container>
    </div>
  );
};

export default App;
