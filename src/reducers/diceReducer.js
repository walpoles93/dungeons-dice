import { CREATE_DIE } from '../actionCreators/diceActions';

export default (state = [], action) => {
  switch (action.type) {
    case CREATE_DIE: {
      const dice = state.map(die => Object.assign({}, die));
      dice.push(action.die);
      return dice;
    }
    default:
      return state;
  }
};
