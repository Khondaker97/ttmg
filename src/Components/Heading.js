import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Heading = ({title}) => {
  return (
    <View style={styles.sectionContainer}>
      <View style={styles.headingWrapper}>
        <Text style={[styles.heading, styles.headingColor]}>
          Welcome to The
        </Text>
        <Text style={[styles.heading, styles.headingHighlight]}>
          Tann Mann Gaadi
        </Text>
      </View>
      <Text style={styles.moto}>The One Of Its Kind</Text>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View style={styles.line} />
        <Text style={{color: '#465C67', paddingHorizontal: 10}}>{title}</Text>
        <View style={styles.line} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  sectionContainer: {
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 40,
  },
  headingWrapper: {
    flexDirection: 'row',
  },
  heading: {
    fontSize: 20,
    fontWeight: '700',
  },
  headingColor: {
    color: 'black',
    marginRight: 4,
  },
  headingHighlight: {
    color: '#dd8e31',
  },
  moto: {
    fontSize: 16,
    fontWeight: '400',
    color: 'black',
    marginBottom: 36,
  },
  line: {
    flex: 1,
    height: 1,
    width: '100%',
    backgroundColor: '#C8CCE5',
  },
});
export default Heading;
