import React from "react";
import { useNavigation } from '@react-navigation/native';
import { Tabs } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";
import { Pressable, Text } from "react-native";

export default function CardLayout() {
  const navigation = useNavigation();
  return (

  <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="homeScreen"
        options={{
          title: "Назад",
          tabBarIcon: ({ color }) => 
              <Pressable
                onPress={() => {
                  console.log("Pressed");
                  navigation.goBack();
                }}
              >
              <FontAwesome size={28} name="chevron-left" color={color}/> 
              </Pressable>
        }}
      />

      <Tabs.Screen
        name="mail"
        options={{
          title: "Почта", 
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="envelope" color={color} />,
        }} />
    <Tabs.Screen 
        name="EmptyComponent"
        options={{ 
          title: "Наверх",
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="envelope" color={color} />,
        }} 
    />
  </Tabs>
  )
}
