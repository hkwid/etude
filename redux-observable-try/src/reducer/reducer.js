import { LOAD_RESULT, CHANGE_INPUT } from './actions';

const initialResultState = [];
const result = (state = initialResultState, { type, payload }) => {
  switch (type) {
    case LOAD_RESULT:
      return payload;
    default:
      return state;
  }
};

const initalWordState = '';
const word = (state = initalWordState, { type, payload }) => {
  switch (type) {
    case CHANGE_INPUT:
      return payload;
    default:
      return state;
  }
};

export const reducers = { result, word };
