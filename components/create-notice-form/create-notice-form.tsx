import React from "react";
import { View, Text } from "react-native";

export default function CreateNoticeForm( {onCreateEditNoticeMode}: {onCreateEditNoticeMode: (mode: {mode: string, header: string}) => void}) {
  return (
    <View>
      <Text>NewNoticeForm</Text>
    </View>
  );
}
