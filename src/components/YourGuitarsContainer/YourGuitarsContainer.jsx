import { useContext } from "react";
import GuitarsContext from "../../context/GuitarsContext";
import AddGuitarCard from "../AddGuitarCard/AddGuitarCard";
import GuitarSuggestionCard from "../GuitarSuggestionCard/GuitarSuggestionCard";
import "./YourGuitarsContainer.scss";

// c2Nsbd8GoJey3EcHtWldmc5wAAcFDOYXy

const YourGuitarsContainer = ({
  getUserGuitars,
  userGuitars,
  userKey,
  addUserGuitar,
  newGuitarName,
  newGuitarDescription,
  newGuitarPrice,
  newGuitarUrl,
  handleEditPress,
  handleDeletePress,
  editPressed,
  handleGuitarClick,
}) => {
  const {currentUserKey, userKeyRetrieved} = useContext(GuitarsContext)

  let guitarCardsArr = [];

  if (userGuitars !== []) {
    guitarCardsArr = userGuitars.map((guitar) => {
      return (
        <>
          <GuitarSuggestionCard
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
            getUserGuitars={getUserGuitars}
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
          onSubmit={getUserGuitars}
        >
          <label htmlFor="userKey">Find list by user key: </label>
          <input
            className="your-guitars-section__user-key-input"
            onChange={userKey}
          />
          <button type="submit">Go</button>
          <p>Current user key: {userKeyRetrieved ? currentUserKey : null}</p>
        </form>
        <div className="your-guitars-section__container">
          {guitarCardsArr}
          <AddGuitarCard
            addUserGuitar={addUserGuitar}
            newGuitarName={newGuitarName}
            newGuitarDescription={newGuitarDescription}
            newGuitarPrice={newGuitarPrice}
            newGuitarUrl={newGuitarUrl}
          />
        </div>
      </div>
    </>
  );
};

export default YourGuitarsContainer;
