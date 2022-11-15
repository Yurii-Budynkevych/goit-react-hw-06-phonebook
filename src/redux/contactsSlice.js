import { createSlice } from '@reduxjs/toolkit';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    sub(state, action) {
      state.push(action.payload);
    },
    del(state, action) {
      return state.filter(contact => contact.id !== action.payload);
    },
  },
});

// actions
export const { sub, del } = contactsSlice.actions;
