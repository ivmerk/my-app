import * as React from "react";
import { View,Image, Text, StyleSheet } from "react-native";
import { ChevronDown, MapPlace } from "../svg-const/svg-const";

export default function MapOnCardItem( {address}: any) {
  console.log('address',address)
  return (
    <View style={styles.container}>
      <Text style={styles.addressTitleTextItem}>Оказывает услугу</Text>
      <View style={styles.addressContainer}>
        <MapPlace />
        {address &&<Text style={styles.addressTextItem}>{address.city}{address.street}{address.raw}</Text>}
      </View>
      <View style={styles.showOnMapContainer}>
        <Text style={styles.showOnMapText}>Показать на карте </Text>
        <ChevronDown />
      </View>
      <Image source={require("../../assets/images/map1.png")} />
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
