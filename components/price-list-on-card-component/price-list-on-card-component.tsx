import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import ReadMoreItem from "../read-more-item/read-more-item";

interface PriceListOnCardComponentProps {
  priceList: {name: string, price: number}[]
}

const PRICE_LIST_SHOT_LENGTH_MAX = 2;

const PriceListItem = ({name, price}: {name: string, price: number}) => {
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.priceText}>{name}</Text>
      <Text style={styles.priceText}>{price} ₽</Text>
    </View>
  )
}

const FullPriceList = ({priceList}: {priceList: {name: string, price: number}[]}) => {
  return (
    <View>
      {priceList.map((item, index) => <PriceListItem key={index} name={item.name} price={item.price}/>)}
    </View>
  )
}

const LongListComponent = ({priceList}: {priceList: {name: string, price: number}[]}) => {
  const [isFullList, setIsFullList] = React.useState(false);
  const pressShowMore = () => setIsFullList(!isFullList); 
  return (
    <View>
      {isFullList
        ? 
        <FullPriceList priceList={priceList} />
        :
        priceList.slice(0, PRICE_LIST_SHOT_LENGTH_MAX).map((item, index) => <PriceListItem key={index} name={item.name} price={item.price} />)
      }
      <ReadMoreItem text={"Смотреть весь прайс лист"} isFullText={isFullList} pressHandler={pressShowMore} />
    </View>
  )
}

export default function PriceListOnCardComponent({priceList}: PriceListOnCardComponentProps) {
  
  return (
    <View>
      <Text style={styles.titleTextItem}>Прайс лист</Text>
      <View>
        {priceList.length < PRICE_LIST_SHOT_LENGTH_MAX 
          ? 
        <FullPriceList priceList={priceList} />
          : 
          <LongListComponent priceList={priceList} />
        }
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginVertical: 8,

  },
  titleTextItem: {
    fontSize: 16,
    lineHeight: 19,
    fontWeight: "500",
    color: "#484848",
  },
  priceText: {
    fontSize: 14,
    lineHeight: 19,
    fontWeight: "300",
    color: "#484848",
  },
  itemContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  }
});
