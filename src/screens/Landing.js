import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

const Landing = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Landing</Text>
      <Button title="SignUp" onPress={() => navigation.navigate('SignUp')} />
      <Button title="Login" onPress={() => navigation.navigate('Login')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'black',
  },
});
export default Landing;
