import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {TextInput} from 'react-native-gesture-handler';

const Input = ({lebel, ...props}) => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <View>
      <Text style={styles.lebel}>{lebel}</Text>
      <TouchableOpacity style={styles.textInput}>
        <TextInput
          {...props}
          autoComplete="off"
          style={[
            styles.input,
            isFocused && {borderWidth: 5, borderColor: 'blue'},
          ]}
          onBlur={() => setIsFocused(false)}
          onFocus={() => setIsFocused(true)}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  lebel: {
    fontSize: 18,
    fontWeight: '700',
    color: '#344054',
  },
  textInput: {
    height: 50,
    borderWidth: 1,
    borderColor: '#D0D5DD',
    borderRadius: 10,
    marginTop: 10,
  },
  input: {},
});
export default Input;
