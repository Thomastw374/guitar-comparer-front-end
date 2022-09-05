import "./SearchContainer.scss";

const SearchContainer = () => {
    return (
      <div className="search-container">
        <p className="search-container__subtitle">Price Range:</p>
        <input type="range" name="price-range" id="" />
        <p className="search-container__subtitle">Genre:</p>
        <div className="search-container__checkboxes">
          <input type="checkbox" name="" id="" />
          <input type="checkbox" name="" id="" />
          <input type="checkbox" name="" id="" />
          <input type="checkbox" name="" id="" />
        </div>
      </div>
    );
}

export default SearchContainer;