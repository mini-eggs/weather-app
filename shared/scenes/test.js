import React from "react";
import { StatusBar } from "react-native";
import Fade from "../components/fade";
import Link from "../components/link";
import Header from "../components/header";
import SceneContainer from "../styles/sceneContainer";
import HeaderWrap from "../styles/headerWrap";
import PageWrap from "../styles/pageWrap";
import LargeText from "../styles/largeText";
import MediumText from "../styles/mediumText";
import Center from "../styles/center";
import FlexCenter from "../styles/flexCenter";

export default function(props) {
  return (
    <SceneContainer>
      <HeaderWrap>
        <StatusBar backgroundColor="white" barStyle="dark-content" />
        <Header title="Test" />
      </HeaderWrap>
      <PageWrap>
        <FlexCenter>
          <Fade>
            <LargeText>Second Scene</LargeText>
            <Link back={true} href="home">
              <Center>
                <MediumText>Home</MediumText>
              </Center>
            </Link>
          </Fade>
        </FlexCenter>
      </PageWrap>
    </SceneContainer>
  );
}
