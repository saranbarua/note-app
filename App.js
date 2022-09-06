import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { StyleSheet } from 'react-native';
import Create from './src/screens/create';
import Edit from './src/screens/edit';
import Home from './src/screens/home';
import Signin from './src/screens/signin';
import Signup from './src/screens/signup';
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';



const firebaseConfig = {
  apiKey: "AIzaSyCJQguDPJeu8RaYtFGLxuyavxkCguKvJyo",
  authDomain: "note-app-57933.firebaseapp.com",
  projectId: "note-app-57933",
  storageBucket: "note-app-57933.appspot.com",
  messagingSenderId: "284830822486",
  appId: "1:284830822486:web:74403964471ef01b4e4bf7",
  measurementId: "G-LSTWZH2K92"
};

const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);

//component
const AppTheme= {
...DefaultTheme,
colors:{
  ...DefaultTheme.colors,
  backgroundColor: "#fff"
}
};

const Stack =createNativeStackNavigator();


export default function App() {
  const user =false //not authentic
  return (  
<NavigationContainer theme={AppTheme}>
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
