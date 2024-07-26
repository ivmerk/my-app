import * as React from "react";
import {StyleSheet, View, Text } from "react-native";
import { ChevronDown } from "../svg-const/svg-const";

const LongTextItem = ({text}: {text: string}) => {
  const [isFullText, setIsFullText] = React.useState(false);
  return (
    <View>
      <Text>
      {isFullText ? text : text.substring(0, 100)}
      </Text>
      <Text
        style={styles.showOnMapText}
        onPress={() => setIsFullText(!isFullText)}
      >
        {isFullText ? "Скрыть " : "Показать еще "}
        <ChevronDown />
      </Text>
    </View>
  );
}

export default function ServiceDescriptionOnCardItem( {text}: {text: string}) {
  console.log(text);
  return (
    <View style={styles.container}>
      <Text style={styles.titleTextItem}>Описание</Text>
      {text.length < 200 ? <Text>{text}</Text> : <LongTextItem text={text}/> }
      <Text>{text}</Text>  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,

  },
  titleTextItem: {
    fontSize: 16,
    lineHeight: 19,
    fontWeight: "500",
    color: "#484848",
  },
  addressTitleTextItem: {
    fontSize: 16,
    lineHeight: 19,
    fontWeight: "500",
    color: "#484848",
  },
  addressContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  addressTextItem: {
    fontSize: 16,
    lineHeight: 19,
    fontWeight: "300",
    color: "#484848",
  },
  showOnMapContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  showOnMapText: {
    fontSize: 13,
    lineHeight: 19,
    fontWeight: "300",
    textDecorationLine: "underline", 
    color: "#484848",
  },
});
