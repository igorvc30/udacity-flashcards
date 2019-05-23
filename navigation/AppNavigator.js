import {
  createAppContainer,
  createSwitchNavigator,
  createStackNavigator
} from "react-navigation";
import DeckDetail from "./../screens/DeckDetail";

import MainTabNavigator from "./MainTabNavigator";

const DeckDetailStack = createStackNavigator({
  DeckDetail: DeckDetail
});

DeckDetailStack.navigationOptions = {
  tabBarLabel: "Deck Detail"
};

export default createAppContainer(
  createSwitchNavigator({
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    Main: MainTabNavigator,
    DeckDetail: DeckDetailStack
  })
);
