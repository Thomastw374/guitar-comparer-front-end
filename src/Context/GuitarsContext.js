import { createContext, useState } from "react";


const GuitarsContext = new createContext([]);

export const GuitarsProvider = ({children}) => {
    const [userGuitars, setUserGuitars] = useState([]);

    return(
        <GuitarsContext.Provider value={{setUserGuitars, userGuitars}}>
            {children}
        </GuitarsContext.Provider>
    );

}



export default GuitarsContext;