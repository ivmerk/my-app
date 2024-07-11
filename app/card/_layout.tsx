import React from "react";
import { Tabs } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";

export default function CardLayout() {
  return (
  <Tabs screenOptions={{ headerShown: false }}>
    <Tabs.Screen
        name="EmptyComponent"
        options={{
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="chevron-left" color={color} />,
        }}
        listeners={({ navigation }) => ({
          tabPress: (e) => {
            e.preventDefault();
            navigation.goBack();
          },
        })}
    />
    <Tabs.Screen
        name="index"
        options={{
          title: "Home" 
        }} />
      {/* Add more tabs here
   <Tabs.Screen 
        name="search"
        options={{ 
          title: "Search" 
        }} />
      */}
  </Tabs>
  )
}
