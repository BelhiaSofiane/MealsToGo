import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RestaurantsNavigator } from "./restaurants.navigator";
import { Ionicons } from "@expo/vector-icons";
import { View, Button } from "react-native";
import { MapNavigator } from "./map.navigator";
import { AuthenticationContext } from "../../services/authentication/authentication.context";
import { FavouritesContextProvider } from "../../services/favourites/favourites.context";
import { LocationContextProvider } from "../../services/location/location.context";
import { RestaurantsContextProvider } from "../../services/restaurants/restaurants.context";

const Tab = createBottomTabNavigator();

function SettingsScreen() {
  const { onLogout } = React.useContext(AuthenticationContext);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button title="Logout" onPress={() => onLogout()} />
    </View>
  );
}

export const AppNavigator = () => {
  return (
    <>
      <FavouritesContextProvider>
        <LocationContextProvider>
          <RestaurantsContextProvider>
            <Tab.Navigator
              screenOptions={{
                tabBarActiveTintColor: "tomato",
                tabBarInactiveTintColor: "gray",
                headerShown: false,
              }}
            >
              <Tab.Screen
                name="Restaurants"
                component={RestaurantsNavigator}
                options={{
                  // Icon changes based on focused/unfocused state
                  tabBarIcon: ({ color, size }) => (
                    <Ionicons name="restaurant" size={size} color={color} />
                  ),
                }}
              />
              <Tab.Screen
                name="Map"
                component={MapNavigator}
                options={{
                  tabBarIcon: ({ color, size }) => (
                    <Ionicons name="map" size={size} color={color} />
                  ),
                }}
              />
              <Tab.Screen
                name="Settings"
                component={SettingsScreen}
                options={{
                  tabBarIcon: ({ color, size }) => (
                    <Ionicons name="settings" size={size} color={color} />
                  ),
                }}
              />
            </Tab.Navigator>
          </RestaurantsContextProvider>
        </LocationContextProvider>
      </FavouritesContextProvider>
    </>
  );
};
