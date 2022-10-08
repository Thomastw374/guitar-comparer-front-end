import { useEffect, useState, useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GuitarsContext from "./context/GuitarsContext";
import GuitarComparisonPage from "./pages/GuitarComparisonPage/GuitarComparisonPage";
import GuitarSuggestionsPage from "./pages/GuitarSuggestionsPage/GuitarSuggestionsPage";
import {
  addUserGuitar,
  addNewUserAndGuitar,
  getUserGuitars,
} from "./api/userService";
import { getGuitars } from "./api/guitarsService";

function App() {
  const [guitars, setGuitars] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const {
    userGuitars,
    setUserGuitars,
    currentUserKey,
    setUserKey,
    setUserKeyRetrieved,
  } = useContext(GuitarsContext);
  const [newGuitarDescription, setNewGuitarDescription] = useState("");
  const [newGuitarName, setNewGuitarName] = useState("");
  const [newGuitarImageUrl, setNewGuitarImageUrl] = useState("");
  const [newGuitarPrice, setNewGuitarPrice] = useState("");

  const handleNewGuitarName = (e) => {
    setNewGuitarName(e.target.value);
  };

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

    setUserGuitars(yourGuitars[0]);
  };

  const handleAddNewUserAndGuitar = async (e) => {
    const userKey = await addNewUserAndGuitar(
      e,
      newGuitarName,
      newGuitarPrice,
      newGuitarImageUrl,
      newGuitarDescription
    );

    setUserKey(userKey);

    // shouldn't need this shit.

    const response = await fetch(
      `http://localhost:8080/user-guitars/${userKey}`
    );
    const newUserGuitars = await response.json();

    setUserKeyRetrieved(true);
    setUserGuitars(newUserGuitars);

    // getUserGuitars();
  };

  const handleGetUserGuitars = async (e) => {
    const yourGuitars = await getUserGuitars(e, currentUserKey);
    console.log(yourGuitars[0]);
    setUserGuitars(yourGuitars[0]);

    setUserKeyRetrieved(true);
  };

  const handleGetGuitars = async (e) => {
    const guitars = await getGuitars(e);
    setGuitars(guitars);
  };

  const filteredGuitars = guitars.filter((guitar) => {
    const guitarNameLower = guitar.guitarName.toLowerCase();

    return guitarNameLower.includes(searchTerm);
  });

  const handleInput = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const handleUserKey = (e) => {
    setUserKey(e.target.value);
  };

  useEffect(() => {
    handleGetGuitars();
  }, []);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/comparison-page" element={<GuitarComparisonPage />} />
          <Route
            path="/"
            element={
              <GuitarSuggestionsPage
                newGuitarName={handleNewGuitarName}
                addUserGuitar={
                  currentUserKey !== ""
                    ? handleAddUserGuitar
                    : handleAddNewUserAndGuitar
                }
                newGuitarDescription={handleNewGuitarDescription}
                newGuitarPrice={handleNewGuitarPrice}
                newGuitarUrl={handleNewGuitarUrl}
                guitars={filteredGuitars}
                handleInput={handleInput}
                getUserGuitars={handleGetUserGuitars}
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
