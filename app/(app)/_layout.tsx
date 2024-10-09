import * as React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import { Cabinet } from '@/components/svg-const/svg-const';
import CabinetScreen from '@/pages/cabinet-screen/cabinet-screen';

export default function TabLayout() {
  return (
    <Tabs  screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Главная',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="cabinet"
        options={{
          title: 'Кабинет',
          tabBarIcon: ({ color }) => <Cabinet color={color} />,
        }}
      />
      <Tabs.Screen
        name="favourites"
        options={{
          title: 'Избранное',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="heart" color={color} />,
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          title: 'Корзина',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="shopping-cart" color={color} />,
        }}
      />
      <Tabs.Screen
        name="mail"
        options={{
          title: 'Почта',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="envelope" color={color} />,
        }}
      />
    </Tabs>
  );
}

