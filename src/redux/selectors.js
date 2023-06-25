export const selectFilter = state => state.filters.filter;

export const selectContacts = state => state.contacts.items;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;

export const selectFilteredContacts = state => {
  const contacts = selectContacts(state);
  const filter = selectFilter(state).toLowerCase().trim();

  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );
};
