import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GuitarAddingPage from "./pages/GuitarAddingPage/GuitarAddingPage";
import GuitarSuggestionsPage from "./pages/GuitarSuggestionsPage/GuitarSuggestionsPage";
import LandingPage from "./pages/LandingPage/LandingPage";

function App() {
  const [guitars, setGuitars]= useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [userKey, setUserKey] = useState("");
  const [userGuitars, setUserGuitars] = useState([])
  // const [guitarDescription, setGuitarDescription] = useState("")
  // const [guitarName, setGuitarName] = useState("");
  // const [guitarImageUrl, setGuitarImageUrl] = useState("");
  // const [guitarPrice, setGuitarPrice] = useState("");

  

  const getUserGuitars = async (e) => {
    e.preventDefault();
      const response = await fetch(
        `http://localhost:9090/user-guitars/${userKey}`,
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        }
      );
      const yourGuitars = await response.json();
      setUserGuitars(yourGuitars);
      console.log(yourGuitars)
  };

  const handleInput = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
    console.log(searchTerm);
  };

  const handleUserKey = (e) => {
    setUserKey(e.target.value)
  }

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
  



  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/addguitars" element={<GuitarAddingPage/>} />
          <Route
            path="/search"
            element={
              <GuitarSuggestionsPage
                guitars={filteredGuitars}
                handleInput={handleInput}
                getUserGuitars={getUserGuitars}
                userKey={handleUserKey}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
