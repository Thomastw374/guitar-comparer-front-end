import { createContext, useState } from "react";


const GuitarsContext = new createContext([]);

export const GuitarsProvider = ({children}) => {
    const [userGuitars, setUserGuitars] = useState([]);
    const [guitarOne, setGuitarOne] = useState([])
    const [guitarTwo, setGuitarTwo] = useState([])

    const handleGuitarClick = (guitarNam, guitarPric, guitarDesc, guitarImgUrl) => {
        if(guitarOne !== []) {
            setGuitarTwo([guitarNam, guitarPric, guitarDesc, guitarImgUrl]);
        } else if (guitarOne === []) {
            setGuitarOne([guitarNam, guitarPric, guitarDesc, guitarImgUrl]);
        } else {
            return;
        }
    }

    return(
        <GuitarsContext.Provider value={{setUserGuitars, userGuitars}}>
            {children}
        </GuitarsContext.Provider>
    );

}



export default GuitarsContext;