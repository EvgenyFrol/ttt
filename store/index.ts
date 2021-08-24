import { createStore, applyMiddleware, combineReducers } from 'redux';
import axios from 'axios';
import thunkMiddleware from 'redux-thunk'
import rootReducer from './rootReducer'
import apiReducer from './apiReducer';
import { createEpicMiddleware, Epic, ofType } from 'redux-observable';
import { mergeMap, map, catchError, of, from } from 'rxjs';
import { SEND_STATISTIC  } from './actions';

const epicMiddleware = createEpicMiddleware();

const appReducer = combineReducers({
  rootReducer,
  apiReducer
})

const fetchUserEpic:Epic<any> = action$ => action$.pipe(
  ofType(SEND_STATISTIC),
  mergeMap(action => from(axios.post('/api/game', action.payload)
  ).pipe(
      map(res => console.log(res)),
      catchError(error => {
        console.log('error: ', error);
        return of(error);
      })
    )
  )
)

const store = createStore(appReducer, applyMiddleware(thunkMiddleware, epicMiddleware));

epicMiddleware.run(fetchUserEpic);

export default store;