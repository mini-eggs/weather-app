import React from "react";
import { TouchableHighlight } from "react-native";
import { withNavigation } from "react-navigation";

function navigate(navigation, href) {
  return function() {
    href === "home" ? navigation.goBack() : navigation.navigate(href);
  };
}

function Link({ children, href, navigation }) {
  return (
    <TouchableHighlight
      onPress={navigate(navigation, href)}
      underlayColor="transparent"
      children={children}
    />
  );
}

export default withNavigation(Link);
