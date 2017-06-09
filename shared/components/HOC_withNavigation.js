import React from "react";
import { withNavigation } from "react-navigation";

export default function(Component) {
  return withNavigation(function(props) {
    return (
      <Component
        navigate={location => () => props.navigation.navigate(location)}
        {...props}
      />
    );
  });
}
