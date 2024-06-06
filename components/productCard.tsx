import { Product } from '@/types/product';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ImageBackground } from 'react-native';

interface CardProps {
  item: Product;
  onPress: (id: string) => void;
}

const ProductCard: React.FC<CardProps> = ({ item, onPress}) => {
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
      <TouchableOpacity onPress={() => onPress(item.id)}>
        <Text>В наличии</Text>
      </TouchableOpacity>
      <Text style={styles.boldingText}>{item.category}: {item.title}</Text>
      <Text style={styles.boldingText}>{item.description}</Text>
      <Text>{item.price}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    marginVertical: 8,
    marginHorizontal: 16,
    paddingBottom: 122,
    borderRadius: 8,
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
    top: '70%',
  },
  isAvailableAndTermsItemContainer: {
    display: 'flex',
    marginBottom: 8,
    alignItems: 'center',
    backgroundColor: '#484848',
    width: 128,
    height: 20,
  },
  isAvailableAndTermsItemText: {
    color: '#fff',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
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
});

export default ProductCard;

