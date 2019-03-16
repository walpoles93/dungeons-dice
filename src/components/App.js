import { registerRootComponent } from 'expo';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Button from './Button';
import Deck from './Deck';
import DiceSet from '../helpers/DiceSet';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FAFAFA',
    flex: 1,
    flexDirection: 'row',
  },
  diceSets: {
    flex: 1,
  },
  decks: {
    flex: 2,
  },
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      diceSets: [
        new DiceSet('Set 1'),
        new DiceSet('Set 2'),
        new DiceSet('Set 3'),
      ],
      activeSetId: null,
    };
    this.handleAddDie = this.handleAddDie.bind(this);
    this.handleDeleteDie = this.handleDeleteDie.bind(this);
    this.handleRollDie = this.handleRollDie.bind(this);
    this.handleClickSet = this.handleClickSet.bind(this);
    this.handleAddSet = this.handleAddSet.bind(this);
    this.handleDeleteSet = this.handleDeleteSet.bind(this);
  }

  componentWillMount() {
    const { diceSets } = this.state;
    const { id } = diceSets[0];
    this.setState({ activeSetId: id });
  }

  handleAddDie() {
    const { activeSetId, diceSets } = this.state;
    const set = diceSets.filter(diceSet => diceSet.id === activeSetId)[0];
    set.addDie();
    this.forceUpdate();
  }

  handleDeleteDie(e, id) {
    const { activeSetId, diceSets } = this.state;
    const set = diceSets.filter(diceSet => diceSet.id === activeSetId)[0];
    set.removeDie(id);
    this.forceUpdate();
  }

  handleRollDice() {
    const { activeSetId, diceSets } = this.state;
    const set = diceSets.filter(diceSet => diceSet.id === activeSetId)[0];
    set.rollDice();
    this.forceUpdate();
  }

  handleClickSet(e, id) {
    this.setState({ activeSetId: id });
  }

  handleAddSet() {
    const { diceSets } = this.state;
    const newSets = diceSets.slice();
    newSets.push(new DiceSet());
    this.setState({ diceSets: newSets });
  }

  handleDeleteSet(e, id) {
    const { activeSetId, diceSets } = this.state;
    const newSets = diceSets.filter(diceSet => diceSet.id !== id);
    if (id === activeSetId) this.setState({ activeSetId: newSets[0].id });
    this.setState({ diceSets: newSets });
  }

  render() {
    const { activeSetId, diceSets } = this.state;
    const activeDice = diceSets.filter(diceSet => diceSet.id === activeSetId)[0].dice;
    const handlers = { handleAdd: this.handleAddDie, handleDelete: this.handleDeleteDie };
    const setSelectors = diceSets.map(diceSet => (
      <Button
        key={diceSet.id}
        title={diceSet.setName}
        onPress={e => this.handleClickSet(e, diceSet.id)}
        onLongPress={e => this.handleDeleteSet(e, diceSet.id)}
      />
    ));

    return (
      <View style={styles.container}>
        <View style={styles.diceSets}>
          {setSelectors}
          <Button title="Add Set" onPress={this.handleAddSet} />
        </View>
        <View style={styles.decks}>
          <Deck dice={activeDice} {...handlers} />
          <Button title="ROLL" onPress={this.handleRollDice} />
        </View>
      </View>
    );
  }
}

registerRootComponent(App);
