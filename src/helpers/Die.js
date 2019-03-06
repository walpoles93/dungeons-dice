const VALID_SIDES = [4, 6, 8, 10, 12, 20];

export default class Die {
  constructor(sides = 6) {
    if (Die.isValidSides(sides)) {
      this.sides = sides;
    } else {
      throw new TypeError(`Sides must be a integer number of ${VALID_SIDES.join()}`);
    }
    Object.freeze(this);
  }

  static isValidSides(sides) {
    if (typeof sides === 'number' && VALID_SIDES.includes(sides)) {
      return true;
    }
    return false;
  }

  roll() {
    return Math.floor(Math.random() * this.sides) + 1;
  }
}
