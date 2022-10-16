import { useState } from "react";
import GuitarSuggestionsContainer from "../../components/GuitarSuggestionsContainer/GuitarSuggestionsContainer";
import Nav from "../../components/Nav/Nav";
import PageNavContainer from "../../components/PageNavContainer/PageNavContainer";
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
  const [sortBy, setSortBy] = useState("guitarPrice");

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

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
      <SearchContainer handleInput={handleInput} handleSortChange={handleSortChange} />
      <PageNavContainer numOfPages={2} />
      <GuitarSuggestionsContainer searchTerm={searchTerm} sortBy={sortBy} />
    </div>
  );
};

export default GuitarSuggestionsPage;
