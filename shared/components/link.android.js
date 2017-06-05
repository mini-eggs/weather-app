import React from "react";
import { TouchableHighlight } from "react-native";
import { withNavigation } from "react-navigation";

function navigate(navigation, href, back) {
  return function() {
    back ? navigation.goBack() : navigation.navigate(href);
  };
}

function Link({ children, href, navigation, back }) {
  return (
    <TouchableHighlight
      onPress={navigate(navigation, href, back)}
      underlayColor="transparent"
      children={children}
    />
  );
}

export default withNavigation(Link);
