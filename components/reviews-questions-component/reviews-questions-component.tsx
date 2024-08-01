import * as React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

enum ReviewsQuestionsType {
  REVIEWS = "Отзывы",
  QUESTIONS = "Вопросы",
}

type ReviewsQuestionsTitleProps = {
  text: string;
  typeOfList: boolean;
  pressHandler: () => void;
}

type ReviewsQuestionsComponentProps = {
  reviews: [];
  questions: [];
}

const ReviewsQuestionsTitle = ({text, typeOfList, pressHandler}: ReviewsQuestionsTitleProps) => {
  return (
    <View style={[styles.titleContainer, {borderBottomWidth: typeOfList ? 1 : 0}]}>
        <Pressable onPress={pressHandler}>
          <Text style={[styles.headerText, {opacity: typeOfList ? 1 : 0.5}]}>{text}</Text>
        </Pressable>
    </View>
  );
};

export default function ReviewsQuestionsComponent({reviews, questions}: ReviewsQuestionsComponentProps) {
  const [typeOfList, setTypeOfList] = React.useState(ReviewsQuestionsType.REVIEWS);

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <ReviewsQuestionsTitle text={ReviewsQuestionsType.REVIEWS} typeOfList={typeOfList === ReviewsQuestionsType.REVIEWS} pressHandler={() => setTypeOfList(() => ReviewsQuestionsType.REVIEWS)} />
        <ReviewsQuestionsTitle text={ReviewsQuestionsType.QUESTIONS} typeOfList={typeOfList === ReviewsQuestionsType.QUESTIONS} pressHandler={() => setTypeOfList(() => ReviewsQuestionsType.QUESTIONS)} />
      </View>
      <Text>ReviewsQuestionsComponent</Text>
      {typeOfList === ReviewsQuestionsType.REVIEWS && reviews}
      {typeOfList === ReviewsQuestionsType.QUESTIONS && questions}
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
    justifyContent: "space-around",
  },
  titleContainer: {
    width: "50%",
    alignItems: "center",
  },
  headerText: {
    fontSize: 16,
    lineHeight: 19,
    fontWeight: "500",
    color: "#484848",
  },
});
