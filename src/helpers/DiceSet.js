import uuid from 'uuid/v1';

export default class DiceSet {
  // TODO enable dice argument to be either array of dice or single die
  constructor(dice = [], name = 'Custom dice set') {
    this.id = uuid();
    // TODO validate dice argument before assigning property
    this.dice = dice;
    this._name = name;
    Object.seal(this);
  }

  get setName() {
    return this._name;
  }

  set setName(name) {
    this._name = name;
  }

  addDice(dice) {
    this.dice = this.dice.concat(dice);
  }

  removeDie(die) {
    this.dice.splice(this.dice.indexOf(die), 1);
  }

  rollDice() {
    const rolls = [];
    this.dice.forEach((die) => {
      rolls.push(die.roll());
    });
    return rolls;
  }
}
