import { useContext } from "react";
import Nav from "../../components/Nav/Nav";
import GuitarsContext from "../../context/GuitarsContext";
import "./GuitarComparisonPage.scss";
import GenericGuitar from "../../assets/generic-guitar.png";

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
        <div className="comparison-page__guitar-container">
          {guitarOne[0] === "" ? (
            <img
              src={GenericGuitar}
              alt="Generic Guitar"
              className="comparison-page__guitar-image"
            />
          ) : (
            <img
              className="comparison-page__guitar-image"
              src={guitarOne[0]}
              alt="Guitar Pic One"
            />
          )}
          <h4 className="comparison-page__header">{guitarOne[1]}</h4>
          <h4 className="comparison-page__price">{guitarOne[2]}</h4>
          <h4 className="comparison-page__header comparison-page__header--specs">
            Specifications:
          </h4>
          <div
            dangerouslySetInnerHTML={{ __html: descriptionOne }}
            className="comparison-page__description"
          ></div>
        </div>
        <div className="comparison-page__guitar-container">
          {guitarTwo[0] === "" ? (
            <img
              src={GenericGuitar}
              alt="Generic Guitar"
              className="comparison-page__guitar-image"
            />
          ) : (
            <img
              className="comparison-page__guitar-image"
              src={guitarTwo[0]}
              alt="Guitar Pic Two"
            />
          )}
          <h4 className="comparison-page__header">{guitarTwo[1]}</h4>
          <h4 className="comparison-page__price">{guitarTwo[2]}</h4>
          <h4 className="comparison-page__header comparison-page__header--specs">
            Specifications:
          </h4>
          <div
            dangerouslySetInnerHTML={{ __html: descriptionTwo }}
            className="comparison-page__description"
          ></div>
        </div>
      </div>
    </>
  );
};

export default GuitarComparisonPage;
