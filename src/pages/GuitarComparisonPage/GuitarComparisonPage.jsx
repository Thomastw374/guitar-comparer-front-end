import { useContext } from "react";
import Nav from "../../components/Nav/Nav";
import GuitarsContext from "../../Context/GuitarsContext";
import "./GuitarComparisonPage.scss"

const GuitarComparisonPage = () => {
  const { guitarOne, guitarTwo } =
    useContext(GuitarsContext);

    guitarOne[3] = guitarOne[3].replace("Full Description View Full Description ", "");
    guitarTwo[3] = guitarTwo[3].replace("Full Description View Full Description ","");
    const splitDescriptionOne = guitarOne[3].split("Specifications"); 
    const splitDescriptionTwo = guitarTwo[3].split("Specifications"); 
        
  return (
    <>
      <Nav />
      <div className="comparison-page">
        <div className="comparison-page__guitar-container">
          <img src={guitarOne[0]} alt="Guitar Pic 1" />
          <h4>{guitarOne[1]}</h4>
          <h4>{guitarOne[2]}</h4>
          <h4>Specifications:</h4>
          <p>{splitDescriptionOne[1]}</p>
        </div>
        <div className="comparison-page__guitar-container">
          <img src={guitarTwo[0]} alt="Guitar Pic 2" />
          <h4>{guitarTwo[1]}</h4>
          <h4>{guitarTwo[2]}</h4>
          <h4>Specifications:</h4>
          <p>{splitDescriptionTwo[1]}</p>
        </div>
      </div>
    </>
  );
};

export default GuitarComparisonPage;