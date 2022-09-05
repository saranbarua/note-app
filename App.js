import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, View, Text  } from 'react-native';
import * as React from 'react';

import Home from './src/screens/home';
import Create from './src/screens/create';
import Edit from './src/screens/edit';
import Signin from './src/screens/signin';
import Signup from './src/screens/signup';
import { SafeAreaView } from 'react-native-safe-area-context';

const Stack =createNativeStackNavigator();


export default function App() {
  const user =false //not authentic
  return (  
<NavigationContainer>
  <Stack.Navigator>
    {user ? 
    ( <> 
      <Stack.Screen name="Home" component= {Home}  />
     <Stack.Screen name="Create" component={Create} />
        <Stack.Screen name="Edit" component={Edit} />
     </>)
    :
    ( <>
    <Stack.Screen name="Signin" component={Signin} options={{headerShown:false}}/>
        <Stack.Screen name="Signup" component={Signup} />
    </>)}
        
        
      
      </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
