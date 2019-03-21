/* eslint-disable react/forbid-prop-types */
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

const Deck = ({ set, update }) => {
  const diceIds = set.getDiceIds();
  const handleAddDie = () => {
    set.addDie();
    update();
  };
  const handleDeleteDie = (id) => {
    set.removeDie(id);
    update();
  };
  // TODO call lastRoll through set - remove method and just use property?
  const cards = diceIds.map((id) => {
    const lastRoll = set.getDieProperty(id, 'lastRoll');

    return (
      <Card
        key={id}
        onPress={() => Alert.alert('Card pressed...')}
        onLongPress={() => handleDeleteDie(id)}
      >
        <Card.Title text={set.getDieProperty(id, 'name')} />
        <Card.Content text={lastRoll || '-'} />
        <Card.Meta text={set.getDieProperty(id, 'type')} />
      </Card>
    );
  });
  return (
    <View style={styles.wrapper}>
      {cards}
      <Card onPress={handleAddDie}>
        <Card.Content text="+" />
      </Card>
    </View>
  );
};

Deck.propTypes = {
  set: PropTypes.object.isRequired,
  update: PropTypes.func.isRequired,
};

export default Deck;
