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
  }

  componentWillMount() {
    const { diceSets } = this.state;
    const { id } = diceSets[0];
    this.setState({ activeSetId: id });
  }

  handleRollDice = (set) => {
    set.rollDice();
    this.forceUpdate();
  }

  handleClickSet = (e, id) => {
    this.setState({ activeSetId: id });
  }

  handleAddSet = () => {
    const { diceSets } = this.state;
    const newSets = diceSets.slice();
    newSets.push(new DiceSet());
    this.setState({ diceSets: newSets });
  }

  handleDeleteSet = (e, id) => {
    const { activeSetId, diceSets } = this.state;
    const newSets = diceSets.filter(diceSet => diceSet.id !== id);
    if (id === activeSetId) this.setState({ activeSetId: newSets[0].id });
    this.setState({ diceSets: newSets });
  }

  getActiveSet = () => {
      const { activeSetId, diceSets } = this.state;
      return diceSets.find(diceSet => diceSet.id === activeSetId);
  }
    
  render() {
    const activeSet = this.getActiveSet();
    const { diceSets } = this.state;
    const setSelectors = diceSets.map(diceSet => (
      <Button
        key={diceSet.id}
        title={diceSet.name}
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
          <Deck set={activeSet} update={this.forceUpdate} />
          <Button title="ROLL" onPress={() => this.handleRollDice(activeSet)} />
        </View>
      </View>
    );
  }
}

registerRootComponent(App);
