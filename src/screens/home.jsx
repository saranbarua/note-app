import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

export default  function Home({navigation,route,user}) {
  return (
   <SafeAreaView>
    <Text>Home</Text>
   </SafeAreaView>
  );
}