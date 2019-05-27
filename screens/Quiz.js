import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { StyleSheet } from "react-native";
import {
  Container,
  Header,
  View,
  DeckSwiper,
  Text,
  H2,
  Button,
  Body,
  Title,
  Right,
  Left
} from "native-base";
import QuestionCard from "./../components/QuestionCard";
import Score from "./../components/Score";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { submitQuiz } from "../store/actions/index";
import showToast from "./../utils/toastr";

class Quiz extends PureComponent {
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
          <Left>
            <MaterialCommunityIcons size={30} name="gamepad-variant" />
          </Left>
          <Body>
            <Title style={{ color: "#000" }}>QUIZ</Title>
          </Body>
          <Right>
            <Button
              iconLeft
              dark
              block
              transparent
              onPress={() => navigation.popToTop()}
            >
              <MaterialCommunityIcons size={30} name="exit-run" />
              <Text>Quit</Text>
            </Button>
          </Right>
        </Header>
        <View style={{ margin: 10 }}>
          <DeckSwiper
            looping={false}
            ref={c => (this._deckSwiper = c)}
            dataSource={deck.cards}
            renderEmpty={() => (
              <View style={styles.scoreView}>
                <Score total={totalQuestions} score={score} />
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
          <View style={styles.feedbackButtons}>
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
                style={[styles.iconBlack, { marginLeft: 10, marginRight: 0 }]}
                size={20}
                name="thumb-down"
              />
              <Text>INCORRECT</Text>
            </Button>
            <H2>{`${cardIndex}/${totalQuestions}`}</H2>

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
                style={styles.iconBlack}
                size={20}
                name="thumb-up"
              />
            </Button>
          </View>
        )}
        {cardIndex > totalQuestions && (
          <View style={styles.endQuizButtons}>
            <Button
              iconRight
              block
              style={{ marginBottom: 20 }}
              onPress={() => {
                navigation.push("Quiz");
              }}
            >
              <Text>RESTART QUIZ</Text>
              <MaterialCommunityIcons
                style={styles.iconBlack}
                size={20}
                name="restart"
              />
            </Button>
            <Button
              dark
              iconRight
              block
              onPress={() => {
                submitQuiz(deck.title, score);
                showToast("Quiz submitted!", "default");
                navigation.goBack();
              }}
            >
              <Text>SUBMIT</Text>
              <MaterialCommunityIcons
                style={styles.iconBlack}
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

const styles = StyleSheet.create({
  endQuizButtons: {
    flex: 1,
    bottom: 50,
    left: 0,
    right: 0,
    justifyContent: "flex-end",
    padding: 15
  },
  iconBlack: { color: "#fff", marginRight: 10 },
  feedbackButtons: {
    flexDirection: "row",
    flex: 1,
    position: "absolute",
    bottom: 50,
    left: 0,
    right: 0,
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15
  },
  scoreView: {
    alignSelf: "center",
    minHeight: "90%",
    minWidth: "100%"
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Quiz);
