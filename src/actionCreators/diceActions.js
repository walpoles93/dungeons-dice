import uuid from 'uuid/v1';

export const CREATE_DIE = 'CREATE_DIE';
export const DELETE_DIE = 'DELETE_DIE';
export const ROLL_DICE = 'ROLL_DICE';

export function createDie(setId, sides = 6, dieType = 'unknown') {
  if (setId === undefined) return { type: null };
  return {
    type: CREATE_DIE,
    die: {
      id: uuid(),
      setId,
      sides,
      dieType,
      roll: null,
    },
  };
}

export function deleteDie(id) {
  if (id === undefined) return { type: null };
  return {
    type: DELETE_DIE,
    id,
  };
}

export function rollDice(setId) {
  if (setId === undefined) return { type: null };
  return {
    type: ROLL_DICE,
    setId,
  };
}
