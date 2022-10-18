import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Notification = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Notification</Text>
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
export default Notification;
