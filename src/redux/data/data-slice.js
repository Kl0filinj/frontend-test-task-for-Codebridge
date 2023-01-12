import { createSlice } from '@reduxjs/toolkit';
import { fetchAlldata } from './data-operations';

const dataState = {
  data: [],
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
  },
});

export const dataReducer = dataSlice.reducer;
