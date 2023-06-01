import {createSlice} from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    incrementCounter(state, action) {
      state++;
    },
    decrementCounter(state, action) {
      state--;
    },
  },
});
console.log('Counter slice', counterSlice);
export default counterSlice.reducer;
