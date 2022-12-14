import { View,Text,TextInput,StyleSheet } from "react-native";
import React from "react";
export default function Input({placeholder,secureTextEntry, onChangeText,autiCapitilize,multiline}){
    return <TextInput placeholder={placeholder} style={styles.Input} 
    secureTextEntry= {secureTextEntry} 
    onChangeText= {onChangeText}
    autoCapitalize={autiCapitilize}
    multiline={multiline}
    >
    </TextInput>
}

const styles = StyleSheet.create({
    Input:{
        height:48,
        borderWidth:1,
        borderBottomColor:"#ccc",
        marginBottom:25,
        padding: 10,
    
    }})