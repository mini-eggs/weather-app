import { AppRegistry, Platform } from "react-native";
import { injectGlobal } from "styled-components";
import app from "./app";

export default app;

if (Platform.OS === "web") {
  injectGlobal`
    body div#root > div {
      height: 100vh;
    }
  `;

  AppRegistry.registerComponent("app", () => app);

  AppRegistry.runApplication("app", {
    rootTag: document.getElementById("root")
  });
}
