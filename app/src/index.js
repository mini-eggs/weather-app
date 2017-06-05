import React from "react";
import { AppRegistry, Platform, StatusBar } from "react-native";
import Styled from "styled-components/native";

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

function WeatherApp() {
  return (
    <Container>
      <StatusBar backgroundColor="blue" barStyle="light-content" />
      <Text>Weather App</Text>
    </Container>
  );
}

AppRegistry.registerComponent("app", () => WeatherApp);

if (Platform.OS === "web") {
  AppRegistry.runApplication("app", {
    rootTag: document.getElementById("root")
  });
}
