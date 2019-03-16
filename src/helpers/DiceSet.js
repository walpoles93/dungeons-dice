import uuid from 'uuid/v1';
import Die from './Die';

export default class DiceSet {
  // TODO validate constructor
  constructor(name = 'Custom dice set') {
    this.id = uuid();
    this._name = name;
    this.dice = [];
    Object.seal(this);
  }

  get setName() {
    return this._name;
  }

  set setName(name) {
    this._name = name;
  }

  addDie(sides, type) {
    // TODO validate parameters?
    this.dice.push(new Die(sides, type));
  }

  removeDie(id) {
    this.dice = this.dice.filter(die => die.id !== id);
  }
  
  getDieProperty(id, property) {
    const die = this.dice.find(die => die.id === id);
    return die[property];
  }  

  rollDice() {
    // TODO consider removing rolls array
    const rolls = [];
    this.dice.forEach((die) => {
      rolls.push(die.roll());
    });
    return rolls;
  }
    
  sumLastRolls() {
    // TODO ensure modifier is included
    let sum = 0;
    this.dice.forEach((die) => {
      sum+= die.lastRoll();
    });
      return sum;
  }
}
