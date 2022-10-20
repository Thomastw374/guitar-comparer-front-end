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
      <form className="guitar-upload__form" action="" onSubmit={addUserGuitar}>
        <div className="guitar-upload__form-item">
          <label className="guitar-upload__form-label" htmlFor="">Guitar Picture URL (optional)</label>
          <input className="guitar-upload__form-input" type="text" name="" id="" onChange={newGuitarUrl} />
        </div>
        <div className="guitar-upload__form-item">
          <label className="guitar-upload__form-label" htmlFor="">Guitar Name</label>
          <input className="guitar-upload__form-input" type="text" name="" id="" onChange={newGuitarName} />
        </div>
        <div className="guitar-upload__form-item">
          <label className="guitar-upload__form-label" htmlFor="">Guitar Price</label>
          <input className="guitar-upload__form-input" type="text" name="" id="" onChange={newGuitarPrice} />
        </div>
        <div className="guitar-upload__form-item">
          <label className="guitar-upload__form-label" htmlFor="">Guitar Description</label>
          <textarea cols="30" rows="7" className="guitar-upload__form-input" type="text" name="" id="" onChange={newGuitarDescription} />
        </div>
        <Button text = "Upload Guitar"/>
      </form>
    </div>
  );
};

export default AddGuitarCard;