import { createSlice } from '@reduxjs/toolkit';
import { addContact, fetchContacts, deleteContact } from './operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const isPendingAction = action => {
  return action.type.endsWith('/pending');
};

const isRejectAction = action => {
  return action.type.endsWith('/rejected');
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      // .addCase(fetchContacts.pending, handlePending)
      // .addCase(addContact.pending, handlePending)
      // .addCase(fetchContacts.rejected, handleRejected)
      // .addCase(addContact.rejected, handleRejected)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.contacts = action.payload;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.contacts.push(action.payload);
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.contacts.findIndex(
          contact => contact.id === action.payload.id
        );
        state.contacts.splice(index, 1);
      })
      .addMatcher(isPendingAction, handlePending)
      .addMatcher(isRejectAction, handleRejected)
      .addDefaultCase((state, _) => {
        state.error = 'someone use old function, fix it!';
      });
  },

  // extraReducers: {
  //   [fetchContacts.pending](state) {
  //     state.isLoading = true;
  //   },
  //   [fetchContacts.fulfilled](state, action) {
  //     state.isLoading = false;
  //     state.error = null;
  //     state.contacts = action.payload;
  //   },
  //   [fetchContacts.rejected](state,action){
  //     state.isLoading=false
  //     state.error=action.payload
  //     state.contacts=[]
  //   },
  //   [addContact.pending](state){
  //     state.isLoading=true
  //   },
  //   [addContact.fulfilled](state, action) {
  //     state.isLoading = false;
  //     state.error = null;
  //     state.contacts.push(action.payload);
  //   },
  //   [addContact.rejected](state,action){
  //     state.isLoading=false
  //     state.error=action.payload

  //   },
  //   [deleteContact.pending](state){
  //     state.isLoading=true
  //   },
  //   [deleteContact.fulfilled](state, action) {
  //     state.isLoading = false;
  //     state.error = null;
  //     const index=state.contacts.findIndex(contact => contact.id === action.payload.id)
  //     state.contacts.splice(index,1)
  //   },
  //   [deleteContact.rejected](state,action){
  //     state.isLoading=false
  //     state.error=action.payload
  //   },
  // },
});

// Generatory akcji
export const { fetchingError, fetchingInProgress, fetchingSucess } =
  contactsSlice.actions;
// Reducer slice'u
export const contactsReducer = contactsSlice.reducer;

// extra reducers
// export const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState: {
//     contacts: [],
//     isLoading: false,
//     error: null,
//   },

//   extraReducers: {
//     [fetchContacts.pending](state) {
//       state.isLoading = true;
//     },
//     [fetchContacts.fulfilled](state, action) {
//       state.isLoading = false;
//       state.error = null;
//       state.contacts = action.payload;
//     },
//     [fetchContacts.rejected](state,action){
//       state.isLoading=false
//       state.error=action.payload
//       state.contacts=[]
//     },
//     [addContact.pending](state){
//       state.isLoading=true
//     },
//     [addContact.fulfilled](state, action) {
//       state.isLoading = false;
//       state.error = null;
//       state.contacts.push(action.payload);
//     },
//     [addContact.rejected](state,action){
//       state.isLoading=false
//       state.error=action.payload

//     },
//     [deleteContact.pending](state){
//       state.isLoading=true
//     },
//     [deleteContact.fulfilled](state, action) {
//       state.isLoading = false;
//       state.error = null;
//       const index=state.contacts.findIndex(contact => contact.id === action.payload.id)
//       state.contacts.splice(index,1)
//     },
//     [deleteContact.rejected](state,action){
//       state.isLoading=false
//       state.error=action.payload
//     },
//   },

// });
