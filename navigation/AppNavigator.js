// https://stackoverflow.com/questions/55544278/react-navigation-3-back-button-in-android-doesnt-back-to-previous-screen
import {
  createAppContainer,
  createSwitchNavigator,
  createStackNavigator
} from "react-navigation";
import MainTabNavigator from "./MainTabNavigator";
import DeckDetail from "../screens/DeckDetail";
import CardForm from "../screens/CardForm";
import Quiz from "../screens/Quiz";
import DeckForm from "./../screens/DeckForm";

const DeckDetailStack = createStackNavigator({
  DeckDetail: {
    screen: DeckDetail,
    navigationOptions: { header: null }
  },
  CardForm: {
    screen: CardForm,
    navigationOptions: { header: null }
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: { header: null }
  },
  DeckForm: {
    screen: DeckForm,
    navigationOptions: { header: null }
  }
});

const FormStack = createStackNavigator({
  Home: {
    screen: MainTabNavigator,
    navigationOptions: { header: null }
  },
  DeckForm: {
    screen: DeckForm,
    navigationOptions: { header: null }
  },
  DeckDetail: {
    screen: DeckDetail,
    navigationOptions: { header: null }
  }
});

const HomeStack = createStackNavigator({
  Home: {
    screen: MainTabNavigator,
    navigationOptions: { header: null }
  },
  DeckDetail: {
    screen: DeckDetail,
    navigationOptions: { header: null }
  },
  DeckDetailStack: {
    screen: DeckDetailStack,
    navigationOptions: { header: null }
  },
  CardForm: {
    screen: CardForm,
    navigationOptions: { header: null }
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: { header: null }
  },
  DeckForm: {
    screen: DeckForm,
    navigationOptions: { header: null }
  },
  FormStack: {
    screen: FormStack,
    navigationOptions: { header: null }
  }
});

export default createAppContainer(
  createSwitchNavigator({
    Home: HomeStack,
    Form: FormStack
  })
);
