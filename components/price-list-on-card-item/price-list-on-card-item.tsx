import * as React from "react";
import { View, Text, StyleSheet } from "react-native";

interface PriceListOnCardItemProps {
  priceList: {name: string, price: number}[]
}

const PriceListItem = ({name, price}: {name: string, price: number}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.priceText}>{name}</Text>
      <Text style={styles.priceText}>{price} ₽</Text>
    </View>
  )
}
export default function PriceListOnCardItem({priceList}: PriceListOnCardItemProps) {
  return (
    <View>
      <Text style={styles.titleTextItem}>Прайс лист</Text>
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
});
