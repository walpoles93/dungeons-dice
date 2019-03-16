/* eslint-disable no-undef */
const Die = require('./Die').default;

test('Each Die instance has a unique id', () => {
  const die1 = new Die();
  const die2 = new Die();
  expect(die1.id).not.toEqual(die2.id);
});

test('Default values are used if no arguments are passed', () => {
  const die = new Die();
  expect(die.sides).toEqual(6);
  expect(die.type).toEqual('unknown');
});

test('sides is equal to input sides if valid input', () => {
  const input = 10;
  const die1 = new Die(input);
  const die2 = () => new Die('6');
  const die3 = () => new Die(11);
  expect(die1.sides).toEqual(input);
  expect(die2).toThrow(TypeError);
  expect(die3).toThrow(Error);
});

test('name is constructed from sides', () => {
  const input = 10;
  const die1 = new Die();
  const die2 = new Die(input);
  expect(die1.name).toEqual('d6');
  expect(die2.name).toEqual(`d${input}`);
});

test('type is equal to input type if valid input', () => {
  const input = 'slashing';
  const die1 = new Die(6, input);
  const die2 = () => new Die(6, 1);
  expect(die1.type).toEqual(input);
  expect(die2).toThrow(TypeError);
});

test('roll returns a number between 1 and sides', () => {
  const sides = 10;
  const die = new Die(sides);
  for (let i = 0; i < 10; i += 1) {
    const roll = die.roll();
    expect(roll).toBeGreaterThanOrEqual(1);
    expect(roll).toBeLessThanOrEqual(sides);
  }
});

test('rolls contains all previous rolls', () => {
  const die = new Die();
  const rolls = [];
  for (let i = 0; i < 10; i += 1) {
    rolls.push(die.roll());
  }
  expect(die.rolls).toEqual(rolls);
});

test('lastRoll returns latest roll', () => {
  const die = new Die();
  let latest;
  for (let i = 0; i < 10; i += 1) {
    latest = die.roll();
  }
  expect(die.lastRoll()).toEqual(latest);
});
