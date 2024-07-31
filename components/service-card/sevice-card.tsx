import * as React from "react";
import {SafeAreaView, ScrollView, View, Text, StyleSheet } from "react-native";
import { ShieldTick, UserCircleLight } from "../svg-const/svg-const";
import { ServiceList } from "@/mocks/serviceList";
import ProductServiceCardPicture from "../product-service-card-picture/product-service-card-picture";
import PlaceInFavoriteItem from "../place-in-favorite-item/place-in-favorite-item";
import CallToSellerItem from "../call-to-seller-item/call-to-seller-item";
import WriteToSellerItem from "../write-to-seller-item/write-to-seller-item";
import MapOnCardItem from "../map-on-card-item/map-on-card-item";
import ServiceDescriptionOnCardItem from "../service-description-on-card-item/service-descripton-on-card-item";
import PriceListOnCardComponent from "../price-list-on-card-component/price-list-on-card-component";
import { useSafeAreaInsets } from "react-native-safe-area-context";



export default function ServiceCard() {

  const serviceItem = ServiceList[1];
 (serviceItem as any).priceList = [{name: "Основная", price: 2500}, {name: "Дополнительная", price: 500}, {name: "Второстепенная", price: 1000}, {name: "Съемка", price: 14000}];

  const inset = useSafeAreaInsets();
  return (
    <SafeAreaView style={styles.container}>
    <ScrollView contentContainerStyle={{...styles.scrollView, paddingBottom: 100 + inset.bottom}}>
      <View style={styles.sellerImageAndTitleItem}>
        <UserCircleLight />
        <View style={styles.sellerTitleItem}>
          <Text>Иван Меркулов</Text>
          <View style={{ display: "flex", flexDirection: "row" }}>
            <ShieldTick/>
            <Text style={styles.sellerConfirmedText}>Паспорт проверен</Text>
          </View>
        </View>
      </View>
      <View style={styles.cardContainer}>
        <ProductServiceCardPicture
          uri={serviceItem.media.images[0].url}
          isFavorite={serviceItem.isFavorite}
        />
        <Text style={styles.titleTextItem}>{serviceItem.title}</Text>
        <View style= {styles.servicePriceContainer}>
          <Text style={styles.servicePriceText}>
            от {serviceItem.price} ₽
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
      <MapOnCardItem/>
      <ServiceDescriptionOnCardItem text={serviceItem.description}/>
      <PriceListOnCardComponent priceList={serviceItem.priceList}/>
      <Text>Отзывы и вопросы</Text>
      <Text>Похожие объявления</Text>
    </ScrollView> 
    </SafeAreaView>
    );
}


const styles = StyleSheet.create({
  container: {
    display: "flex", 
  },
  scrollView: {
    backgroundColor: "#fff",
    paddingHorizontal: '8%',
    marginVertical: 8,
  },
  sellerImageAndTitleItem: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  sellerTitleItem: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#fff",
    alignItems: "center",
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
