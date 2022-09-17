import "./GuitarSuggestionCard.scss"

const GuitarSuggestionCard = ({guitarPicUrl, guitarName, guitarPrice, guitarDescription, isForm}) => {

  if(!isForm) {
    guitarDescription =
      guitarDescription
        .replace("Full Description View Full Description ", "")
        .substring(0, 100) + "...";

    if (guitarDescription[-1] === " ") {
      guitarDescription[-1] = "";
    }

    return (
      <div className="guitar-card">
        <img
          className="guitar-card__image"
          src={guitarPicUrl}
          alt=""
        />
        <h4 className="guitar-card__name">{guitarName}</h4>
        <h5 className="guitar-card__price">{guitarPrice}</h5>
        <p className="guitar-card__description">
          {guitarDescription}
        </p>
      </div>
    );
  }

  else{
    return (
      <div className="guitar-upload">
        <form action="">
          <div className="">
            <label htmlFor="">Guitar picture url (optional):</label>
            <input type="text" name="" id="" />
          </div>
          <div className="">
            <label htmlFor="">Guitar name:</label>
            <input type="text" name="" id="" />
          </div>
          <div className="">
            <label htmlFor="">Guitar price:</label>
            <input type="text" name="" id="" />
          </div>
          <div className="">
            <label htmlFor="">Guitar description:</label>
            <input type="text" name="" id="" />
          </div>
          <button className="guitar-upload__button">
            Upload guitar
          </button>
        </form>
      </div>
    );
  }
  
};

export default GuitarSuggestionCard;