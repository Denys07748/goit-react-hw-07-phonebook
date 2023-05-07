import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = ({ contacts: { items } }) => items;
export const selectIsLoading = ({ contacts: { isLoading } }) => isLoading;
export const selectError = ({ contacts: { error } }) => error;
export const selectFilter = ({ filter }) => filter;

export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilter],
  (items, filter) => {
    if (!filter) {
      return items;
    }
    const normalizedFilter = filter.toLowerCase();

    return items.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  }
);
