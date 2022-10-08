import { useEffect, useState, useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GuitarsContext from "./context/GuitarsContext";
import GuitarComparisonPage from "./pages/GuitarComparisonPage/GuitarComparisonPage";
import GuitarSuggestionsPage from "./pages/GuitarSuggestionsPage/GuitarSuggestionsPage";
import { addUserGuitar } from "./api/userService";

function App() {
  const [guitars, setGuitars]= useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const {
    userGuitars,
    setUserGuitars,
    currentUserKey,
    setUserKey,
    setUserKeyRetrieved,
  } = useContext(GuitarsContext);
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

  // this also returns a boolean. Handle it
  const handleAddUserGuitar = async (e) => {
    const yourGuitars = await addUserGuitar(
      e,
      currentUserKey,
      newGuitarName,
      newGuitarPrice,
      newGuitarImageUrl,
      newGuitarDescription
    );
    console.log(yourGuitars[0]);
    // this is returning a promise think I need to await
    setUserGuitars(yourGuitars[0]);
    
  };

  const handleAddNewUserAndGuitar = async (e) => {
    e.preventDefault();
    const response = await fetch(`http://localhost:8080/new-user-guitar`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        guitarName: newGuitarName,
        guitarPrice: newGuitarPrice,
        guitarPicUrl: newGuitarImageUrl,
        guitarDescription: newGuitarDescription
      }),
    });
    const userKey = await response.text();
    setUserKey(userKey)

    const responseTwo = await fetch(
      `http://localhost:8080/user-guitars/${userKey}`
    );
    const newUserGuitars = await responseTwo.json();
    setUserGuitars(newUserGuitars);

    setUserKeyRetrieved(true);
 
  }

  const getUserGuitars = async (e) => {
    e.preventDefault();
      const response = await fetch(`http://localhost:8080/user-guitars/${currentUserKey}`);
      const yourGuitars = await response.json();
      setUserGuitars(yourGuitars);
      
      setUserKeyRetrieved(true);
  };

  const getGuitars = async () => {
    const guitarData = [];
    const url = "http://localhost:8080/guitars?sortBy=guitarName";
    const res = await fetch(url);
    guitarData.push(await res.json());
    setGuitars(guitarData[0].content);
  };

  const filteredGuitars = guitars.filter((guitar) => {
    let guitarNameLower = guitar.guitarName.toLowerCase();

    return guitarNameLower.includes(searchTerm);
  });

  const handleInput = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
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
          <Route
            path="/comparison-page"
            element={<GuitarComparisonPage />}
          />
          <Route
            path="/"
            element={
              <GuitarSuggestionsPage
                newGuitarName={handleNewGuitarName}
                addUserGuitar={currentUserKey !== "" ? handleAddUserGuitar : handleAddNewUserAndGuitar}
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
