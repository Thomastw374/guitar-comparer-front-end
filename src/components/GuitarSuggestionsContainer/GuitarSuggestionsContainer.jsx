import GuitarSuggestionCard from "../GuitarSuggestionCard/GuitarSuggestionCard";
import "./GuitarSuggestionsContainer.scss"

const GuitarSuggestionsContainer = ({guitars}) => {

    const guitarCardsArr = guitars.map((guitar) =>{
      return (
        <>
          <GuitarSuggestionCard
            guitarName={guitar.guitarName}
            guitarPicUrl={
              guitar.guitarPicUrl
            }
            guitarPrice={guitar.guitarPrice}
            guitarDescription={guitar.guitarDescription}
          />
        </>
      );
    })

    return <div className="guitar-suggestions-container">{guitarCardsArr}</div>;
}

export default GuitarSuggestionsContainer;