import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const FavouritesContext = createContext();

// eslint-disable-next-line react/prop-types
export const FavouritesContextProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([]);
  const STORAGE_KEY = "my-key"

  const saveFavourites = async (value) => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY , JSON.stringify(value));
    } catch (e) {
      console.log("Error Saving Data",e);
    }
  };
  const loadFavourites = async () => {
    try {
      const value = await AsyncStorage.getItem(STORAGE_KEY);
      if (value !== null) {
        setFavourites(JSON.parse(value));
      }
    } catch (e) {
      console.log("Error Loading Data",e);
    }
  };

   useEffect(()=>{
    loadFavourites()
  },[])


  useEffect(()=>{
    saveFavourites(favourites)
  },[favourites])


  const add = (restaurant) => {
    setFavourites([...favourites, restaurant]);
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
