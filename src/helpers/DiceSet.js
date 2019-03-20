import uuid from 'uuid/v1';
import Die from './Die';

export default class DiceSet {
  // TODO validate constructor
  constructor(name = 'Custom dice set') {
    this._id = uuid();
    this._name = name;
    this._dice = [];
    this.validateConstructor();
    Object.seal(this);
  }

  get id() {
    return this._id;
  }
    
  get name() {
    return this._name;
  }

  set name(name) {
    this._name = name;
  }

  get dice() {
    return this._dice;
  }
    
  addDie(sides, type) {
    // TODO validate parameters?
    this._dice.push(new Die(sides, type));
  }

  removeDie(id) {
    this._dice = this._dice.filter(die => die.id !== id);
  }
  
  getDieProperty(id, property) {
    // TODO validate property
    const die = this._dice.find(die => die.id === id);
    return die[property];
  }  

  getDiceIds() {
    const ids = [];
    this._dice.forEach((die) => {
      ids.push(die.id());
    });
    return ids;
  }

  rollDice() {
    // TODO consider removing rolls array
    const rolls = [];
    this._dice.forEach((die) => {
      rolls.push(die.roll());
    });
    return rolls;
  }
    
  sumLastRolls() {
    // TODO ensure modifier is included
    let sum = 0;
    this._dice.forEach((die) => {
      sum+= die.lastRoll();
    });
    return sum;
  }
    
  validateConstructor() {
    if (typeof this._name !== 'string') {
      throw new TypeError('typeof _name must be string');
    }
  }
}
