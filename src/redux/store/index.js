import {configureStore} from '@reduxjs/toolkit';
import {persistStore} from 'redux-persist';
import rootReducer from '../slice/index';

export const store = configureStore({
  reducer: rootReducer,
});
console.log('store', store);
// export const persistor = persistStore(store);
