import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const User = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>User</Text>
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
export default User;
