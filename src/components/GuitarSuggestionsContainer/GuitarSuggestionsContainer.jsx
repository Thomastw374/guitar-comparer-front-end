import { useEffect, useState } from "react";
import GuitarSuggestionCard from "../GuitarSuggestionCard/GuitarSuggestionCard";
import "./GuitarSuggestionsContainer.scss";
import { getGuitars } from "../../api/guitarsService";

const GuitarSuggestionsContainer = ({ handleGuitarClick, searchTerm, numOfPages }) => {
  const [guitars, setGuitars] = useState([]);

  // FOR PAGE NUMS HAVE THEM BE HIGHLIGHTED IF THE CURRENT PAGENUM MATCHES THEIR PAGENUM. Using page num in two places now so I think it's justifiable to use context. But should I split my context up??

  

  const filteredGuitars = guitars.filter((guitar) => {
    const guitarNameLower = guitar.guitarName.toLowerCase();

    return guitarNameLower.includes(searchTerm);
  });

  useEffect(() => {
    handleGetGuitars();
  }, []);

  const handleGetGuitars = async (e) => {
    const guitars = await getGuitars(e);
    numOfPages = guitars.totalPages
    setGuitars(guitars.content);
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
