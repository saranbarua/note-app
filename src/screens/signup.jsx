import { async } from "@firebase/util";
import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { auth,db } from "../../App";
import Button from "../components/button";
import Input from "../components/input";
// import {showMessage} from "react-native-flash-message"

import {  addDoc, 
      collection,
      setDoc,
      doc,
      onSnapshot,
     query,
     where  } from "firebase/firestore"

const gender = ["Male", "Female"];

export default function Signup() {
  const [Gender, SetGender] = useState("");
  const [Email, SetEmail] = useState("");
  const [Password, SetPassword] = useState("");
  const [Name, SetName] = useState("");
  const [Age, SetAge] = useState("");
  const [loading, setLoading] = React.useState(false)


  const signup =  async() => {
    setLoading(true)
    try {
         //create user and email
   const result= await  createUserWithEmailAndPassword(auth, Email, Password);
   console.log(result);
   await addDoc(collection(db,'users'),{
     name:Name,
     email:Email,
     age:Age,
     gender:Gender,
     uid: result.user.uid
    })
   setLoading(false)
    } catch (error) {
      console.log(error);
      // showMessage({
      //   message: "error",
      //   type: "danger"
      // })
      setLoading(false)

    }
   }

   //
  return (
    <SafeAreaView>
      <View style={{ paddingHorizontal: 16, paddingVertical: 25 }}>
        <Input
          placeholder="Email Address"
          onChangeText={(text) => SetEmail(text)}
          style={styles.input}
          autiCapitilize={'none'}
        />
        <Input
          placeholder="Password"
          onChangeText={(text) => SetPassword(text)}
          style={styles.input}
          secureTextEntry
        />
        <Input
          placeholder="Full name"
          onChangeText={(text) => SetName(text)}
          style={styles.input}
        />
        <Input
          placeholder="Age"
          onChangeText={(text) => SetAge(text)}
          style={styles.input}
        />
        <Text style={{ marginBottom: 15, fontWeight: "bold" }}>
          Select your gender
        </Text>

        {gender.map((Option) => {
          const selected = Option === Gender;
          return (
            <Pressable
              onPress={() => SetGender(Option)}
              key={Option}
              style={styles.radioContainer}
            >
              <View style={[styles.outer, selected && styles.selectedouter]}>
                <View
                  style={[styles.inner, selected && styles.selectedinner]}
                />
              </View>
              <Text style={styles.radioText}>{Option}</Text>
            </Pressable>
          );
        })}

        <Button
          title="Signup"
          onPress={signup}
          customStyles={{ marginTop: 25, alignSelf: "center" }}
        />
        <Pressable style={{ marginTop: 25 }}>
          <Text style={{ textAlign: "center" }}>
            Already have an account? {""}
            <Text style={{ color: "#18B18D", fontWeight: "bold" }}>
              Sign In
            </Text>
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 48,
    borderWidth: 1,
    borderBottomColor: "#ccc",
    marginBottom: 25,
    padding: 10,
  },
  radioContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  outer: {
    height: 30,
    width: 30,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#cfcfcf",

    justifyContent: "center",
    alignItems: "center",
  },
  inner: {
    height: 15,
    width: 15,
    borderRadius: 7.5,
    borderWidth: 1,
    borderColor: "#cfcfcf",
  },
  radioText: {
    marginLeft: 10,
  },
  selectedouter: {
    borderColor: "orange",
  },
  selectedinner: {
    backgroundColor: "orange",
    borderColor: "orange",
  },
});
