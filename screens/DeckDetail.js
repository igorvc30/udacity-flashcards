import React, { Component } from "react";
import { Container, Content, Text, Button } from "native-base";
import { connect } from "react-redux";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Deck from "../components/Deck";
import { deleteDeck } from "./../actions";

class DeckDetail extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: `Deck Detail`,
      headerLeft: (
        <MaterialCommunityIcons
          size={35}
          style={{ marginLeft: 10 }}
          name={"arrow-left"}
          onPress={() => {
            navigation.navigate("Main");
          }}
        />
      )
    };
  };

  delete = () => {
    const { deleteDeck, navigation, deck } = this.props;
    deleteDeck(deck.title);
    navigation.navigate("Main");
  };

  render() {
    const { deck } = this.props;
    return (
      <Container>
        <Content
          style={{
            minHeight: 350,
            flex: 1
          }}
        >
          <Deck key={deck.title} deck={deck} />
          <Button
            iconLeft
            bordered
            danger
            block
            style={{ margin: 10 }}
            onPress={() => this.delete()}
          >
            <MaterialCommunityIcons
              style={{ color: "#fff" }}
              size={30}
              name="trash-can-outline"
            />
            <Text>DELETE DECK</Text>
          </Button>
        </Content>
        <Content>
          <Button
            iconLeft
            dark
            block
            style={{ margin: 10 }}
            onPress={() => this.props.navigation.push("CardForm")}
          >
            <MaterialCommunityIcons
              style={{ color: "#fff" }}
              size={30}
              name="cards-outline"
            />
            <Text>ADD CARD</Text>
          </Button>
        </Content>
        <Content>
          <Button
            iconLeft
            dark
            block
            transparent
            style={{ margin: 10, borderWidth: 1, borderColor: "#000" }}
          >
            <MaterialCommunityIcons
              style={{ color: "#000" }}
              size={30}
              name="gamepad-variant"
            />
            <Text>START QUIZ</Text>
          </Button>
        </Content>
        <Text>{`STATE ${JSON.stringify(this.state)} >>> PROPS ${JSON.stringify(
          this.props
        )}`}</Text>
      </Container>
    );
  }
}

function mapStateToProps(decksDetails) {
  return {
    deck: decksDetails.decks[decksDetails.deckId] || {
      title: JSON.stringify(navigation.state.params),
      color: "#008000",
      numberOfAttempts: 0,
      highestScore: 0,
      cards: []
    }
  };
}

function mapDispatchToProps(dispatch) {
  return {
    deleteDeck: deckId => dispatch(deleteDeck(deckId))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeckDetail);
