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
import Die from '../helpers/Die';

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
      dice: [
        new Die(),
        new Die(),
        new Die(),
        new Die(),
        new Die(),
      ],
    };
    this.handleAdd = this.handleAdd.bind(this);
    this.handleRoll = this.handleRoll.bind(this);
  }

  handleAdd() {
    const { dice } = this.state;
    this.setState({ dice: [...dice, new Die()] });
  }

  handleDelete(e, id) {
    const { dice } = this.state;
    this.setState({
      dice: dice.filter(die => die.id !== id),
    });
  }

  handleRoll() {
    const { dice } = this.state;
    dice.forEach(die => die.roll());
    this.forceUpdate();
  }

  render() {
    const { dice } = this.state;
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
