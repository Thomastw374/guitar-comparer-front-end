import { createContext, useState } from "react";


const UserGuitarsContext = new createContext([]);

export const UserGuitarsProvider = ({children}) => {
    const [userGuitars, setUserGuitars] = useState([]);

    const getUserGuitars = async (e, currentUserKey) => {
      console.log("activated");
      e.preventDefault();
      const response = await fetch(
        `http://localhost:9090/user-guitars/${currentUserKey}`
      );
      const yourGuitars = await response.json();
      setUserGuitars(yourGuitars);
    };

    return(
        <UserGuitarsContext.Provider value={{getUserGuitars, userGuitars}}>
            {children}
        </UserGuitarsContext.Provider>
    );

}



export default UserGuitarsContext;