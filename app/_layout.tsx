import * as React from 'react';
import { Stack } from 'expo-router/stack';

export default function Layout() {
  return (
    <Stack screenOptions={{ headerShown: false }}> 
      <Stack.Screen name="(app)"  /> 
      <Stack.Screen name="(stack)" />
      <Stack.Screen name="card" /> 
      <Stack.Screen name="+not-found" />
    </Stack>
  );
}

