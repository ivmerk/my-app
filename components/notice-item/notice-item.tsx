import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import { ServiceList } from "@/mocks/serviceList";
import { ChartFill,StarFill,QuestionsFill, FavoriteFill, MessageFill, PhoneFill, TimeFill, Views, Time, FolderDel, WritingPencile, OnButton, AddPost } from "../svg-const/svg-const";


export default function NoticeItem() {
  const card = ServiceList[0];
  const createDate = new Date(card.createdAt);
  const today = new Date();
  const duration = Math.floor((today.getTime() - createDate.getTime()) / (1000 * 60 * 60 * 24));
  return (
    <View style={styles.container}>
      <View style={styles.imageAndInfoIconsContainer}>
        <Image
          source={{uri: card.media.images[0].url}}
          style={styles.imageContainer}
        />
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
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>{card.title}</Text>
      </View>
      <View style={styles.priceContainer}>
        <Text style={{...styles.priceText, fontWeight: "bold"}}>{card.price} ₽</Text>
        <Text style={styles.priceText}> / за час</Text>
      </View>
      <View style={styles.commandButtonsContainer}>
        <View style={styles.smallButtonsContainer}>
          <Time color="#222222" />
          <View>
            <Text>Включить</Text>
            <Text>Автообновление</Text>
          </View>
        </View> 
        <View style={styles.smallButtonsContainer}>
          <WritingPencile />
          <View>
            <Text>Редактировать</Text>
          </View>
        </View> 
        </View> 
      <View style={styles.commandButtonsContainer}>
        <View style={styles.smallButtonsContainer}>
          <FolderDel color="#222222" />
          <View>
            <Text>Убрать в архив</Text>
          </View>
        </View> 
        <View style={styles.smallButtonsContainer}>
          <OnButton color="#222222" />
          <View>
            <Text>Отключить</Text>
          </View>
        </View> 
        <View style={styles.bigButtonsContainer}>
        </View>
      </View>
      <View style={styles.bigButtonsContainer}>
        <AddPost  color='white'/>
        <Text style={styles.bigButtonText}>Разместить объявление</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    paddingHorizontal: "10%",
  },
  imageAndInfoIconsContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 5,
  },
  imageContainer: {
    width: '60%',
    aspectRatio: 20 / 27,
  },
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
  titleContainer: {
    marginVertical: 5,
  },
  titleText: {
    fontWeight: "bold",
    fontSize: 16,
  },
  priceContainer: {
    display: "flex",
    flexDirection: "row",
  },
  priceText: {  
    fontSize: 24,
  },
  commandButtonsContainer: {
    display: "flex",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 5,
    alignItems: "center",
    gap: 5,
  },
  smallButtonsContainer: {
    flex: 1,
    width: '55%',
    height: 35,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1.5,
  },
  bigButtonsContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
backgroundColor: "#484848"
  },
  bigButtonText: {
    color: "white",
  },
});
