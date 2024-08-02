import * as React from "react";
import { Pressable, Text, View, StyleSheet } from "react-native";

type ReviewsQuestionsTitleProps = {
  text: string;
  typeOfList: boolean;
  pressHandler: () => void;
}

export default function ReviewsQuestionsTitle ({text, typeOfList, pressHandler}: ReviewsQuestionsTitleProps) {
  return (
    <View style={[styles.container, {borderBottomWidth: typeOfList ? 1 : 0}]}>
        <Pressable onPress={pressHandler}>
          <Text style={[styles.text, {opacity: typeOfList ? 1 : 0.5}]}>{text}</Text>
        </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "50%",
    alignItems: "center",
  },
  text: {
    fontSize: 16,
    lineHeight: 19,
    fontWeight: "500",
    color: "#484848",
  },
})
