import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const contactsSlice = createSlice({
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

const persistConfig = {
  key: 'savedContacts',
  storage,
};
export const persistContactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);

// actions
export const { sub, del } = contactsSlice.actions;
