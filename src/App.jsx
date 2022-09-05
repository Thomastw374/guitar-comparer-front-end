import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import GuitarSuggestionsPage from "./pages/GuitarSuggestionsPage/GuitarSuggestionsPage";
import LandingPage from "./pages/LandingPage/LandingPage";

function App() {
  return (
    <Router>
      <div className="App">

        <Routes>
          <Route path ="/" element={< LandingPage />}/>
          <Route path ="/search" element={<GuitarSuggestionsPage />}/>
        </Routes>

      </div>
    </Router>
  );
}

export default App;
