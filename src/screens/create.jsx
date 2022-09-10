import { async } from "@firebase/util";
import { StatusBar } from "expo-status-bar";
import { addDoc,collection } from "firebase/firestore";
import React,{ useState } from "react";
import { auth,db } from "../../App";
import { SafeAreaView, Text, View,} from "react-native";
import Button from "../components/button";
import Input from "../components/input";
import RadioInput from "../components/radio-input"

const OPTIONS = ['red', "green", 'blue']
export default function Create({navigation,route,user}) {
  const [Title, SetTitle] = React.useState('') 
  const [Description, SetDescription] = React.useState('')
  const [noteColor, setNoteColor] = React.useState('white');
  const [loading, setLoading] = React.useState(false)

   console.log(user.uid)
  const onPressCreate= async()=>{
    setLoading(true)
   await addDoc(collection(db,'notes'),{
    title: Title,
    Description:Description,
   color:noteColor,
   uid: user.uid
   })
  setLoading(false)
  }

  return (
    <SafeAreaView style={{marginHorizontal:20, flex:1}}>
    <View >
        <Input
          placeholder="Title"
          onChangeText={(text) => SetTitle(text)}
        />
          <Input
          placeholder="Description"
          onChangeText={(text) => SetDescription(text)}
          multiline={true}
        />
          <Text style={{ marginBottom: 15, fontWeight: "bold" }}>
          Select your Note Color.....
        </Text>
        {OPTIONS.map((option,index)=>(
          <RadioInput key={index}
          label={option}
          value={noteColor}
          setValue={setNoteColor}
          />
        ))}

        <Button 
        title="Submit"
        customStyles={{
          marginTop:25,
          alignSelf: "center",
          width: "100%"
        }}
        onPress={onPressCreate}/>
    </View>
    </SafeAreaView>

  );
}


