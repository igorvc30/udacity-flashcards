import React, { Component } from "react";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Text,
  Button,
  Left,
  Body,
  Right,
  H2
} from "native-base";

import { MaterialCommunityIcons } from "@expo/vector-icons";

const Deck = ({ deck }) => {
  return (
    <Card>
      <CardItem
        header
        bordered
        style={{
          backgroundColor: deck.color,
          alignContent: "center",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <H2>{deck.title}</H2>
      </CardItem>
      <CardItem
        style={{
          borderColor: deck.color,
          textColor: deck.color,
          borderWidth: 1
        }}
      >
        <Left>
          <Text>
            <MaterialCommunityIcons name="cards" size={20} />
            {deck.cards.length} Cards
          </Text>
        </Left>
        <Content>
          <Text>
            <MaterialCommunityIcons name="check-decagram" size={20} />
            {deck.numberOfAttempts} Attempts
          </Text>
        </Content>
        <Right>
          <Text>
            <MaterialCommunityIcons name="trophy" size={20} />
            {deck.highestScore} Score
          </Text>
        </Right>
      </CardItem>
    </Card>
  );
};

export default Deck;
