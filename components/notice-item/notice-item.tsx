import React from "react";
import { View, Image, Text, StyleSheet, Pressable } from "react-native";
import { ServiceList } from "@/mocks/serviceList";
import { Time, FolderDel, WritingPencil, OnButton, AddPost } from "../svg-const/svg-const";
import InfoIconsList from "./info-icons-list/info-icons-list";
import { CabinetPageMode } from "@/constants/const.product";


export default function NoticeItem( {onCreateEditNoticeMode}: {onCreateEditNoticeMode: ({mode, header}: {mode: string, header: string}) => void}) {
  const card = ServiceList[0];
  return (
    <View style={styles.container}>
      <View style={styles.imageAndInfoIconsContainer}>
        <Image
          source={{uri: card.media.images[0].url}}
          style={styles.imageContainer}
        />
        <InfoIconsList card={card} />
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
        <Pressable 
          style={styles.smallButtonsContainer} 
          onPress={() => onCreateEditNoticeMode(CabinetPageMode[2])}
        >
          <WritingPencil />
          <View>
            <Text>Редактировать</Text>
          </View>
        </Pressable>
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
      <Pressable 
        style={styles.bigButtonsContainer} 
        onPress={() => onCreateEditNoticeMode(CabinetPageMode[1])}
      >
        <AddPost  color='white'/>
        <Text style={styles.bigButtonText}>Разместить объявление</Text>
      </Pressable>
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
