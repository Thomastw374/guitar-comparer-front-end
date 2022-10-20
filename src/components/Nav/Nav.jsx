import "./Nav.scss"
import GenericGuitarWhite from "../../assets/generic-guitar-white.png";

const Nav = () => {
    return (
      <div className="nav">
        <h1 className="nav__page-header">GuitarComparer</h1>
        <img className="nav__header-guitar" src={GenericGuitarWhite} alt="" />
      </div>
    );
};

export default Nav;
