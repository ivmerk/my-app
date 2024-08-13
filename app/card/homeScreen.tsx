import ServiceCard from "@/components/service-card/sevice-card";
import React from "react";
import {SafeAreaView, ScrollView, View, Text, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import MapOnCardItem from "../../components/map-on-card-item/map-on-card-item"; 
import ServiceDescriptionOnCardItem from "../../components/service-description-on-card-item/service-descripton-on-card-item";
import PriceListOnCardComponent from "../../components/price-list-on-card-component/price-list-on-card-component";
import ReviewsQuestionsComponent from "../../components/reviews-questions-component/reviews-questions-component";
import { ServiceList } from "@/mocks/serviceList";


export default function Page() {
const inset = useSafeAreaInsets();
  const serviceItem = ServiceList[1];
 (serviceItem as any).priceList = [{name: "Основная", price: 2500}, {name: "Дополнительная", price: 500}, {name: "Второстепенная", price: 1000}, {name: "Съемка", price: 14000}];
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{...styles.scrollView, paddingBottom: 100 + inset.bottom}}>
        <ServiceCard />
        <MapOnCardItem/>
        <ServiceDescriptionOnCardItem text={serviceItem.description}/>
        <PriceListOnCardComponent priceList={serviceItem.priceList}/>
        <ReviewsQuestionsComponent 
          reviews={serviceItem.reviews as []}
          questions={serviceItem.questions as []}
        />
        <Text>Похожие объявления</Text>
      </ScrollView>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    backgroundColor: "#fff",
    paddingHorizontal: '8%',
    marginVertical: 8,
  },
});
