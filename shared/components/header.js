import React from "react";
import { Platform } from "react-native";
import Styled from "styled-components/native";

const Header = Styled.View`
  height: ${Platform.OS === "web" ? 50 : 0};
  background-color: white;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  justify-content: center;
  align-items: center
  flex: 1;
  display: flex;
`;

const Text = Styled.Text`
  font-size: 24;
`;

export default function({ title }) {
  return (
    <Header>
      <Text>
        {title}
      </Text>
    </Header>
  );
}
