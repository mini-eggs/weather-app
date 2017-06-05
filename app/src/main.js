import React from "react";
import { StatusBar } from "react-native";
import Styled from "styled-components/native";
import Fade from "./decorators/fade";

const Container = Styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: blue;
`;

const Text = Styled.Text`
  color: white;
  font-size: 48;
`;

export default function() {
  return (
    <Container>
      <StatusBar backgroundColor="blue" barStyle="light-content" />
      <Fade>
        <Text>Weather App</Text>
      </Fade>
    </Container>
  );
}
