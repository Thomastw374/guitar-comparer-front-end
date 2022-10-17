

export const getGuitars = async (sortBy, pageNum) => {
  let guitarData = [];
  const url = `http://localhost:8080/guitars?sortBy=${sortBy}&page=${pageNum}`;
  const res = await fetch(url);
  guitarData = await res.json();
  console.log(guitarData);
  return guitarData
};

export const searchGuitars = async (searchTerms, sortBy, ascOrDesc) => {
  let guitarData = [];
  const url = `http://localhost:8080/search?searchTerms=guitar&orderBy=guitarPrice&ascOrDesc=desc`;
  const res = await fetch(url);
  guitarData = await res.json();
  console.log(guitarData);
  return guitarData;
}
