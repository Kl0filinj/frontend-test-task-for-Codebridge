import { createSlice } from '@reduxjs/toolkit';
import { fetchAlldata, fetchById } from './data-operations';

const dataState = {
  data: [],
  singleArticle: [],
  isLoading: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const normalizeState = state => {
  state.isLoading = false;
  state.error = null;
};

export const dataSlice = createSlice({
  name: 'auth',
  initialState: dataState,
  extraReducers: {
    [fetchAlldata.pending]: handlePending,
    [fetchAlldata.fulfilled](state, action) {
      normalizeState(state);
      state.data = action.payload;
    },
    [fetchAlldata.rejected]: handleRejected,

    [fetchById.pending]: handlePending,
    [fetchById.fulfilled](state, action) {
      normalizeState(state);
      state.singleArticle = action.payload;
    },
    [fetchById.rejected]: handleRejected,
  },
});

export const dataReducer = dataSlice.reducer;
