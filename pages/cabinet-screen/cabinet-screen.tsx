import * as React from 'react';
import MyCardsComponent from "@/components/my-cards-component/my-cards-component";
import CreateNoticeForm from "@/components/create-notice-form/create-notice-form";
import { useState } from "react";
import { SafeAreaView, View, Text, StyleSheet} from "react-native";
import { GestureHandlerRootView, ScrollView } from "react-native-gesture-handler";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { CabinetPageMode } from "@/constants/const.product";

const PageHeader = ({header}: {header: string}) => {
  console.log("mode",header)
  return (
    <View style={styles.containerHeader}>
      <Text style={styles.textTitle}>{header}</Text>
    </View>
  );
}

export default function CabinetScreen() {
  const inset = useSafeAreaInsets();
  const [cabinetPageMode, setCabinetPageMode] = useState<{mode: string, header: string}>(CabinetPageMode[0]);

  
const renderCabinetPage = () => {
  switch (cabinetPageMode.mode) {
    case "list":
      return <MyCardsComponent onCreateEditNoticeMode={setCabinetPageMode}/>;
    case "new":
      return <CreateNoticeForm onCreateEditNoticeMode={setCabinetPageMode}/>;
    case "edit":
      return <Text>edit</Text>;
    default:
      return <MyCardsComponent onCreateEditNoticeMode={setCabinetPageMode(CabinetPageMode[0])}/>;
  }
}

  return (
  <GestureHandlerRootView style={styles.container}>
    <SafeAreaView >
      <ScrollView contentContainerStyle={{...styles.scrollView, paddingBottom: 100 + inset.bottom}}>
        <PageHeader header={cabinetPageMode.header} />
        {renderCabinetPage()}
      </ScrollView>
    </SafeAreaView>
  </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
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
