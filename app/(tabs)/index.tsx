import { GoodCards } from '@/moks/data';
import {StatusBar, FlatList,  Text, StyleSheet,SafeAreaView } from 'react-native';


type CardProps = typeof GoodCards[number];
  
const Card = ({ item }: { item: CardProps }) => 
  (
      <Text>{item.title}</Text>
  );


export default function Tab() {
return ( 
  <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor='white'/>
      <FlatList 
        data={GoodCards}
        renderItem={({ item }) => <Card item={item} />}
        keyExtractor={(item) => item.id}
      />
      <Text>Tab [Home]</Text>
      <Text>Tab [Home]</Text>
      <Text>Tab [Home]</Text>
      <Text>Tab [Home]</Text>
      <Text>Tab [Home]</Text>
      <Text>Tab [Home]</Text>
      <Text>Tab [Home]</Text>
      <Text>Tab [Home]</Text>
      <Text>Tab [Home]</Text>
      <Text>Tab [Home]</Text>
      <Text>Tab [Home]</Text>
      <Text>Tab [Home]</Text>
      <Text>Tab [Home]</Text>
      <Text>Tab [Home]</Text>
      <Text>Tab [Home]</Text>
      <Text>Tab [Home]</Text>
      <Text>Tab [Home]</Text>
      <Text>Tab [Home]</Text>
      <Text>Tab [Home]</Text>
      <Text>Tab [Home]</Text>
      <Text>Tab [Home]</Text>
      <Text>Tab [Home]</Text>
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

