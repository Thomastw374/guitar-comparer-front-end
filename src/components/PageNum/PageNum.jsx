import { useContext } from "react";
import GuitarsContext from "../../context/GuitarsContext";
import "./PageNum.scss"

const PageNum = ({pageNumber}) => {
    const {pageNum, setPageNum} = useContext(GuitarsContext)

    const handlePageChange = (pageNum) => {
      setPageNum(pageNum);
      console.log(pageNum);
    };
    
    return(
        <>
        <p onClick={() => handlePageChange(pageNumber)} className="page-num">{pageNumber}</p>
        </>
    )
}

export default PageNum;