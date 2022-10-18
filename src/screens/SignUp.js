import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const SignUp = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>SignUp</Text>
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
export default SignUp;
