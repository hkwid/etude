import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { reducers } from './reducer/reducer';
import { epics } from './reducer/epic';

const rootReducer = combineReducers(reducers);

export const configureStore = () =>
  createStore(rootReducer, applyMiddleware(createEpicMiddleware(epics)));
