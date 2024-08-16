import MyCardsComponent from "@/components/my-cards-component/my-cards-component";
import React, { useState } from "react";
import { SafeAreaView, View, Text, StyleSheet} from "react-native";
import { GestureHandlerRootView, ScrollView } from "react-native-gesture-handler";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const CabinetPageMode: {mode: string, title: string}[] = [
  {mode: "list", title: "Мои объявления"},
  {mode: "new", title: "Новое объявление"},
  {mode: "edit", title: "Редактировать"},
]

const PageHader = ({mode}: {mode: {mode: string, title: string}}) => {
  return (
    <View style={styles.containerHeader}>
      <Text style={styles.textTitle}>{mode.title}</Text>
    </View>
  );
}

export default function CabinetScreen() {
  const inset = useSafeAreaInsets();
  const [cabinetPageMode, setCabinetPageMode] = useState<{mode: string, title: string}>(CabinetPageMode[0]);

const renderCabinetPage = () => {
  switch (cabinetPageMode.mode) {
    case "list":
      return <MyCardsComponent title={cabinetPageMode.title}/>;
    case "new":
      return <Text>new</Text>;
    case "edit":
      return <Text>edit</Text>;
    default:
      return <MyCardsComponent title="default"/>;
  }
}

  return (
  <GestureHandlerRootView style={styles.container}>
    <SafeAreaView >
      <ScrollView contentContainerStyle={{...styles.scrollView, paddingBottom: 100 + inset.bottom}}>
        <PageHader mode={cabinetPageMode} />
        {renderCabinetPage()}
      </ScrollView>
    </SafeAreaView>
  </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
  },
  containerHeader: {
    display: 'flex',
    flex:1,
    borderBottomWidth: 1,
    justifyContent:"center",
    alignItems: "center",
  },
  textTitle: {
    fontSize: 28,
    fontWeight: "bold",
  },
  scrollView: {
    backgroundColor: "#fff",
    marginVertical: 8,
  },
});
