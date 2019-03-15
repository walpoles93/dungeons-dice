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

  rollDice() {
    const rolls = [];
    this.dice.forEach((die) => {
      rolls.push(die.roll());
    });
    return rolls;
  }
}
