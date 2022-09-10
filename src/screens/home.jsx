import { StatusBar } from 'expo-status-bar';
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import React, { useState,useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {AntDesign} from "@expo/vector-icons";
import { query,where,collection, onSnapshot } from "firebase/firestore";
import { db } from '../../App';


export default  function Home({navigation,route,user}) {
  // console.log(user)
const [Notes,SetNote]= useState([]);
useEffect(()=>{
  const que= query(collection(db,'notes'), where("uid", "==", user.uid))
 const Notelister= onSnapshot(que,(querySnapshot)=>{
 const list=[];
  querySnapshot.forEach((doc)=>{
    list.push(doc.data())
  })
  SetNote(list);
 })
 return Notelister;
},[]);

console.log(Notes)
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
    <View>
      <FlatList>
        
      </FlatList>
    </View>
    
   </SafeAreaView>
  );
}