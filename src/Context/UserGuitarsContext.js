import { createContext, useState } from "react";


const UserGuitarsContext = new createContext([]);

export const UserGuitarsProvider = ({children}) => {
    const [userGuitars, setUserGuitars] = useState([]);

    return(
        <UserGuitarsContext.Provider value={{setUserGuitars, userGuitars}}>
            {children}
        </UserGuitarsContext.Provider>
    );

}



export default UserGuitarsContext;