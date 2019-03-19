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

const Deck = ({ set, handleAdd, handleDelete }) => {
  const diceIds = set.getDiceIds();
  // TODO call lastRoll through set - remove method and just use property?
  const cards = diceIds.map(id => (
    <Card
      key={id}
      onPress={() => Alert.alert('Card pressed...')}
      onLongPress={e => handleDelete(e, id)}
    >
      <Card.Title text={set.getDieProperty(id,name)} />
      <Card.Content text={die.lastRoll() ? die.lastRoll() : '-'} />
      <Card.Meta text={set.getDieProperty(id,type)} />
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
