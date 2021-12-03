import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "pages/Home/Home";
import Wines from "pages/Wines";
import Partners from "pages/Partners";
import Galery from "pages/Galery";
import Contact from "pages/Contact";
import Navbar from "components/Navbar";
import { ThemeProvider } from "@mui/styles";
import theme from "theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/vins" element={<Wines />} />
            <Route path="/partenaires" element={<Partners />} />
            <Route path="/galerie" element={<Galery />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Router>
      </div>
    </ThemeProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
