/* eslint-disable no-undef */
import { createStore } from 'redux';
import diceReducer from './diceReducer';
import { createDie } from '../actionCreators/diceActions';

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
