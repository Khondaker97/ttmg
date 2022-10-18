/* eslint-disable no-unused-vars */
import React, {useState} from 'react';

import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Tabs from './src/navigation/Tabs';
import {Landing, Login, Profile, SignUp} from './src/screens';

const theme = {...DefaultTheme};
const Stack = createNativeStackNavigator();
const App = () => {
  const [isSingedIn, setIsSignedIn] = useState(true);
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator
        initialRouteName={isSingedIn ? 'Tabs' : 'Landing'}
        screenOptions={{headerMode: 'screen', headerShown: false}}>
        {isSingedIn ? (
          <Stack.Screen name="Tabs" component={Tabs} />
        ) : (
          <>
            <Stack.Screen name="Landing" component={Landing} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="Login" component={Login} />
          </>
        )}
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
