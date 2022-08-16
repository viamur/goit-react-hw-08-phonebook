import { configureStore } from '@reduxjs/toolkit';
import items from './contacts/items/itemsSlice';

const store = configureStore({
  reducer: {
    contacts: items,
  },
  devTools: process.env.NODE_ENV === 'development',
});

export { store };
