import React,{ useContext, useState } from "react";
import styled from "styled-components/native";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { FlatList } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;



export const RestaurantsScreen = () => {
  const [searchQuery, setSearchQuery] = React.useState("");

  const restaurantContext = useContext(RestaurantsContext);

    return (
    <>
      <SafeArea>
        <SearchContainer>
          <Searchbar
            style={{ backgroundColor: "white" }}
            placeholder="Find Restaurant"
            elevation={5}
            mode="bar"
            onChangeText={setSearchQuery}
            value={searchQuery}
          />
        </SearchContainer>
        <RestaurantList
          data={restaurantContext.restaurants}
          renderItem={() => (
            <Spacer position={"bottom"} size={"large"}>
              <RestaurantInfoCard/>
            </Spacer>
          )}
          keyExtractor={(item) => item.name}
        />
      </SafeArea>
      <ExpoStatusBar style="auto" />
    </>
  );
};
