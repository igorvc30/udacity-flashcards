import React from "react";
import { Header, Left, Body, Title } from "native-base";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const MainHeader = ({ title, icon }) => (
  <Header
    style={{
      backgroundColor: "white"
    }}
  >
    <Left>
      <MaterialCommunityIcons
        style={{ color: "black" }}
        size={35}
        name={icon}
      />
    </Left>
    <Body>
      <Title style={{ color: "black" }}>{title}</Title>
    </Body>
  </Header>
);

export default MainHeader;
