import { useState } from "react";
import GuitarSuggestionsContainer from "../../components/GuitarSuggestionsContainer/GuitarSuggestionsContainer";
import Nav from "../../components/Nav/Nav";
import PreviewComparisonContainer from "../../components/PreviewComparisonContainer/PreviewComparisonContainer";
import SearchContainer from "../../components/SearchContainer/SearchContainer";
import YourGuitarsContainer from "../../components/YourGuitarsContainer/YourGuitarsContainer";
import "./GuitarSuggestionsPage.scss";

const GuitarSuggestionsPage = ({
  getUserGuitars,
  userKey,
  userGuitars,
  addUserGuitar,
  newGuitarName,
  newGuitarDescription,
  newGuitarPrice,
  newGuitarUrl,
  handleEditPress,
  handleDeletePress,
  editPressed,
  currentUserKey,
}) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInput = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  return (
    <div className="guitar-suggestions-page">
      <Nav />

      <PreviewComparisonContainer />
      <YourGuitarsContainer
        newGuitarName={newGuitarName}
        addUserGuitar={addUserGuitar}
        newGuitarDescription={newGuitarDescription}
        newGuitarPrice={newGuitarPrice}
        newGuitarUrl={newGuitarUrl}
        getUserGuitars={getUserGuitars}
        userKey={userKey}
        userGuitars={userGuitars}
        handleDeletePress={handleDeletePress}
        handleEditPress={handleEditPress}
        editPressed={editPressed}
        currentUserKey={currentUserKey}
      />
      <SearchContainer handleInput={handleInput} />
      <GuitarSuggestionsContainer searchTerm={searchTerm} />
    </div>
  );
};

export default GuitarSuggestionsPage;
