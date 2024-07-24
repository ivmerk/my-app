import { Ionicons } from "@expo/vector-icons";
import * as React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

interface PlaceInFavoriteItemProps {
  id: string,
  placeInFavoriteHandler: (id: string) => void
}
export default function PlaceInFavoriteItem({id, placeInFavoriteHandler}: PlaceInFavoriteItemProps) {
  return (
          <Pressable onPress={() =>placeInFavoriteHandler(id.toString())}>
            <View style={styles.favoriteItem}>
              <Ionicons
                name="heart-outline"
                size={25}
                color="#484848"
              />
            </View>
          </Pressable>
  );
}


const styles = StyleSheet.create({
  favoriteItem:{
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
});
