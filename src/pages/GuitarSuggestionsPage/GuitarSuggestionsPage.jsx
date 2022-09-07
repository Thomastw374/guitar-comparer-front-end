import GuitarSuggestionsContainer from "../../components/GuitarSuggestionsContainer/GuitarSuggestionsContainer"
import Nav from "../../components/Nav/Nav"
import SearchContainer from "../../components/SearchContainer/SearchContainer"
import "./GuitarSuggestionsPage.scss"

const GuitarSuggestionsPage = ({guitars}) => {


    return(
        <div className="guitar-suggestions-page">
            <Nav/>
            <SearchContainer/>
            <GuitarSuggestionsContainer guitars={guitars}/>
        </div>
    )
}

export default GuitarSuggestionsPage