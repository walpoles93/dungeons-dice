import { CREATE_DIE, DELETE_DIE, ROLL_DICE } from '../actionCreators/diceActions';

const random = max => (
  Math.floor(Math.random() * max) + 1
);

export default (state = [], action) => {
  switch (action.type) {
    case CREATE_DIE: {
      const dice = state.slice(0);
      dice.push(action.die);
      return dice;
    }
    case DELETE_DIE: {
      return state.filter(({ id }) => id !== action.id);
    }
    case ROLL_DICE: {
      const setDice = state
        .filter(({ setId }) => setId === action.setId)
        .map(die => Object.assign({}, die, { roll: random(die.sides) }));
      const otherDice = state.filter(({ setId }) => setId !== action.setId);
      return setDice.concat(otherDice);
    }
    default:
      return state;
  }
};
