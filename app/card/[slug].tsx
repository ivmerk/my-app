import React, { useEffect, useState } from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Platform, Pressable } from "react-native";
import { useNavigation } from "expo-router";
import { Cabinet, ForwardBack, Message, TabFavorite, ToTopScrolling } from "@/components/svg-const/svg-const";
import CabinetScreen from "@/pages/cabinet-screen/cabinet-screen";
import MailScreen from "@/pages/mail-screen/mail-screen";
import FavoritesScreen from "@/pages/favorites-screen/favorites-screen";
import CardScreen from "@/pages/card-screen/card-screen";
import { useRoute } from "@react-navigation/native";
import { ServiceCardInList } from "@/types/serviceCardInList";
import { BASE_URL } from "@/constants/const.card";

const Tab = createBottomTabNavigator();
interface RouteParams {
  slug: string;
}
export default function CardLayout() {

  const navigation = useNavigation();

  const handleGoBack = () => {
    if (Platform.OS === 'web') {
      window.history.back();
    } else {
      navigation.goBack();
    }};
  const route = useRoute(); 
  const slug = (route.params as RouteParams).slug;

  return(
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="EmptyComponent"
        component={CardScreen}
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
          ,
        }}
        initialParams={{ slug: slug }}
        />

      <Tab.Screen
        name="mail"
        component={MailScreen}
        options={{
          title: "Почта", 
          tabBarIcon: ({ color }) => <Message color={color} />,
        }} />

      <Tab.Screen
        name="favorites"
        component={FavoritesScreen}
        options={{
          title: "Избранное", 
          tabBarIcon: ({ color }) => <TabFavorite color={color} />,
        }} />

      <Tab.Screen
        name="cabinet"
        component={CabinetScreen}
        options={{
          title: "Кабинет", 
          tabBarIcon: ({ color }) => <Cabinet color={color} />,
        }} />

      <Tab.Screen 
        name="homeScreen"
        component={CardScreen}
        options={{ 
          title: "Наверх",
          tabBarIcon: ({ color }) => <ToTopScrolling color={color} />,
        }} 
      />
    </Tab.Navigator>
  )
}

