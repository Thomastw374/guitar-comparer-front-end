import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GuitarSuggestionsPage from "./pages/GuitarSuggestionsPage/GuitarSuggestionsPage";
import LandingPage from "./pages/LandingPage/LandingPage";

function App() {
  const [guitars, setGuitars]= useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [currentUserKey, setUserKey] = useState("");
  const [userGuitars, setUserGuitars] = useState([])
  const [newGuitarDescription, setNewGuitarDescription] = useState("")
  const [newGuitarName, setNewGuitarName] = useState("");
  const [newGuitarImageUrl, setNewGuitarImageUrl] = useState("");
  const [newGuitarPrice, setNewGuitarPrice] = useState("");
 
  const handleNewGuitarName = (e) => {
    setNewGuitarName(e.target.value)
  } 

  const handleNewGuitarUrl = (e) => {
    setNewGuitarImageUrl(e.target.value);
  }; 

  const handleNewGuitarDescription = (e) => {
    setNewGuitarDescription(e.target.value);
  };

  const handleNewGuitarPrice = (e) => {
    setNewGuitarPrice(e.target.value);
  };

  const handleAddUserGuitar = async (e) => {
    e.preventDefault();
    const response = await fetch(`http://localhost:9090/user-guitar`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        guitarName: newGuitarName,
        guitarPrice: newGuitarPrice,
        guitarPicUrl: newGuitarImageUrl,
        guitarDescription: newGuitarDescription,
        userKey: currentUserKey,
      }),
    });

    console.log("activated");
  };
  

  const getUserGuitars = async (e) => {
    console.log("activated")
    e.preventDefault();
      const response = await fetch(
        `http://localhost:9090/user-guitars/${currentUserKey}`,
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        }
      );
      const yourGuitars = await response.json();
      setUserGuitars(yourGuitars);
  };

  const getGuitars = async () => {
    const guitarData = [];
    const url = "http://localhost:9090/guitars";
    const res = await fetch(url);
    guitarData.push(await res.json());
    setGuitars(guitarData[0]);
    console.log(guitarData);
  };

  const filteredGuitars = guitars.filter((guitar) => {
    let guitarNameLower = guitar.guitarName.toLowerCase();

    return guitarNameLower.includes(searchTerm);
  });

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


  



  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route
            path="/search"
            element={
              <GuitarSuggestionsPage
                newGuitarName={handleNewGuitarName}
                addUserGuitar={handleAddUserGuitar}
                newGuitarDescription={handleNewGuitarDescription}
                newGuitarPrice={handleNewGuitarPrice}
                newGuitarUrl={handleNewGuitarUrl}
                guitars={filteredGuitars}
                handleInput={handleInput}
                getUserGuitars={getUserGuitars}
                userKey={handleUserKey}
                userGuitars={userGuitars}
                currentUserKey={currentUserKey}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
