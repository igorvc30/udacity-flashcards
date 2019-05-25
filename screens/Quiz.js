import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Container,
  Header,
  View,
  DeckSwiper,
  Text,
  Content,
  Button,
  Body,
  Title,
  Right
} from "native-base";
import QuestionCard from "./../components/QuestionCard";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { submitQuiz } from "../store/actions/index";

class Quiz extends Component {
  state = {
    score: 0,
    showAnswer: false,
    cardIndex: 1
  };

  handleToogleAnswer = () => {
    this.setState(prevState => ({
      showAnswer: !prevState.showAnswer
    }));
  };

  render() {
    const { deck, navigation, submitQuiz } = this.props;
    const { showAnswer, cardIndex, score } = this.state;
    const totalQuestions = deck.cards.length;
    return (
      <Container>
        <Header style={{ backgroundColor: deck.color }}>
          <Body>
            <Title>QUIZ</Title>
          </Body>
          <Right>
            <Button
              iconLeft
              dark
              block
              transparent
              onPress={() => navigation.push("DeckDetail")}
            >
              <MaterialCommunityIcons
                // style={{ color: "#000" }}
                size={30}
                name="exit-run"
              />
            </Button>
          </Right>
        </Header>
        <View>
          <DeckSwiper
            looping={false}
            ref={c => (this._deckSwiper = c)}
            dataSource={deck.cards}
            renderEmpty={() => (
              <View style={{ alignSelf: "center" }}>
                <Text>GAME Over</Text>
              </View>
            )}
            renderItem={card => (
              <QuestionCard
                card={card}
                showAnswer={showAnswer}
                toogleAnswer={this.handleToogleAnswer}
              />
            )}
          />
        </View>
        {cardIndex <= totalQuestions && (
          <View
            style={{
              flexDirection: "row",
              flex: 1,
              position: "absolute",
              bottom: 50,
              left: 0,
              right: 0,
              justifyContent: "space-between",
              padding: 15
            }}
          >
            <Button
              danger
              iconLeft
              disabled={!showAnswer}
              onPress={() => {
                this.handleToogleAnswer();
                this._deckSwiper._root.swipeRight();
                this.setState(prevState => ({
                  cardIndex: prevState.cardIndex + 1
                }));
              }}
            >
              <MaterialCommunityIcons
                style={{ color: "#fff", marginLeft: 10 }}
                size={20}
                name="thumb-down"
              />
              <Text>WRONG</Text>
            </Button>
            <Button
              success
              iconRight
              disabled={!showAnswer}
              onPress={() => {
                this.handleToogleAnswer();
                this.setState(prevState => ({
                  score: prevState.score + 1,
                  cardIndex: prevState.cardIndex + 1
                }));

                this._deckSwiper._root.swipeRight();
              }}
            >
              <Text>CORRECT</Text>
              <MaterialCommunityIcons
                style={{ color: "#fff", marginRight: 10 }}
                size={20}
                name="thumb-up"
              />
            </Button>
          </View>
        )}
        {cardIndex > totalQuestions && (
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
              dark
              iconRight
              block
              onPress={() => {
                submitQuiz(deck.title, score);
                navigation.push("DeckDetail");
              }}
            >
              <Text>SUBMIT</Text>
              <MaterialCommunityIcons
                style={{ color: "#fff", marginRight: 10 }}
                size={20}
                name="send"
              />
            </Button>
          </View>
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
    submitQuiz: (deckId, score) => dispatch(submitQuiz(deckId, score))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Quiz);
