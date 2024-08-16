import * as React from "react";
import {StyleSheet, View, Text } from "react-native";
import ReadMoreItem from "../read-more-item/read-more-item";

const LongTextItem = ({text}: {text: string}) => {
  const [isFullText, setIsFullText] = React.useState(false);
  const pressShowMore = () => setIsFullText(!isFullText);
  return (
    <View>
      <Text>
        {isFullText ? text : text.substring(0, 100)}
      </Text>
      <ReadMoreItem text={"Читать далее "} isFullText={isFullText} pressHandler={pressShowMore} />
    </View>
  );
}

export default function ServiceDescriptionOnCardItem( {text}: {text: string}) {
  return (
    <View style={styles.container}>
      <Text style={styles.titleTextItem}>Описание</Text>
      {text.length < 200 ? <Text>{text}</Text> : <LongTextItem text={text}/> }
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
});
