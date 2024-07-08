import React from "react";
import { Image, View, Text, StyleSheet } from "react-native";
import InCartCardItem from "../incart-card-item/incart-card-item";
import { PriceCardItem } from "../price-card-item/price-card-item";
import { Product } from "@/types/product";

interface CardProps {
  card: Product;
  placeInCartHandler: (id: string) => void;
}

export default function ProductSmallCard({card, placeInCartHandler}: CardProps) {
  return (
    <View style={styles.container}>
      <Image source={{ uri: card.image }} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{card.title}</Text>
        <Text style={styles.description}>{card.description}</Text>
        <View style={styles.priceAndInCartContainer}>
          <PriceCardItem
            id={card.id}
            price={card.price}
            fontSize={12}
          />
          <InCartCardItem
            id={card.id}
            placeInCartHandler={placeInCartHandler}
            fontSize={12}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    height: 78,
  },
  image: {
    width: 58,
  },
  infoContainer: {
    display: "flex",
    flexDirection: "column",
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#484848",
  },
  description: {
    fontSize: 12,
    color: "#484848",
  },
  priceAndInCartContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: "auto",
  },
});
