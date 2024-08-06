import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ReadMoreItem from "../read-more-item/read-more-item";

const TEXT_SHOT_LIMIT = 100;

const FullTextComponent = ({text}: {text: string}) => <Text style={styles.messageText}>{text}</Text>;

const LongTextComponent = ({text}: {text: string}) =>
  {
    const [isFullText, setIsFullText] = React.useState(false);
    const pressShowMore = () => setIsFullText(!isFullText);
    const messageText = text.slice(0, TEXT_SHOT_LIMIT);
    return (
    <View>
      {isFullText 
        ?
      <FullTextComponent text={text}/>
      :
      <Text style={styles.messageText}>{messageText}...</Text>
      }
      <ReadMoreItem text={"Читать полностью"} isFullText={isFullText} pressHandler={pressShowMore} />  
    </View>
  );  
  }


export default function MessageTextItem({text}: {text: string}) {
  return (
    <View style={styles.container}>
      {text.length > TEXT_SHOT_LIMIT
        ?
        <LongTextComponent text={text}/>
        :
        <FullTextComponent text={text}/>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
  },
  messageText: {
    color: "#484848",
    fontSize: 12,
    fontWeight: "regular",
    lineHeight: 14,
  },
});
