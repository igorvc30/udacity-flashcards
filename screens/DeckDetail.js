import React, { Component } from "react";
import { Container, Content, Text, Button } from "native-base";
import { connect } from "react-redux";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Deck from "../components/Deck";
class DeckDetail extends Component {
  static navigationOptions = ({ navigation }) => {
    const deckId = navigation.getParam("deckId", "NO-ID");
    return {
      title: `Deck - ${deckId}`,
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

  render() {
    const { deck } = this.props;
    return (
      <Container>
        <Content
          style={{
            minHeight: 500,
            flex: 1
          }}
        >
          <Deck key={deck.title} deck={deck} />
        </Content>
        <Content>
          <Button iconLeft block style={{ margin: 10 }}>
            <MaterialCommunityIcons size={20} name="cards-outline" />
            <Text>ADD CARD</Text>
          </Button>
        </Content>
        <Content>
          <Button iconLeft block success style={{ margin: 10 }}>
            <MaterialCommunityIcons size={20} name="gamepad-variant" />
            <Text>START QUIZ</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

function mapStateToProps(decks, { navigation }) {
  const deckId = navigation.getParam("deckId", "NO-ID");
  return {
    deck: decks[deckId] || {
      title: JSON.stringify(navigation.state.params),
      color: "#008000",
      numberOfAttempts: 0,
      highestScore: 0,
      cards: []
    }
  };
}

export default connect(mapStateToProps)(DeckDetail);
