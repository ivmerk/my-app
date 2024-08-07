import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import MessageTextItem from "../message-text-item/message-text-item";
import { format, formatDate } from "date-fns";
import StarsRatingComponent from "../stars-rating-component/stars-rating-component";

type ReviewQuestionMessageItemProps = {
  message: { name: string | null, date: string | null, text: string | null, rating: number | null };
}

const DateComponent = ({date}: {date: string}) => {
  const formatedDate = format(date,'dd.MM.yyyy');
  return(
    <Text style={styles.dateText}>{formatedDate}</Text>
  );
}

export default function ReviewQuestionMessageItem({message}: ReviewQuestionMessageItemProps) {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        {message.name && <Text style={styles.titleText}>{message.name}</Text>}
        <View style={styles.dateRatingContainer}>
          {message.date && <DateComponent date={message.date!} />}
{ message.rating && <StarsRatingComponent rating={message.rating!}/>}
        </View>
      </View>
      {message.text && <MessageTextItem text={message.text!} />}
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    display: "flex",
  },
  headerContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  titleText: {
    color: "#484848",
    fontSize: 16,
    fontWeight: "bold",
    lineHeight: 22,
  },
  dateRatingContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  dateText: {
    color: "#484848",
    fontSize: 13,
    fontWeight: "300",
    lineHeight: 19,
  },
  textContainer: {
    display: "flex",
    flexDirection: "column",
  },
  messageText: {
    color: "#484848",
    fontSize: 13,
    fontWeight: "300",
    lineHeight: 19,
  },
});
