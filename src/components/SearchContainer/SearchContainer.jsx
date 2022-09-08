import "./SearchContainer.scss";

const SearchContainer = ({handleInput}) => {
    return (
      <div className="search-container">
        <span className="search-container__search">
          <label htmlFor="">Search by name: </label>
          <input type="search" name="" id="" onInput={handleInput}/>
        </span>
        <button className="search-container__compare-button">Compare Guitars</button>
      </div>
    );
}

export default SearchContainer;