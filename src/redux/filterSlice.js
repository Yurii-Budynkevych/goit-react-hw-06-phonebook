import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    filterSliseReducer(state, action) {
      return (state = action.payload);
    },
  },
});

// actions
export const { filterSliseReducer } = filterSlice.actions;
