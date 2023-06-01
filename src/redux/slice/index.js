import {combineReducers} from '@reduxjs/toolkit';
import {persistReducer} from 'redux-persist';
import {counterReducer} from 'redux-counter';
import AsyncStorage from '@react-native-async-storage/async-storage';

const rootReducer = combineReducers({
  counter: counterReducer,
});

const persistConfig = persistReducer({
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['counter'],
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
