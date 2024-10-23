import * as React from "react";
import { useState, useEffect } from "react";
import { View, Text, StyleSheet, Pressable, FlatList, Dimensions, ScrollView } from "react-native";
import { AddPost, Wallet } from "../svg-const/svg-const";
import { postMenuFilterItems } from "@/constants/const.product";
import NoticeItem from "../notice-item/notice-item";
import { CabinetPageMode } from "@/constants/const.product";
import { useAuth } from "@/context/AuthProvider";
import { getToken } from "@/common/token-store-service";
import { BASE_URL } from "@/constants/const.card";
import { ServiceProfile } from "@/types/service_profile";

const {width} = Dimensions.get('window');

const CreateCardAndBalanceComponent = ({onPress}: {onPress: (mode: {mode: string, header: string}) => void} ) => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.headerItemContainer}>
        <Pressable onPress={() => {onPress(CabinetPageMode[1]), console.log(CabinetPageMode[1])}}>
          <AddPost  color='#484848'/>
        </Pressable>
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerText}>Разместить объявление</Text>
        </View>
      </View>
      <View style={styles.headerItemContainer}>
        <Pressable onPress={() => {}}>
          <Wallet color='#484848'/>
        </Pressable>
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerText}>Баланс:  p.</Text>
        </View>
      </View>
    </View>
  );
}

const FilterMenuItem = ({name}: {name: string}) => {
  return (
    <View>
      <Text>{name}</Text>
    </View>
  );
}
export default function MyCardsComponent({onCreateEditNoticeMode}: {onCreateEditNoticeMode:any }) {
  const [profileData, setProfileData] = useState<ServiceProfile[]|null>(null);
  const  maxRetries = 3;
  const retryDelay = 10000;
  const proxyUrl = "https://cors-anywhere.herokuapp.com/";
  const [loading, setLoading] = useState(true);
  const [retryCount, setRetryCount] = useState(0);
  const {user} = useAuth();

  useEffect(() => {
      const fetchCard = async () => {
        try{
        const accessToken = await getToken('access_token');
          const response = await fetch(proxyUrl + `${BASE_URL}profile/`, 
            {
              method: 'GET',
              headers: {
                'X-Requested-With': 'XMLHttpRequest',
                'Authorization': `Bearer ${accessToken}`,

              }
            });
          if(!response.ok){
            throw new Error('Failed to fetch data');
          }
          const data = await response.json();
          setProfileData(data.data.services);
          setTimeout(() =>  console.log(JSON.stringify(data, null, 2)), 10000);
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
    if (user !== null) {
      fetchCard();
    }
  }, []);
  return (
    <View style={styles.container}>
      <CreateCardAndBalanceComponent onPress={onCreateEditNoticeMode}/>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.filterContainer}>
          <FlatList
            data={postMenuFilterItems}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({item}) => (
              <FilterMenuItem name={item.name} />
            )}
          />
        </View>
        <View>
         {profileData && profileData.length > 0 && <FlatList
            data={profileData}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({item}) => (
              <NoticeItem card={item} />
            )}
          />}
        </View>
      </ScrollView>
      <NoticeItem onCreateEditNoticeMode={onCreateEditNoticeMode}/>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width,
    flex: 1,
  },
  headerContainer: {
    display: "flex",
    paddingVertical: 8,
    paddingLeft: '10%',
    borderBottomWidth: 1,
    justifyContent:"center",
    alignItems: "flex-start",
  },
  headerItemContainer: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  headerTextContainer:{
    marginLeft: 10,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  scrollView: {
    flex: 1,
    backgroundColor: "#fff",
    marginVertical:2,
    paddingVertical: 8,
  },
  filterContainer: {
    width: "100%",
    flex: 1,
  },
});
