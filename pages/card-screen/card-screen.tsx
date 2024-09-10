import ServiceCard from "@/components/service-card/service-card";
import React , { useEffect, useState } from "react";
import {SafeAreaView, ScrollView, Text, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import MapOnCardItem from "../../components/map-on-card-item/map-on-card-item"; 
import ServiceDescriptionOnCardItem from "../../components/service-description-on-card-item/service-description-on-card-item";
import PriceListOnCardComponent from "../../components/price-list-on-card-component/price-list-on-card-component";
import ReviewsQuestionsComponent from "../../components/reviews-questions-component/reviews-questions-component";
import { ServiceList } from "@/mocks/serviceList";
import { ParamListBase, RouteProp, useRoute } from "@react-navigation/native";
import { ServiceCardInList } from "@/types/serviceCardInList";
import { BASE_URL } from "@/constants/const.card";

export default function CardScreen({route}: any) {

  const inset = useSafeAreaInsets();
  const {slug} = route.params;
  const retryDelay = 10000;
  const proxyUrl = "https://cors-anywhere.herokuapp.com/";
  const maxRetries = 3;
  const[card, setCard] = useState<ServiceCardInList | null>(null);
  const [loading, setLoading] = useState(true);
  const [retryCount, setRetryCount] = useState(0);


  useEffect(() => {
   const fetchCard = async () => {
      try{
        const response = await fetch(proxyUrl + `${BASE_URL}services/${slug}`, 
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
        setCard(data);
        setTimeout(() =>  console.log(data), 10000);
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
    fetchCard();
  }, [slug]);
  const serviceItem = ServiceList[1];
 (serviceItem as any).priceList = [{name: "Основная", price: 2500}, {name: "Дополнительная", price: 500}, {name: "Второстепенная", price: 1000}, {name: "Съемка", price: 14000}];
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{...styles.scrollView, paddingBottom: 100 + inset.bottom}}>
        {card && <ServiceCard {...card}/>}
        <MapOnCardItem address={card?.address}/>
        {card?.description && <ServiceDescriptionOnCardItem text={card.description}/>}
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
