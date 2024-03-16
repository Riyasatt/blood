
import { useState } from "react";
import DashBoard from "./pages/DashBoard";
// import Page from "./pages/Page";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./LandingPage";
const App = () => {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<DashBoard />} />

      </Routes>
    </Router>
  
)};

export default App;
