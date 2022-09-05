import Nav from "../../components/Nav/Nav";
import SearchContainer from "../../components/SearchContainer/SearchContainer";
import "./LandingPage.scss"


const LandingPage = () => {
return (
  <div className="landing-page">
    <Nav />
    <p className="landing-page__intro">
      GuitarSggstr is a web app that assists you in picking a new guitar. Based
      on the genre of music you would like to play with your new guitar, and the
      price range you have, GuitarSggstr will suggest a number of guitars that
      fit your requirements.
      <br />
      <br />
      Currently GuitarSggstr only covers electric guitars, but in future it
      will be able to suggest other guitars, such as acoustics, basses and more!
    </p>
    <SearchContainer />
  </div>
);
}

export default LandingPage;