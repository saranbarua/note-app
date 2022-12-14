import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { StyleSheet,ActivityIndicator,View  } from 'react-native';
import Create from './src/screens/create';
import Edit from './src/screens/edit';
import Home from './src/screens/home';
import Signin from './src/screens/signin';
import Signup from './src/screens/signup';
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// import FlashMessage from "react-native-flash-message";

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
export const db = getFirestore(app);

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
  const [loading, setLoading] = React.useState(true);
  const [user , setUser] = React.useState(null);


  // React.useEffect(()=>{
  //   signOut(auth);
  // })
  //to check login or logout
  React.useEffect(()=>{
const authSubscription= onAuthStateChanged(auth,(user)=>{
if(user){
  setUser(user)
  setLoading(false)

}else{
  setUser(null)
  setLoading(false)
}
})
return authSubscription; 
  },[])

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator color="blue" size="large"  />
      </View>
    )
  }
  return (  
<NavigationContainer theme={AppTheme}>
  <Stack.Navigator>
    {user ? 
    ( <> 
      <Stack.Screen name="Home"  options={{ headerShown: false }}>
              {props => <Home {...props} user={user} />}
            </Stack.Screen>
            <Stack.Screen name="Create">
              {props => <Create {...props} user={user} />}
            </Stack.Screen>
            <Stack.Screen name="Edit" component={Edit} />
        
     </>
     ) : ( 
    <>
    <Stack.Screen name="Signin" component={Signin} options={{headerShown:false}}/>
        <Stack.Screen name="Signup" component={Signup} />
    </>)}
        
        
      
      </Stack.Navigator>
   {/* <FlashMessage position="top" /> */}
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
