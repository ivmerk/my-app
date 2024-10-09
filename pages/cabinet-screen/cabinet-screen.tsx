import MyCardsComponent from "@/components/my-cards-component/my-cards-component";
import CreateNoticeForm from "@/components/create-notice-form/create-notice-form";
import React, { useEffect, useState } from "react";
import { SafeAreaView, View, Text, StyleSheet} from "react-native";
import { GestureHandlerRootView, ScrollView } from "react-native-gesture-handler";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { CabinetPageMode } from "@/constants/const.product";
import { BASE_URL } from "@/constants/const.card";
import { getToken } from "@/common/token-store-service";
import { useAuth } from "@/context/AuthProvider";

const PageHeader = ({header}: {header: string}) => {
  console.log("mode",header)
  return (
    <View style={styles.containerHeader}>
      <Text style={styles.textTitle}>{header}</Text>
    </View>
  );
}

export default function CabinetScreen() {
  const inset = useSafeAreaInsets();
  const [cabinetPageMode, setCabinetPageMode] = useState<{mode: string, header: string}>(CabinetPageMode[0]);

  const  maxRetries = 3;
  const retryDelay = 10000;
  const proxyUrl = "https://cors-anywhere.herokuapp.com/";
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [retryCount, setRetryCount] = useState(0);
  const {user} = useAuth();
  
const renderCabinetPage = () => {
  switch (cabinetPageMode.mode) {
    case "list":
      return <MyCardsComponent onCreateEditNoticeMode={setCabinetPageMode}/>;
    case "new":
      return <CreateNoticeForm onCreateEditNoticeMode={setCabinetPageMode}/>;
    case "edit":
      return <Text>edit</Text>;
    default:
      return <MyCardsComponent onCreateEditNoticeMode={setCabinetPageMode(CabinetPageMode[0])}/>;
  }
}

  useEffect(() => {
      const fetchCard = async () => {
        try{
        const accessToken = await getToken('access_token');
    console.log('access_token', accessToken);
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
          setProfile(data);
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
  <GestureHandlerRootView style={styles.container}>
    <SafeAreaView >
      <ScrollView contentContainerStyle={{...styles.scrollView, paddingBottom: 100 + inset.bottom}}>
        <PageHeader header={cabinetPageMode.header} />
        {renderCabinetPage()}
      </ScrollView>
    </SafeAreaView>
  </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
  },
  containerHeader: {
    display: 'flex',
    flex:1,
    borderBottomWidth: 1,
    justifyContent:"center",
    alignItems: "center",
  },
  textTitle: {
    fontSize: 28,
    fontWeight: "bold",
  },
  scrollView: {
    backgroundColor: "#fff",
    marginVertical: 8,
  },
});
