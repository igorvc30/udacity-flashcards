import React from "react";
import { Button, Header, Left, Body, Title } from "native-base";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const GoBackHeader = ({ title, color, navigation }) => (
  <Header style={{ backgroundColor: color }}>
    <Left>
      <Button dark block transparent onPress={() => navigation.goBack()}>
        <MaterialCommunityIcons
          style={{ color: "white" }}
          size={30}
          name="arrow-left"
        />
      </Button>
    </Left>
    <Body>
      <Title style={{ color: "white" }}>{title}</Title>
    </Body>
  </Header>
);

export default GoBackHeader;
