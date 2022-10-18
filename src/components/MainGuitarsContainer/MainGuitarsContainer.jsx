import GuitarCard from "../GuitarCard/GuitarCard";
import "./MainGuitarsContainer.scss";

const MainGuitarsContainer = ({ handleGuitarClick, guitars }) => {
  const guitarCardsArr = guitars.map((guitar) => {
    return (
      <>
        <GuitarCard
          isUserCard={false}
          guitarName={guitar.guitarName}
          guitarPicUrl={guitar.guitarPicUrl}
          guitarPrice={guitar.guitarPrice}
          guitarDescription={guitar.guitarDescription}
          guitarMiniDescription={guitar.guitarMiniDescription}
          handleGuitarClick={handleGuitarClick}
        />
      </>
    );
  });

  return (
    <div className="guitar-suggestions">
      <h2 className="guitar-suggestions__title">
        Displaying all electric guitars
      </h2>
      <div className="guitar-suggestions__container">{guitarCardsArr}</div>
    </div>
  );
};

export default MainGuitarsContainer;
