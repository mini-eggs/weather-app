import React from "react";
import { connect } from "react-redux";
import { push } from "react-router-redux";
import { TouchableHighlight } from "react-native";

function Link({ children, href, navigate }) {
  return (
    <TouchableHighlight onPress={navigate(href)} underlayColor="transparent">
      {children}
    </TouchableHighlight>
  );
}

function mapDispatch(dispatch) {
  return {
    navigate: url => () => dispatch(push(url))
  };
}

export default connect(null, mapDispatch)(Link);
