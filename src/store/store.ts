import { Action, ThunkAction, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import createSagaMiddleware from "@redux-saga/core";
import logger from 'redux-logger';
import { persistedReducer } from "src/reducers/rootReducer";
import rootSaga from "src/sagas/rootSaga";

const sagaMiddleware = createSagaMiddleware();

export const appStore = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false
        }).concat(
            sagaMiddleware,
            // logger
        )
});

sagaMiddleware.run(rootSaga);

export type AppDispatch = typeof appStore.dispatch;

export type RootState = ReturnType<typeof appStore.getState>;

export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;