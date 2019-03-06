import { registerRootComponent } from 'expo';
import React from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Die from '../helpers/Die';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.die = new Die(6);
    this.state = {
      roll: this.die.roll(),
    };
  }

  render() {
    const { roll } = this.state;
    return (
      <View style={styles.container}>
        <Text>{roll}</Text>
        <Button
          onPress={() => this.setState({ roll: this.die.roll() })}
          title="Roll!"
          accessibilityLabel="Click to roll the die"
        />
      </View>
    );
  }
}

registerRootComponent(App);
