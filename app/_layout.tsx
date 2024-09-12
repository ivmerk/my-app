import * as React from 'react';
import { Stack } from 'expo-router/stack';
import { AuthProvider } from '@/context/AuthProvider';

export default function Layout() {
  return (
    <AuthProvider>
      <Stack screenOptions={{ headerShown: false }}> 
        <Stack.Screen name="(app)"  /> 
        <Stack.Screen name="(stack)" />
        <Stack.Screen name="card/[slug]" /> 
        <Stack.Screen name="+not-found" />
        <Stack.Screen name="(auth)/login"/>      
      </Stack>
    </AuthProvider>
  );
}

