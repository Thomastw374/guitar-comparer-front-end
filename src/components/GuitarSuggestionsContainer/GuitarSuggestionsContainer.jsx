import { useContext, useEffect, useState } from "react";
import GuitarSuggestionCard from "../GuitarSuggestionCard/GuitarSuggestionCard";
import "./GuitarSuggestionsContainer.scss";
import { getGuitars } from "../../api/guitarsService";

const GuitarSuggestionsContainer = ({ handleGuitarClick, searchTerm }) => {
  const [sortBy, setSortBy] = useState("");
  const [guitars, setGuitars] = useState([]);

  const filteredGuitars = guitars.filter((guitar) => {
    const guitarNameLower = guitar.guitarName.toLowerCase();

    return guitarNameLower.includes(searchTerm);
  });

  useEffect(() => {
    handleGetGuitars();
  }, []);

  const handleGetGuitars = async (e) => {
    const guitars = await getGuitars(e);
    setGuitars(guitars);
  };

  const guitarCardsArr = filteredGuitars.map((guitar) => {
    return (
      <>
        <GuitarSuggestionCard
          isUserCard={false}
          guitarName={guitar.guitarName}
          guitarPicUrl={guitar.guitarPicUrl}
          guitarPrice={guitar.guitarPrice}
          guitarDescription={guitar.guitarDescription}
          guitarMiniDescription={guitar.guitarMiniDescription}
          handleGuitarClick={handleGuitarClick}
        />
      </>
    );
  });

  return (
    <div className="guitar-suggestions">
      <h2 className="guitar-suggestions__title">
        Displaying all electric guitars
      </h2>
      <div className="guitar-suggestions__container">{guitarCardsArr}</div>
    </div>
  );
};

export default GuitarSuggestionsContainer;
