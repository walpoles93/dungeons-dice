import React from 'react';
import PropTypes from 'prop-types';
import { Alert, StyleSheet, View } from 'react-native';
import Card from './Card';

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
});

const Deck = ({ dice, handleAdd, handleDelete }) => {
  const cards = dice.map(die => (
    <Card
      key={die.id}
      onPress={() => Alert.alert('Card pressed...')}
      onLongPress={e => handleDelete(e, die.id)}
    >
      <Card.Title text={die.name} />
      <Card.Content text={die.lastRoll() ? die.lastRoll() : '-'} />
      <Card.Meta text={die.type} />
    </Card>
  ));
  return (
    <View style={styles.wrapper}>
      {cards}
      <Card onPress={handleAdd}>
        <Card.Content text="+" />
      </Card>
    </View>
  );
};

Deck.propTypes = {
  dice: PropTypes.arrayOf(PropTypes.object),
  handleAdd: PropTypes.func,
  handleDelete: PropTypes.func,
};

Deck.defaultProps = {
  dice: [],
  handleAdd: () => {},
  handleDelete: () => {},
};

export default Deck;
