// set user key retrieved to guitars retrieved, and user guitars to your guitars.
export const getUserGuitars = async (e, currentUserKey) => {
  e.preventDefault();
  let guitarsRetrieved = false;
  const response = await fetch(
    `http://localhost:8080/user-guitars/${currentUserKey}`
  );
  const yourGuitars = await response.json();

  if (yourGuitars) {
    guitarsRetrieved = true;
  }

  return [yourGuitars, guitarsRetrieved];
};

export const addUserGuitar = async (e, currentUserKey, newGuitarName, newGuitarPrice, newGuitarImageUrl, newGuitarDescription) => {
  e.preventDefault();
  const response = await fetch(`http://localhost:8080/user-guitar`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      guitarName: newGuitarName,
      guitarPrice: newGuitarPrice,
      guitarPicUrl: newGuitarImageUrl,
      guitarDescription: newGuitarDescription,
      userKey: currentUserKey,
    }),
  });
  
  const yourGuitars = getUserGuitars(e, currentUserKey)

  return yourGuitars;
};

// Want to decouple these from state. Makes them more reuseable

// When calling this function should set user key retrieved to true. If the goods are returned

// Should call getUserGuitars with the returned key

export const handleAddNewUserAndGuitar = async (e, newGuitar) => {
  e.preventDefault();

  const response = await fetch(`http://localhost:8080/new-user-guitar`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      guitarName: newGuitar.newGuitarName,
      guitarPrice: newGuitar.newGuitarPrice,
      guitarPicUrl: newGuitar.newGuitarImageUrl,
      guitarDescription: newGuitar.newGuitarDescription,
    }),
  });

  const userKey = await response.text();

  return userKey;
};
