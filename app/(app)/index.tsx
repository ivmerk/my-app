import Logo from '@/components/logo/logo';
import React from 'react';
import MobileStoriesList from '@/components/mobile-stories-list/mobile-stories-list';
import ProductCard from '@/components/product-card/product-card';
import SearchBar from '@/components/search-bar/search-bar';
import { GoodCards } from '@/mocks/data';
import { Animated, StyleSheet,SafeAreaView, Dimensions, View } from 'react-native';
import { router } from 'expo-router';


const {height, width}= Dimensions.get('window'); 

export default function Tab() {

const touchCardHandler = (id: string) => {
  console.log(id)
    router.push('/card')
}

const placeInCartHandler = (id: string) => {
  console.log(id)
}

const placeInFavoriteHandler = (id: string) => {
  console.log(id)
    
}

const scrollY = new Animated.Value(0)
const translateY = scrollY.interpolate({
  inputRange: [0, 50],
  outputRange: [0, 50],
  extrapolate: 'clamp',
})
const opacity = scrollY.interpolate({
  inputRange: [0, 50],
  outputRange: [1, 0],
  extrapolate: 'clamp',
})

const maxHeightOfLogo = 5 * height / 100;
const heightOfLogo = scrollY.interpolate({
  inputRange: [0, maxHeightOfLogo],
  outputRange: [maxHeightOfLogo, 0],
  extrapolate: 'clamp',
})
const maxWidthOfLogo = 4.5 * width / 100; 
const widthOfLogo = scrollY.interpolate({
  inputRange: [0, maxWidthOfLogo],
  outputRange: [maxWidthOfLogo, 0],
  extrapolate: 'clamp',
})


const maxHeightOfSlider =  10 * height / 100;
const heightOfSlider = scrollY.interpolate({
  inputRange: [0, maxHeightOfSlider],
  outputRange: [maxHeightOfSlider, 0],
  extrapolate: 'clamp',
})
return ( 
  <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
      <Animated.View style={[styles.logo, {height:heightOfLogo, width: widthOfLogo}]}>
        <Logo />
      </Animated.View >
        <SearchBar />
      </View>
      <Animated.View style={[styles.headerContainer, {height: heightOfSlider}]}>
        <MobileStoriesList/>
      </Animated.View >
      <Animated.FlatList 
        data={GoodCards}
        renderItem={({ item }) => 
          <ProductCard
            item={item} 
            touchCardHandler={touchCardHandler}
            placeInCartHandler={placeInCartHandler} 
            placeInFavoriteHandler={placeInFavoriteHandler}
          />}
        keyExtractor={(item) => item.id}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false }
        )}
      />
  </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: '8%',
    backgroundColor: 'white',
  },
  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: '3%',
    width: '100%',
    height: '7%',
    backgroundColor: 'white',
    alignItems: 'center',
  },
  logo: {
  maxHeight:30,
    maxWidth:28,
  },
  scrollView: {
    backgroundColor: 'white',
  },
});

