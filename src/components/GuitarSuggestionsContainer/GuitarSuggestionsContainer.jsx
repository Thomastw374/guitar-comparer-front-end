import GuitarSuggestionCard from "../GuitarSuggestionCard/GuitarSuggestionCard";
import "./GuitarSuggestionsContainer.scss"

const GuitarSuggestionsContainer = ({guitars}) => {

    const guitarCardsArr = guitars.map((guitar) =>{
      return (
        <>
          <GuitarSuggestionCard
            isUserCard={false}
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

    return (
      <div>
        <h2 className="guitar-suggestions-title">Displaying all electric guitars</h2>
        <div className="guitar-suggestions-container">{guitarCardsArr}</div>
      </div>
    );
}

export default GuitarSuggestionsContainer;