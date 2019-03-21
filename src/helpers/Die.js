import uuid from 'uuid/v1';

const VALID_SIDES = [4, 6, 8, 10, 12, 20];

export default class Die {
  constructor(sides = 6, type = 'unknown') {
    this.id = uuid();
    this.sides = sides;
    this.name = `d${sides}`;
    this.type = type;
    this.lastRoll = null;
    this.validateConstructor();
  }

  roll() {
    const value = Math.floor(Math.random() * this.sides) + 1;
    this.lastRoll = value;
    return value;
  }

  validateConstructor() {
    if (typeof this.sides !== 'number') {
      throw new TypeError('typeof sides must be number');
    }
    if (!VALID_SIDES.includes(this.sides)) {
      throw new Error(`sides must be ${VALID_SIDES.join()}`);
    }
    if (typeof this.type !== 'string') {
      throw new TypeError('typeof type must be string');
    }
  }
}
