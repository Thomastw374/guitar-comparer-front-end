import { useContext, useEffect, useState } from "react";
import { getGuitars } from "../../api/guitarsService";
import GuitarSuggestionsContainer from "../../components/GuitarSuggestionsContainer/GuitarSuggestionsContainer";
import Nav from "../../components/Nav/Nav";
import PageNavContainer from "../../components/PageNavContainer/PageNavContainer";
import PreviewComparisonContainer from "../../components/PreviewComparisonContainer/PreviewComparisonContainer";
import SearchContainer from "../../components/SearchContainer/SearchContainer";
import YourGuitarsContainer from "../../components/YourGuitarsContainer/YourGuitarsContainer";
import GuitarsContext from "../../context/GuitarsContext";
import "./GuitarSuggestionsPage.scss";

const GuitarSuggestionsPage = ({
  getUserGuitars,
  userKey,
  userGuitars,
  addUserGuitar,
  newGuitarName,
  newGuitarDescription,
  newGuitarPrice,
  newGuitarUrl,
  handleEditPress,
  handleDeletePress,
  editPressed,
  currentUserKey,
}) => {
  const [searchTerms, setSearchTerms] = useState("none");
  const [sortBy, setSortBy] = useState("guitarPrice");
  const [guitars, setGuitars] = useState([]);
  const { pageNum } = useContext(GuitarsContext);
  const [numOfPages, setNumOfPages] = useState("1")

  // FOR PAGE NUMS HAVE THEM BE HIGHLIGHTED IF THE CURRENT PAGENUM MATCHES THEIR PAGENUM. Using page num in two places now so I think it's justifiable to use context. But should I split my context up??

  useEffect(() => {
    handleGetGuitars(searchTerms, sortBy, pageNum);
  }, [pageNum]);

  const handleGetGuitars = async () => {
    const guitars = await getGuitars(searchTerms, sortBy, pageNum);
    setNumOfPages(guitars.totalPages);
    setGuitars(guitars.content);
  };

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
    console.log(sortBy)
  };

  const handleInput = (event) => {
    setSearchTerms(event.target.value.toLowerCase());
  };

  return (
    <div className="guitar-suggestions-page">
      <Nav />
      <PreviewComparisonContainer />
      <YourGuitarsContainer
        newGuitarName={newGuitarName}
        addUserGuitar={addUserGuitar}
        newGuitarDescription={newGuitarDescription}
        newGuitarPrice={newGuitarPrice}
        newGuitarUrl={newGuitarUrl}
        getUserGuitars={getUserGuitars}
        userKey={userKey}
        userGuitars={userGuitars}
        handleDeletePress={handleDeletePress}
        handleEditPress={handleEditPress}
        editPressed={editPressed}
        currentUserKey={currentUserKey}
      />
      <SearchContainer handleInput={handleInput} handleSortChange={handleSortChange} handleSearch={handleGetGuitars} />
      <PageNavContainer numOfPages={numOfPages} />
      <GuitarSuggestionsContainer guitars={guitars}/>
    </div>
  );
};

export default GuitarSuggestionsPage;
