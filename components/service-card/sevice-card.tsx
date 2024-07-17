import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { ShieldTick, UserCircleLight } from "../svg-const/svg-const";


export default function ServiceCard() {
  return (
    <View style={styles.container}>
      <View style={styles.sellerImageAndTitleItem}>
        <UserCircleLight />
        <View style={styles.sellerTitleItem}>
          <Text>Иван Меркулов</Text>
          <View style={{ display: "flex", flexDirection: "row" }}>
          <ShieldTick/>
          <Text style={styles.sellerConfirmedText}>Паспорт проверен</Text>
          </View>
        </View>
      </View>
    </View>  );
}


const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#fff",
    justifyContent: "flex-start",
  },
  sellerImageAndTitleItem: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  sellerTitleItem: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  sellerTitleText: {
    color: "# 484848",
    fontSize: 16,
    fontWeight: "bold",
    lineHeight: 22,
  },
  sellerConfirmedText: {
    color: "# 484848",
    fontSize: 14,
    lineHeight: 20,
  },
});
