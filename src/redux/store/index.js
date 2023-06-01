import {configureStore} from '@reduxjs/toolkit';
import {persistStore} from 'redux-persist';
import persistedReducer from '../slice/index';

const store = configureStore({
  reducer: persistedReducer,
});

const persistor = persistStore(store);
export default persistor;
