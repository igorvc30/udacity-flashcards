import React, { Component } from "react";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Text,
  Button,
  Left,
  Body,
  Right,
  H2
} from "native-base";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { connect } from "react-redux";
class DecksList extends Component {
  static navigationOptions = {
    title: "DECKS AVAILABLE"
  };

  render() {
    const { decks, decksIds } = this.props;
    return (
      <Container>
        <Content>
          {decksIds.map(id => {
            const deck = decks[id];
            return (
              <Card
                key={id}
                header={deck.title}
                style={{
                  backgroundColor: "green",
                  borderRadius: 2,
                  borderColor: "#008800",
                  backgroundColor: "#008800",
                  background: "#008800"
                }}
              >
                <CardItem
                  header
                  style={{
                    backgroundColor: "green",
                    borderRadius: 8
                  }}
                >
                  <H2>{deck.title}</H2>
                </CardItem>
                <CardItem
                  style={{
                    backgroundColor: "green",
                    borderRadius: 2
                  }}
                >
                  <Left>
                    <MaterialCommunityIcons name="cards" size={20} />
                    <Text>
                      {deck.questions ? deck.questions.length : 0} Cards
                    </Text>
                  </Left>
                  <Left>
                    <MaterialCommunityIcons name="check-decagram" size={20} />
                    <Text>{deck.numberOfAttempts} Attempts</Text>
                  </Left>
                  <Left>
                    <MaterialCommunityIcons name="trophy" size={20} />
                    <Text>{deck.highestScore} Score</Text>
                  </Left>
                </CardItem>
              </Card>
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
