import React, { Component } from "react";
import { connect } from "react-redux";
import { KeyboardAvoidingView } from "react-native";
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
  View
} from "native-base";
import GoBackHeader from "./../components/GoBackHeader";
import showToast from "./../utils/toastr";
import { addCard } from "../store/actions/index";

class CardForm extends Component {
  state = {
    question: "",
    answer: ""
  };

  handleSubmit() {
    const { deckId, addCard } = this.props;
    const { question, answer } = this.state;
    if (question.length > 0 && answer.length > 0) {
      addCard(deckId, this.state);
      this.setState({
        question: "",
        answer: ""
      });
    } else {
      showToast("Please type a question and answer for your card.", "warning");
    }
  }

  render() {
    const { navigation } = this.props;
    return (
      <Container>
        <GoBackHeader title="ADD NEW CARD TO DECK" navigation={navigation} />
        <Content>
          <KeyboardAvoidingView
            behavior="padding"
            style={{
              flex: 1,
              alignItems: "center",
              alignContent: "center",
              justifyContent: "space-evenly",
              minHeight: 400,
              margin: 10
            }}
          >
            <Form>
              <Content>
                <Text
                  style={{
                    textAlign: "center"
                  }}
                >
                  WHAT IS THE QUESTION OF YOUR NEW CARD?
                </Text>

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

              <Content style={{ alignContent: "center", margin: 10 }}>
                <Text
                  style={{
                    textAlign: "center"
                  }}
                >
                  WHAT IS THE ANSWER OF YOUR NEW CARD?
                </Text>
                <Item stackedLabel>
                  <Label>Answer</Label>
                  <Input
                    onChangeText={inputVal =>
                      this.setState({ answer: inputVal })
                    }
                    value={this.state.answer}
                  />
                </Item>
              </Content>
            </Form>
          </KeyboardAvoidingView>
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
          <Button iconLeft block onPress={() => this.handleSubmit()}>
            <Icon name="send" />
            <Text>SUBMIT</Text>
          </Button>
        </View>
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
