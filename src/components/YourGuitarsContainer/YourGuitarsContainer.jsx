import GuitarSuggestionCard from "../GuitarSuggestionCard/GuitarSuggestionCard";
import "./YourGuitarsContainer.scss";

const YourGuitarsContainer = ({ }) => {

    return (
      <>
        <div className="your-guitars-section">
          <h2 className="your-guitars-section__title">Your Guitars</h2>
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
          </div>
        </div>
      </>
    );
};

export default YourGuitarsContainer;
