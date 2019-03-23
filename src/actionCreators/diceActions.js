import uuid from 'uuid/v1';

export const CREATE_DIE = 'CREATE_DIE';

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
