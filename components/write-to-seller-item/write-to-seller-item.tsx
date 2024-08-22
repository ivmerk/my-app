import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { WritingPencil } from "../svg-const/svg-const";

export default function WriteToSellerItem() {
  return (
    <View style={styles.container}>
      <WritingPencil />
      <Text style={styles.itemText}>Написать</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    height: 40,
    paddingTop: 8, 
    paddingBottom: 8, 
    paddingLeft: 12,
    paddingRight: 12,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: "#484848",
    backgroundColor: '#fff',
  },
  itemText: {
    fontWeight: 'bold',
    marginLeft: 4,
    color: '#484848',
    
  }
});
