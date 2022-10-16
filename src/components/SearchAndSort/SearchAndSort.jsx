const SearchAndSort = ({handleInput, handleSortChange}) => {
    return (
      <>
        <span className="search-sort">
          <label htmlFor="">Search by name: </label>
          <input type="search" name="" id="" onInput={handleInput} />
          <label htmlFor="">Sort by: </label>
          <select onChange ={handleSortChange} name="" id="">
            <option value="guitarPrice">Price</option>
            <option value="guitarName">Name</option>
          </select>
        </span>
      </>
    );
}

export default SearchAndSort;