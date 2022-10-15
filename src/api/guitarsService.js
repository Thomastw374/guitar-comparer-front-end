

// returns data needed by setGuitars 
export const getGuitars = async (sortBy, pageNum) => {
  let guitarData = [];
  const url = `http://localhost:8080/guitars${
    sortBy ? "?sortBy=" + sortBy : "?sortBy=guitarPrice"
  }${pageNum ? "&page=" + pageNum : "&page=0"} &page=1`;
  const res = await fetch(url);
  guitarData = await res.json();
  console.log(guitarData);
  return guitarData
};
