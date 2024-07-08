import SearchBar from '@/components/search-bar/search-bar';
import SearchRecommendationsList from '@/components/search-recommendations-list/search-recommendations-list';
import { TypesOfSearchDisplay, searchMenuItems } from '@/constants/const.product';
import { GoodCards } from '@/mocks/data';
import { AntDesign } from '@expo/vector-icons';
import { router } from 'expo-router';
import React, { useCallback, useState } from 'react';
import { View, Text, FlatList, StyleSheet, Pressable } from 'react-native';
interface Item {
  id: number
  category: string;
  name: string;
}

const searchesItem =({item}: {item: Item}) => {
  return (
    <View>
      <Text>{item.category}</Text>
      <Text>{item.name}</Text>
    </View>
  )
}

export default function Page() {

  const [goodOrServicesListSwitcher, setGoodOrServicesListSwitcher] = useState(searchMenuItems[0].list);
  const [goodsOrCategoriesListSwitcher, setGoodsOrCategoriesListSwitcher] = useState(TypesOfSearchDisplay.CATEGORIES);

   return   <DisplaySearchList
      kindOfItems={goodOrServicesListSwitcher}
      setGoodOrServicesListSwitcher={setGoodOrServicesListSwitcher}
      items={goodOrServicesListSwitcher === searchMenuItems[0].list ? goodSearchData : servicesSearchData}/>
}

const DisplaySearchList = ({kindOfItems, setGoodOrServicesListSwitcher , items}: {kindOfItems: string, setGoodOrServicesListSwitcher : any, items: any}) => {
  
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Pressable onPress={() => {console.log('Pressed'); router.back()}}>
          <AntDesign name="arrowleft" size={24} color="black" />
          <Text style={{ marginLeft: '5%', fontWeight: 'bold', fontSize: 5 }}>НАЗАД</Text>
        </Pressable>
          <SearchBar/>
      </View>
      <View style={styles.menuListContainer}>
        {searchMenuItems.map((item) => {
          return (
            <Pressable
              key={item.id}
              onPress={
                () => setGoodOrServicesListSwitcher(item.list)
              }>
              <View style={styles.menuItemContainer}>
                <Text style={[styles.menuItemText, kindOfItems === item.list && styles.selectedMenuItemText]}>  {item.name}  </Text>
              </View>
            </Pressable>
          );
        })}
      </View>
      <View>
        <View>
          <SearchRecommendationsList
          title="Часто ищут:"
          items={recommendationsData}
          cards={null}
          />
          <SearchRecommendationsList
          title="Найти в категории:"
          items={categoriesData}
          cards={null}
          />
          <SearchRecommendationsList
          title={kindOfItems === searchMenuItems[0].list ? "Популярные товары:" : "Популярные услуги:"}
          items={null}
          cards={GoodCards}
          />

        </View>
      </View>
    </View>
  )
} 

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    paddingHorizontal: '2%',
    backgroundColor: 'white',
  },
  headerContainer: {
    display: 'flex',
    marginTop: '15%',
    flexDirection: 'row',
  },
  menuListContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  menuItemContainer: {
    display: 'flex',
    flexDirection: 'row',
    paddingTop: '5%',
  },
  menuItemText: {
    fontSize: 18,
    marginHorizontal: '3%',
    fontWeight: 'bold',
    color: '#484848',
    opacity: 0.5,
  },
  selectedMenuItemText: {
    fontSize: 18,
    marginHorizontal: '5%',
    color: '#484848',
    borderBottomColor: '#484848',
    borderBottomWidth: 1,
    opacity: 1,
  },
  searchingCategoryMenuHeadText: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingHorizontal: '10%',
    color: '#484848',
    textAlign: 'left',
  }
});



const servicesSearchData = [
  {
    id: 1,
    name: 'Service 1',
    category: 'Category 1',
  },
  {
    id: 2,
    name: 'Service 2',
    category: 'Category 2',
  },
  {
    id: 3,
    name: 'Service 3',
    category: 'Category 3',
  },
  {
    id: 4,
    name: 'Service 4',
    category: 'Category 4',
  },
];

const goodSearchData = [
  {
    id: 1,
    name: 'Good 1',
    category: 'Category 1',
  },
  {
    id: 2,
    name: 'Good 2',
    category: 'Category 2',
  },
  {
    id: 3,
    name: 'Good 3',
    category: 'Category 3',
  },
  {
    id: 4,
    name: 'Good 4',
    category: 'Category 4',
  },
];


const categoriesData = [
  {
    id: 1,
    name: 'Category 1'
  },
  {
    id: 2,
    name: 'Category 2'
  },
  {
    id: 3,
    name: 'Category 3'
  },
  {
    id: 4,
    name: 'Category 4'
  },
];

const recommendationsData = [
  {
    id: 1,
    name: 'Recommendation 1'
  },
  {
    id: 2,
    name: 'Recommendation 2'
  },
  {
    id: 3,
    name: 'Recommendation 3'
  },
]
