import React, { useContext } from "react";
import styled from "styled-components/native";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { FlatList } from "react-native";
import { ActivityIndicator, Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { Text } from "../../../components/typography/text.component";
import { Search } from "../components/search.component";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";



const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 999;
`;

export const RestaurantsScreen = () => {
  const { restaurants, loading, error } = useContext(RestaurantsContext);

  return (
    <>
      <SafeArea>
        <Search />
        {error && <Text variant="error">{error}</Text>}
        {loading && (
          <LoadingContainer>
            <ActivityIndicator animating={true} color="tomato" />
          </LoadingContainer>
        )}
        <RestaurantList
          data={restaurants}
          renderItem={({ item }) => {
            return (
              <Spacer position={"bottom"} size={"large"}>
                <RestaurantInfoCard restaurant={item} />
              </Spacer>
            );
          }}
          keyExtractor={(item) => item.name}
        />
      </SafeArea>
      <ExpoStatusBar style="auto" />
    </>
  );
};
