import "./PreviewComparisonContainer.scss";
import GuitarCard from "../GuitarCard/GuitarCard";
import { useContext } from "react";
import GuitarsContext from "../../context/GuitarsContext";

const PreviewComparisonContainer = () => {
  const { guitarOne, guitarTwo, setGuitarOne, setGuitarTwo } =
    useContext(GuitarsContext);

  const removeGuitarOne = () => {
    setGuitarOne("empty")
    console.log(guitarOne)
  };

  const removeGuitarTwo = () => {
    setGuitarTwo("empty");
  };

  return (
    <div className="preview-comparison">
      <p className="preview-comparison__intro-text">
        Click on guitars from either your own submitted guitars or the guitars
        provided. This will add them to the comparison preview. When you are
        ready, press the compare guitars button found below to compare the
        guitars.
      </p>
      <div className="preview-comparison__guitars-container">
        {guitarOne === "empty" ? (
          <GuitarCard
            isUserCard={false}
            guitarName="Guitar Name..."
            guitarDescription="Guitar Description"
            guitarPrice="Guitar Price..."
          />
        ) : (
          <GuitarCard
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
          <GuitarCard
            isUserCard={false}
            guitarName="Guitar Name..."
            guitarDescription="Guitar Description"
            guitarPrice="Guitar Price..."
          />
        ) : (
          <GuitarCard
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
