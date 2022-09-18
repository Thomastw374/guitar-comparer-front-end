import { createContext, useState } from "react";


const GuitarsContext = new createContext([]);

export const GuitarsProvider = ({children}) => {
    const [userGuitars, setUserGuitars] = useState([]);
    const [guitarOne, setGuitarOne] = useState("empty")
    const [guitarTwo, setGuitarTwo] = useState("empty")
    const [currentUserKey, setUserKey] = useState("")
    const [userKeyRetrieved, setUserKeyRetrieved] = useState(false);

    const handleGuitarClicks = (guitarNam, guitarPric, guitarDesc, guitarImgUrl) => {
        if (guitarOne === "empty") {
            
          setGuitarOne([guitarNam, guitarPric, guitarDesc, guitarImgUrl]);
          console.log("guitar one set");
          console.log(guitarOne)
        } else if (guitarOne !== "empty") {
          setGuitarTwo([guitarNam, guitarPric, guitarDesc, guitarImgUrl]);
          console.log("guitar two set");
          console.log(guitarOne)
          console.log(guitarTwo)
        } else {
          return;
        }
    }

    return (
      <GuitarsContext.Provider
        value={{
          setUserGuitars,
          userGuitars,
          handleGuitarClicks,
          guitarOne,
          guitarTwo,
          setGuitarOne,
          setGuitarTwo,
          currentUserKey,
          setUserKey,
          userKeyRetrieved,
          setUserKeyRetrieved
        }}
      >
        {children}
      </GuitarsContext.Provider>
    );

}



export default GuitarsContext;