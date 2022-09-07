import "./SearchContainer.scss";

const SearchContainer = ({handleInput}) => {
    return (
      <div className="search-container">
        <input type="search" name="" id="" onInput={handleInput}/>
        <button>Let's Go!</button>
      </div>
    );
}

export default SearchContainer;