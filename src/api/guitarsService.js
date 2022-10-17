export const getGuitars = async (searchTerms, sortBy, pageNum) => {
  let searchedGuitars = [];
  const url = `http://localhost:8080/search?searchTerms=${searchTerms}&orderBy=${sortBy}&ascOrDesc=asc&page=${pageNum}`;
  const res = await fetch(url);
  searchedGuitars = await res.json();
  return searchedGuitars;
};
