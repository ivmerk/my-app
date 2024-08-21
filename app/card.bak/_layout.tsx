import React from "react";
import { useNavigation } from '@react-navigation/native';
import { Tabs } from "expo-router";
import { Pressable, Platform } from "react-native";
import {Cabinet, ForwardBack, Message, TabFavorite, ToTopScrolling } from "@/components/svg-const/svg-const";


export default function CardLayout() {
  const navigation = useNavigation();
  const handleGoBack = () => {
    if (Platform.OS === 'web') {
      window.history.back();
    } else {
      navigation.goBack();
    }
  };
  return (

    <Tabs initialRouteName="homeScreen" screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="EmptyComponent"
        options={{
          title: "Назад",
          tabBarIcon: ({ color }) => 
            <Pressable
              onPress={() => {
                console.log("Pressed");
                handleGoBack();
              }}
            >
              <ForwardBack color={color}/> 
            </Pressable>
        }}
      />

      <Tabs.Screen
        name="mail"
        options={{
          title: "Почта", 
          tabBarIcon: ({ color }) => <Message color={color} />,
        }} />

      <Tabs.Screen
        name="favorites"
        options={{
          title: "Избранное", 
          tabBarIcon: ({ color }) => <TabFavorite color={color} />,
        }} />

      <Tabs.Screen
        name="cabinet"
        options={{
          title: "Кабинет", 
          tabBarIcon: ({ color }) => <Cabinet color={color} />,
        }} />

      <Tabs.Screen 
        name="homeScreen"
        options={{ 
          title: "Наверх",
          tabBarIcon: ({ color }) => <ToTopScrolling color={color} />,
        }} 
      />
    </Tabs>
  )
}
