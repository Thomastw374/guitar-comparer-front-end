import Button from "../Button/Button";
import "./AddGuitarCard.scss"

const AddGuitarCard = ({
  addUserGuitar,
  newGuitarName,
  newGuitarDescription,
  newGuitarPrice,
  newGuitarUrl,
}) => {
  return (
    <div className="guitar-upload">
      <form action="" onSubmit={addUserGuitar}>
        <div className="">
          <label htmlFor="">Guitar picture url (optional):</label>
          <input type="text" name="" id="" onChange={newGuitarUrl} />
        </div>
        <div className="">
          <label htmlFor="">Guitar name:</label>
          <input type="text" name="" id="" onChange={newGuitarName} />
        </div>
        <div className="">
          <label htmlFor="">Guitar price:</label>
          <input type="text" name="" id="" onChange={newGuitarPrice} />
        </div>
        <div className="">
          <label htmlFor="">Guitar description:</label>
          <input type="text" name="" id="" onChange={newGuitarDescription} />
        </div>
        <Button text = "Upload Guitar"/>
      </form>
    </div>
  );
};

export default AddGuitarCard;