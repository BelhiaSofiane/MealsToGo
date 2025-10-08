/* eslint-disable react/prop-types */
import React from "react";
import styled from "styled-components/native";
import WebView from "react-native-webview";
import { Platform } from "react-native";

import { Text } from "../typography/text.component";


const isAndroid = Platform.OS === "android"
const CompactImage = styled.Image`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;

const CompactWebView = styled(WebView)`
  border-radius: 10px;
  width: 120px;
  height: 100px;
  `;

const Item = styled.View`
  padding: 10px;
  max-width: 120px;
  align-items: center;
  
`;

const CompactText = styled.Text`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
  color: ${(props) => props.theme.colors.ui.primary};
`;


export const CompactRestaurantInfo = ({ restaurant, isMap }) => {
  const Image = isAndroid && isMap ? CompactImage : CompactWebView

  return (
    <Item>
      {/* Change to Image when Callout gets Fixed  */}
      <CompactImage source={{ uri: restaurant.photos[0] }} /> 
      <CompactText style={{ marginTop: 10 }} variant="caption" numberOfLines={3}>
        {restaurant.name}
      </CompactText>
    </Item>
  );
};