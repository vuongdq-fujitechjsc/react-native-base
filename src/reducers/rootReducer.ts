import AsyncStorage from "@react-native-async-storage/async-storage";
import { ReduxContants } from "src/constants/reduxContant";
import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";

const persistConfig = {
    key: ReduxContants.REDUCER_ROOT_KEY,
    storage: AsyncStorage,
    whitelist: [ReduxContants.REDUCER_WHITE_LIST]
};

export const rootReducer = combineReducers({

});

export const persistedReducer = persistReducer(
    persistConfig,
    rootReducer
)