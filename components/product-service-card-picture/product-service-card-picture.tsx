import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

export default function ProductServiceCardPicture({uri, isFavorite} : {uri: string, isFavorite: boolean}) {
  return (
        <ImageBackground
          source={{ uri }}
          style={styles.imageBackground}>
          <View style={styles.favoriteIconBlock}>
          {isFavorite &&  <Ionicons
              name="heart-outline"
              size={30}
              color="#484848"
            />}
          </View>
        </ImageBackground>


  );
}

const styles = StyleSheet.create({
  imageBackground: {
    width: '100%',
    aspectRatio: 20 / 25,
    justifyContent: 'space-between',
  },
  favoriteIconBlock: {
    position: 'absolute',
    top: 12,
    right: 12,
  },
});
