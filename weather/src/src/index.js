import React from "react";
import { AppRegistry, Platform, StatusBar } from "react-native";
import { Container, Text } from "./styles/main";

function WeatherApp() {
  return (
    <Container>
      <StatusBar backgroundColor="blue" barStyle="light-content" />
      <Text>Weather App</Text>
    </Container>
  );
}

AppRegistry.registerComponent("weather", () => WeatherApp);

if (Platform.OS === "web") {
  AppRegistry.runApplication("weather", {
    rootTag: document.getElementById("root")
  });
}
