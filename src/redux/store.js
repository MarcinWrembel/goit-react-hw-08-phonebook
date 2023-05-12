import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contacts/contactSlicer';
import { filterReducer } from './filter/filterSlicer';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { authReducer } from './auth/slice';

const middleware = {
  serializableCheck: {
    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  },
};

// Persisting token field from authSlice to localstorage
const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    contacts: contactsReducer,
    filter: filterReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware(middleware),
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);