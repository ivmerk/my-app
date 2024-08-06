import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Star } from "../svg-const/svg-const";

const StarItem = ({isActive}: {isActive: boolean}) => {
return (
  <View style={styles.starItem}>
      <Star color={isActive ? "#EDD146" : "#D9D9D9"} />
  </View>
);  
}

export default function StarsRatingComponent({ rating } : {rating: number}) {
  const STARS_MAX = 5;
  const stars = new Array(STARS_MAX).fill(false);
  return (
    <View style={styles.container}>
      {rating &&  stars.map((_, index) => <StarItem key={index} isActive={index + 1 < rating}/>)} 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: "row",
    marginLeft: 10,
    backgroundColor: "#fff",
    alignItems: "flex-start",
    justifyContent: "space-around",
  },
  starItem: {
    margin: 1,
    display: "flex",
    justifyContent: "center",
alignItems: "center",
  }
});
