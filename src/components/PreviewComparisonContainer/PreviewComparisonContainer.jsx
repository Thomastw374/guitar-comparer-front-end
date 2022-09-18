import "./PreviewComparisonContainer.scss";
import GuitarSuggestionCard from "../GuitarSuggestionCard/GuitarSuggestionCard";
import { useContext } from "react";
import GuitarsContext from "../../Context/GuitarsContext";

const PreviewComparisonContainer = () => {
  const { guitarOne, guitarTwo, setGuitarOne, setGuitarTwo } =
    useContext(GuitarsContext);

  const removeGuitarOne = () => {
    setGuitarOne("empty");
  };

  const removeGuitarTwo = () => {
    setGuitarTwo("empty");
  };

  return (
    <div className="preview-comparison">
        <p>Click on guitars from either your own submitted guitars or the guitars provided. This will add them to the comparison preview. When you are ready, press the compare guitars butotn found above to compare the guitars.</p>
      <h2 className="preview-comparison__title">Guitar Comparison Preview</h2>
      <div className="preview-comparison__guitars-container">
        {guitarOne === "empty" ? (
          <GuitarSuggestionCard
            isUserCard={false}
            guitarName="Guitar Name..."
            guitarDescription="Guitar Description"
            guitarPrice="Guitar Price..."
          />
        ) : (
          <GuitarSuggestionCard
            isCompared={true}
            isUserCard={false}
            guitarName={guitarOne[1]}
            guitarDescription={guitarOne[3]}
            guitarPrice={guitarOne[2]}
            guitarPicUrl={guitarOne[0]}
            handleRemoveClick={removeGuitarOne}
          />
        )}
        {guitarTwo === "empty" ? (
          <GuitarSuggestionCard
            isUserCard={false}
            guitarName="Guitar Name..."
            guitarDescription="Guitar Description"
            guitarPrice="Guitar Price..."
          />
        ) : (
          <GuitarSuggestionCard
            isCompared={true}
            isUserCard={false}
            guitarName={guitarTwo[1]}
            guitarDescription={guitarTwo[3]}
            guitarPrice={guitarTwo[2]}
            guitarPicUrl={guitarTwo[0]}
            handleRemoveClick={removeGuitarTwo}
          />
        )}
      </div>
    </div>
  );
};

export default PreviewComparisonContainer;
