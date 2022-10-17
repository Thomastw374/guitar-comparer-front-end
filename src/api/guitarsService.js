

// export const getGuitars = async (pageNum) => {
//   let guitarData = [];
//   const url = `http://localhost:8080/guitars?page=${pageNum}`;
//   const res = await fetch(url);
//   guitarData = await res.json();
//   return guitarData
// };

export const getGuitars = async (searchTerms, sortBy, pageNum, ascOrDesc) => {
  let searchedGuitars = [];
  const url = `http://localhost:8080/search?searchTerms=${searchTerms}&orderBy=${sortBy}&ascOrDesc=asc&page=${pageNum}`;
  const res = await fetch(url);
  searchedGuitars = await res.json();
  console.log(searchedGuitars);
  return searchedGuitars;
};
