import React from "react";
import { StatusBar } from "react-native";
import Styled from "styled-components/native";
import Fade from "../components/fade";
import Routing from "../components/routing";
import Link from "../components/link";

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

const SmallText = Styled.Text`
  color: white;
  font-size: 18;
`;

export default function(props) {
  return (
    <Container>
      <Routing navigation={props.navigation} />
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <Fade>
        <Text>Weather App</Text>
        <Link href="Test">
          <SmallText>go to test</SmallText>
        </Link>
      </Fade>
    </Container>
  );
}
