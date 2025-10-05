import React, { useState, useEffect, createContext, useMemo } from "react";

import {
  restaurantsRequest,
  restaurantsTransform,
} from "./restaurant.service";

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = ({ children }) => {
  return (
    <RestaurantsContext.Provider value={{ restaurants: [1, 2, 3] }}>
      {children}
    </RestaurantsContext.Provider>
  );
};
