import { registerRootComponent } from 'expo';
import React from 'react';
import {
  Alert,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import Button from './Button';
import Card from './Card';
import Deck from './Deck';
import DiceSet from '../helpers/DiceSet';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FAFAFA',
    flex: 1,
  },
  scrollContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      diceSets: [
        new DiceSet([0, 0, 0, 0]),
      ],
    };
    this.handleAdd = this.handleAdd.bind(this);
    this.handleRoll = this.handleRoll.bind(this);
  }

  handleAdd() {
    const { diceSets } = this.state;
    diceSets[0].addDice([{}]);
    this.forceUpdate();
  }

  handleDelete(e, id) {
    const { diceSets } = this.state;
    diceSets[0].removeDie(id);
    this.forceUpdate();
  }

  handleRoll() {
    const { diceSets } = this.state;
    const { dice } = diceSets[0];
    dice.forEach(die => die.roll());
    this.forceUpdate();
  }

  render() {
    const { diceSets } = this.state;
    const { dice } = diceSets[0];
    const cards = dice.map(die => (
      <Card
        key={die.id}
        onPress={() => Alert.alert('Card pressed...')}
        onLongPress={e => this.handleDelete(e, die.id)}
      >
        <Card.Title text={die.name} />
        <Card.Content text={die.lastRoll() ? die.lastRoll() : '-'} />
        <Card.Meta text={die.type} />
      </Card>
    ));

    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <Deck>
            {cards}
            <Card onPress={this.handleAdd}>
              <Card.Content text="+" />
            </Card>
          </Deck>
          <Button title="ROLL" onPress={this.handleRoll} />
        </ScrollView>
      </View>
    );
  }
}

registerRootComponent(App);
