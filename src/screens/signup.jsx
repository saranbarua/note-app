import React, { useState } from "react";
import {  Text, View, TextInput, StyleSheet, Pressable ,TouchableOpacity} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from '../components/button'
import {getAuth,createUserWithEmailAndPassword} from 'firebase/auth'

import { initializeApp } from "firebase/app";
const app = initializeApp(firebaseConfig);
const auth= getAuth(app);

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJQguDPJeu8RaYtFGLxuyavxkCguKvJyo",
  authDomain: "note-app-57933.firebaseapp.com",
  projectId: "note-app-57933",
  storageBucket: "note-app-57933.appspot.com",
  messagingSenderId: "284830822486",
  appId: "1:284830822486:web:74403964471ef01b4e4bf7",
  measurementId: "G-LSTWZH2K92"
};
const gender= ['Male','Female']

export default function Signup() {
const [Gender,SetGender]= useState("");
const [Email,SetEmail]= useState("");
const [Password,SetPassword]= useState("");
const [Name, SetName] =useState("")
const [Age,SetAge]= useState("");

const signup=()=>{
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
}
  return (
  
    <SafeAreaView>
      <View style= {{ paddingHorizontal:16,  paddingVertical:25 }}>
        <TextInput placeholder="Email Address"  onChangeText={(text) => SetEmail(text)} style= {styles.input} />
        <TextInput placeholder="Password" onChangeText={(text) => SetPassword(text)}  style= {styles.input} secureTextEntry />
        <TextInput placeholder="Full name"  onChangeText={(text) => SetName(text)} style= {styles.input} />
        <TextInput placeholder="Age"  onChangeText={(text) => SetAge(text)}  style= {styles.input} />
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


       
    <Button  title="Signup" onPress={signup} customStyles={{ marginTop: 25, alignSelf: 'center' }}   />
      <Pressable 
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