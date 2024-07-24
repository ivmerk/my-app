import * as React from "react";
import { View, Text } from "react-native";
import { ChevronDown, MapPlace } from "../svg-const/svg-const";

export default function MapOnCardItem() {
  return (
    <View>
      <MapPlace />
      <ChevronDown />
      <Text>MapOnCardItem</Text>
    </View>
  );
}
