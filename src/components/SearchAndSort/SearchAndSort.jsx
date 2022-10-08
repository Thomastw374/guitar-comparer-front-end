const SearchAndSort = ({handleInput}) => {
    return (
      <>
        <span className="search-sort__search">
          <label htmlFor="">Search by name: </label>
          <input type="search" name="" id="" onInput={handleInput} />
          <label htmlFor="">Sort by: </label>
          <select name="" id="">
            <option value="guitarPrice">Price</option>
            <option value="guitarName">Name</option>
          </select>
        </span>
      </>
    );
}

export default SearchAndSort;