import React from "react";
import { Image } from "react-native";
import Styled from "styled-components/native";
import { withNavigation } from "react-navigation";
import HamburgerIcon from "../assets/hamburger.png";
import Button from "../styles/button";

const Img = Styled.Image`
  flex: 1;
  width: 25;
  height: 25;
  margin-left: 10;
`;

function drawerButton({ navigation }) {
  return (
    <Button onPress={() => navigation.navigate("DrawerOpen")}>
      <Img source={HamburgerIcon} resizeMode={Image.resizeMode.contain} />
    </Button>
  );
}

export default withNavigation(drawerButton);
