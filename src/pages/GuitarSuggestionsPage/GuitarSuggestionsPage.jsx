import GuitarSuggestionsContainer from "../../components/GuitarSuggestionsContainer/GuitarSuggestionsContainer"
import Nav from "../../components/Nav/Nav"
import SearchContainer from "../../components/SearchContainer/SearchContainer"
import YourGuitarsContainer from "../../components/YourGuitarsContainer/YourGuitarsContainer"
import "./GuitarSuggestionsPage.scss"

const GuitarSuggestionsPage = ({guitars, handleInput, getUserGuitars, userKey}) => {


    return (
      <div className="guitar-suggestions-page">
        <Nav />
        <SearchContainer
          handleInput={handleInput}
        />
        <YourGuitarsContainer getUserGuitars={getUserGuitars} userKey={userKey}/>
        <GuitarSuggestionsContainer guitars={guitars} />
      </div>
    );
}

export default GuitarSuggestionsPage