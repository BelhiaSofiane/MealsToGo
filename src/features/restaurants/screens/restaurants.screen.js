import * as React from "react";
import styled from "styled-components/native";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import {
  StatusBar,
  SafeAreaView,
  Platform,
  FlatList,
} from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { Spacer } from "../../../components/spacer/spacer.component";






const isAndroid = Platform.OS === "android";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  margin-top: ${isAndroid ? `${StatusBar.currentHeight}px` : "0px"};
`;
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
          renderItem={(item) => (
            <Spacer position={"bottom"} size={"large"}>
              <RestaurantInfoCard key={item.name} />
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
