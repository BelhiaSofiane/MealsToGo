import React, { useState } from "react";

import { SafeArea } from "../../../components/utility/safe-area.component";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

import { List } from "react-native-paper";
import { ScrollView } from "react-native";
import styled from "styled-components";

export const RestaurantDetailScreen = ({ route }) => {
  const [expanded, setExpanded] = useState({
    breakFast: false,
    lunch: false,
    dinner: false,
    drinks: false,
  });

  const { restaurant } = route.params;

  const handlePress = (accordion) => {
    setExpanded({
      ...expanded,
      [accordion]: !expanded[accordion],
    });
  };

  // shared styled Accordion
  const MenuAccordion = styled(List.Accordion).attrs((p) => ({
    // common ripple color for all accordions
    rippleColor: "rgba(255, 99, 71, 0.2)",

    // dynamic title color based on expanded prop passed in
    titleStyle: {
      color: p.expanded ? "tomato" : "black",
    },
  }))``;

  return (
    <SafeArea variant="body">
      <RestaurantInfoCard restaurant={restaurant} />
      <ScrollView>
        <List.Section>
          <MenuAccordion
            title="Breakfast"
            left={(props) => (
              <List.Icon
                {...props}
                icon="bread-slice"
                color={expanded.breakFast ? "tomato" : "black"}
              />
            )}
            expanded={expanded.breakFast}
            onPress={() => handlePress("breakFast")}
          >
            <List.Item title="Pancakes" />
            <List.Item title="Omelette" />
          </MenuAccordion>

          <MenuAccordion
            title="Lunch"
            left={(props) => (
              <List.Icon
                {...props}
                icon="food"
                color={expanded.lunch ? "tomato" : "black"}
              />
            )}
            expanded={expanded.lunch}
            onPress={() => handlePress("lunch")}
          >
            <List.Item title="Burger" />
            <List.Item title="Salad" />
          </MenuAccordion>

          <MenuAccordion
            title="Dinner"
            left={(props) => (
              <List.Icon
                {...props}
                icon="food-steak"
                color={expanded.dinner ? "tomato" : "black"}
              />
            )}
            expanded={expanded.dinner}
            onPress={() => handlePress("dinner")}
          >
            <List.Item title="Steak" />
            <List.Item title="Pasta" />
          </MenuAccordion>
          <MenuAccordion
            title="Drinks"
            left={(props) => (
              <List.Icon
                {...props}
                icon="glass-mug"
                color={expanded.drinks ? "tomato" : "black"}
              />
            )}
            expanded={expanded.drinks}
            onPress={() => handlePress("drinks")}
          >
            <List.Item title="Water" />
            <List.Item title="Hamoud" />
            <List.Item title="Lben" />
          </MenuAccordion>
        </List.Section>
      </ScrollView>
    </SafeArea>
  );
};
