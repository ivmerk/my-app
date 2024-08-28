import React from "react";
import { ChevronDown, WalletFill } from "../svg-const/svg-const";
import { View, Text, TextInput } from "react-native";
import { Price } from "@/types/create-notice";

export default function SetPriceByConditionItem({price, setPrice}: {price: Price, setPrice: (price: Price) => void}) {
  return (
    <View style={{flex:1,display: 'flex', flexDirection: 'row', gap: 10, justifyContent: 'space-between', alignItems: 'center'}}>
      <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '60%', borderBottomWidth: 1}}>
        <WalletFill color="#484848"/>
        <TextInput
          style={{flex:1, textAlign: 'left', paddingLeft: 10, color: '#484848'}}
          placeholder="0"
          onChangeText={(text) => setPrice({...price,value: Number(text)})}
          value={price.value.toString()}
        />
        <Text>руб.</Text>
      </View>
      <View style={{flex:1, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderBottomWidth: 1}}>
        <TextInput
          style={{flex:1, textAlign: 'center'}}
          placeholder="за услугу"
          onChangeText={(text) => setPrice({...price, condition: text})}
          value={price.condition}
        />
        <ChevronDown/>
      </View>
    </View>

  )
}
