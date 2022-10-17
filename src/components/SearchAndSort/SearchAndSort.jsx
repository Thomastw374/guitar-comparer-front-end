const SearchAndSort = ({handleInput, handleSortChange, handleSearch}) => {
    return (
      <>
        <span className="search-sort">
          <label htmlFor="">Search by name: </label>
          <input type="search" name="" id="" onInput={handleInput} />
          <button onClick={handleSearch}>Go</button>
          <label htmlFor="">Sort by: </label>
          <select onChange ={handleSortChange} name="" id="">
            <option value="guitarPrice">Price Ascending</option>
            <option value="guitarName">Name A-Z</option>
          </select>
        </span>
      </>
    );
}

export default SearchAndSort;