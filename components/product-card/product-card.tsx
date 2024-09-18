import { Ionicons } from '@expo/vector-icons';
import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Pressable, Platform } from 'react-native';
import InCartCardItem from '../incart-card-item/incart-card-item';
import { PriceCardItem } from '../price-card-item/price-card-item';
import ProductServiceCardPicture from '../product-service-card-picture/product-service-card-picture';
import PlaceInFavoriteItem from '../place-in-favorite-item/place-in-favorite-item';
import { ServiceCardInList } from '@/types/serviceCardInList';
import { BASE_URL, IMG_URL } from '@/constants/const.card';

interface ProductCardProps {
  card: ServiceCardInList ;
  touchCardHandler: (slug: string) => void;
  placeInCartHandler: (id: string) => void;
  placeInFavoriteHandler: (id: string) => void;

}

const ProductCard: React.FC<ProductCardProps> = ({ card, touchCardHandler, placeInCartHandler, placeInFavoriteHandler}) => {
  useEffect(() => {
    
  }, [])
  return (
    <Pressable onPress={() => touchCardHandler(card.slug.toString())}>
      <View style={styles.card}>
        { card && <ProductServiceCardPicture
            uri={`${IMG_URL}${card.slug}.webp`}
          isFavorite={card.isFavorite}
        />}
        {/* <View style={styles.isAvailableAndTermsListContainer}>
          <View style={styles.isAvailableAndTermscardContainer}>
            <Text style={styles.isAvailableAndTermscardText}>{card.availability}</Text>
          </View>
          <View style={styles.isAvailableAndTermscardContainer}>
            <Text style={styles.isAvailableAndTermscardText}>{card.termsOfDelivery}</Text>
          </View>
        </View>*/ }
        <View style={styles.ratingContainer}>
          <Ionicons 
            name="star"
            size={20}
            color="#484848" />
          <Text style={styles.boldingText}>{card.rating}</Text>
          {/* <Text style={styles.lightText}>/{card.comments.length} отзывов/{card.salesQty} продаж</Text>*/}
        </View>
        <View style={styles.categoryTitleAndDescriptionContainer}>
          <Text style={styles.boldingText}>{card.category.name}: {card.title}</Text>
          <Text style={styles.boldingText}>{card.description}</Text>
        </View>
        <View style={styles.priceInCartAndToFavoriteContainer}>
          <PriceCardItem
            price={card.price}
            fontSize={18}
          />
          <InCartCardItem 
            id={card.uid.toString()} 
            placeInCartHandler={placeInCartHandler}
            fontSize={18}
          />
          <PlaceInFavoriteItem
            id={card.uid.toString()}
            placeInFavoriteHandler={placeInFavoriteHandler}
          />
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    marginVertical: 8,
    ...(Platform.OS === 'web'
      ?{
        boxShadow: "0px 2px 2.62px rgba(0, 0, 0, 0.23)",
      }:
      {
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },    
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
      }),

    elevation: 4,
  },
  imageBackground: {
    width: '100%',
    aspectRatio: 20 / 25,
    justifyContent: 'space-between',
  },
  favoriteIconBlock: {
    position: 'absolute',
    top: 12,
    right: 12,
  },
  isAvailableAndTermsListContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    gap: 8,
    position: 'absolute',
    left: 0,
    right: 0,
    top: '65%',
  },
  isAvailableAndTermscardContainer: {
    display: 'flex',
    marginBottom: 8,
    alignItems: 'center',
    backgroundColor: '#484848',
    width: '40%',
    height: 20,
  },
  isAvailableAndTermscardText: {
    color: '#fff',
  },
  ratingContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
    marginBottom: 8,
  },
  lightText: {
    fontSize: 16,
    fontWeight: 'light',
    marginLeft: 4,
    color: '#484848',

  },
  boldingText: {
    fontSize: 16,
    fontWeight: 'semibold',
    marginLeft: 4,
    color: '#484848',
  },
  categoryTitleAndDescriptionContainer: {
    marginTop:12,
  },
  priceInCartAndToFavoriteContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
  },
  favoriteItem:{
    display: 'flex',
    height: 40,
    paddingTop: 8, 
    paddingBottom: 8, 
    paddingLeft: 12,
    paddingRight: 12,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#d9d9d9',
  },
});

export default ProductCard;

