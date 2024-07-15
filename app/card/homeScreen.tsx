import ServiceCard from "@/components/service-card/sevice-card";
import ServiceSmallCard from "@/components/service-small-card/service-small-card";
import React from "react";
import { Text, View } from "react-native";

export default function Page() {
  return (
    <View>
      <Text>Card</Text>
      <ServiceCard />
      <ServiceSmallCard /> 
    </View>
  )
}
