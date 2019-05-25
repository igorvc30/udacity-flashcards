import React, { Component } from "react";
import {
  Container,
  Content,
  Text,
  Button,
  Header,
  Left,
  Body,
  Title
} from "native-base";
import { connect } from "react-redux";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Deck from "../components/Deck";
import { deleteDeck } from "../store/actions";
import GoBackHeader from "./../components/GoBackHeader";

class DeckDetail extends Component {
  delete = () => {
    const { deleteDeck, navigation, deck } = this.props;
    deleteDeck(deck.title);
    navigation.navigate("Main");
  };

  render() {
    const { deck, navigation } = this.props;
    return (
      <Container>
        <GoBackHeader
          title="DECK DETAIL"
          color={deck.color}
          navigation={navigation}
          destination="Main"
        />
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
        {deck.cards.length > 0 && (
          <Content>
            <Button
              iconLeft
              dark
              block
              transparent
              style={{ margin: 10, borderWidth: 1, borderColor: "#000" }}
              onPress={() => this.props.navigation.push("Quiz")}
            >
              <MaterialCommunityIcons
                style={{ color: "#000" }}
                size={30}
                name="gamepad-variant"
              />
              <Text>START QUIZ</Text>
            </Button>
          </Content>
        )}
      </Container>
    );
  }
}

function mapStateToProps(decksDetails) {
  return {
    deck: decksDetails.decks[decksDetails.deckId]
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
