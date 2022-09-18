import { useContext, useState } from "react";
import GuitarsContext from "../../Context/GuitarsContext";
import "./GuitarSuggestionCard.scss"

const GuitarSuggestionCard = ({guitarPicUrl, guitarName, guitarPrice, guitarDescription, isUserCard, guitarId, currentUserKey, handleGuitarClick}) => {
const [editedGuitarName, setEditedGuitarName] = useState("")
const [editedGuitarPrice, setEditedGuitarPrice] = useState("");
const [editedGuitarUrl, setEditedGuitarUrl] = useState("");
const [editedGuitarDescription, setEditedGuitarDescription] = useState("");
const [editPressed, setEditPressed] = useState(false);
const { userGuitars, setUserGuitars } = useContext(GuitarsContext);

const handleDeletePress = async () => {
    const response = await fetch(
      `http://localhost:9090/user-guitar/${guitarId}`,
      {
        method: "DELETE",
      }
    );
    const responseTwo = await fetch(
      `http://localhost:9090/user-guitars/${currentUserKey}`
    );
    const yourGuitars = await responseTwo.json();
    setUserGuitars(yourGuitars);
    console.log("delete activated");
};

const handleEditPress = () => {
  setEditPressed(!editPressed);
  console.log(editPressed);
};

const editUserGuitar = async (e) => {
  e.preventDefault();
  const response = await fetch(`http://localhost:9090/user-guitar/${guitarId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ guitarName: editedGuitarName, guitarPrice: editedGuitarPrice, guitarPicUrl: editedGuitarUrl, guitarDescription: editedGuitarDescription, userKey: currentUserKey}),
      });
  const responseTwo = await fetch(
    `http://localhost:9090/user-guitars/${currentUserKey}`
  );
  const yourGuitars = await responseTwo.json();
  setUserGuitars(yourGuitars);
      console.log("edit activated")
      setEditPressed(!editPressed)
}



if(isUserCard === false){

    if (guitarDescription[-1] === " ") {
      guitarDescription[-1] = "";
    }
  guitarDescription =
    guitarDescription
      .replace("Full Description View Full Description ", "")
      .substring(0, 100) + "...";

    return (
      <div className="guitar-card">
      <img className="guitar-card__image" src={guitarPicUrl} alt="" />
        <h4 className="guitar-card__name">{guitarName}</h4>
        <h5 className="guitar-card__price">{guitarPrice}</h5>
      <p className="guitar-card__description">{guitarDescription}</p>
      </div>
    );

  }
    if (guitarDescription[-1] === " ") {
      guitarDescription[-1] = "";
    }
    const truncatedGuitarDescription =
      guitarDescription
        .replace("Full Description View Full Description ", "")
        .substring(0, 100) + "...";

  
    return (
      <>
        {!editPressed ? (
          <div className="guitar-card" onClick={handleGuitarClick}>
            <img className="guitar-card__image" src={guitarPicUrl} alt="" />
            <h4 className="guitar-card__name">{guitarName}</h4>
            <h5 className="guitar-card__price">{guitarPrice}</h5>
            <p className="guitar-card__description">
              {truncatedGuitarDescription}
            </p>
            <div className="guitar-card__buttons">
              <button onClick={handleEditPress}>Edit</button>
              <button onClick={handleDeletePress}>Delete</button>
            </div>
          </div>
        ) : (
          <div className="guitar-upload">
            <form action="" onSubmit={editUserGuitar}>
              <div className="">
                <label htmlFor="">Guitar picture url (optional):</label>
                <input
                  type="text"
                  name=""
                  id=""
                  onChange={(e) => setEditedGuitarUrl(e.target.value)}
                  defaultValue={guitarPicUrl}
                />
              </div>
              <div className="">
                <label htmlFor="">Guitar name:</label>
                <input
                  type="text"
                  name=""
                  id=""
                  onChange={(e) => setEditedGuitarName(e.target.value)}
                  defaultValue={guitarName}
                />
              </div>
              <div className="">
                <label htmlFor="">Guitar price:</label>
                <input
                  type="text"
                  name=""
                  id=""
                  onChange={(e) => setEditedGuitarPrice(e.target.value)}
                  defaultValue={guitarPrice}
                />
              </div>
              <div className="">
                <label htmlFor="">Guitar description:</label>
                <input
                  type="text"
                  name=""
                  id=""
                  onChange={(e) => setEditedGuitarDescription(e.target.value)}
                  defaultValue={guitarDescription}
                />
              </div>
              <button className="guitar-upload__button">Finish editing</button>
            </form>
          </div>
        )}
      </>
    );

  }
  
export default GuitarSuggestionCard;