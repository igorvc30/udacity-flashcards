import React from "react";
import { Card, CardItem, Text, Body, Button, Content } from "native-base";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const QuestionCard = ({ card, showAnswer, toogleAnswer }) => {
  return (
    <Card
      style={{ elevation: 3, justifyContent: "center", alignItems: "center" }}
    >
      <CardItem bordered style={{ backgroundColor: "gray" }}>
        <Body>
          <Text>{card.question}</Text>
        </Body>
      </CardItem>
      <CardItem
        cardBody
        bordered
        style={{ height: 300, flex: 1, alignContent: "center" }}
      >
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

export default QuestionCard;
