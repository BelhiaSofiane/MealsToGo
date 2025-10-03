import * as React from "react";
import styled from "styled-components/native";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import {
  StatusBar,
  View,
  SafeAreaView,
  Platform,
} from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card";
const isAndroid = Platform.OS === "android";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  margin-top: ${isAndroid ? `${StatusBar.currentHeight}px` : "0px"};
`;
const SearchContainer = styled.View`
  padding: 16px;
`;

const RestaurantListContainer = styled.View`
  flex: 1;
  padding: 16px;
  background-color: blue;
`;

export const RestaurantsScreen = () => {
  const [searchQuery, setSearchQuery] = React.useState("");

  return (
    <>
      <SafeArea>
        <SearchContainer>
          <Searchbar
            placeholder="Search"
            onChangeText={setSearchQuery}
            value={searchQuery}
          />
        </SearchContainer>
        <RestaurantListContainer>
          <RestaurantInfoCard />
        </RestaurantListContainer>
      </SafeArea>
      <ExpoStatusBar style="auto" />
    </>
  );
};

