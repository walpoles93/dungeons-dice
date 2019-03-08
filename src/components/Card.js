/* eslint-disable no-unneeded-ternary */
import React from 'react';
import PropTypes from 'prop-types';
import { StatusBar, StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    borderColor: '#CFD8DC',
    borderWidth: 1,
    flexDirection: 'column',
    margin: 9,
    width: 150,
    height: 150,
  },
  contentView: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});

const Content = ({
  backgroundColor,
  color,
  children,
  fontSize,
  fontWeight,
}) => (
  <View style={[styles.contentView, { backgroundColor }]}>
    <Text style={{ color, fontSize, fontWeight }}>
      {children}
    </Text>
  </View>
);

Content.propTypes = {
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  fontSize: PropTypes.number,
  fontWeight: PropTypes.string,
};

Content.defaultProps = {
  backgroundColor: '#FAFAFA',
  color: '#212121',
  fontSize: 18,
  fontWeight: '400',
};

const Card = ({ name, roll, type }) => (
  <View style={styles.wrapper}>
    <StatusBar hidden />
    <Content backgroundColor="#039BE5" color="#FAFAFA" fontSize={24} >
      {name}
    </Content>
    <Content backgroundColor="#FAFAFA" color="#212121" fontSize={36} fontWeight="bold">
      {roll ? roll : '-'}
    </Content>
    <Content backgroundColor="#4FC3F7" color="#FAFAFA">
      {type}
    </Content>
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
