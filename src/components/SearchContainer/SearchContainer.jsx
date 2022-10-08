import { useContext } from "react";
import { Link } from "react-router-dom";
import GuitarsContext from "../../context/GuitarsContext";
import SearchAndSort from "../SearchAndSort/SearchAndSort";
import "./SearchContainer.scss";

const SearchContainer = ({handleInput}) => {
  const {guitarOne, guitarTwo} = useContext(GuitarsContext)

    return (
      <div className="search-container">
        <SearchAndSort handleInput={handleInput} />
        <Link to="comparison-page" className="search-container__compare-button">
          Compare Guitars
        </Link>
      </div>
    );
}

export default SearchContainer;