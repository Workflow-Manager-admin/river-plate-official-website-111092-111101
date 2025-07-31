import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import History from "./pages/History";
import NewsPage from "./pages/News";
import SquadPage from "./pages/Squad";
import SchedulePage from "./pages/Schedule";
import ContactPage from "./pages/Contact";
import "./App.css";

// PUBLIC_INTERFACE
function App() {
  // Light theme set by default
  const [theme] = useState("light");
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);
  // No theme toggle button: this site is forced light theme by branding

  return (
    <Router>
      <div className="App" data-theme="light">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/history" element={<History />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/squad" element={<SquadPage />} />
          <Route path="/schedule" element={<SchedulePage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
