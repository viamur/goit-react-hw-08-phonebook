import { createReducer } from '@reduxjs/toolkit';
import { changeFilter } from './FilterActions';

const filter = createReducer('', {
  [changeFilter]: (state, action) => action.payload,
});

export default filter;
