export const CHANGE_INPUT = 'CHANGE_INPUT';
export const LOAD_RESULT = 'LOAD_RESULT';

export const changeInput = input => ({
  type: CHANGE_INPUT,
  payload: input
});

export const loadResult = result => ({
  type: LOAD_RESULT,
  payload: result
});
