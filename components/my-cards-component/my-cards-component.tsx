import React, { useState } from "react";
import { View, Text, StyleSheet, Pressable, FlatList, Dimensions, ScrollView } from "react-native";
import { AddPost, Wallet } from "../svg-const/svg-const";
import { postMenuFilterItems } from "@/constants/const.product";

const {width} = Dimensions.get('window');

const CreateCardAndBalanceComponent = () => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.headerItemContainer}>
        <Pressable onPress={() => {}}>
          <AddPost  color='#484848'/>
        </Pressable>
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerText}>Разместить объявление</Text>
        </View>
      </View>
      <View style={styles.headerItemContainer}>
        <Pressable onPress={() => {}}>
          <Wallet color='#484848'/>
        </Pressable>
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerText}>Баланс:  p.</Text>
        </View>
      </View>
    </View>
  );
}

const FilterMenuItem = ({name}: {name: string}) => {
  return (
    <View>
      <Text>{name}</Text>
    </View>
  );
}
export default function MyCardsComponent({title}: {title: string}) {
  const [filterType, setFilterType] = useState(postMenuFilterItems[0]);
  return (
    <View style={styles.container}>
      <CreateCardAndBalanceComponent />
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.filterContainer}>
          <FlatList
            data={postMenuFilterItems}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({item}) => (
              <FilterMenuItem name={item.name} />
            )}
          />
        </View>
      </ScrollView>
      <Text>MyCardsComponent</Text>
      <Text>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width,
    display: "flex",
    flex: 1,
  },
  headerContainer: {
    display: "flex",
    paddingVertical: 8,
    paddingLeft: '10%',
    borderBottomWidth: 1,
    justifyContent:"center",
    alignItems: "flex-start",
  },
  headerItemContainer: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  headerTextContainer:{
    marginLeft: 10,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  scrollView: {
    flex: 1,
    backgroundColor: "#fff",
    marginVertical:2,
    paddingVertical: 8,
  },
  filterContainer: {
    width: "100%",
    flex: 1,
  },
});
