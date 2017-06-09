import React from "react";
import { Platform } from "react-native";
import Styled from "styled-components/native";
import Link from "./link";

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

const Wrap = Styled.View`
  flex-direction: row;
  max-width: 800;
  padding-left: 10;
  padding-right: 10;
  flex: 1;
`;

const Title = Styled.View`
  flex: 0.5;
  justify-content: center;
  align-items: flex-start;
`;

const SubTitles = Styled(Title)`
  flex: 0.5;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
`;

const Text = Styled.Text`
  font-size: 24;
`;

const SubText = Styled(Text)`
  font-size: 12;
  margin-left: 10;
`;

const defaultLinks = [
  { name: "Home", href: "home" },
  { name: "Test", href: "test" }
];

function SingleLink({ name, href }, index) {
  return (
    <Link key={index} href={href}>
      <SubText>
        {name}
      </SubText>
    </Link>
  );
}

export default function({ title, links = defaultLinks }) {
  return (
    <Header>
      <Wrap>
        <Title>
          <Text>
            {title}
          </Text>
        </Title>
        <SubTitles>
          {defaultLinks.map(SingleLink)}
        </SubTitles>
      </Wrap>
    </Header>
  );
}
