import React from "react";

import { CompactRestaurantInfo } from "../../../components/restaurant/compact-restaurant-info.component";

// eslint-disable-next-line react/prop-types
export const MapCallout = ({ restaurant }) => {
  return <CompactRestaurantInfo restaurant={restaurant} isMap />;
};
