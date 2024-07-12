import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ProductSmallCard from "../product-small-card/product-small-card";
import { Product } from "@/types/product";

type SearchRecommendationsListPropsTypes = {
  id: number
  name: string
}

export default function SearchRecommendationsList({title, items, cards}: {title: string, items: SearchRecommendationsListPropsTypes[] | null, cards: Product[] | null} ) {
  const placeInCartHandler = (id: string) => {};
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {
        cards && cards
          ? 
          cards.map((card) => 
            (<ProductSmallCard
              card={card}
              placeInCartHandler={placeInCartHandler}
              key={card.id}/>))
          : 
          items && items.map((item) => (
            <View style={styles.item} key={item.id}>
              <AntDesign name="search1" size={16} color="#484848" />
              <Text> {item.name}</Text>
            </View>))
      }
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    paddingHorizontal: '10%',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: '1%',
    color: '#484848',
    textAlign: 'left',
  },
  item: {
    display: 'flex',
    flexDirection: 'row',
    fontSize: 16,
    color: '#484848',
    textAlign: 'left',
  },
  text: {
    fontSize: 18,
    paddingHorizontal: '10%',
    color: '#484848',
    textAlign: 'left',
  }
});
