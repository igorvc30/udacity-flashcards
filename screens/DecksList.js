import React, { Component } from "react";
import { Container, Content, Text } from "native-base";
import { TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import Deck from "./../components/Deck";
import { setDeckId } from "./../actions";
class DecksList extends Component {
  static navigationOptions = {
    title: "DECKS AVAILABLE"
  };

  render() {
    const { decks, decksIds, setDeckId } = this.props;
    return (
      <Container>
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
          <Text>{JSON.stringify(decks)}</Text>
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
