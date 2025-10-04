import * as React from "react";
import styled from "styled-components/native";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { StatusBar, SafeAreaView, Platform } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
const isAndroid = Platform.OS === "android";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  margin-top: ${isAndroid ? `${StatusBar.currentHeight}px` : "0px"};
`;
const SearchContainer = styled.View`
  padding: ${props => props.theme.space[3]};
  box-shadow: 0 5px 5px rgba(255, 8, 8, 0.1);
  `;

const RestaurantListContainer = styled.View`
  flex: 1;
  padding: ${props => props.theme.space[3]};
`;

export const RestaurantsScreen = () => {
  const [searchQuery, setSearchQuery] = React.useState("");

  return (
    <>
      <SafeArea>
        <SearchContainer>
          <Searchbar
            elevation={5}
            mode="view"
            onChangeText={setSearchQuery}
            value={searchQuery}
          />
        </SearchContainer>
        <RestaurantListContainer>
          <RestaurantInfoCard/>
        </RestaurantListContainer>
      </SafeArea>
      <ExpoStatusBar style="auto" />
    </>
  );
};
