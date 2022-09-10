import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {AntDesign} from "@expo/vector-icons";



export default  function Home({navigation,route,user}) {
  // console.log(user)
  const onpressToCreate=() => {
    navigation.navigate("Create")
  }
  return (
   <SafeAreaView style={{flex:1}}>
    <View style={{
      flexDirection:"row",
      justifyContent:"space-between",
      padding:20
    }}>  
    <Text>My Notes</Text>
<Pressable onPress={onpressToCreate} >
  <AntDesign name='pluscircle' size={24} ></AntDesign>
  </Pressable>
    </View>
    
   </SafeAreaView>
  );
}