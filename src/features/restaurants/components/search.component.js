/* eslint-disable react/prop-types */
import React, { useContext, useState, useEffect } from "react";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";
import { LocationContext } from "../../../services/location/location.context";

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const StyledSearchBar = styled(Searchbar).attrs({
  elevation: 5,
  placeholder: "Search for a location",
  placeholderTextColor: "gray",
})`
  padding: ${(props) => props.theme.space[0]};
  border-radius: ${(props) => props.theme.space[2]};
  background-color: ${(props) => props.theme.colors.bg.secondary};
`;

export const Search = ({ isFavroutiesToggled, onFavouritesToggle }) => {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyWord, setSearchKeyword] = useState(keyword);

  useEffect(() => {
    setSearchKeyword(keyword);
  }, []);

  useEffect(() => {
    search(searchKeyWord);
  }, []);

  return (
    <SearchContainer>
      <StyledSearchBar
        icon={isFavroutiesToggled ? "heart" : "heart-outline"}
        onIconPress={onFavouritesToggle} 
        placeholder="Search for a location"
        value={searchKeyWord}
        onSubmitEditing={() => {
          search(searchKeyWord);
        }}
        onChangeText={(text) => {
          setSearchKeyword(text);
        }}
      />
    </SearchContainer>
  );
};
