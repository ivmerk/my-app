import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

interface InCartCardItemProps {
  id: string;
  placeInCartHandler: (id: string) => void;
  fontSize: number;
} 
export default function InCartCardItem({id,placeInCartHandler, fontSize}: InCartCardItemProps) {
  return (
      <Pressable onPress={() => placeInCartHandler(id)}>
        <View style={styles.priceInCartAndToFavoriteItem}>
          <Ionicons
            name="bag"
            size={fontSize + 2}
            color="#484848"/>
          <Text style={[styles.priceInCartAndToFavoriteText, {fontSize}]}> В корзину</Text>
        </View>
      </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
  },
  priceInCartAndToFavoriteItem:{
    display: 'flex',
    height: 40,
    paddingTop: 8, 
    paddingBottom: 8, 
    paddingLeft: 12,
    paddingRight: 12,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#d9d9d9',
  },
  priceInCartAndToFavoriteText: {
    fontWeight: 'bold',
    marginLeft: 4,
    color: '#484848',
    
  }
});
