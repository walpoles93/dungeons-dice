import React from 'react';
import PropTypes from 'prop-types';
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';

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

const Card = ({ children, onPress, onLongPress }) => (
  <TouchableHighlight onPress={onPress} onLongPress={onLongPress}>
    <View style={styles.wrapper}>
      <StatusBar hidden />
      {children}
    </View>
  </TouchableHighlight>
);

Card.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
  onPress: PropTypes.func,
  onLongPress: PropTypes.func,
};

Card.defaultProps = {
  onPress: () => {},
  onLongPress: () => {},
};

const TextWrapper = ({
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

TextWrapper.propTypes = {
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  fontSize: PropTypes.number,
  fontWeight: PropTypes.string,
};

TextWrapper.defaultProps = {
  backgroundColor: '#FAFAFA',
  color: '#212121',
  fontSize: 18,
  fontWeight: '400',
};

Card.Title = ({ text }) => (
  <TextWrapper backgroundColor="#039BE5" color="#FAFAFA" fontSize={24}>
    {text}
  </TextWrapper>
);

Card.Title.propTypes = {
  text: PropTypes.string.isRequired,
};

Card.Content = ({ text }) => (
  <TextWrapper backgroundColor="#FAFAFA" color="#212121" fontSize={36} fontWeight="bold">
    {text}
  </TextWrapper>
);

Card.Content.propTypes = {
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

Card.Meta = ({ text }) => (
  <TextWrapper backgroundColor="#4FC3F7" color="#FAFAFA">
    {text}
  </TextWrapper>
);

Card.Meta.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Card;
