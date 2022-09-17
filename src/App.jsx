import { useEffect, useState, createContext, useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserGuitarsContext from "./Context/UserGuitarsContext";
import GuitarComparisonPage from "./pages/GuitarComparisonPage/GuitarComparisonPage";
import GuitarSuggestionsPage from "./pages/GuitarSuggestionsPage/GuitarSuggestionsPage";

function App() {
  const [guitars, setGuitars]= useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [currentUserKey, setUserKey] = useState("");
  const {userGuitars, setUserGuitars} = useContext(UserGuitarsContext)
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
    const responseTwo = await fetch(
      `http://localhost:9090/user-guitars/${currentUserKey}`
    );
    const yourGuitars = await responseTwo.json();
    setUserGuitars(yourGuitars);

    console.log("activated");
  };

  const getUserGuitars = async (e) => {
    console.log("activated")
    e.preventDefault();
      const response = await fetch(`http://localhost:9090/user-guitars/${currentUserKey}`);
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

  const guitarPair = [
    [
      "Guitar Pic Url 1",
      "Guitar Name 1",
      "Guitar Price 1",
      "Guitar Description 1",
    ],
    [
      "Guitar Pic Url 2",
      "Guitar Name 2",
      "Guitar Price 2",
      "Guitar Description 2",
    ],
  ];
  



  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/comparison-page"
            element={<GuitarComparisonPage guitarPair={guitarPair} />}
          />
          <Route
            path="/"
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
