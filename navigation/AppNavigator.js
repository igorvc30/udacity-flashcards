import {
  createAppContainer,
  createSwitchNavigator,
  createStackNavigator
} from "react-navigation";
import DeckDetail from "../screens/DeckDetail";
import CardForm from "../screens/CardForm";
import MainTabNavigator from "./MainTabNavigator";
import Quiz from "../screens/Quiz";

const DeckDetailStack = createStackNavigator({
  // DeckDetail: DeckDetail
  DeckDetail: {
    screen: DeckDetail,
    navigationOptions: { header: null }
  }
});

const CardFormStack = createStackNavigator({
  CardForm: {
    screen: CardForm,
    navigationOptions: { header: null }
  }
});

const QuizStack = createStackNavigator({
  Quiz: {
    screen: Quiz,
    navigationOptions: { header: null }
  }
});
export default createAppContainer(
  createSwitchNavigator({
    Main: MainTabNavigator,
    DeckDetail: DeckDetailStack,
    CardForm: CardFormStack,
    Quiz: QuizStack
  })
);
