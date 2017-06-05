import React from "react";
import { AppRegistry, Platform } from "react-native";
import WeatherApp from "./setup";

AppRegistry.registerComponent("app", () => WeatherApp);

if (Platform.OS === "web") {
  AppRegistry.runApplication("app", {
    rootTag: document.getElementById("root")
  });
}
