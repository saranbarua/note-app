import { async } from "@firebase/util";
import { StatusBar } from "expo-status-bar";
import { addDoc,collection, doc, setDoc, updateDoc } from "firebase/firestore";
import React,{ useState } from "react";
import { auth,db } from "../../App";
import { SafeAreaView, Text, View,} from "react-native";
import Button from "../components/button";
import Input from "../components/input";
import RadioInput from "../components/radio-input"
import { showMessage } from "react-native-flash-message";

const OPTIONS = ['red', "green", 'blue']
     export default function Edit ({navigation, route, user }) {
        const noteItem = route.params.item;
        const [title, SetTitle] = useState(noteItem.title) 
        const [Description, SetDescription] = useState(noteItem.Description)
        const [noteColor, setNoteColor] = useState(noteItem.color);
        const [loading, setLoading] = useState(false);

       const onPressUpdate= async()=>{
        const noteref= doc(db, "notes", noteItem.id)

        setLoading(true);
      try { 
         await updateDoc(doc(db,"notes", noteItem.id),{
         title: title,
          Description:Description,
           color:noteColor,
      }) 
       setLoading(false);
       showMessage({
        message:'Note Create succesully',
        type:'success'
       })
   
    } catch (error) {
      console.log(error)
      setLoading(false);
    }
    navigation.goBack();
 }

  return (
    <SafeAreaView style={{marginHorizontal:20, flex:1}}>
        <Input
          placeholder="Title"
          onChangeText={(text) => SetTitle(text)} value = {title } >
            </Input>
          <Input
          placeholder="Description"
          onChangeText={(text) => SetDescription(text)}
          multiline={true}
          value = {Description }
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
        onPress={onPressUpdate}
        />
    </SafeAreaView>
  );
  }


