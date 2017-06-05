import React from "react";
import { StatusBar } from "react-native";
import Styled from "styled-components/native";
import Fade from "../components/fade";

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
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <Fade>
        <Text>Page Two</Text>
      </Fade>
    </Container>
  );
}
