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
  H1,
  Content,
  View,
  Toast
} from "native-base";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { connect } from "react-redux";
import { createDeck } from "../store/actions/index";
import { KeyboardAvoidingView } from "react-native";
import ColorPalette from "react-native-color-palette";
import MainHeader from "./../components/MainHeader";
import showToast from "./../utils/toastr";

class DeckForm extends Component {
  state = {
    title: "",
    color: "#FFFFFF"
  };

  handleSubmit() {
    if (this.state.title.length > 0) {
      this.props.createDeck(this.state);
      this.setState({
        title: "",
        color: "#FFFFFF"
      });
      this.props.navigation.goBack();
    } else {
      showToast("Please choose a title for your deck.", "warning");
    }
  }

  handleColorChange = color => {
    this.setState({ color });
  };

  render() {
    return (
      <Container>
        <MainHeader title="CREATE NEW DECK" icon="credit-card-plus" />
        <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
          <View
            size={35}
            style={{
              justifyContent: "center",
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
          </View>

          <View
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
                  onChangeText={inputVal => this.setState({ title: inputVal })}
                  value={this.state.title}
                />
              </Item>
              <Item>
                <ColorPalette
                  onChange={color => this.handleColorChange(color)}
                  value={this.state.color}
                  colors={[
                    "#DB3E00",
                    "#FCCB00",
                    "#008B02",
                    "#1273DE",
                    "#004DCF",
                    "#5300EB",
                    "#C0C0C0",
                    "#FAD0C3",
                    "#FEF3BD",
                    "#C1E1C5",
                    "#BEDADC",
                    "#C4DEF6",
                    "#D4C4FB",
                    "#FFFFFF"
                  ]}
                  title=""
                  icon={
                    <MaterialCommunityIcons
                      name={"checkbox-blank-circle"}
                      size={15}
                      color={"black"}
                    />
                  }
                />
              </Item>
            </Form>
          </View>
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
              iconLeft
              block
              style={{ marginLeft: 10, marginTop: 20 }}
              onPress={() => this.handleSubmit()}
            >
              <Icon name="send" />
              <Text>SUBMIT</Text>
            </Button>
          </View>
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
