import { createStore, applyMiddleware, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import { all } from "redux-saga/effects";
import { handleCreate, handleDelete, handleUpdate } from "./sagas";

function* createRootSaga() {
    yield all([
        handleCreate(),
        handleDelete(),
        handleUpdate(),
    ]);
}

export default function configureStore(preloadedState) {

    const sagaMiddleware = createSagaMiddleware();

    //TODO: any injectables here?
    const store = createStore(
        combineReducers({
            domain: (state = {}, action) => state,
            app: (state = {}, action) => state,
            ui: (state = {}, action) => state
        }),
        { domain: preloadedState.domain || {}, app: preloadedState.app || {}, ui: preloadedState.ui || {}},
        applyMiddleware(sagaMiddleware)
    );

    sagaMiddleware.run(createRootSaga)

    return store;
}
