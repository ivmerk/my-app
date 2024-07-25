import * as React from "react";
import {StyleSheet, View, Text } from "react-native";

export default function ServiceDescriptionOnCardItem( {text}: {text: string}) {
  const [isFullText, setIsFullText] = React.useState(false);
  console.log(text);
  return (
    <View style={styles.container}>
      <Text style={styles.titleTextItem}>Описание</Text>
      {isFullText ? 
        <Text>{text}</Text> : 
        <View>
          <Text>{text.toString().slice(0, 100)}</Text>
          <Text onPress={() => setIsFullText(!isFullText)} style={styles.showOnMapText}>Показать полностью</Text>
        </View>
      }
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
