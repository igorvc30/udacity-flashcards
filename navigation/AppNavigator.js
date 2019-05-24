import {
  createAppContainer,
  createSwitchNavigator,
  createStackNavigator
} from "react-navigation";
import DeckDetail from "../screens/DeckDetail";
import CardForm from "../screens/CardForm";
import MainTabNavigator from "./MainTabNavigator";

const DeckDetailStack = createStackNavigator({
  DeckDetail: DeckDetail
});

const CardFormStack = createStackNavigator({
  CardForm: CardForm
});

export default createAppContainer(
  createSwitchNavigator({
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    Main: MainTabNavigator,
    DeckDetail: DeckDetailStack,
    CardForm: CardFormStack
  })
);
