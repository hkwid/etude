import { CHANGE_INPUT, loadResult } from './actions';
import { searchApi } from '../api';

export const searchMiddleware = store => next => action => {
  if (action.type === CHANGE_INPUT) {
    searchApi(action.payload).then(result => {
      store.dispatch(loadResult(result));
    });
  }
  return next(action);
};
