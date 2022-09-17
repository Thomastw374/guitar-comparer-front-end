import GuitarSuggestionCard from "../GuitarSuggestionCard/GuitarSuggestionCard";
import "./YourGuitarsContainer.scss";

// c2Nsbd8GoJey3EcHtWldmc5wAAcFDOYXy

const YourGuitarsContainer = ({getUserGuitars, setUserKey}) => {
  
    return (
      <>
        <div className="your-guitars-section">
          <p>The 'Your guitars' section is where your use submitted guitars appear. To retrieve a previously created guitar list enter the 32 character user key you were given upon submission of your first guitar. To start a guitar list simply upload your first guitar using the form below.</p>
          <h2 className="your-guitars-section__title">Your Guitars</h2>
          <form className="your-guitars-section__user-key-form" onSubmit={getUserGuitars}>
            <label htmlFor="userKey">User Key: </label>
            <input className="your-guitars-section__user-key-input" onChange={setUserKey}/>
            <button type="submit">Go</button>
          </form>
          <div className="your-guitars-section__container">
            <GuitarSuggestionCard
              guitarName={"Ibanez RGA8"}
              guitarPicUrl={
                "https://d1aeri3ty3izns.cloudfront.net/media/32/321048/1200/preview.jpg"
              }
              guitarPrice={"£604.00"}
              guitarDescription={
                "The Ibanez RGMS8 Iron Label Multi Scale 8 String has been sculpted for players traveling to the darkest depths of tonal destruction by offering an extended frequency range and an incredibly comfortable performance. Its multi-scale neck and fingerboard delivers luxury, while the 5-piece maple and walnut construction offers a stable performance. The combination of the mahogany body and jatoba fingerboard provides a balanced tonal character, with plenty of punch and low-end thunder for extra clarity. Its set of Array-8 MS humbuckers are designed to accommodate the extended frequency range, offering powerfully deep tones saturated in sonic thunder. It also features a monorail bridge, which has been built to accommodate its multi-scale design, offering incredible string stability while delivering the perfect articulation across all the strings."
              }
            />
            <GuitarSuggestionCard isForm="true"/>
          </div>
        </div>
      </>
    );
};

export default YourGuitarsContainer;
