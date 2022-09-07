import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import GuitarAddingPage from "./pages/GuitarAddingPage/GuitarAddingPage";
import GuitarSuggestionsPage from "./pages/GuitarSuggestionsPage/GuitarSuggestionsPage";
import LandingPage from "./pages/LandingPage/LandingPage";

function App() {
  const [guitars, setGuitars]= useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [guitarDescription, setGuitarDescription] = useState("")
  const [guitarName, setGuitarName] = useState("");
  const [guitarImageUrl, setGuitarImageUrl] = useState("");
  const [guitarPrice, setGuitarPrice] = useState("");

  const handleInput = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
    console.log(searchTerm);
  };

  useEffect(() => {
   getGuitars();
  }, []);

  const getGuitars = async () => {
    const guitarData = [];
    const url = "http://localhost:9090/guitars"
    const res = await fetch(url);
    guitarData.push(await res.json());
    setGuitars(guitarData[0]);
    console.log(guitarData);
  }

  const filteredGuitars = guitars.filter((guitar) => {
    let guitarNameLower = guitar.guitarName.toLowerCase();

    return guitarNameLower.includes(searchTerm);
  });

  const submitGuitar = async => {

  }
  



  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/addguitars" element={<GuitarAddingPage submitGuitar={submitGuitar}/>} />
          <Route
            path="/search"
            element={
              <GuitarSuggestionsPage
                guitars={filteredGuitars}
                handleInput={handleInput}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
