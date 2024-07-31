import * as React from "react";
import { View, Text, StyleSheet } from "react-native";

type ReviewsQuestionsComponentProps = {
  reviews: [];
  questions: [];
}
export default function ReviewsQuestionsComponent({reviews, questions}: ReviewsQuestionsComponentProps) {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Отзывы</Text>
        <Text style={styles.headerText}>Вопросы</Text>
      </View>
      <Text>ReviewsQuestionsComponent</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    marginVertical: 8,
  },
  headerContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerText: {
    fontSize: 16,
    lineHeight: 19,
    fontWeight: "500",
    color: "#484848",
  },
});
