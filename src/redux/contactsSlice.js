import { createSlice } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from './operations';

const setIsLoading = state => {
  state.isLoading = true;
};

const setError = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { items: [], isLoading: false, error: null },
  extraReducers: {
    [fetchContacts.pending]: setIsLoading,
    [addContact.pending]: setIsLoading,
    [deleteContact.pending]: setIsLoading,
    [fetchContacts.rejected]: setError,
    [addContact.rejected]: setError,
    [deleteContact.rejected]: setError,
    [fetchContacts.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.error = null;
      state.items = payload;
    },
    [addContact.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.error = null;
      state.items = [...state.items, payload];
    },
    [deleteContact.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.error = null;
      state.items = state.items.filter(item => item.id !== payload.id);
    },
  },
});

export const contactsReducer = contactsSlice.reducer;

// // ================= Before ===========================

// const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState: { items: [], isLoading: false, error: null },

//   extraReducers: {
//     [fetchContacts.pending](state) {
//       state.isLoading = true;
//     },

//     [fetchContacts.fulfilled](state, { payload }) {
//       // state.isLoading = false;
//       // state.error = null;
//       // state.items = payload;
//       return {
//         ...state,
//         items: payload,
//       };
//     },

//     [fetchContacts.rejected](state, { payload }) {
//       state.isLoading = false;
//       state.error = payload;
//     },

//     [addContact.pending](state) {
//       state.isLoading = true;
//     },

//     [addContact.fulfilled](state, { payload }) {
//       // state.items = [...state.items, payload];
//       // state.isLoading = false;
//       // state.error = null;
//       return {
//         ...state,
//         items: [...state.items, payload],
//         isLoading: false,
//         error: null,
//       };
//     },

//     [addContact.rejected](state, { payload }) {
//       state.isLoading = false;
//       state.error = payload;
//     },

//     [deleteContact.pending](state) {
//       state.isLoading = true;
//     },

//     [deleteContact.fulfilled](state, { payload }) {
//       // state.isLoading = false;
//       // state.error = null;
//       // const index = state.items.findIndex(contact => contact.id === payload.id);
//       // state.items.splice(index, 1);

//       return {
//         ...state,
//         isLoading: false,
//         error: null,
//         items: [...state.items.filter(contact => contact.id !== payload.id)],
//       };
//     },

//     [deleteContact.rejected](state, { payload }) {
//       state.isLoading = false;
//       state.error = payload;
//     },
//   },
// });

// export const contactsReducer = contactsSlice.reducer;
