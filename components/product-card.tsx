import { Product } from '@/types/product';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { View, Text, StyleSheet, Pressable, Image, ImageBackground } from 'react-native';

interface CardProps {
  item: Product;
  placeInCartHandler: (id: string) => void;
  placeInFavoriteHandler: (id: string) => void;
}

const ProductCard: React.FC<CardProps> = ({ item, placeInCartHandler, placeInFavoriteHandler}) => {
  return (
    <View style={styles.card}>
      <ImageBackground
        source={{ uri: item.image }}
        style={styles.imageBackground}>
        <View style={styles.favoriteIconBlock}>
          <Ionicons
            name="heart-outline"
            size={30}
            color="#484848"
          />
        </View>
      </ImageBackground>
      <View style={styles.isAvailableAndTermsListContainer}>
        <View style={styles.isAvailableAndTermsItemContainer}>
          <Text style={styles.isAvailableAndTermsItemText}>{item.availability}</Text>
        </View>
        <View style={styles.isAvailableAndTermsItemContainer}>
          <Text style={styles.isAvailableAndTermsItemText}>{item.termsOfDelivery}</Text>
        </View>
      </View>
      <View style={styles.ratingContainer}>
        <Ionicons 
          name="star"
          size={20}
          color="#484848" />
        <Text style={styles.boldingText}>{item.rating}</Text>
        <Text style={styles.ligthText}>/{item.comments.length} отзывов/{item.selesQty} продаж</Text>
      </View>
      <View style={styles.categoryTitleAndDescriptionContainer}>
        <Text style={styles.boldingText}>{item.category}: {item.title}</Text>
        <Text style={styles.boldingText}>{item.description}</Text>
      </View>
      <View style={styles.priceInCartAndToFavoriteContainer}>
        <View style={styles.priceInCartAndToFavoriteItem}>
          <Text style={styles.priceInCartAndToFavoriteText}>{item.price} ₽</Text>
        </View>
      <Pressable onPress={() => placeInCartHandler(item.id)}>
        <View style={styles.priceInCartAndToFavoriteItem}>
          <Ionicons
            name="bag"
            size={20}
            color="#484848"/>
          <Text style={styles.priceInCartAndToFavoriteText}> В корзину</Text>
        </View>
      </Pressable>
      <Pressable onPress={() =>placeInFavoriteHandler(item.id)}>
        <View style={styles.priceInCartAndToFavoriteItem}>
          <Ionicons
            name="heart-outline"
            size={25}
            color="#484848"
          />
        </View>
      </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    marginVertical: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },    
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
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
  isAvailableAndTermsItemContainer: {
    display: 'flex',
    marginBottom: 8,
    alignItems: 'center',
    backgroundColor: '#484848',
    width: '40%',
    height: 20,
  },
  isAvailableAndTermsItemText: {
    color: '#fff',
  },
  ratingContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
    marginBottom: 8,
  },
  ligthText: {
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
  priceInCartAndToFavoriteItem:{
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
  priceInCartAndToFavoriteText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 4,
    color: '#484848',
    
  }
});

export default ProductCard;

