import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, Text, View,} from "react-native";
import Input from "../components/input";


const OPTIONS = ['red', "green", 'blue']
export default function Create({navigation,route,user}) {
  const [Title, SetTitle] = React.useState('')
  const [Description, SetDescription] = React.useState('')
  const [noteColor, setNoteColor] = React.useState('white'); 
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
    </View>
    </SafeAreaView>

  );
}


