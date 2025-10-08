import React from "react";

import { Text } from "../typography/text.component";
import styled from "styled-components";


const ComapctImage = styled.Image`
broder-radius: 10px;
width: 120px;
height: 100px;
`;
const Item = styled.View`
padding: 10px;
max-width:120px;
align-items: center;
`;

// eslint-disable-next-line react/prop-types
export const CompactRestaurantInfo = ({ restaurant }) => {
    console.log('compact',restaurant);
    return (
    <Item>
        <ComapctImage source={{ uri: restaurant.photos[0]}} />
        <Text 
        variant='caption'
        numberOfLines={3}
        >
            {restaurant.name}
        </Text>
    </Item>
    )
};