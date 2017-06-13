import React, { Component } from "react";
import { Animated } from "react-native";

export default class extends Component {
  opacity = new Animated.Value(0);

  componentDidMount() {
    Animated.timing(this.opacity, {
      duration: this.props.duration || 1000,
      toValue: 1
    }).start();
  }

  render() {
    return (
      <Animated.View
        style={{ opacity: this.opacity }}
        children={this.props.children}
      />
    );
  }
}
