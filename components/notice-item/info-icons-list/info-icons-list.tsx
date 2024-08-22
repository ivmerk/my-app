import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { ChartFill,StarFill,QuestionsFill, FavoriteFill, MessageFill, PhoneFill, TimeFill, Views} from "../../svg-const/svg-const";

export default function InfoIconsList({card}: {card: any}) {
  const createDate = new Date(card.createdAt);
  const today = new Date();
  const duration = Math.floor((today.getTime() - createDate.getTime()) / (1000 * 60 * 60 * 24));
  return (
    <View style={styles.infoIconsContainer}>
      <View style={styles.infoItemContainer}>
        <TimeFill color="#222222" />
        <Text style={{fontWeight: "bold"}}> {duration.toString()}</Text>
        <Text> дней</Text>
      </View>
      {card.chartMessageCount &&  
        <View style={styles.infoItemContainer}>
          <ChartFill color="#222222" />
          <Text style={{fontWeight: "bold"}}> {Math.floor(card.chartMessageCount/1000).toString() + "k"}</Text>
        </View>
      }
      {card.showingCount && 
        <View style={styles.infoItemContainer}>
          <Views color="#222222" />
          <Text style={{fontWeight: "bold"}}> {card.showingCount}</Text>
        </View>
      }
      {card.favotiresCount &&
        <View style={styles.infoItemContainer}>
          <FavoriteFill color="#222222" />
          <Text style={{fontWeight: "bold"}}> {card.favotiresCount}</Text>
        </View>
      }
      {card.messagesCount &&
        <View style={styles.infoItemContainer}>
          <MessageFill color="#222222" />
          <Text style={{fontWeight: "bold"}}> {card.messagesCount}</Text>
        </View>
      }
      {card.callingCount &&
        <View style={styles.infoItemContainer}>
          <PhoneFill color="#222222" />
          <Text style={{fontWeight: "bold"}}> {card.callingCount}</Text>
        </View>
      }
      {card.starsCount &&
        <View style={styles.infoItemContainer}>
          <StarFill color="#222222" />
          <Text style={{fontWeight: "bold"}}> {card.starsCount}</Text>
        </View>
      }
      {card.questionsCount &&
        <View style={styles.infoItemContainer}>
          <QuestionsFill color="#222222" />
          <Text style={{fontWeight: "bold"}}> {card.questionsCount}</Text>
        </View>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  infoIconsContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  infoItemContainer: {
    display: "flex",
    flexDirection: "row",
  },
})
