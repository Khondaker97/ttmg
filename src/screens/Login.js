import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Heading from '../components/Heading';
import Input from '../components/Input';

const Login = () => {
  const [passwordText, setPasswordText] = useState(null);
  const [cPText, setCPText] = useState(null);
  return (
    <View style={styles.sectionContainer}>
      <Heading title="Sign In With Mobile" />
      <View style={styles.formContainer}>
        <Input lebel="Name" placeholder="Name" placeholderTextColor="#D0D5DD" />
        <Input
          lebel="Email"
          placeholder="Email"
          placeholderTextColor="#D0D5DD"
        />
        <Input
          lebel="Password"
          placeholder="Password"
          placeholderTextColor="#D0D5DD"
          secureTextEntry
          value={passwordText}
          onChangeText={text => {
            setPasswordText(text);
          }}
        />
        <Input
          lebel="Confirm Password"
          placeholder="Confirm Password"
          placeholderTextColor="#D0D5DD"
          value={cPText}
          onChangeText={text => {
            setCPText(text);
          }}
        />
      </View>
      <View>
        <Text>Button</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
  },
  formContainer: {
    flex: 1,
    paddingHorizontal: 30,
  },
});
export default Login;
