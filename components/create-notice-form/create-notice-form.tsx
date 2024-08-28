import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Dimensions, Pressable } from "react-native";
import { AdditionalService, Price } from "@/types/create-notice";
import { AddItemSquare, DeleteItem, Subtract} from "../svg-const/svg-const";
import {MAXIMUM_TITLE_LENGTH, MAXIMUM_ADDITIONAL_SERVICES_COUNT} from "../../constants/const.card";
import SetPriceByConditionItem from "../set-price-by-condition-item/set-price-by-condition-item";

type AdditionalServiceWithKey = AdditionalService & { keyId: number };

const SetAdditionalServicesList = ({additionalServices, setAdditionalServices}: {additionalServices: AdditionalServiceWithKey[], setAdditionalServices: (additionalServices: AdditionalServiceWithKey[]) => void}) => {
  return (
    <View style={{flex:1,display: 'flex', flexDirection: 'column', gap: 10, width: '100%'}}>
      {additionalServices.map((additionalService, index) => (
        <View style={{flex:1, display: 'flex', flexDirection: 'row', gap: 10}}>
          {additionalServices.length > 1 &&
            <Pressable onPress={() => setAdditionalServices([...additionalServices.slice(0, index), ...additionalServices.slice(index + 1)])}>
              <DeleteItem/>
            </Pressable>
            }
        <SetPriceByConditionItem
          key={additionalService.keyId}
          price={{condition: additionalService.condition, value: additionalService.value}}
          setPrice={(price) => {
            const newAdditionalService = {...additionalService, ...price};
              setAdditionalServices([...additionalServices.slice(0, index), newAdditionalService, ...additionalServices.slice(index + 1)])
          }}
        />
        </View>
      ))}
    </View>
  )
}

export default function CreateNoticeForm( {onCreateEditNoticeMode}: {onCreateEditNoticeMode: (mode: {mode: string, header: string}) => void}) {

  const {width}= Dimensions.get('window'); 
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState<Price>({value:0, condition:""});
  const [additionalServices, setAdditionalServices] = useState<AdditionalServiceWithKey []>([{name: "", value: 0, condition: "", keyId: 0}]);

  return (
    <View style={styles.container}>
      <Text>Category_block</Text>
      <View style={{display: 'flex', flexDirection: 'row', gap: 10, marginTop: 10, borderBottomWidth: 1, alignItems: 'center'}}>
        <Subtract color="#484848"/>
        <TextInput
          style={{flex:1,textAlign: 'left', flexBasis: width * 0.6, paddingLeft: 10, color: '#484848'}}
          placeholder="Заголовок объявления"
          onChangeText={setTitle}
          value={title}
        />
        <Text style={{color: '#484848', fontWeight: 'light',fontSize: 9, flex: 1, textAlign: 'right'}}>{title.length}/{MAXIMUM_TITLE_LENGTH.toString()}</Text>
      </View>
      <Text style={{color: '#484848', fontWeight: 'light',fontSize: 9, flex: 1, textAlign: 'left'}}>Например, «Маникюр, педикюр и наращивание ногтей» 
        или «Ремонт квартир под ключ»</Text>

      <Text style={{color: '#484848', fontWeight: 'bold', flex: 1,textAlign: 'left', marginTop: 10}}>Описание</Text>
      <TextInput
        style={styles.descriptionContainer}
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
      <Text style={{color: '#484848', fontWeight: 'bold', flex: 1,textAlign: 'left', marginTop: 10}}>Дополнительные услуги</Text>
      <SetAdditionalServicesList additionalServices={additionalServices} setAdditionalServices={setAdditionalServices} />
      <View style={{display: 'flex', flexDirection: 'row', gap: 10, marginTop: 10, borderBottomWidth: 1, alignItems: 'center'}}>
        <Pressable onPress={() => setAdditionalServices([...additionalServices, {name: "", value: 0, condition: "", keyId:additionalServices.length }])}>
          <AddItemSquare color="#484848"/>
        </Pressable>
        <Text style={{flex:1, textAlign: 'left'}}>Добавить услугу</Text>
      </View>
      <View>
        <Text style={{color: '#484848', fontWeight: 'bold', flex: 1,textAlign: 'left', marginTop: 10}}>Фотографии</Text>
      </View>
      <View>
        <Text style={{color: '#484848', fontWeight: 'bold', flex: 1,textAlign: 'left', marginTop: 10}}>Видео</Text>
      </View>
      <View>
        <Text style={{color: '#484848', fontWeight: 'bold', flex: 1,textAlign: 'left', marginTop: 10}}>Место оказания услуг</Text>
      </View>
      <View>
        <Text style={{color: '#484848', fontWeight: 'bold', flex: 1,textAlign: 'left', marginTop: 10}}>Способы связи</Text>
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
    display: "flex",
    flexDirection: "column",
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    marginHorizontal: '7%',
  },
  descriptionContainer: {
    flex: 1,
    height: 450,
    borderWidth: 1,
  },
  setPriceByConditionContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  }
});
