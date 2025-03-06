import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#4A90E2", // Vibrant blue
    },
    secondary: {
      main: "#FF6B6B", // Eye-catching red
    },
    background: {
      default: "#F4F6F8", // Light grey
      paper: "#FFFFFF", // White background for cards
    },
    text: {
      primary: "#333333", // Dark text
      secondary: "#555555",
    },
  },
  typography: {
    fontFamily: "Poppins, sans-serif",
    h1: {
      fontSize: "2.5rem",
      fontWeight: 600,
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 500,
    },
  },
});

export default theme;
