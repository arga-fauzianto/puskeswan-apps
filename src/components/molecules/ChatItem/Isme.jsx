import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import { colors, fonts } from '../../../utils';

const IsMe = () => {
  return (
    <View style={styles.container}>
      <View style={styles.chatContent}>
        <Text style={styles.text}>
          Hallo Pak, apakah sapi bisa ngomong itu adalah hal yg wajar dan normal
          pakk??
        </Text>
      </View>
      <Text style={styles.date}>12.38 AM</Text>
    </View>
  );
};

export default IsMe;

const styles = StyleSheet.create({
  chatContent: {
    padding: 12,
    paddingRight: 18,
    backgroundColor: colors.grow,
    borderBottomLeftRadius: 8,
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
    borderWidth: 1,
    borderColor: colors.tertiary,
    maxWidth: '90%',
  },

  container: {
    alignItems: 'flex-end',
    marginBottom: 20,
    paddingRight: 16,
  },
  text: {
    fontFamily: fonts.primary[300],
    color: colors.text.secondary,
    fontSize: 14,
  },

  date: {
    fontFamily: fonts.primary[200],
    color: colors.text.secondary,
    fontSize: 12,
    marginTop: 4,
  },
});
