import React, { Component } from "react";
import {
  Container,
  Content,
  Text,
  Header,
  Body,
  Title,
  Left
} from "native-base";
import { TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import Deck from "./../components/Deck";
import { setDeckId } from "../store/actions";
import MainHeader from "./../components/MainHeader";

class DecksList extends Component {
  render() {
    const { decks, decksIds, setDeckId, decksDetails } = this.props;
    return (
      <Container>
        <MainHeader title="DECKS AVAILABLE" icon="cards-outline" />
        <Content style={{ margin: 20 }}>
          {decksIds &&
            decksIds.map(id => {
              const deck = decks[id];
              return (
                <TouchableOpacity
                  key={id}
                  onPress={() => {
                    setDeckId(id);
                    this.props.navigation.push("DeckDetail");
                  }}
                >
                  <Deck key={id} deck={deck} />
                </TouchableOpacity>
              );
            })}
          <Text>{JSON.stringify(decksDetails)}</Text>
        </Content>
      </Container>
    );
  }
}

function mapStateToProps(decksDetails) {
  return {
    decks: decksDetails.decks,
    decksIds: decksDetails.decks ? Object.keys(decksDetails.decks) : [],
    decksDetails
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setDeckId: deckId => dispatch(setDeckId(deckId))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DecksList);
