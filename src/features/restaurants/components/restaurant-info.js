import React from "react";
import { Text } from "react-native";

export const RestaurantInfo = ({ restaurant = {} }) => {
  const {
    name = 'Some Restaurant',
    icon ,
    photos = ['https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png'],
    address = '100 some random street',
    isOpenNow = true,
    rating =  4,
    isClosedTemporarily,
  } = restaurant;
  return <Text>{name}</Text>;
};
