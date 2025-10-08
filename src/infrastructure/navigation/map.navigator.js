import React from "react";
import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";

import { MapScreen } from "../../features/map/screens/map.screen";
import { RestaurantDetailScreen } from "../../features/restaurants/screens/restaurant-detail.screen";

const MapStack = createStackNavigator();

export const MapNavigator = () => (
  <MapStack.Navigator
    screenOptions={{
      ...TransitionPresets.ModalPresentationIOS,
      headerShown: false,
    }}
  >
    <MapStack.Screen name="Map" component={MapScreen} />
    <MapStack.Screen 
      name="RestaurantDetail" 
      component={RestaurantDetailScreen} 
      options={{ 
        presentation: "modal", 
        gestureEnabled: true,
      }}
    />
  </MapStack.Navigator>
);