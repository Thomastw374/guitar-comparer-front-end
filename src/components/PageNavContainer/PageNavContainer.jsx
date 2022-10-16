import PageNum from "../PageNum/PageNum";
import "./PageNavContainer.scss";

const PageNavContainer = ({numOfPages}) => {
    let pageNums = [];



   for (let i = 1; i <= numOfPages; i++) {
    pageNums.push(<PageNum pageNumber={i} />); 
   }
   
    return(<div className="page-nums">{pageNums}</div>)
}

export default PageNavContainer;