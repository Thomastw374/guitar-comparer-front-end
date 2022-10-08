import { useEffect, useState, useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GuitarsContext from "./context/GuitarsContext";
import GuitarComparisonPage from "./pages/GuitarComparisonPage/GuitarComparisonPage";
import GuitarSuggestionsPage from "./pages/GuitarSuggestionsPage/GuitarSuggestionsPage";
import { getGuitars } from "./api/guitarsService";

function App() {
  const [guitars, setGuitars] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const {
    userGuitars,
    currentUserKey
  } = useContext(GuitarsContext);
  

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
                
                guitars={filteredGuitars}
                handleInput={handleInput}
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
