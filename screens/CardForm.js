import React, { Component } from "react";
import {
  Container,
  Button,
  Text,
  Icon,
  Form,
  Item,
  Input,
  Label,
  Content,
  H3
} from "native-base";
import { KeyboardAvoidingView } from "react-native";
import { connect } from "react-redux";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { addCard } from "./../actions/index";

class CardForm extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: `Add new card to deck`,
      headerLeft: (
        <MaterialCommunityIcons
          size={35}
          style={{ marginLeft: 10 }}
          name={"arrow-left"}
          onPress={() => {
            navigation.navigate("DeckDetail");
          }}
        />
      )
    };
  };

  state = {
    question: "Testes hurry",
    answer: "anythingm .... right isn't?"
  };

  handleSubmit() {
    const { deckId, addCard } = this.props;
    const { question, answer } = this.state;
    if (question.length > 0 && answer.length > 0) {
      addCard(deckId, this.state);
    }
  }

  render() {
    return (
      <Container style={{ alignItems: "center", justifyContent: "center" }}>
        <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
          <Form>
            <Content
              style={{
                margin: 10,
                alignContent: "center"
              }}
            >
              <Text>WHAT IS THE QUESTION OF YOUR NEW CARD?</Text>
              {/* </Content>
            <Content
              style={{
                alignContent: "center"
              }}
            > */}
              <Item stackedLabel>
                <Label>Question</Label>
                <Input
                  onChangeText={inputVal =>
                    this.setState({ question: inputVal })
                  }
                  value={this.state.question}
                />
              </Item>
            </Content>

            <Content style={{ alignContent: "center" }}>
              <Text>WHAT IS THE ANSWER OF YOUR NEW CARD?</Text>
              {/* </Content>
            <Content> */}
              <Item stackedLabel>
                <Label>Answer</Label>
                <Input
                  onChangeText={inputVal => this.setState({ answer: inputVal })}
                  value={this.state.answer}
                />
              </Item>
            </Content>

            <Content>
              <Button
                iconLeft
                block
                style={{ marginLeft: 0, marginTop: 20 }}
                onPress={() => this.handleSubmit()}
              >
                <Icon name="send" />
                <Text>SUBMIT</Text>
              </Button>
            </Content>
          </Form>
        </KeyboardAvoidingView>
      </Container>
    );
  }
}

function mapStateToProps(decksDetails) {
  return {
    deckId: decksDetails.deckId
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addCard: (deckId, card) => dispatch(addCard(deckId, card))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardForm);
