import React from 'react'
import {Animated, StyleSheet, FlatList, Image, Dimensions } from "react-native"

const {width} = Dimensions.get('window');
const sliderImages = [
  'https://placeimg.com/640/480/nature',
  'https://placeimg.com/640/480/tech',
  'https://placeimg.com/640/480/arch',
];
export default function MobileStoriesList()
{
const scrollX = new Animated.Value(0)
  return(
    <FlatList
          data={sliderImages}
          horizontal
          pagingEnabled
          renderItem={({ item }) => (
            <Image source={{ uri: item }} style={styles.sliderImage} />
          )}
          keyExtractor={(item, index) => index.toString()}
        />
  )
} 

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',

  },
  sliderImage: {
    width,
    height: 20,
  },
}
)
