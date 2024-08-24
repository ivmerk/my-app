import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { CreateNotice, Price } from "@/types/create-notice";

const SetPriceByConditionItem = ({price, setPrice}: {price: Price, setPrice: (price: Price) => void}) => {
  
  return (
    <View style={styles.setPriceByConditionContainer}>
      <TextInput
        placeholder="0"
        onChangeText={(text) => setPrice({...price,value: Number(text)})}
        value={price.value.toString()}
      />
      <TextInput
        placeholder="Условие"
        onChangeText={(text) => setPrice({...price, condition: text})}
        value={price.condition}
      />
    </View>
  );

}

export default function CreateNoticeForm( {onCreateEditNoticeMode}: {onCreateEditNoticeMode: (mode: {mode: string, header: string}) => void}) {
  const [discription, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState<Price>({value:0, condition:""});
  return (
    <View style={styles.container}>
      <Text>Category_block</Text>
      <View style={styles.discriptionContainer}>
        <TextInput
          style={styles.discriptionContainer}
          placeholder="Discription"
          onChangeText={setDescription}
          value={discription}
          multiline={true}
          textAlignVertical="top"
        />
      </View>
      <View>
        <Text>Стоимость основной услуги</Text>
        <SetPriceByConditionItem price={price} setPrice={setPrice}/>
      </View>
      <View>
        <Text>Дополнительные услуги</Text>

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
  discriptionContainer: {
    width: '90%',
    height: 450,
    borderWidth: 1,
  },
  setPriceByConditionContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
  }
});
