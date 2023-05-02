import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  value: [],
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact(state, action) {
      state.value.unshift({ id: nanoid(5), ...action.payload });
    },
    deleteContact(state, action) {
      return { value: state.value.filter(({ id }) => id !== action.payload) };
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
