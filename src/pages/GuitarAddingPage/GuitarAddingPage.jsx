import GuitarAddingForm from "../../components/GuitarAddingForm/GuitarAddingForm";
import "./GuitarAddingPage.scss"

const GuitarAddingPage = ({submitGuitar}) => {
    return(
        < GuitarAddingForm submitGuitar={submitGuitar} />
    )
}

export default GuitarAddingPage;