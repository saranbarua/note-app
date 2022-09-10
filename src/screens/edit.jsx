import { async } from "@firebase/util";
import { StatusBar } from "expo-status-bar";
import { addDoc,collection } from "firebase/firestore";
import React,{ useState } from "react";
import { auth,db } from "../../App";
import { SafeAreaView, Text, View,} from "react-native";
import Button from "../components/button";
import Input from "../components/input";
import RadioInput from "../components/radio-input"
import { showMessage } from "react-native-flash-message";

const OPTIONS = ['red', "green", 'blue']
export default function Create({navigation, route}) {
  const noteItem= route.params.item;
  const [title, SetTitle] = useState(noteItem.title) 
  console.log(title)
  const [Description, SetDescription] = useState(noteItem.Description)
  console.log(Description)
  const [noteColor, setNoteColor] = useState(noteItem.color);
  // const [loading, setLoading] = useState(false)
  
  //  console.log(user.uid)
  const onPressUpdate= async()=>{
    setLoading(true);
    try { 
       setLoading(false);
       showMessage({
        message:'Note Create succesully',
        type:'success'
       })
    navigation.goBack();
    } catch (error) {
      console.log(error)
      setLoading(false);
    }
 
 }

  return (
    <SafeAreaView style={{marginHorizontal:20, flex:1}}>
        <Input
          placeholder="Title"
          onChangeText={(text) => SetTitle(text)}
           value={title}
        />
          <Input
          placeholder="Description"
          onChangeText={(text) => SetDescription(text)}
          multiline={true}
          value={Description}
        />
        <View>
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
        </View>
        <Button 
        title="Submit"
        customStyles={{
          marginTop:25,
          alignSelf: "center",
          width: "100%"
        }}
        onPress={onPressUpdate}/>
    </SafeAreaView>
  );
}


