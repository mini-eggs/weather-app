import React from "react";
import { Platform, Image } from "react-native";
import Styled from "styled-components/native";

const hamburger =
  "https://cdn4.iconfinder.com/data/icons/wirecons-free-vector-icons/32/menu-alt-512.png";

const webStyles = `
  height: 50;
  justify-content: center;
  flex-direction: row;
  align-items: stretch;
  border: solid;
  border-color: #e2e2e7;
  border-width: 0;
  border-bottom-width: 1;
`;

const appStyles = `
  display: none;
`;

const Header = Styled.View`
  ${Platform.OS === "web" ? webStyles : appStyles}
`;

const Button = Styled.TouchableHighlight`
  flex: 0.25;
  justify-content: center;
  align-items: stretch;
`;

const Title = Styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Placeholder = Styled.View`
  flex: 0.25;
`;

const Text = Styled.Text`
  font-size: 24;
`;

export default function({ title }) {
  return (
    <Header>
      <Button>
        <Image
          style={{ flex: 0.65 }}
          source={{ uri: hamburger }}
          resizeMode={Image.resizeMode.contain}
        />
      </Button>
      <Title>
        <Text>
          {title}
        </Text>
      </Title>
      <Placeholder />
    </Header>
  );
}
