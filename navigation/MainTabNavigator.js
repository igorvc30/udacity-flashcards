import React from "react";
import { Platform } from "react-native";
import {
  createStackNavigator,
  createMaterialTopTabNavigator
} from "react-navigation";

import TabBarIcon from "../components/TabBarIcon";
import DecksList from "./../screens/DecksList";
import DeckForm from "./../screens/DeckForm";

const HomeStack = createStackNavigator({
  DecksList: {
    screen: DecksList,
    navigationOptions: { header: null }
  }
});

HomeStack.navigationOptions = {
  tabBarLabel: "DECKS",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === "ios"
          ? `ios-information-circle${focused ? "" : "-outline"}`
          : "md-information-circle"
      }
    />
  )
};

const DeckFormStack = createStackNavigator({
  DeckForm: {
    screen: DeckForm,
    navigationOptions: { header: null }
  }
});

DeckFormStack.navigationOptions = {
  tabBarLabel: "NEW DECK",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-link" : "md-link"}
    />
  )
};

export default createMaterialTopTabNavigator({
  HomeStack,
  DeckFormStack
});
