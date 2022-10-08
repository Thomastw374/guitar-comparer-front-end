import { useEffect, useState, useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GuitarsContext from "./context/GuitarsContext";
import GuitarComparisonPage from "./pages/GuitarComparisonPage/GuitarComparisonPage";
import GuitarSuggestionsPage from "./pages/GuitarSuggestionsPage/GuitarSuggestionsPage";
import { getGuitars } from "./api/guitarsService";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/comparison-page" element={<GuitarComparisonPage />} />
          <Route path="/" element={<GuitarSuggestionsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
