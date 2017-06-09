import React from "react";
import { Image } from "react-native";
import Styled from "styled-components/native";
import withNavigation from "./HOC_withNavigation";
import HamburgerIcon from "../assets/hamburger.png";
import Button from "../styles/button";

const Img = Styled.Image`
  flex: 1;
  width: 30;
  height: 30;
  margin-left: 10;
`;

function drawerButton({ navigate }) {
  return (
    <Button onPress={navigate("DrawerOpen")}>
      <Img source={HamburgerIcon} resizeMode={Image.resizeMode.contain} />
    </Button>
  );
}

export default withNavigation(drawerButton);
