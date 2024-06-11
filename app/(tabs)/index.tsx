import Logo from '@/components/logo';
import ProductCard from '@/components/product-card';
import { GoodCards } from '@/mocks/data';
import { View, Text, StatusBar, FlatList,  Animated, StyleSheet,SafeAreaView } from 'react-native';




export default function Tab() {
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
return ( 
  <SafeAreaView style={styles.container}>
      <Animated.View style={[styles.HeaderContainer, {height: 50, opacity}]}>
        <Logo />
        <Text>Search Header 1</Text>
      </Animated.View >
      <Animated.View style={[styles.HeaderContainer, {height: 50, opacity}]}>
        <Text>Search Header</Text>
      </Animated.View >
      <Animated.FlatList 
        data={GoodCards}
        renderItem={({ item }) => 
          <ProductCard
            item={item} 
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
  HeaderContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollView: {
    backgroundColor: 'white',
    marginHorizontal: 20,
  },
});

