import React from "react";
import { Platform } from "react-native";
import Styled from "styled-components/native";

const Header = Platform.OS === "web"
  ? Styled.View`
  height: 50;
  justify-content: center;
  align-items: center;
  border: solid;
  border-color: #e2e2e7;
  border-width: 0;
  border-bottom-width: 1;
`
  : Styled.View`
  display: none;
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
