import { takeEvery, all, put, delay } from 'redux-saga/effects';
import cuid from 'cuid';
import { SIMPLE_ACTION_TRIGGER, SIMPLE_ACTION_SUCCESS,  SIMPLE_ACTION_FAILURE } from './actionTypes';


const makeGuest = ({name, isGoing, favouriteFood}) => ({
    id: cuid(),
    timeStamp: Date.now(),
    name,
    isGoing,
    favouriteFood,
});

function* simpleAction(action) {
  yield delay(1000)
  if (Math.random() < 0.5) {
    yield put({ type: SIMPLE_ACTION_SUCCESS,  payload: makeGuest(action.payload) });
  } else {
    yield put({ type: SIMPLE_ACTION_FAILURE, payload: action.payload.name });
  }
}

export default function* () {
    // This is your root saga,
    // it is already running,
    yield all([
        takeEvery(SIMPLE_ACTION_TRIGGER, simpleAction),
    ]);

}
