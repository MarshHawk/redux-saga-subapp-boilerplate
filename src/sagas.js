import { put, takeEvery } from 'redux-saga/effects';
import {CREATE_EVENT, CREATE_EVENT_PENDING, CREATED_EVENT, DELETE_EVENT, DELETE_EVENT_PENDING, DELETED_EVENT, UPDATE_EVENT, UPDATE_EVENT_PENDING, UPDATED_EVENT} from './constants';

export const getConnection = state => state.app.socket

export function* createEventSaga(action) {
   //const comment = action.payload;
    try {
      //todo: ui EFFECT
      yield put({type: CREATE_EVENT_PENDING, payload: action.payload})
      //let connection = yield select(getConnection);
      //connection.send("ReceiveCommentActionAsync", { type: CREATED_EVENT, payload: action.payload });
    } catch (error) {
       console.log(error);
       //yield put({type: "FETCH_FAILED", error})
    }
 }

 export function* deleteEventSaga(action) {
  //const comment = action.payload;
   try {
     //todo: ui EFFECT
     yield put({type: DELETE_EVENT_PENDING, payload: action.payload})
     //let connection = yield select(getConnection);
     //connection.send("ReceiveCommentActionAsync", { type: DELETED_EVENT, payload: action.payload });
   } catch (error) {
      console.log(error);
      //yield put({type: "FETCH_FAILED", error})
   }
}

export function* updateEventSaga(action) {
  //const comment = action.payload;
   try {
     //todo: ui EFFECT
     yield put({type: UPDATE_EVENT_PENDING, payload: action.payload})
     //let connection = yield select(getConnection);
     //connection.send("ReceiveCommentActionAsync", { type: UPDATED_EVENT, payload: action.payload });
   } catch (error) {
      console.log(error);
      //yield put({type: "FETCH_FAILED", error})
   }
}
 
 export function* handleCreate() {
   yield takeEvery(CREATE_EVENT, createEventSaga);
 }

 export function* handleDelete() {
  yield takeEvery(DELETE_EVENT, deleteEventSaga);
}

export function* handleUpdate() {
  yield takeEvery(UPDATE_EVENT, updateEventSaga);
}
