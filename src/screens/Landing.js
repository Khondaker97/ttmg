import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Landing = () => {
  return (
    <View className={styles.container}>
      <Text>Landing</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default Landing;
