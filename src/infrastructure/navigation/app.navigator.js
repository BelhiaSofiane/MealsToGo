import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RestaurantsNavigator } from "./restaurants.navigator";
import { Ionicons } from "@expo/vector-icons";
import { View, Text } from "react-native";
import { MapScreen } from "../../features/map/screens/map.screen";
import { MapNavigator } from "./map.navigator";
const Tab = createBottomTabNavigator();



function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings!</Text>
    </View>
  );
}

export const AppNavigator = () => {
  return (
    <>
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
    </>
  );
};
