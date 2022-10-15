import { useEffect, useState } from "react";
import GuitarSuggestionCard from "../GuitarSuggestionCard/GuitarSuggestionCard";
import "./GuitarSuggestionsContainer.scss";
import { getGuitars } from "../../api/guitarsService";

const GuitarSuggestionsContainer = ({ handleGuitarClick, searchTerm, numOfPages }) => {
  const [sortBy, setSortBy] = useState("guitarPrice");
  const [pageNum, setPageNum] = useState("0")
  const [guitars, setGuitars] = useState([]);

  const handleSortChange = () => {

  }

  const handlePageChange = () => {

  }

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
