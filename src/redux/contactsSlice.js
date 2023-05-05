import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts } from './operations';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  // reducers: {
  //   addContact(state, action) {
  //     state.items.unshift({ id: nanoid(5), ...action.payload });
  //   },
  //   deleteContact(state, action) {
  //     return { items: state.items.filter(({ id }) => id !== action.payload) };
  //   },
  // },
  extraReducers: {
    [fetchContacts.pending](state) {
      state.isLoading = true;
    },
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchContacts.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

// export const { addContact, deleteContact } = contactsSlice.actions;
