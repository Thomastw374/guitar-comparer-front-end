import "./GuitarComparisonPage.scss"

const GuitarComparisonPage = ({guitarPair}) => {
    console.log(guitarPair)
    return (
      <div className="comparison-page">
        <div>
          <img src={guitarPair[0][0]} alt="Guitar Pic 1" />
          <h4>{guitarPair[0][1]}</h4>
          <h4>{guitarPair[0][2]}</h4>
          <h4>{guitarPair[0][3]}</h4>
        </div>
        <div>
          <img src={guitarPair[1][0]} alt="Guitar Pic 2" />
          <h4>{guitarPair[1][1]}</h4>
          <h4>{guitarPair[1][2]}</h4>
          <h4>{guitarPair[1][3]}</h4>
        </div>
      </div>
    );
}

export default GuitarComparisonPage;