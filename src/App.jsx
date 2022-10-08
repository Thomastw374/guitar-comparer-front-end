import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GuitarComparisonPage from "./pages/GuitarComparisonPage/GuitarComparisonPage";
import GuitarSuggestionsPage from "./pages/GuitarSuggestionsPage/GuitarSuggestionsPage";

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
