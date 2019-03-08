import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, TouchableHighlight } from 'react-native';

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#FFD54F',
    elevation: 2,
    padding: 9,
  },
  text: {
    color: '#212121',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

const Button = ({ onPress, title }) => (
  <TouchableHighlight onPress={onPress} style={styles.button}>
    <Text style={styles.text}>{title}</Text>
  </TouchableHighlight>
);

Button.propTypes = {
  onPress: PropTypes.func,
  title: PropTypes.string,
};

Button.defaultProps = {
  onPress: () => {},
  title: 'Press',
};

export default Button;
