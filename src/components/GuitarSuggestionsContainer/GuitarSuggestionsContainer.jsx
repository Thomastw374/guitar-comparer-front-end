import GuitarSuggestionCard from "../GuitarSuggestionCard/GuitarSuggestionCard";

const GuitarSuggestionsContainer = () => {
    return (
      <section>
        <GuitarSuggestionCard
          guitarName={"Hofner HCT Shorty Electric Guitar, Cadillac Green"}
          guitarPicUrl={"https://d1aeri3ty3izns.cloudfront.net/media/12/127621/600/preview.jpg"}
          guitarPrice={"£129.00"}
          guitarDescription={"Truncated description goes here"}
        />
      </section>
    );
}

export default GuitarSuggestionsContainer;