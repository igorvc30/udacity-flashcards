import React from "react";
import { Button, Header, Left, Body, Title } from "native-base";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const GoBackHeader = ({ title, color, navigation, destination }) => (
  <Header style={{ backgroundColor: color }}>
    <Left>
      <Button
        dark
        block
        transparent
        onPress={() => navigation.navigate(destination)}
      >
        <MaterialCommunityIcons
          style={{ color: "#000" }}
          size={30}
          name="arrow-left"
        />
      </Button>
    </Left>
    <Body>
      <Title style={{ color: "#000" }}>{title}</Title>
    </Body>
  </Header>
);

export default GoBackHeader;
