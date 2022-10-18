import { useContext, useState } from "react";
import GuitarsContext from "../../context/GuitarsContext";
import AddGuitarCard from "../AddGuitarCard/AddGuitarCard";
import GuitarCard from "../GuitarCard/GuitarCard";
import "./YourGuitarsContainer.scss";
import {
  addUserGuitar,
  addNewUserAndGuitar,
  getUserGuitars,
} from "../../api/userService.js";

const YourGuitarsContainer = ({
  handleEditPress,
  handleDeletePress,
  editPressed,
  handleGuitarClick,
}) => {
  const [newGuitarDescription, setNewGuitarDescription] = useState("");
  const [newGuitarName, setNewGuitarName] = useState("");
  const [newGuitarImageUrl, setNewGuitarImageUrl] = useState("");
  const [newGuitarPrice, setNewGuitarPrice] = useState("");
  const {
    userGuitars,
    setUserGuitars,
    currentUserKey,
    setUserKey,
    setUserKeyRetrieved,
    userKeyRetrieved,
  } = useContext(GuitarsContext);

  const handleNewGuitarName = (e) => {
    setNewGuitarName(e.target.value);
  };

  const handleNewGuitarUrl = (e) => {
    setNewGuitarImageUrl(e.target.value);
  };

  const handleNewGuitarDescription = (e) => {
    setNewGuitarDescription(e.target.value);
  };

  const handleNewGuitarPrice = (e) => {
    setNewGuitarPrice(e.target.value);
  };

  const handleUserKey = (e) => {
    setUserKey(e.target.value);
  };

  // this also returns a boolean. Handle it
  const handleAddUserGuitar = async (e) => {
    const yourGuitars = await addUserGuitar(
      e,
      currentUserKey,
      newGuitarName,
      newGuitarPrice,
      newGuitarImageUrl,
      newGuitarDescription
    );

    setUserGuitars(yourGuitars[0]);
  };

  const handleAddNewUserAndGuitar = async (e) => {
    const userKey = await addNewUserAndGuitar(
      e,
      newGuitarName,
      newGuitarPrice,
      newGuitarImageUrl,
      newGuitarDescription
    );

    setUserKey(userKey);

    // shouldn't need this.
    const response = await fetch(
      `http://localhost:8080/user-guitars/${userKey}`
    );
    const newUserGuitars = await response.json();

    setUserKeyRetrieved(true);
    setUserGuitars(newUserGuitars);

    // getUserGuitars();
  };

  const handleGetUserGuitars = async (e) => {
    const yourGuitars = await getUserGuitars(e, currentUserKey);
    // Change this return an object
    setUserGuitars(yourGuitars[0]);

    setUserKeyRetrieved(true);
  };

  let guitarCardsArr = [];

  if (userGuitars !== []) {
    guitarCardsArr = userGuitars.map((guitar) => {
      return (
        <>
          <GuitarCard
            guitarName={guitar.guitarName}
            guitarPicUrl={guitar.guitarPicUrl}
            guitarPrice={guitar.guitarPrice}
            guitarDescription={guitar.guitarDescription}
            guitarId={guitar.id}
            isUserCard={true}
            handleDeletePress={handleDeletePress}
            handleEditPress={handleEditPress}
            editPressed={editPressed}
            currentUserKey={currentUserKey}
            getUserGuitars={handleGetUserGuitars}
            handleGuitarClick={handleGuitarClick}
          />
        </>
      );
    });
  }

  return (
    <>
      <div className="your-guitars-section">
        <p className="your-guitars-section__intro">
          The 'Your guitars' section is where your user submitted guitars
          appear. To retrieve a previously created guitar list enter the 32
          character user key you were given upon submission of your first
          guitar. To start a guitar list simply upload your first guitar using
          the form below.
        </p>
        <h2 className="your-guitars-section__title">Your Guitars</h2>
        <form
          className="your-guitars-section__user-key-form"
          onSubmit={handleGetUserGuitars}
        >
          <label htmlFor="userKey">Find list by user key: </label>
          <input
            className="your-guitars-section__user-key-input"
            onChange={handleUserKey}
          />
          <button type="submit">Go</button>
          <p>Current user key: {userKeyRetrieved ? currentUserKey : null}</p>
        </form>
        <div className="your-guitars-section__container">
          {guitarCardsArr}
          <AddGuitarCard
            newGuitarName={handleNewGuitarName}
            addUserGuitar={
              currentUserKey !== ""
                ? handleAddUserGuitar
                : handleAddNewUserAndGuitar
            }
            getUserGuitars={handleGetUserGuitars}
            newGuitarDescription={handleNewGuitarDescription}
            newGuitarPrice={handleNewGuitarPrice}
            newGuitarUrl={handleNewGuitarUrl}
          />
        </div>
      </div>
    </>
  );
};

export default YourGuitarsContainer;
