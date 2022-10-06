import { Link } from "react-router-dom";
import "./SearchContainer.scss";

const SearchContainer = ({handleInput}) => {
    return (
      <div className="search-container">
        <span className="search-container__search">
          <label htmlFor="">Search by name: </label>
          <input type="search" name="" id="" onInput={handleInput} />
          <label htmlFor="">Sort by: </label>
          <select name="" id="">
            <option value="guitarPrice">Price</option>
            <option value="guitarName">Name</option>
          </select>
        </span>
        <Link to="comparison-page" className="search-container__compare-button">
          Compare Guitars
        </Link>
      </div>
    );
}

export default SearchContainer;