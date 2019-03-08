/* eslint-disable no-unneeded-ternary */
import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    borderColor: '#CFD8DC',
    borderWidth: 1,
    margin: 9,
    width: 150,
  },
  nameText: {
    backgroundColor: '#039BE5',
    color: '#FAFAFA',
    fontSize: 24,
    padding: 9,
    textAlign: 'center',
  },
  rollText: {
    backgroundColor: '#FAFAFA',
    color: '#212121',
    fontSize: 18,
    padding: 9,
    textAlign: 'center',
  },
  typeText: {
    backgroundColor: '#4FC3F7',
    color: '#FAFAFA',
    fontSize: 18,
    padding: 9,
    textAlign: 'center',
  },
});

const Card = ({ name, roll, type }) => (
  <View style={styles.wrapper}>
    <Text style={styles.nameText}>{name}</Text>
    <Text style={styles.rollText}>{roll ? roll : '-'}</Text>
    <Text style={styles.typeText}>{type}</Text>
  </View>
);

Card.propTypes = {
  name: PropTypes.string,
  roll: PropTypes.number,
  type: PropTypes.string,
};

Card.defaultProps = {
  name: 'd?',
  roll: 0,
  type: '???',
};

export default Card;
