import { combineReducers, configureStore } from '@reduxjs/toolkit';
import items from './contacts/item/reducer';
import filter from './contacts/filter/reducer';

const contacts = combineReducers({
  items,
  filter,
});

const store = configureStore({
  reducer: {
    contacts,
  },
  devTools: process.env.NODE_ENV === 'development',
});

export default store;
