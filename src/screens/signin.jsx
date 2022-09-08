import React,{useState} from "react";
import { Image, Text, View, TextInput, StyleSheet, Pressable ,TouchableOpacity} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from '../components/button'
import Signup from "./signup";
import Input from '../components/input'
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth,db } from "../../App";

export default function Signin({navigation}) {
  const [Email, SetEmail] = useState("");
  const [Password, SetPassword] = useState("");
  const [loading, setLoading] = React.useState(false)


  const navigateToSignUp = () => {
    navigation.navigate('Signup')
}
 const login= ()=>{
  signInWithEmailAndPassword(auth,Email,Password).then((res)=>{
   console.log("suucesfull",res)
 })
 }
  return (
    <SafeAreaView>
    
        <Image source={require("../../assets/login-image.png")}
          style={{ alignSelf: "center" }} />
        <Text style={{ fontSize: 18, fontWeight: "bold", textAlign: "center" }}>
          Never forget your notes
        </Text>

      <View style= {{ paddingHorizontal:16,  paddingVertical:25 }}>
        <Input placeholder="Email Address" onChangeText={(text) => SetEmail(text) }style= {styles.input} />
        <Input placeholder="Password"   onChangeText={(text) => SetPassword(text)}
                    secureTextEntry={true} style= {styles.input}  />
        <Button  title="Login" customStyles={{ marginTop: 25, alignSelf: 'center' }}
                        onPress={login} 
                    />
     
      <Pressable onPress={()=>{navigation.navigate('Signup')}}  style={{ marginTop: 25 }}>
                <Text style={{ textAlign: 'center' }}>
                    Don't have an account? <Text style={{ color: '#18B18D', fontWeight: 'bold' }}>Sign up</Text>
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

