import React from "react"
import { StyleSheet, Text, View } from "react-native"

export default function MobileStoriesCard(){
  return(
  <View style={styles.container}>
      <Text>mobilstories card</Text>

    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    height: '85%',
    aspectRatio: 60 / 85,
  }
})
