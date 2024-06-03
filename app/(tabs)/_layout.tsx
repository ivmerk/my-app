import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'black' }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Главная',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Кабинет',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="cog" color={color} />,
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="favourites"
        options={{
          title: 'Избранное',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="heart" color={color} />,
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          title: 'Корзина',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="shopping-cart" color={color} />,
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="mail"
        options={{
          title: 'Почта',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="envelope" color={color} />,
          headerShown: false,
        }}
      />
    </Tabs>
  );
}

