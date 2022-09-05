import React from "react";
import {  Text, View, TextInput, StyleSheet, Pressable ,TouchableOpacity} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from '../components/button'

export default function Signup() {
  return (
    <SafeAreaView>
      <View style= {{ paddingHorizontal:16,  paddingVertical:25 }}>
        <TextInput placeholder="Email Address" style= {styles.input} />
        <TextInput placeholder="Password" style= {styles.input} secureTextEntry />
        <Button  title="Signup" customStyles={{ marginTop: 25, alignSelf: 'center' }}   />
      

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

}
})