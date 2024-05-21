import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

const theme = createTheme({
  palette: {
    mode: "light",
  },
  typography: {
    fontFamily: 'Rubik, Helvetica, Arial, sans-serif', // Default font family
    h1: {
      fontWeight: 'bold',
    },
    body1: {
      fontFamily: 'Noto Sans, Helvetica, Arial, sans-serif',
      fontWeight: 300,
    },
    button: {
      fontFamily: 'Helvetica, Arial, sans-serif',
      textTransform: 'none', // Optional: to keep button text case as it is
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
    <CssBaseline />
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  </ThemeProvider>
  );
}

export default App;
