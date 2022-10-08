import { useContext } from "react";
import Nav from "../../components/Nav/Nav";
import GuitarsContext from "../../context/GuitarsContext";
import "./GuitarComparisonPage.scss";
import GenericGuitar from "../../assets/generic-guitar.png";
import ComparisonCard from "../../components/ComparisonCard/ComparisonCard";

const GuitarComparisonPage = () => {
  const { guitarOne, guitarTwo } = useContext(GuitarsContext);

  guitarOne[3] = guitarOne[3].replace(
    "Full Description View Full Description ",
    ""
  );
  guitarTwo[3] = guitarTwo[3].replace(
    "Full Description View Full Description ",
    ""
  );
  const splitDescriptionOne = guitarOne[3].split("Specifications");
  const splitDescriptionTwo = guitarTwo[3].split("Specifications");

  const htmlDecode = (input) => {
    input = input.replaceAll("&lt;", "<");
    input = input.replaceAll("&gt;", ">");
    input = input.replaceAll("&amp;", "&");
    input = input.replaceAll("&quot;", `"`);
    
    return input;
  }

  const descriptionOne = htmlDecode(splitDescriptionOne[1])
  const descriptionTwo = htmlDecode(splitDescriptionTwo[1])

  return (
    <>
      <Nav />
      <div className="comparison-page">
        <ComparisonCard guitar={guitarOne} description={descriptionOne} />
        <ComparisonCard guitar={guitarTwo} description={descriptionTwo} />
      </div>
    </>
  );
};

export default GuitarComparisonPage;
