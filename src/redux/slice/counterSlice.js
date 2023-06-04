import {createSlice} from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    incrementCounter(state, action) {
      console.log(state, action);
      return state + 1;
    },
    decrementCounter(state, action) {
      return state - 1;
    },
  },
});

export const {incrementCounter, decrementCounter} = counterSlice.actions;
export default counterSlice.reducer;
