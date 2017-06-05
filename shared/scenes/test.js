import React from "react";
import { StatusBar } from "react-native";
import Styled from "styled-components/native";
import Fade from "../components/fade";
import Link from "../components/link";
import Header from "../components/header";
import { Container, Text, SmallText } from "./home";

export default function() {
  return (
    <Container>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <Header title="test" />
      <Fade>
        <Text>Page Two</Text>
        <Link href="home">
          <SmallText>go to home</SmallText>
        </Link>
      </Fade>
    </Container>
  );
}
