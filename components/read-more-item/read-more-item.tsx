import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { ChevronDown } from "../svg-const/svg-const";

interface ReadMoreItemProps {
  text: string;
  isFullText: boolean;
  pressHandler: () => void;
}

export default function ReadMoreItem({text, isFullText, pressHandler}: ReadMoreItemProps) {
  return (
    <Pressable onPress={pressHandler}>
      <View 
        style={styles.constainer}
      >
        <Text style={styles.showMoreText}>{
          isFullText ? "Скрыть ": text + " "}
        </Text>
        <View style={{ transform: [{ rotate: isFullText ? "180deg" : "0deg" }] }}>
          <ChevronDown />
        </View> 
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  constainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  showMoreText: {
    fontSize: 13,
    lineHeight: 19,
    fontWeight: "300",
    textDecorationLine: "underline", 
    color: "#484848",
  },
});
