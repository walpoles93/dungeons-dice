import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
});

const Deck = ({ children }) => (
  <View style={styles.wrapper}>
    {children}
  </View>
);

Deck.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default Deck;
