import React from "react";
import { StatusBar } from "react-native";
import Styled from "styled-components/native";
import Fade from "../components/fade";
import Link from "../components/link";
import Header from "../components/header";

export const Container = Styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: blue;
`;

export const Text = Styled.Text`
  color: white;
  font-size: 48;
`;

export const SmallText = Styled.Text`
  color: white;
  font-size: 18;
`;

export default function(props) {
  return (
    <Container>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <Header title="home" />
      <Fade>
        <Text>Weather App</Text>
        <Link href="test">
          <SmallText>go to test</SmallText>
        </Link>
      </Fade>
    </Container>
  );
}
