import 'rxjs';
import { CHANGE_INPUT, loadResult } from './actions';
import { combineEpics } from 'redux-observable';
import { searchApi } from '../api';

const searchEpic = action$ =>
  action$
    .ofType(CHANGE_INPUT)
    .do(action => console.log(action)) // for debug
    .map(({ payload }) => payload)
    .debounceTime(400) // take the value in 400 ms
    .distinctUntilChanged() // only exceute when value changed
    .switchMap(word => searchApi(word))
    .map(result => loadResult(result))
    .do(action => console.log(action)); // for debug

export const epics = combineEpics(searchEpic);

