import * as React from "react";
import {View, Text, StyleSheet } from "react-native";
import { ShieldTick, UserCircleLight } from "../svg-const/svg-const";
import { ServiceList } from "@/mocks/serviceList";
import ProductServiceCardPicture from "../product-service-card-picture/product-service-card-picture";
import PlaceInFavoriteItem from "../place-in-favorite-item/place-in-favorite-item";
import CallToSellerItem from "../call-to-seller-item/call-to-seller-item";
import WriteToSellerItem from "../write-to-seller-item/write-to-seller-item";
import { ServiceCardInList } from "@/types/serviceCardInList";
import { IMG_URL } from "@/constants/const.card";



export default function ServiceCard( card: ServiceCardInList | null)   {

  const serviceItem = ServiceList[1];
 (serviceItem as any).priceList = [{name: "Основная", price: 2500}, {name: "Дополнительная", price: 500}, {name: "Второстепенная", price: 1000}, {name: "Съемка", price: 14000}];

  return (
    <View style={styles.container}>
      <View style={styles.sellerImageAndTitleItem}>
        <UserCircleLight />
        <View style={styles.sellerTitleItem}>
          {card?.author &&<Text style={styles.sellerTitleText}>{card.author}</Text>}
          <View style={{ flexDirection: "row", justifyContent: "flex-start" }}>
            <ShieldTick/>
            <Text style={styles.sellerConfirmedText}>Паспорт проверен</Text>
          </View>
        </View>
      </View>
      <View style={styles.cardContainer}>
        {card?.uid && 
          <ProductServiceCardPicture
            uri={`${IMG_URL}${card.slug}.webp`}
            isFavorite={serviceItem.isFavorite}
        />}
        { card?.title && <Text style={styles.sellerTitleText}>{card.title}</Text>}
        <View style= {styles.servicePriceContainer}>
          <Text style={styles.servicePriceText}>
            от {card?.price} ₽
          </Text>
          <Text style={[styles.servicePriceText, {fontWeight: "regular"}]}> / за час</Text>
        </View>
        <View style={styles.callingWritingInFavoriteContainer}>
          <CallToSellerItem/>
          <WriteToSellerItem/>
          <PlaceInFavoriteItem
            id={serviceItem.id.toString()}
            placeInFavoriteHandler={() => {}}
          />
        </View> 
      </View>  
    </View>
    );

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sellerImageAndTitleItem: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  sellerTitleItem: {
    flexDirection: "column",
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  sellerTitleText: {
    color: "# 484848",
    fontSize: 16,
    fontWeight: "bold",
    lineHeight: 22,
  },
  sellerConfirmedText: {
    color: "# 484848",
    fontSize: 14,
    lineHeight: 20,
    marginLeft: 4,
  },
  cardContainer: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#fff",
    justifyContent: "flex-start",
  },
  titleTextItem: {
    color: "# 484848",
    fontSize: 16,
    fontWeight: "bold",
    lineHeight: 22,
  },
  servicePriceContainer:{
    display: "flex", 
    flexDirection: "row", 
    justifyContent: "flex-start",
    width: "100%" },
  servicePriceText: {
    color: "# 484848",
    fontSize: 24,
    fontWeight: "bold",
    lineHeight: 26,
  },
  callingWritingInFavoriteContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
  },
});
