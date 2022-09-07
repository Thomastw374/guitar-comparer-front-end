import "./GuitarAddingForm.scss";


const GuitarAddingForm = ({submitGuitar}) => {
    return (
      <div className="guitar-adding-form" action="" method="post">
        <label htmlFor="">Guitar Name</label>
        <input className="guitar-adding-form__input" type="text" />
        <label htmlFor="">Guitar Description</label>
        <input className="guitar-adding-form__input" type="text" />
        <label htmlFor="">Guitar Image URL</label>
        <input className="guitar-adding-form__input" type="text" />
        <button className="guitar-adding-form__button" onClick= {submitGuitar}>Add Guitar</button>
      </div>
    );
}

export default GuitarAddingForm;