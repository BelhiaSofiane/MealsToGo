import React, { useContext, useState, useEffect } from "react";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";
import { LocationContext } from "../../../services/location/location.context";
import { SafeArea } from "../../../components/utility/safe-area.component";

const SearchContainer = styled.View`
  width: 100%;
  position: absolute;
  top: 32px;
  left: 16px;
  padding: ${(props) => props.theme.space[3]};
`;

// centering the search bar
const StyledSearchBar = styled(Searchbar).attrs({
  placeholder: "Search for a location",
  placeholderTextColor: "gray",
})`
  position: absolute;
  z-index: 999;
  background-color: ${(props) => props.theme.colors.bg.secondary};
  padding: ${(props) => props.theme.space[0]};
  border-radius: ${(props) => props.theme.space[2]};
`;

export const Search = () => {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyWord, setSearchKeyword] = useState(keyword);

  useEffect(() => {
    setSearchKeyword(keyword);
  }, [keyword]);

  useEffect(() => {
    search(searchKeyWord);
  }, []);

  return (
    <SearchContainer>
      <StyledSearchBar
      icon='map'
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
