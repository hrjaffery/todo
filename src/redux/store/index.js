import {configureStore} from '@reduxjs/toolkit';
import {persistStore} from 'redux-persist';
import rootReducer from '../slice/index';

const store = configureStore({
  reducer: rootReducer,
});
// export const persistor = persistStore(store);
export default store;
