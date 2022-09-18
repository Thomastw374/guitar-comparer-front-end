import GuitarSuggestionsContainer from "../../components/GuitarSuggestionsContainer/GuitarSuggestionsContainer"
import Nav from "../../components/Nav/Nav"
import PreviewComparisonContainer from "../../components/PreviewComparisonContainer/PreviewComparisonContainer"
import SearchContainer from "../../components/SearchContainer/SearchContainer"
import YourGuitarsContainer from "../../components/YourGuitarsContainer/YourGuitarsContainer"
import "./GuitarSuggestionsPage.scss"

const GuitarSuggestionsPage = ({
  guitars,
  handleInput,
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
  currentUserKey
}) => {
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
        <GuitarSuggestionsContainer guitars={guitars} />
      </div>
    );
};

export default GuitarSuggestionsPage