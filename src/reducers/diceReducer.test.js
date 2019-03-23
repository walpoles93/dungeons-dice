/* eslint-disable no-undef */
import { createStore } from 'redux';
import diceReducer from './diceReducer';
import { createDie, deleteDie, rollDice } from '../actionCreators/diceActions';

test('CREATE_DIE creates a die', () => {
  const store = createStore(diceReducer);
  store.dispatch(createDie('1234', 10, 'slashing'));
  const die = store.getState()[0];
  expect(die).not.toEqual(undefined);
  expect(typeof die.id).toEqual('string');
  expect(die.setId).toEqual('1234');
  expect(die.sides).toEqual(10);
  expect(die.dieType).toEqual('slashing');
  expect(die.roll).toEqual(null);
});

test('DELETE_DIE removes die', () => {
  const store = createStore(diceReducer);
  store.dispatch(createDie('1234'));
  store.dispatch(createDie('1234'));
  const dieOne = store.getState()[0];
  store.dispatch(deleteDie(dieOne.id));
  expect(store.getState().length).toEqual(1);
  // TODO test that correct die is removed
});

test('ROLL_DICE generates an integer between 1 and sides', () => {
  const store = createStore(diceReducer);
  store.dispatch(createDie('1234'));
  store.dispatch(rollDice('1234'));
  const die = store.getState()[0];
  expect(die.roll).toBeGreaterThanOrEqual(1);
  expect(die.roll).toBeLessThanOrEqual(die.sides);
});
