import "./GuitarSuggestionCard.scss"

const GuitarSuggestionCard = ({guitarPicUrl, guitarName, guitarPrice, guitarDescription}) => {
  guitarDescription = guitarDescription.replace(
    "Full Description View Full Description ", ""
  ).substring(0,100) + "...";

  if(guitarDescription[-1] === " ") {
    guitarDescription[-1] = ""
  } 

  return (
    <div className="guitar-suggestion-card">
      <img className="guitar-suggestion-card__image" src={guitarPicUrl} alt="" />
      <h4 className="guitar-suggestion-card__name">{guitarName}</h4>
      <h5 className="guitar-suggestion-card__price">{guitarPrice}</h5>
      <p className="guitar-suggestion-card__description">{guitarDescription}</p>
    </div>
  );
};

export default GuitarSuggestionCard;