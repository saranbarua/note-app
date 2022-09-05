import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View } from "react-native";

export default function Create() {
  return (
    <View style={styles.container}>
      <Text>create</Text>
      <StatusBar style="auto" />
    </View>
  );
}
