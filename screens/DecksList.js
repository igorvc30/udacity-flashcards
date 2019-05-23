import React, { Component } from "react";
import { Container, Content, Text } from "native-base";
import { TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import Deck from "./../components/Deck";
class DecksList extends Component {
  static navigationOptions = {
    title: "DECKS AVAILABLE"
  };

  render() {
    const { decks, decksIds } = this.props;
    return (
      <Container>
        <Content style={{ margin: 20 }}>
          {decksIds.map(id => {
            const deck = decks[id];
            return (
              <TouchableOpacity
                key={id}
                onPress={() =>
                  this.props.navigation.push("DeckDetail", { deckId: id })
                }
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

function mapStateToProps(decks) {
  return {
    decks,
    decksIds: Object.keys(decks)
  };
}

export default connect(mapStateToProps)(DecksList);
