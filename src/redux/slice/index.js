import {combineReducers} from '@reduxjs/toolkit';
import {persistReducer} from 'redux-persist';
import counterReducer from './counterSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';

console.log('counterReducer', counterReducer);

export const rootReducer = combineReducers({
  counter: counterReducer,
});

// const persistConfig = persistReducer({
//   key: 'root',
//   storage: AsyncStorage,
//   whitelist: ['counter'],
// });

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// export default persistedReducer;
