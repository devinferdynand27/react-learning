import { combineReducers } from '@reduxjs/toolkit';
import apiReducer from '../reducers/services/apiSlice';

const rootReducer = combineReducers({
  api: apiReducer,
  // tambahkan reducer lain di sini
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
