import "./ComparisonCard.scss"
import GenericGuitar from "../../assets/generic-guitar.png"

const ComparisonCard = ({guitar, description}) => {
    return (
      <div className="guitar-comparison-card">
        {guitar[0] === "" ? (
          <img
            src={GenericGuitar}
            alt="Generic Guitar"
            className="guitar-comparison-card__guitar-image"
          />
        ) : (
          <img
            className="guitar-comparison-card__guitar-image"
            src={guitar[0]}
            alt="Guitar Pic One"
          />
        )}
        <h4 className="guitar-comparison-card__header">{guitar[1]}</h4>
        <h4 className="guitar-comparison-card__price">{guitar[2]}</h4>
        <h4 className="guitar-comparison-card__header guitar__header--specs">
          Specifications:
        </h4>
        <div
          dangerouslySetInnerHTML={{ __html: description }}
          className="guitar-comparison-card__description"
        ></div>
      </div>
    );
}

export default ComparisonCard;