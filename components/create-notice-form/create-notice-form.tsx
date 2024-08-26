import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { CreateNotice, Price } from "@/types/create-notice";
import { ChevronDown, DeleteItem, Subtract, WalletFill } from "../svg-const/svg-const";

const SetPriceByConditionItem = ({price, setPrice}: {price: Price, setPrice: (price: Price) => void}) => {
  
  return (
    <View style={{display: 'flex', flexDirection: 'row', gap: 10, justifyContent: 'space-between', alignItems: 'center', width: '90%'}}>
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
  );

}

export default function CreateNoticeForm( {onCreateEditNoticeMode}: {onCreateEditNoticeMode: (mode: {mode: string, header: string}) => void}) {
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState<Price>({value:0, condition:""});
  const [additionalServices, setAdditionalServices] = useState<CreateNotice["additionalService"]>([]);
  return (
    <View style={styles.container}>
      <Text>Category_block</Text>
      <TextInput
        style={styles.descriptionContainer}
        placeholder="Description"
        onChangeText={setDescription}
        value={description}
        multiline={true}
        textAlignVertical="top"
      />
      <View style={{marginTop: 10}}>
        <Text style={{color: '#484848', fontWeight: 'bold'}}>Стоимость основной услуги</Text>
        <SetPriceByConditionItem price={price} setPrice={setPrice}/>
        <Text style={{color: '#484848', fontSize: 9}}>Заказчик увидит эту цену рядом с названием объявления.</Text>
      </View>
      <View style={{marginTop: 10}}>
        <Text>Дополнительные услуги</Text>
        <Subtract color="#484848"/>
        <WalletFill color="#484848"/>
        <DeleteItem/>
      </View>
      <View>
        <Text>Фотографии</Text>
      </View>
      <View>
        <Text>Видео</Text>
      </View>
      <View>
        <Text>Место оказания услуг</Text>
      </View>
      <View>
        <Text>Способы связи</Text>
      </View>
      <View>
        <Text>Опубликовать</Text>
      </View>
      <View>
        <Text>Сохранить как черновик</Text>
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  descriptionContainer: {
    width: '90%',
    height: 450,
    borderWidth: 1,
  },
  setPriceByConditionContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '90%',
  }
});
