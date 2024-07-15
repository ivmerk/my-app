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
          tabBarButton: (props) => (
            <Pressable
              {...props}
              onPress={() => navigation.goBack()}
              style={{ justifyContent: 'center', alignItems: 'center' }}
            >
              <FontAwesome size={28} name="chevron-left" color="#484848" />
              <Text style={{ color: '#484848' }}>Tab 1</Text>
            </Pressable>
          )
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
