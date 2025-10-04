import * as React from "react";
import styled from "styled-components/native";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { FlatList } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { SafeArea } from "../../../components/utility/safe-area.component";

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

export const RestaurantsScreen = () => {
  const [searchQuery, setSearchQuery] = React.useState("");

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
        <FlatList
          data={[{ name: "1" }, { name: "2" }, { name: "3" }]}
          renderItem={() => (
            <Spacer position={"bottom"} size={"large"}>
              <RestaurantInfoCard/>
            </Spacer>
          )}
          keyExtractor={(item) => item.name}
          contentContainerStyle={{ padding: 16 }}
        />
      </SafeArea>
      <ExpoStatusBar style="auto" />
    </>
  );
};
