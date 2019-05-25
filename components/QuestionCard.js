import React from "react";
import { Card, CardItem, Text, Body, Button, Content } from "native-base";
import { StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const QuestionCard = ({ card, showAnswer, toogleAnswer }) => {
  return (
    <Card style={styles.card}>
      <CardItem bordered style={{ backgroundColor: "black" }}>
        <Body>
          <Text style={{ color: "white" }}>{card.question}</Text>
        </Body>
      </CardItem>
      <CardItem cardBody bordered style={styles.cardItem}>
        {showAnswer ? (
          <Text>{card.answer}</Text>
        ) : (
          <Content>
            <Button dark block transparent onPress={() => toogleAnswer()}>
              <MaterialCommunityIcons
                style={{ color: "#000" }}
                size={30}
                name="eye"
              />
              <Text>CHECK ANSWER</Text>
            </Button>
          </Content>
        )}
      </CardItem>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    justifyContent: "center",
    alignItems: "center",
    borderColor: "black",
    borderWidth: 1
  },
  cardItem: {
    height: 300,
    flex: 1,
    alignContent: "center",
    padding: 10
  }
});

export default QuestionCard;
