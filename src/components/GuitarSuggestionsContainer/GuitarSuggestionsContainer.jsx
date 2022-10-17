import { useContext, useEffect, useState } from "react";
import GuitarSuggestionCard from "../GuitarSuggestionCard/GuitarSuggestionCard";
import "./GuitarSuggestionsContainer.scss";
import { getGuitars, searchGuitars } from "../../api/guitarsService";
import GuitarsContext from "../../context/GuitarsContext";

const GuitarSuggestionsContainer = ({ handleGuitarClick, searchTerm, numOfPages, sortBy }) => {
  const [guitars, setGuitars] = useState([]);
  const {pageNum} = useContext(GuitarsContext)



  // FOR PAGE NUMS HAVE THEM BE HIGHLIGHTED IF THE CURRENT PAGENUM MATCHES THEIR PAGENUM. Using page num in two places now so I think it's justifiable to use context. But should I split my context up??

  searchGuitars();
  

  const filteredGuitars = guitars.filter((guitar, sortBy) => {
    const guitarNameLower = guitar.guitarName.toLowerCase();
    
    return guitarNameLower.includes(searchTerm);
  });

  useEffect(() => {
    handleGetGuitars(sortBy, pageNum);
  }, [sortBy, pageNum]);

  const handleGetGuitars = async (sortBy, pageNum) => {
    const guitars = await getGuitars(sortBy, pageNum);
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
