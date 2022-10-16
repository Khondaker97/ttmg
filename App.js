import React from 'react';

import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Tabs from './src/navigation/Tabs';
import Landing from './src/screens/Landing';

const theme = {...DefaultTheme};
const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator
        initialRouteName="Landing"
        screenOptions={{headerMode: 'screen', headerShown: false}}>
        <Stack.Screen name="Landing" component={Landing} />
        {/* tabs  */}
        <Stack.Screen name="Tabs" component={Tabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
