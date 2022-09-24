import { AntDesign } from "@expo/vector-icons";
import { collection, deleteDoc, doc, onSnapshot, query, where } from "firebase/firestore";
import React, { useEffect, useState } from 'react';
import { FlatList, Pressable, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { db } from '../../App';


  export default  function Home({navigation,route,user}) {
  // console.log(user)
      const [Notes,SetNote]= useState([]);
       useEffect(()=>{
        const que= query(collection(db,'notes'), where("uid", "==", user.uid))
        const Notelister= onSnapshot(que,(querySnapshot)=>{
           const list=[];
       querySnapshot.forEach((doc)=>{
    list.push({...doc.data(), id:doc.id})
  })
  SetNote(list);
 })
 return Notelister;
},[]);

// console.log(Notes);
        const renderItem = ({ item }) => {
     
          const { title, Description, color } = item;
         return (

       <Pressable style={{ backgroundColor:color, marginBottom:25, borderRadius:16, padding:15}} 
           onPress = {() =>{
              navigation.navigate("Edit", { item })
                 }}>
     <Pressable style={{ position: 'absolute', alignSelf: 'flex-end' ,padding:20 , zIndex:4}} 
              onPress={()=>{
               deleteDoc(doc(db, "notes", item.id))
             }} >
     <AntDesign name='delete' size={24} color='white'/> 
     </Pressable>
         
    <Text style={{color: 'white' , fontSize: 25 ,fontWeight: 'bold'}}>
    {title}
    </Text>
    <Text style={{color: 'white' , fontSize: 12 ,fontWeight: 'bold'}}>
    {Description}
    </Text>
    
  </Pressable>)
}

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
      <FlatList data={Notes}
       renderItem={renderItem} 
       keyExtractor={(item)=> item.title} 
        contentContainerStyle={{padding:20}}
      />
   </SafeAreaView>
  );
}