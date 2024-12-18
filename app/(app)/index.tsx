import Logo from '@/components/logo/logo';
import React, { useEffect, useState } from 'react';
import MobileStoriesList from '@/components/mobile-stories-list/mobile-stories-list';
import ProductCard from '@/components/product-card/product-card';
import SearchBar from '@/components/search-bar/search-bar';
import { Animated, StyleSheet,SafeAreaView, Dimensions, View, Text } from 'react-native';
import { router } from 'expo-router';
import { ServiceCardInList } from '@/types/serviceCardInList';
import { BASE_URL } from '@/constants/const.card';
import { useAuth } from '@/context/AuthProvider';
import { globalStyles } from '@/constants/const.css';
import { heightOfLogo, heightOfSlider, widthOfLogo, scrollY } from '@/common/animated-rules-methods';



export default function Tab() {

  const {user} = useAuth();
  const touchCardHandler = (slug: string) => {
    console.log(slug)
    router.push({ pathname: `/card/[slug]`, params: { slug } });
  }

  const placeInCartHandler = (id: string) => {
    console.log(id)
  }

  const placeInFavoriteHandler = (id: string) => {
    console.log(id)

  }

  const [ServiceCards, setServiceCards] = useState<ServiceCardInList[]>([]);
  const [loading, setLoading] = useState(true);
  const [retryCount, setRetryCount] = useState(0);

  const maxRetries = 3;

  const proxyUrl = "https://cors-anywhere.herokuapp.com/";
  const retryDelay = 10000;

  useEffect(() => {
    const fetchCards = async () => {  
      try{
        const response = await fetch(proxyUrl + `${BASE_URL}services?limit=20`, 
          {
            method: 'GET',
            headers: {
              'X-Requested-With': 'XMLHttpRequest'
            }
          });
        if(!response.ok){
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setServiceCards(data.data);
        console.log(data.data);
      } catch (err) {
        console.log(err);
        if (retryCount < maxRetries) {
          setTimeout(() => {
            setRetryCount(retryCount + 1); 
          }, retryDelay);
        }
      } finally {
        setLoading(false);
      }
    };
    if (user !== null) {
      fetchCards();
    }
  },[retryCount]);

  return ( 
    <View style={globalStyles.container}>
    <SafeAreaView>
      <View style={styles.headerContainer}>
        <Animated.View style={[styles.logo, {height:heightOfLogo, width: widthOfLogo}]}>
          <Logo />
        </Animated.View >
        <SearchBar />
      </View>
      <Animated.View style={[styles.headerContainer, {height: heightOfSlider}]}>
        <MobileStoriesList/>
      </Animated.View >
      {loading ? <Text>Loading...</Text> : 
      <Animated.FlatList 
        data={ServiceCards}
        renderItem={({ item }) => 
          <ProductCard
            card={item} 
            touchCardHandler={touchCardHandler}
            placeInCartHandler={placeInCartHandler} 
            placeInFavoriteHandler={placeInFavoriteHandler}
          />}
        keyExtractor={(item) => item.uid}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false }
        )}
      />
      }
    </SafeAreaView>
    </View>
  );
}


const styles = StyleSheet.create({
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

