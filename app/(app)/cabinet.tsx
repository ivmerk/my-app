import CabinetScreen from '@/pages/cabinet-screen/cabinet-screen';
import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Tab() {
  return (
  <CabinetScreen/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

