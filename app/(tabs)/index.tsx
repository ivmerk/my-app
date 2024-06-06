import CardItem from '@/components/CardItem';
import { GoodCards } from '@/mocks/data';
import {StatusBar, FlatList,  Text, StyleSheet,SafeAreaView } from 'react-native';



export default function Tab() {
return ( 
  <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor='white'/>
      <FlatList 
        data={GoodCards}
        renderItem={({ item }) => <CardItem item={item} onPress={() => {}} />}
        keyExtractor={(item) => item.id}
      />
  </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  HeaderContainer: {
    backgroundColor: '#f4511e',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor: '#f4511e',
    borderBottomWidth: 2,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollView: {
    backgroundColor: 'white',
    marginHorizontal: 20,
  },
});

