import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function Signup() {
    return (
      <View style={styles.container}>
        <Text>Sign up!</Text>
        <StatusBar style="auto" />
      </View>
    );
  }