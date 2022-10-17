import { useContext } from "react";
import { Link } from "react-router-dom";
import GuitarsContext from "../../context/GuitarsContext";
import SearchAndSort from "../SearchAndSort/SearchAndSort";
import "./SearchContainer.scss";

const SearchContainer = ({handleInput, handleSortChange, handleSearch}) => {

    return (
      <div className="search-container">
        <SearchAndSort handleInput={handleInput} handleSortChange={handleSortChange} handleSearch={handleSearch} />
        <Link to="comparison-page" className="search-container__compare-button">
          Compare Guitars
        </Link>
      </div>
    );
}

export default SearchContainer;