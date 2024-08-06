import * as React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import ReviewsQuestionsTitle from "../reviews-questions-title/reviews-questions-title";
import ReviewQuestionMessageItem from "../review-question-message-item/review-question-message-item";

enum ReviewsQuestionsType {
  REVIEWS = "Отзывы",
  QUESTIONS = "Вопросы",
}


type ReviewsQuestionsComponentProps = {
  reviews: [];
  questions: [];
}

const ReviewsQuestionsList = ({messages}: {messages: []}) => {
  const SHOWN_MESSAGES_COUNT = 3;
  return (

    <View>
      {messages.slice(0, SHOWN_MESSAGES_COUNT).map((message, index) => 
        <View key={index}>
          <ReviewQuestionMessageItem message={message}/>
        </View>)}
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
      {typeOfList === ReviewsQuestionsType.REVIEWS && <ReviewsQuestionsList messages={reviews} />}
      {typeOfList === ReviewsQuestionsType.QUESTIONS && <ReviewsQuestionsList messages={questions}/>}
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
});
