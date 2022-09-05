import React, { useState } from "react";
import {  Text, View, TextInput, StyleSheet, Pressable ,TouchableOpacity} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from '../components/button'

const gender= ['Male','Female']

export default function Signup({navigation}) {
 
const [Gender,SetGender]= useState(null);
  return (
  
    <SafeAreaView>
      <View style= {{ paddingHorizontal:16,  paddingVertical:25 }}>
        <TextInput placeholder="Email Address" style= {styles.input} />
        <TextInput placeholder="Password" style= {styles.input} secureTextEntry />
        <TextInput placeholder="Full name" style= {styles.input} />
        <TextInput placeholder="Age" style= {styles.input} />
        <Text style={{ marginBottom: 15, fontWeight:"bold" }}>Select your gender</Text>

       {gender.map((Option)=>{
        const selected= Option === Gender
        return(
          <Pressable onPress={()=> SetGender(Option)} key={Option} style={styles.radioContainer}>
          <View style={[styles.outer, 
            selected && styles.selectedouter]}>
        <View style={[styles.inner, 
          selected && styles.selectedinner]}/>
          </View>
         <Text style={styles.radioText}>{Option}</Text>
         </Pressable>
        )
       })} 


       
        
        <Button  title="Signup" customStyles={{ marginTop: 25, alignSelf: 'center' }}   />
      <Pressable onPress={()=>{navigation.navigate('Signin')}}
        style={{ marginTop: 25 }}>
                <Text style={{ textAlign: 'center' }}>
                    Already have an account? {""}<Text style={{ color: '#18B18D', fontWeight: 'bold' }}>Sign In</Text>
                </Text>
            </Pressable>
            </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
input:{
    height:48,
    borderWidth:1,
    borderBottomColor:"#ccc",
    marginBottom:25,
    padding: 10,

},
radioContainer:{
  flexDirection:"row",
  alignItems:"center",
  marginBottom:10
},
outer:{
  height:30,
  width:30,
  borderRadius:15,
  borderWidth:1,
  borderColor: "#cfcfcf",
  
  justifyContent: "center",
  alignItems:"center"
},
inner:{
  height:15,
  width:15,
  borderRadius:7.5,
  borderWidth:1,
  borderColor: "#cfcfcf",
},
radioText:{
  marginLeft:10
},
selectedouter:{
  borderColor:"orange"
},
selectedinner:{
  backgroundColor:"orange",
  borderColor: "orange"
}
})