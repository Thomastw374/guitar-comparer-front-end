import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import GuitarSuggestionsPage from "./pages/GuitarSuggestionsPage/GuitarSuggestionsPage";
import LandingPage from "./pages/LandingPage/LandingPage";

function App() {
  const [guitars, setGuitars]= useState([])

  const getGuitars = async () => {
    const guitarData = [];
    const url = "http://localhost:9090/guitars"
    const res = await fetch(url);
    guitarData.push(await res.json());
    console.log(guitarData)
    setGuitars(guitarData)
  }

  useEffect(() => {
    getGuitars()
  }, [])

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
