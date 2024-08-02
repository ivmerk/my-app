import * as React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import ReviewsQuestionsTitle from "../reviews-questions-title/reviews-questions-title";

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
  console.log(messages[0].hasOwnProperty("rating"));
  console.log(messages);
  return (

    <View>
      {messages.map((message, index) => <View key={index}><Text>{message.text}</Text></View>)}
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
