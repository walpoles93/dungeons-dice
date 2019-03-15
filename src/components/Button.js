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

const Button = ({ onPress, onLongPress, title }) => (
  <TouchableHighlight onPress={onPress} onLongPress={onLongPress} style={styles.button}>
    <Text style={styles.text}>{title}</Text>
  </TouchableHighlight>
);

Button.propTypes = {
  onPress: PropTypes.func,
  onLongPress: PropTypes.func,
  title: PropTypes.string,
};

Button.defaultProps = {
  onPress: () => {},
  onLongPress: () => {},
  title: 'Press',
};

export default Button;
