import { createSlice } from '@reduxjs/toolkit';
import { fetchAlldata, fetchById } from './data-operations';

const dataState = {
  data: [],
  singleArticle: [],
  isLoading: false,
  totalCountOfRequest: 0,
  currentPage: 1,
  perPage: 10,
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
  reducers: {
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
  },
  extraReducers: {
    [fetchAlldata.pending]: handlePending,
    [fetchAlldata.fulfilled](state, action) {
      normalizeState(state);
      state.data = action.payload.data;
      state.totalCountOfRequest = action.payload.totalCount;
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

export const { setCurrentPage } = dataSlice.actions;
export const dataReducer = dataSlice.reducer;
