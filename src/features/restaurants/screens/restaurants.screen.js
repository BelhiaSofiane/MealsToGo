/* eslint-disable react/prop-types */
import React, { useContext, useState } from "react";
import styled from "styled-components/native";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { FlatList, TouchableOpacity } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { Text } from "../../../components/typography/text.component";
import { Search } from "../components/search.component";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { FavouritesBar } from "../../../components/favourites/favourite-bar.component";
import { FavouritesContext } from "../../../services/favourites/favourites.context";


const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

const LoadingContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

export const RestaurantsScreen = ({ navigation }) => {
  const { restaurants, loading, error } = useContext(RestaurantsContext);
  const { favourites } = useContext(FavouritesContext);
  const [isToggled, setIsToggled] = useState(false);

  return (
    <>
      <SafeArea>
        <Search 
        isFavroutiesToggled={isToggled}
        onFavouritesToggle={() => setIsToggled(!isToggled)}
         />


        {isToggled && <FavouritesBar 
        onNavigate={(screen, params) => navigation.navigate(screen, params)} 
        favourites={favourites} />}
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
              <TouchableOpacity 
               activeOpacity={0.85}
               onPress={() => navigation.navigate("RestaurantDetail", { restaurant: item })}>
                <Spacer position={"bottom"} size={"large"}>
                  <RestaurantInfoCard restaurant={item} />
                </Spacer>
              </TouchableOpacity>
            );
          }}
          keyExtractor={(item) => item.name}
        />
      </SafeArea>
      <ExpoStatusBar style="auto" />
    </>
  );
};
