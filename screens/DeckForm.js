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
  H1
} from "native-base";
import { connect } from "react-redux";
import { Col, Row, Grid } from "react-native-easy-grid";
import { KeyboardAvoidingView } from "react-native";
import { createDeck } from "../store/actions/index";

class DeckForm extends Component {
  static navigationOptions = {
    title: "CREATE NEW DECK"
  };

  state = {
    title: ""
  };

  handleSubmit() {
    if (this.state.title.length > 0) {
      this.props.createDeck(this.state);
    }
  }

  render() {
    return (
      <Container>
        <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
          <Grid>
            <Row
              size={35}
              style={{
                alignItems: "center",
                margin: 10
              }}
            >
              <H1
                style={{
                  alignContent: "center"
                }}
              >
                WHAT IS THE TITLE OF YOUR NEW DECK?
              </H1>
            </Row>

            <Row
              size={65}
              style={{
                alignItems: "center",
                alignContent: "center"
              }}
            >
              <Form>
                <Item stackedLabel>
                  <Label>Deck title</Label>
                  <Input
                    onChangeText={inputVal =>
                      this.setState({ title: inputVal })
                    }
                    value={this.state.title}
                  />
                </Item>
                <Button
                  iconLeft
                  block
                  style={{ marginLeft: 10, marginTop: 20 }}
                  onPress={() => this.handleSubmit()}
                >
                  <Icon name="send" />
                  <Text>SUBMIT</Text>
                </Button>

                <Item>
                  <Text>{JSON.stringify(this.state)}</Text>
                </Item>
              </Form>
            </Row>
          </Grid>
        </KeyboardAvoidingView>
      </Container>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    createDeck: deck => dispatch(createDeck(deck))
  };
}

export default connect(
  null,
  mapDispatchToProps
)(DeckForm);
