import React, { Component } from "react";
import {
  Container,
  Content,
  Text,
  Button,
  Header,
  Left,
  Body,
  Title,
  View
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
    navigation.goBack();
  };

  render() {
    const { deck, navigation } = this.props;
    if (deck === undefined) {
      return <></>;
    }
    return (
      <Container>
        <GoBackHeader
          title="DECK DETAIL"
          color="black"
          navigation={navigation}
        />
        <Content
          style={{
            minHeight: 350,
            margin: 10,
            flex: 1
          }}
        >
          <Deck key={deck.title} deck={deck} />
          <Button iconLeft bordered danger block onPress={() => this.delete()}>
            <MaterialCommunityIcons
              style={{ color: "#fff" }}
              size={30}
              name="trash-can-outline"
            />
            <Text>DELETE DECK</Text>
          </Button>
        </Content>
        <View
          style={{
            flex: 1,
            bottom: 50,
            left: 0,
            right: 0,
            justifyContent: "flex-end",
            padding: 15
          }}
        >
          <Button
            iconLeft
            dark
            block
            onPress={() => this.props.navigation.push("CardForm")}
          >
            <MaterialCommunityIcons
              style={{ color: "#fff" }}
              size={30}
              name="cards-outline"
            />
            <Text>ADD CARD</Text>
          </Button>
          {deck.cards.length > 0 && (
            <Button
              iconLeft
              dark
              block
              transparent
              style={{ marginTop: 20, borderWidth: 1, borderColor: "#000" }}
              onPress={() => this.props.navigation.push("Quiz")}
            >
              <MaterialCommunityIcons
                style={{ color: "#000" }}
                size={30}
                name="gamepad-variant"
              />
              <Text>START QUIZ</Text>
            </Button>
          )}
        </View>
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
