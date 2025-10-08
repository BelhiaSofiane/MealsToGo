import React, { createContext, useContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { AuthenticationContext } from "../authentication/authentication.context";

export const FavouritesContext = createContext();

// eslint-disable-next-line react/prop-types
export const FavouritesContextProvider = ({ children }) => {
  const { user } = useContext(AuthenticationContext);
  const [favourites, setFavourites] = useState([]);

  const saveFavourites = async (value, uid) => {
    try {
      await AsyncStorage.setItem(`favourites-${uid}` , JSON.stringify(value));
    } catch (e) {
      console.log("Error Saving Data", e);
    }
  };
  const loadFavourites = async (uid) => {
    try {
      const value = await AsyncStorage.getItem(`favourites-${uid}`);
      if (value !== null) {
        setFavourites(JSON.parse(value));
      }
    } catch (e) {
      console.log("Error Loading Data", e);
    }
  };

  useEffect(() => {
    if (user) {
      loadFavourites(user.uid);
    }
  }, [user]);

useEffect(() => {
  if (user) {
    saveFavourites(favourites, user.uid);
  }
}, [favourites, user]);

const add = (restaurant) => {
  setFavourites((prev) => {
    if (prev.some((x) => x.placeId === restaurant.placeId)) return prev;
    return [...prev, restaurant];
  });
};
  const remove = (restaurant) => {
    const newFavourites = favourites.filter(
      (x) => x.placeId !== restaurant.placeId
    );
    setFavourites(newFavourites);
  };

  return (
    <FavouritesContext.Provider
      value={{
        favourites,
        addToFavourites: add,
        removeFromFavourites: remove,
      }}
    >
      {children}
    </FavouritesContext.Provider>
  );
};
