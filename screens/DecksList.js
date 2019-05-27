import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, Content, Text, H2 } from "native-base";
import { TouchableOpacity } from "react-native";
import Deck from "./../components/Deck";
import MainHeader from "./../components/MainHeader";
import { setDeckId } from "../store/actions";

class DecksList extends Component {
  render() {
    const { decks, decksIds, setDeckId, navigation } = this.props;
    return (
      <Container>
        <MainHeader title="DECKS AVAILABLE" icon="cards-outline" />
        <Content style={{ margin: 10 }}>
          {decksIds.length === 0 && (
            <H2>There is no deck available, please create a new one.</H2>
          )}
          {decksIds &&
            decksIds.map(id => {
              const deck = decks[id];
              return (
                <TouchableOpacity
                  key={id}
                  onPress={() => {
                    setDeckId(id);
                    navigation.push("DeckDetail");
                  }}
                >
                  <Deck key={id} deck={deck} />
                </TouchableOpacity>
              );
            })}
        </Content>
      </Container>
    );
  }
}

function mapStateToProps(decksDetails) {
  return {
    decks: decksDetails.decks,
    decksIds: decksDetails.decks ? Object.keys(decksDetails.decks) : []
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
