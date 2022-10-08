

// returns data needed by setGuitars 
export const getGuitars = async (sortBy) => {
  let guitarData = [];
  const url = `http://localhost:8080/guitars?sortBy=${sortBy}`;
  const res = await fetch(url);
  guitarData = await res.json();
  console.log(guitarData);
  return guitarData.content
};
