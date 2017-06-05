import { AppRegistry, Platform } from "react-native";
import app from "./app";

AppRegistry.registerComponent("app", () => app);

if (Platform.OS === "web") {
  AppRegistry.runApplication("app", {
    rootTag: document.getElementById("root")
  });
}
