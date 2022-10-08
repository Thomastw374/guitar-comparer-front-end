import "./ComparisonCard.scss"
import GenericGuitar from "../../assets/generic-guitar.png"

const ComparisonCard = ({guitar, description}) => {
    return (
      <div className="comparison-page__guitar-container">
        {guitar[0] === "" ? (
          <img
            src={GenericGuitar}
            alt="Generic Guitar"
            className="comparison-page__guitar-image"
          />
        ) : (
          <img
            className="comparison-page__guitar-image"
            src={guitar[0]}
            alt="Guitar Pic One"
          />
        )}
        <h4 className="comparison-page__header">{guitar[1]}</h4>
        <h4 className="comparison-page__price">{guitar[2]}</h4>
        <h4 className="comparison-page__header comparison-page__header--specs">
          Specifications:
        </h4>
        <div
          dangerouslySetInnerHTML={{ __html: description }}
          className="comparison-page__description"
        ></div>
      </div>
    );
}

export default ComparisonCard;