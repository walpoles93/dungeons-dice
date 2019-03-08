import { registerRootComponent } from 'expo';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Card from './Card';
import Deck from './Deck';

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
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <Deck>
          <Card name="d6" roll={1} type="slashing" />
          <Card name="d6" roll={2} type="slashing" />
          <Card name="d6" roll={3} type="slashing" />
          <Card name="d6" roll={4} type="slashing" />
          <Card name="d6" roll={5} type="slashing" />
        </Deck>
      </View>
    );
  }
}

registerRootComponent(App);
