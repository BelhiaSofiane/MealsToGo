import React, {
  useState,
  createContext,
  useMemo,
  useEffect,
  useContext,
} from "react";
import { restaurantRequest, restaurantsTransform } from "./restaurant.service";
import { LocationContext } from "../location/location.context";

export const RestaurantsContext = createContext();

// eslint-disable-next-line react/prop-types
export const RestaurantsContextProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { location } = useContext(LocationContext);

  const retriveRestaurants = (loc) => {
    setLoading(true);
    setTimeout(() => {
      restaurantRequest(loc)
        .then(restaurantsTransform)
        .then((results) => {
          setLoading(false);
          setRestaurants(results);
        })
        .catch((error) => {
          setError(error);
          setLoading(false);
        });
    }, 2000);
  };

  useEffect(() => {
    if (location) {
      const locationString = `${location.lat},${location.lng}`;
      retriveRestaurants(locationString);
    }
  }, [location]);

  const memoizedValue = useMemo(
    () => ({
      restaurants,
      loading,
      error,
    }),
    [restaurants, loading, error]
  );

  return (
    <>
      <RestaurantsContext.Provider value={memoizedValue}>
        {children}
      </RestaurantsContext.Provider>
    </>
  );
};
