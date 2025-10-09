import styled from "styled-components";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { List } from "react-native-paper";


export const TransparentSafeArea = styled(SafeArea)`
  background-color: transparent;
`;
export const SettingsBackground = styled.ImageBackground.attrs({
  source: require("../../../../assets/home_bg.jpg"),
})`
  position: absolute;
  height: 100%;
  width: 100%;
`;

export const SettingsItem = styled(List.Item)`
  padding: ${(props) => props.theme.space[3]};
  background-color: rgba(255, 255, 255, 0.6);
`;
export const AvatarContainer = styled.View`
  align-items: center;
`;