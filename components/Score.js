import React, { Component } from "react";
import { Image } from "react-native";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  H2,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Title
} from "native-base";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Score = ({ score, total }) => {
  const percentage = Math.round((score / total) * 100);
  let text = "";
  let image = require("../assets/images/splash.png");
  switch (true) {
    case percentage === 0:
      text = "SHAME! SHAME! SHAME!";
      image = require("../assets/images/shame.gif");
      break;
    case percentage <= 39:
      text = "NOT GOOD!";
      image = require("../assets/images/bad.jpg");
      break;
    case percentage <= 74:
      text = "NICE TRY!";
      image = require("../assets/images/notbad.jpg");
      break;
    case percentage <= 99:
      text = "GREAT JOB!";
      image = require("../assets/images/soclose.jpg");
      break;
    default:
      text = "CONGRATULATION!!!";
      image = require("../assets/images/champion.jpg");
  }
  return (
    <Container style={{ flex: 1 }}>
      <Content>
        <Card style={{ flex: 1 }}>
          <CardItem style={{ backgroundColor: "black" }}>
            <Left>
              <MaterialCommunityIcons
                style={{ color: "white" }}
                size={30}
                name="trophy-outline"
              />
              <Body>
                <Title style={{ color: "white" }}>SCORE</Title>
              </Body>
            </Left>
          </CardItem>
          <CardItem>
            <Body style={{ alignContent: "center", justifyContent: "center" }}>
              <Image
                source={image}
                style={{
                  flex: 1,
                  width: "100%",
                  height: 250,
                  resizeMode: "contain"
                }}
              />
              <Text style={{ textAlign: "center" }}>{text}</Text>
            </Body>
          </CardItem>
          <CardItem>
            <Body>
              <H2> {percentage}% </H2>
            </Body>
            <Left>
              <MaterialCommunityIcons size={20} name="trophy" />
              <Text style={{ textAlign: "center" }}>
                SCORE {score} OUT {total}
              </Text>
            </Left>
          </CardItem>
        </Card>
      </Content>
    </Container>
  );
};
export default Score;
